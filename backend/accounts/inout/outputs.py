from flask_restful import fields

ACCOUNT_OUTPUT = {
    "uid": fields.String,
    "email": fields.String,
    "display_name": fields.String,
    "phone_number": fields.String,
}

ACCOUNTS_OUTPUT = {
    "accounts": fields.List(fields.Nested(ACCOUNT_OUTPUT)),
}