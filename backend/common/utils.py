from marshmallow import ValidationError
from functools import wraps
import traceback

def error_handler(func):
    @wraps(func)
    def execute_method(*args, **kwargs):
        try:
            result = func(*args, **kwargs)
        except ValidationError as err:
            return err.messages, 400
        except Exception as e:
            traceback.print_exc()
            result = f"An Error Occurred: {e}", 500
        
        return result
    return execute_method