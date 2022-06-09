from messages.errors import CPF_EXISTS_MSG
from common.utils import error_handler
from models import affiliateSchema
from common import affiliate_ref
from .inout import *

from flask_restful import Resource, marshal_with
from flask import request

class affiliate(Resource):
    method_decorators = [error_handler]

    @marshal_with(affiliate_OUTPUT)
    def get(self, identifier: str):
        todo = affiliate_ref.document(identifier).get()
        return todo.to_dict()

    def delete(self, identifier: str):
        affiliate_ref.document(identifier).delete()
        return { "success": True }, 200

    def put(self, identifier: int):
        update_input = UpdateaffiliateInput().load(request.json)
        update_info = UpdateaffiliateInput().dump(update_input)
        affiliate_ref.document(identifier).update(update_info)
        return { "success": True }, 204

class affiliates(Resource):
    method_decorators = [error_handler]

    @marshal_with(affiliateS_OUTPUT)
    def get(self):
        all_todos = [doc.to_dict() for doc in affiliate_ref.stream()]
        return { "affiliates": all_todos }

    @marshal_with(affiliate_OUTPUT, envelope = "affiliate")
    def post(self):
        new_affiliate = affiliateSchema().load(request.json)
        identifier = str(new_affiliate["id"])
        affiliate_cpf = str(new_affiliate["CPF"])
        new_affiliate = affiliateSchema().dump(new_affiliate)

        cpf_already_registered = affiliate_ref.where(
            u'CPF', u'==', affiliate_cpf).get()
        if len(cpf_already_registered) > 0:
            return CPF_EXISTS_MSG, 400
        
        affiliate_ref.document(identifier).set(new_affiliate)
        return new_affiliate, 201
