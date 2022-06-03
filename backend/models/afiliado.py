from marshmallow import (Schema, fields,
    validate, validates, ValidationError)
from datetime import datetime
import re, uuid

from messages.errors import INVALID_CPF_MSG
from .validators import *

class DependenteSchema(Schema):
    nome = fields.Str(required=True)
    parentesco = fields.Str(required=True)
    data_nascimento = fields.Date(required=True)

class AfiliadoSchema(Schema):
    id = fields.UUID(load_default = uuid.uuid1())
    RG = fields.Str()
    email = fields.Email()
    telefone = fields.Str()
    profissao = fields.Str()
    CPF = fields.Str(required = True)
    nome = fields.Str(required = True)
    endereco = fields.Str(required = True)
    data_nascimento = fields.Date(required = True)
    sexo = fields.Str(
        required = True,
        validate = validate.OneOf(VALID_SEXO)
    )
    estado_civil = fields.Str(
        required = True,
        validate = validate.OneOf(VALID_ESTADO_CIVIL)
    )
    grau_instrucao = fields.Str(
        validate = validate.OneOf(VALID_GRAU_INSTRUCAO))
    data_admissao = fields.Date(load_default = datetime.now())
    dependentes = fields.Nested('DependenteSchema', many=True)

    @validates("CPF")
    def validate_cpf(self, value):
        """
        Validates the CPF field, verifying if
        is in the format 000.000.000-00
        """
        pattern = r'\d{3}\.\d{3}\.\d{3}-\d{2}'
        is_valid = re.fullmatch(pattern, value)
        if not is_valid:
            raise ValidationError(INVALID_CPF_MSG)