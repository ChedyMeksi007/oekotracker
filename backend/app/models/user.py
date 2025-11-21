from dataclasses import dataclass
from datetime import datetime

@dataclass
class User:
    id: str
    email: str
    username: str
    created_at: datetime
    points: int = 0
    co2_saved: float = 0.0
    items_recycled: int = 0
