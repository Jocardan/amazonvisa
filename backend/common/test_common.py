from marshmallow import ValidationError
from .utils import error_handler

def test_validation_error_handler():
    """
    Should return 400 if has a validation error
    """

    @error_handler
    def error_function():
        raise ValidationError("Validation error")
        return "Success", 200
    
    text, status = error_function()
    assert "Validation error" in text and status == 400

def test_application_error_handler():
    """
    Should return 500 if has an application error
    """
    @error_handler
    def error_function():
        raise Exception("Error")
        return "Success", 200
    
    text, status = error_function()
    assert (text == f"An Error Occurred: Error"
            and status == 500)