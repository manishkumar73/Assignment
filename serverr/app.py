from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB setup
CONNECTION_URL = 'mongodb+srv://manish:manish@cluster0.4jgbxze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
client = MongoClient(CONNECTION_URL)
db = client.get_default_database('Cluster0')

try:
    client = MongoClient(CONNECTION_URL)
    db = client.get_database('Cluster0') 
    print("Connected to MongoDB!")
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")


# Import routes
from routes.user_routes import user_blueprint
from routes.chat_routes import chat_blueprint

app.register_blueprint(user_blueprint, url_prefix='/user')
app.register_blueprint(chat_blueprint, url_prefix='/chat')

@app.route('/')
def home():
    return "Welcome to the Chat API"

if __name__ == '__main__':
    try:
        app.run(port=os.getenv("PORT", 5000), debug=True)
    except Exception as e:
        print(f"Error starting the Flask server: {e}")
