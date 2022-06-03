from flask import Flask
from flask_restful import Api
from router import get_router
from config import load_config

app = Flask(__name__)
api = Api(app)

config = load_config()
app.config.update(config)

get_router(api)

if __name__ == '__main__':
    app.run(
        debug = config["DEBUG"],
        port = config["PORT"]
    )