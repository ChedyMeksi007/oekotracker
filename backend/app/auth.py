from app.db import SupabaseDB
from app.models.schemas import UserResponse
from typing import Tuple

supabase = SupabaseDB.get_client()


def signup_user(email: str, password: str, username: str) -> Tuple[str, UserResponse]:
    auth_response = supabase.auth.sign_up({"email": email, "password": password})
    if not auth_response or not getattr(auth_response, "user", None):
        raise ValueError("Failed to create user in Supabase Auth")

    auth_id = auth_response.user.id

    response = supabase.table("app_users").insert({
        "auth_id": auth_id,
        "username": username
    }).execute()

    if not response.data or len(response.data) == 0:
        raise ValueError("Failed to create app user")

    user_data = response.data[0]
    session = supabase.auth.sign_in_with_password({"email": email, "password": password})
    if not session or not getattr(session.session, "access_token", None):
        raise ValueError("Failed to create session after signup")
    token = session.session.access_token

    user = UserResponse(
        id=user_data["id"],
        email=email,
        username=username,
        points=user_data.get("points", 0),
        co2_saved=user_data.get("co2_saved", 0.0),
        items_recycled=user_data.get("items_recycled", 0),
        created_at=user_data.get("created_at")
    )

    return token, user


def login_user(email: str, password: str) -> Tuple[str, UserResponse]:
    session = supabase.auth.sign_in_with_password({"email": email, "password": password})
    if not session or not getattr(session, "user", None):
        raise ValueError("Invalid email or password")

    auth_id = session.user.id
    token = session.session.access_token

    response = supabase.table("app_users").select("*").eq("auth_id", auth_id).single().execute()
    if not response.data:
        raise ValueError("User not found in app_users table")

    user_data = response.data

    user = UserResponse(
        id=user_data["id"],
        email=email,
        username=user_data["username"],
        points=user_data.get("points", 0),
        co2_saved=user_data.get("co2_saved", 0.0),
        items_recycled=user_data.get("items_recycled", 0),
        created_at=user_data.get("created_at")
    )

    return token, user


def get_current_user(token: str) -> UserResponse:
    user_info = supabase.auth.get_user(token)
    if not user_info or not getattr(user_info, "user", None):
        raise ValueError("Invalid or expired token")

    auth_id = user_info.user.id

    response = supabase.table("app_users").select("*").eq("auth_id", auth_id).single().execute()
    if not response.data:
        raise ValueError("User not found in app_users table")

    user_data = response.data
    return UserResponse(
        id=user_data["id"],
        email=user_info.user.email,
        username=user_data["username"],
        points=user_data.get("points", 0),
        co2_saved=user_data.get("co2_saved", 0.0),
        items_recycled=user_data.get("items_recycled", 0),
        created_at=user_data.get("created_at")
    )

