from dotenv import load_dotenv
import os

def env_to_boolean(env_var: str) -> bool:
    to_lower = os.environ.get(env_var, "False").lower()
    return to_lower in ("true", "yes", "y", "1")

def load_config() -> dict:
    load_dotenv()

    return {
        "DEBUG": env_to_boolean("DEBUG"),
        "PORT": os.environ.get("PORT", 5000),
    }
