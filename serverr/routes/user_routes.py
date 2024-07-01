from flask import Blueprint
from controllers.user_controller import signup, signin

user_blueprint = Blueprint('user', __name__)

user_blueprint.route('/signup', methods=['POST'])(signup)
user_blueprint.route('/signin', methods=['POST'])(signin)

