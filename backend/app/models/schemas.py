from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class SignupRequest(BaseModel):
    email: EmailStr
    password: str
    username: str

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: str
    email: EmailStr
    username: str
    points: int
    co2_saved: float
    items_recycled: int
    created_at: datetime

    class Config:
        orm_mode = True

class AuthResponse(BaseModel):
    access_token: str
    user: UserResponse

class TokenData(BaseModel):
    user_id: str
    email: EmailStr
    exp: Optional[int] = None

