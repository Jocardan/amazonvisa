from flask_restful import Api
from accounts import Account, Accounts
from affiliates import affiliate, affiliates

def get_router(api: Api):
    """
    Add resources to the API
    """
    api.add_resource(Account, '/v1/account/<string:identifier>/')
    api.add_resource(Accounts, '/v1/accounts/')

    api.add_resource(affiliate, '/v1/affiliate/<string:identifier>/')
    api.add_resource(affiliates, '/v1/affiliates/')    
