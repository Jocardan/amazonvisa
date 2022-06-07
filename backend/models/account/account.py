from marshmallow import (Schema, fields,
            validates, ValidationError)
import re

from messages.errors import INVALID_PHONE_MSG

class AccountSchema(Schema):
    uid = fields.UUID()
    email = fields.Email()
    password = fields.Str()
    disabled = fields.Boolean()
    phone_number = fields.Str()
    display_name = fields.Str(required = True)
    
    @validates("phone_number")
    def validate_telefone(self, value: str):
        """
        Validates the telefone field, verifying if
        is in the format +5581999999999
        """
        pattern = r'^\+[1-9]\d{1,14}$'
        is_valid = re.fullmatch(pattern, value)
        if not is_valid:
            raise ValidationError(INVALID_PHONE_MSG)