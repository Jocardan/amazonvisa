from flask_restful import Api
from afiliados import Afiliados

def get_router(api: Api):
    """
    Add resources to the API
    """
    api.add_resource(Afiliados, '/v1/afiliados/')
