from messages.errors import CPF_EXISTS_MSG
from common.utils import error_handler
from models import AfiliadoSchema
from common import afiliado_ref
from .inout import *

from flask_restful import Resource, marshal_with
from flask import request

class Afiliado(Resource):
    method_decorators = [error_handler]

    @marshal_with(AFILIADO_OUTPUT)
    def get(self, identifier: str):
        todo = afiliado_ref.document(identifier).get()
        return todo.to_dict()

    def delete(self, identifier: str):
        afiliado_ref.document(identifier).delete()
        return { "success": True }, 200

    def put(self, identifier: int):
        update_input = UpdateAfiliadoInput().load(request.json)
        update_info = UpdateAfiliadoInput().dump(update_input)
        afiliado_ref.document(identifier).update(update_info)
        return { "success": True }, 204

class Afiliados(Resource):
    method_decorators = [error_handler]

    @marshal_with(AFILIADOS_OUTPUT)
    def get(self):
        all_todos = [doc.to_dict() for doc in afiliado_ref.stream()]
        return { "afiliados": all_todos }

    @marshal_with(AFILIADO_OUTPUT, envelope = "afiliado")
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
        return new_afiliado, 201
