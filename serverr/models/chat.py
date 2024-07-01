import os
from pymongo import MongoClient
from bson.objectid import ObjectId
import datetime
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("CONNECTION_URL"))
db = client.get_default_database()

class Chat:
    collection = db['chats']

    def __init__(self, message, user_id):
        self.message = message
        self.user_id = ObjectId(user_id)
        self.created_at = datetime.datetime.utcnow()

    def save(self):
        self.collection.insert_one(self.__dict__)

    @staticmethod
    def find(query):
        return Chat.collection.find(query)