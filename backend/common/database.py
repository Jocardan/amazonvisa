from firebase_admin import credentials, firestore, initialize_app
from firebase_admin import auth

cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()

afiliado_ref = db.collection('afiliados')
