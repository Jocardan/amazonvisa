from flask import Flask
from flask_restful import Api
from config import load_config

from todos import Todos

app = Flask(__name__)
api = Api(app)

config = load_config()
app.config.update(config)

api.add_resource(Todos, '/')

if __name__ == '__main__':
    app.run(
        debug = config["DEBUG"],
        port = config["PORT"]
    )