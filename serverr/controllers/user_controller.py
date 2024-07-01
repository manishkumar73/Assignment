from flask import request, jsonify
from models.user import User
import bcrypt
import jwt
import os
import traceback

JWT_SECRET = os.getenv('JWT_SECRET')

def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    confirmPassword = data.get('confirmPassword')
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    username = data.get('username')

    # Check if all required fields are present
    if not (email and password and confirmPassword and firstName and lastName and username):
        return jsonify({"message": "All fields are required"}), 400

    try:
        existing_user = User.find_one({"email": email})
        if existing_user:
            return jsonify({"message": "User already exists"}), 400

        if password != confirmPassword:
            return jsonify({"message": "Passwords don't match"}), 400

        # Check if password meets your criteria (e.g., minimum length)
        if len(password) < 6:
            return jsonify({"message": "Password should be at least 6 characters long"}), 400

        # Hash password
        hashed_password_bytes = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        # Convert hashed_password to string for JSON serialization
        hashed_password = hashed_password_bytes

        new_user = User(name=f"{firstName} {lastName}", email=email, password=hashed_password, username=username)
        new_user.save()

        # Convert ObjectId to string
        user_id_str = str(new_user._id)

        token = jwt.encode({"email": new_user.email, "id": user_id_str}, JWT_SECRET, algorithm="HS256")
        
        # Convert new_user to dictionary excluding _id
        result = new_user.__dict__
        result.pop('_id')
        
        return jsonify({"result": result, "token": token}), 201

    except Exception as e:
        print(f"Error during signup: {e}")
        traceback.print_exc()
        return jsonify({"message": "Internal server error"}), 500


def signin():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        
        print(f"Received signin request for email: {email}")

        # Check if required fields are present
        if not (email and password):
            return jsonify({"message": "Email and password are required"}), 400

        existing_user = User.find_one({"email": email})
        if not existing_user:
            print("User doesn't exist")
            return jsonify({"message": "User doesn't exist"}), 404

        # Ensure stored password is a bytes object
        stored_password_bytes = existing_user['password'].encode('utf-8')


        # Ensure password is encoded into bytes
        password_bytes = password.encode('utf-8')

        if not bcrypt.checkpw(password_bytes, stored_password_bytes):
            print("Invalid credentials")
            return jsonify({"message": "Invalid credentials"}), 400

        # Convert ObjectId to string
        existing_user['_id'] = str(existing_user['_id'])

        token = jwt.encode({"email": existing_user['email'], "id": existing_user['_id']}, JWT_SECRET, algorithm="HS256")
        print("Signin successful")
        return jsonify({"result": existing_user, "token": token}), 200
    
    except Exception as e:
        print(f"Error during signin: {str(e)}")
        return jsonify({"message": "Internal server error"}), 500
