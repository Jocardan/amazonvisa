from marshmallow import (Schema, fields,
    validate, validates, ValidationError)
import re

from messages import INVALID_CPF_MSG
from models.afiliado import (VALID_SEXO, 
    VALID_ESTADO_CIVIL, VALID_GRAU_INSTRUCAO)

class UpdateAfiliadoInput(Schema):
    RG = fields.Str()
    CPF = fields.Str()
    nome = fields.Str()
    email = fields.Email()
    telefone = fields.Str()
    endereco = fields.Str()
    profissao = fields.Str()
    data_nascimento = fields.Date()
    sexo = fields.Str(validate = validate.OneOf(VALID_SEXO))
    estado_civil = fields.Str(
        validate = validate.OneOf(VALID_ESTADO_CIVIL))
    grau_instrucao = fields.Str(
        validate = validate.OneOf(VALID_GRAU_INSTRUCAO))
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