from flask.testing import FlaskClient
from faker import Faker
import pytest

faker = Faker()

def test_post_todos(client_app: FlaskClient):
    """
    Should call POST to /todos and create a new todo
    """
    todo_item = {
        "id": faker.uuid4(),
        "title": faker.sentence()
    }

    response = client_app.post("/", json = todo_item)
    response_json = response.get_json() or {}
    assert (response.status_code == 201 and 
        response_json.get("success"))
