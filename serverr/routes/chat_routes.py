from flask import Blueprint
from controllers.chat_controller import get_chats, create_chat
from middleware.auth import auth_middleware

chat_blueprint = Blueprint('chat', __name__)

@chat_blueprint.route('/history', methods=['GET'])
@auth_middleware
def get_chats_route():
    return get_chats()

@chat_blueprint.route('/message', methods=['POST'])
@auth_middleware
def create_chat_route():
    return create_chat()
