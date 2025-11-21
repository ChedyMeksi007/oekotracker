import os
from dotenv import load_dotenv

load_dotenv()

class Settings:

    SUPABASE_URL: str = os.getenv('SUPABASE_URL')
    SUPABASE_KEY: str = os.getenv('SUPABASE_KEY')
    DEBUG: bool = os.getenv("DEBUG", "True") == "True"
    API_PREFIX: str = "/api"
    
    def __init__(self):

        if not self.SUPABASE_URL:
            raise ValueError("SUPABASE_URL not set in .env")
        if not self.SUPABASE_KEY:
            raise ValueError("SUPABASE_KEY not set in .env")

settings = Settings()
print(settings.SUPABASE_URL)
print(settings.SUPABASE_KEY)
