from marshmallow import ValidationError
from .affiliate import affiliateSchema
from messages import INVALID_CPF_MSG
import pytest

def test_affiliate_schema_validation():
    """
    Should fail to validate an invalid CPF
    """
    with pytest.raises(ValidationError) as error:    
        affiliateSchema().validate_cpf("12345678901")
    assert INVALID_CPF_MSG in error.value.messages

def test_affiliate_schema_validation():
    """
    Should pass in validating a valid CPF
    """
    value = affiliateSchema().validate_cpf("123.456.789-01")
    assert value is None