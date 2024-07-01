from functools import wraps
from flask import request, jsonify, g
import jwt
import os

JWT_SECRET = os.getenv('JWT_SECRET')

def auth_middleware(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            token = request.headers.get('Authorization').split()[1]
            is_custom_auth = len(token) < 500

            if is_custom_auth:
                decoded_data = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
                request.user_id = decoded_data['id']
            else:
                decoded_data = jwt.decode(token, options={"verify_signature": False})
                request.user_id = decoded_data['sub']
            return f(*args, **kwargs)
        except Exception as e:
            return jsonify({"message": "Authentication failed"}), 401
    return decorated_function