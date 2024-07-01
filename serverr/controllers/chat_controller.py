from flask import g, request, jsonify
from models.chat import Chat
from middleware.auth import auth_middleware
from bson import ObjectId


@auth_middleware
def get_chats():
    user_id = request.user_id
    chats = Chat.find({"user_id": ObjectId(user_id)})
    # Convert ObjectId to string
    chats_list = []
    for chat in chats:
        chat['_id'] = str(chat['_id'])
        chat['user_id'] = str(chat['user_id'])
        chats_list.append(chat)
    return jsonify(chats_list), 200

@auth_middleware
def create_chat():
    data = request.get_json()
    message = data['message']
    user_id = request.user_id

    new_chat = Chat(message=message, user_id=user_id)
    new_chat.save()
    # Convert ObjectId to string
    new_chat_dict = new_chat.__dict__
    new_chat_dict['_id'] = str(new_chat_dict['_id'])
    new_chat_dict['user_id'] = str(new_chat_dict['user_id'])
    return jsonify(new_chat_dict), 201


