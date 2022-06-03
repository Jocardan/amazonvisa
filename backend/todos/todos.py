from flask_restful import Resource, Api
from common import todo_ref
from flask import request

class Todos(Resource):
    def get(self, todo_id: str = None):
        try:
            if todo_id:
                todo = todo_ref.document(todo_id).get()
                return todo.to_dict()
            else:
                all_todos = [doc.to_dict() for doc in todo_ref.stream()]
                return all_todos
        except Exception as e:
            return f"An Error Occurred: {e}"

    def post(self):
        try:
            id = request.json['id']
            todo_ref.document(id).set(request.json)
            return {
                "success": True
            }, 201
        except Exception as e:
            return f"An Error Occurred: {e}"

    def delete(self, user_id):
        try:
            # Check for ID in URL query
            todo_id = request.args.get('id')
            todo_ref.document(todo_id).delete()
            return {"success": True}, 200
        except Exception as e:
            return f"An Error Occurred: {e}"

    def put(self, user_id: int):
        try:
            todo_ref.document(user_id).update(request.json)
            return {"success": True}
        except Exception as e:
            return f"An Error Occurred: {e}"
