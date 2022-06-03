from main import app
import pytest

@pytest.fixture(scope="session")
def client_app():
    """ Can test requests in the flask app """
    app.config.update({ 'TESTING': True })

    with app.test_client() as client:
        yield client
