from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("CONNECTION_URL"))
db = client.get_database("Cluster0")

class User:
    collection = db['users']

    def __init__(self, name, email, password, username):
        self.name = name
        self.email = email
        self.password = password
        self.username = username

    def save(self):
        return self.collection.insert_one(self.__dict__)

    @staticmethod
    def find_one(query):
        return User.collection.find_one(query)
