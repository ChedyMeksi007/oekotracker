from supabase import create_client, Client
from app.config import settings

class SupabaseDB:
    
    _instance: Client = None
    
    @classmethod
    def get_client(cls) -> Client:
        if cls._instance is None:
            cls._instance = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)
        return cls._instance

db = SupabaseDB.get_client()
