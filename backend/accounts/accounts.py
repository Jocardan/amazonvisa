from messages.errors import INVALID_ACCOUNT_MSG
from common.utils import error_handler
from models import AccountSchema
from common import auth
from .inout import *

from flask_restful import Resource, marshal_with
from flask import request

def record_to_account(account: auth.UserRecord):
    return {
        "uid": account.uid,
        "email": account.email,
        "display_name": account.display_name,
        "phone_number": account.phone_number,
    }

class Account(Resource):
    method_decorators = [error_handler]

    @marshal_with(ACCOUNT_OUTPUT)
    def get(self, identifier: str):
        account = auth.get_user(identifier)
        return record_to_account(account)

    def delete(self, identifier: str):
        auth.delete_user(identifier)
        return { "success": True }

    @marshal_with(ACCOUNT_OUTPUT)
    def put(self, identifier: int):
        update_input = UpdateAccountInput().load(request.json)
        update_info = UpdateAccountInput().dump(update_input)
        updated = auth.update_user(identifier, **update_info)
        return record_to_account(updated)

class Accounts(Resource):
    method_decorators = [error_handler]

    @marshal_with(ACCOUNTS_OUTPUT, envelope="accounts")
    def get(self):
        accounts = auth.list_users()
        account_list = [record_to_account(account) 
            for account in accounts.iterate_all()]
        return { "accounts": account_list }

    @marshal_with(ACCOUNT_OUTPUT)
    def post(self):
        account_obj = AccountSchema().load(request.json)
        new_account = AccountSchema().dump(account_obj)

        if not account_obj["email"] and not account_obj["phone_number"]:
            return INVALID_ACCOUNT_MSG, 400
        
        account_created = auth.create_user(**new_account)
        return record_to_account(account_created), 201
