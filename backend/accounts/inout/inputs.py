from marshmallow import Schema, fields

class UpdateAccountInput(Schema):
    email = fields.Email()
    password = fields.Str()
    disabled = fields.Boolean()
    phone_number = fields.Str()
    display_name = fields.Str()
