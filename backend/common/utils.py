import traceback

def error_handler(func):
    def execute_method(self, *args, **kwargs):
        try:
            result = func(self, *args, **kwargs)
        except:
            traceback.print_exc()
            result = None, 500
        
        return result
    return execute_method
