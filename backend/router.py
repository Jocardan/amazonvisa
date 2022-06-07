from flask_restful import Api
from accounts import Account, Accounts
from afiliados import Afiliado, Afiliados

def get_router(api: Api):
    """
    Add resources to the API
    """
    api.add_resource(Account, '/v1/account/<string:identifier>/')
    api.add_resource(Accounts, '/v1/accounts/')

    api.add_resource(Afiliado, '/v1/afiliado/<string:identifier>/')
    api.add_resource(Afiliados, '/v1/afiliados/')    
