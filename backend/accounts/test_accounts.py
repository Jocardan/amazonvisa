from flask.testing import FlaskClient
from common import auth
from faker import Faker
import pytest, uuid

faker = Faker()

@pytest.fixture
def new_account():
    return {
        "uid": uuid.uuid1(),
        "email": faker.email(),
        "password": faker.name(),
        "display_name": faker.name(),
        "phone_number": f"+1{faker.random_number(10)}",
    }

def test_post_accounts(client_app: FlaskClient, new_account: dict):
    """
    Should call POST to /v1/accounts and create a new account
    """
    response = client_app.post("/v1/accounts/", json = new_account)
    response_json = response.get_json() or {}
    assert response.status_code == 201, str(response_json)
    assert response_json["email"] == new_account["email"]

def test_get_accounts(client_app: FlaskClient):
    """
    Should call GET to /v1/accounts and receive a list of accounts
    """
    response = client_app.get("/v1/accounts/")
    response_json = response.get_json() or {}
    assert (response.status_code == 200 and 
        len(response_json["accounts"]) > 0)

def test_get_account(client_app: FlaskClient):
    """
    Should call GET to /v1/account and receive an account
    """
    for account in auth.list_users(max_results=1).iterate_all():
        response = client_app.get(f"/v1/account/{account.uid}/")
        response_json = response.get_json() or {}
        assert (response.status_code == 200 and 
            account.email == response_json["email"])
        break

def test_put_account(client_app: FlaskClient):
    """
    Should call PUT to /v1/account and update an account
    """
    for account in auth.list_users(max_results=1).iterate_all():
        response = client_app.put(f"/v1/account/{account.uid}/", json = {
            "email": faker.email(),
        })
        response_json = response.get_json() or {}
        assert (response.status_code == 200 and 
            response_json["email"] != account.email)
        break

def test_delete_account(client_app: FlaskClient):
    """
    Should call DELETE to /v1/account and delete an account
    """
    for account in auth.list_users(max_results=1).iterate_all():
        response = client_app.delete(f"/v1/account/{account.uid}/")
        with pytest.raises(auth.UserNotFoundError):
            auth.get_user(account.uid)
        assert (response.status_code == 200)
        break
