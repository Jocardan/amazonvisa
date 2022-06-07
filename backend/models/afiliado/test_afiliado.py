from marshmallow import ValidationError
from .afiliado import AfiliadoSchema
from messages import INVALID_CPF_MSG
import pytest

def test_afiliado_schema_validation():
    """
    Should fail to validate an invalid CPF
    """
    with pytest.raises(ValidationError) as error:    
        AfiliadoSchema().validate_cpf("12345678901")
    assert INVALID_CPF_MSG in error.value.messages

def test_afiliado_schema_validation():
    """
    Should pass in validating a valid CPF
    """
    value = AfiliadoSchema().validate_cpf("123.456.789-01")
    assert value is None