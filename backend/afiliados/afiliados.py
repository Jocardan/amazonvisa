from models import AfiliadoSchema
from common import afiliado_ref

from flask_restful import Resource
from flask import request

from marshmallow import ValidationError

class Afiliados(Resource):
    def get(self, todo_id: str = None):
        try:
            if todo_id:
                todo = afiliado_ref.document(todo_id).get()
                return todo.to_dict()
            else:
                all_todos = [doc.to_dict() for doc in afiliado_ref.stream()]
                return all_todos
        except Exception as e:
            return f"An Error Occurred: {e}"

    def post(self):
        try:
            new_afiliado = AfiliadoSchema().load(request.json)
            identifier = str(new_afiliado["id"])
            new_afiliado = AfiliadoSchema().dump(new_afiliado)
            afiliado_ref.document(identifier).set(new_afiliado)
            return {
                "afiliado": new_afiliado
            }, 201
        except ValidationError as err:
            return err.messages, 400
        except Exception as e:
            return f"An Error Occurred: {e}", 500

    def delete(self, user_id):
        try:
            # Check for ID in URL query
            todo_id = request.args.get('id')
            afiliado_ref.document(todo_id).delete()
            return {"success": True}, 200
        except Exception as e:
            return f"An Error Occurred: {e}"

    def put(self, user_id: int):
        try:
            afiliado_ref.document(user_id).update(request.json)
            return {"success": True}
        except Exception as e:
            return f"An Error Occurred: {e}"
