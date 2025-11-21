from pydantic import BaseModel, EmailStr, Field, PositiveFloat
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

from pydantic import BaseModel, constr, confloat

class RecycleSubmitRequest(BaseModel):
    qr_id: constr(min_length=1)      
    weight_kg: confloat(gt=0) 

class RecycleSubmitResponse(BaseModel):
    points_earned: int
    co2_saved: float
    total_points: int
    total_items_recycled: int
    total_co2_saved: float

