from messages.errors import CPF_EXISTS_MSG
from common.utils import error_handler
from models import AfiliadoSchema
from common import afiliado_ref

from flask_restful import Resource
from flask import request

class Afiliado(Resource):
    method_decorators = [error_handler]

    def get(self, identifier: str):
        todo = afiliado_ref.document(identifier).get()
        return todo.to_dict()

    def delete(self, identifier: str):
        afiliado_ref.document(identifier).delete()
        return {"success": True}, 200

    def put(self, identifier: int):
        afiliado_ref.document(identifier).update(request.json)
        return {"success": True}

class Afiliados(Resource):
    method_decorators = [error_handler]

    def get(self):
        all_todos = [doc.to_dict() for doc in afiliado_ref.stream()]
        return all_todos

    def post(self):
        new_afiliado = AfiliadoSchema().load(request.json)
        identifier = str(new_afiliado["id"])
        afiliado_cpf = str(new_afiliado["CPF"])
        new_afiliado = AfiliadoSchema().dump(new_afiliado)

        cpf_already_registered = afiliado_ref.where(
            u'CPF', u'==', afiliado_cpf).get()
        if len(cpf_already_registered) > 0:
            return CPF_EXISTS_MSG, 400
        
        afiliado_ref.document(identifier).set(new_afiliado)
        return { "afiliado": new_afiliado }, 201
