# Amazonvisa Project

A project to help to manage the Amazonvisa secretary.

## Backend dependencies
- [FireBase](https://firebase.google.com/)
- [Flask](https://flask.palletsprojects.com/)

### Backend utilities
- [Flask Restful](https://flask-restful.readthedocs.io/)
- [Pytest](https://docs.pytest.org/en/latest/)
- [Mashmallow](https://marshmallow.readthedocs.io/en/)

## Backend Environment
Creates a _.env_ file in the [Backend folder](./backend/) that can be used to set the following environment variables:
```
DEBUG=false # Set to true to enable debug mode
PORT=5000   # Set to the port you want to run the server on
```
Add the _key.json_ from firebase firestore in the [Backend folder](./backend/)

## To test the backend application
Run this command in the [Backend folder](./backend/)
```sh
cd backend
pytest --cov-report html:cov_html --cov=.
```
Will be generated a html report in the [htmlcov folder](./backend/htmlcov)