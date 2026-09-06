import os
from pydantic import BaseModel

class Settings(BaseModel):
    PROJECT_NAME: str = "OmniAgent OS"
    VERSION: str = "1.0.0"
    API_PORT: int = 8000
    CHROMA_PERSIST_DIR: str = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data", "chroma")
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    GOOGLE_API_KEY: str = os.getenv("GOOGLE_API_KEY", "")
    DEFAULT_MODEL: str = "gemini-2.5-flash"  # fallback / simulation engine when keys not set

settings = Settings()
