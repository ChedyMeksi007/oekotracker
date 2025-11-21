from fastapi import FastAPI, HTTPException, Header
from app.models.schemas import SignupRequest, LoginRequest, AuthResponse, UserResponse
from app.auth import signup_user, login_user, get_current_user
from supabase_auth.errors import AuthApiError

app = FastAPI()


@app.post("/api/auth/signup", response_model=AuthResponse)
def signup(data: SignupRequest):
    try:
        token, user = signup_user(data.email, data.password, data.username)
        return AuthResponse(access_token=token, user=user)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except AuthApiError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.post("/api/auth/login", response_model=AuthResponse)
def login(data: LoginRequest):
    try:
        token, user = login_user(data.email, data.password)
        return AuthResponse(access_token=token, user=user)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except AuthApiError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/api/auth/me", response_model=UserResponse)
def me(authorization: str = Header(...)):
    try:
        if not authorization.startswith("Bearer "):
            raise HTTPException(status_code=401, detail="Invalid token format")
        token = authorization.split(" ")[1]
        user = get_current_user(token)
        return user
    except (IndexError, ValueError) as e:
        raise HTTPException(status_code=401, detail="Invalid or missing token")

