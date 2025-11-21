from fastapi import FastAPI, HTTPException, Header
from app.models.schemas import SignupRequest, LoginRequest, AuthResponse, UserResponse, RecycleSubmitResponse, RecycleSubmitRequest
from app.auth import signup_user, login_user, get_current_user
from supabase_auth.errors import AuthApiError
from app.db import SupabaseDB

app = FastAPI()
supabase = SupabaseDB.get_client()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

MATERIAL_POINTS = {
    "plastic": 10,  # per kg
    "paper": 5,
    "glass": 8,
    "organic": 3
}

MATERIAL_CO2 = {
    "plastic": 2.5,
    "paper": 1.0,
    "glass": 2.0,
    "organic": 0.5
}

@app.post("/api/recycle/submit", response_model=RecycleSubmitResponse)
def submit_recycle(data: RecycleSubmitRequest, authorization: str = Header(...)):

    # Validate Bearer token
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid token format")
    
    token = authorization.split(" ")[1]
    user = get_current_user(token)

    qr_response = (
        supabase.table("qr_items")
        .select("*")
        .eq("id", data.qr_id)
        .single()
        .execute()
    )

    if not qr_response.data:
        raise HTTPException(status_code=404, detail="QR code not found")

    qr_item = qr_response.data

    if data.weight_kg <= 0:
        raise HTTPException(status_code=400, detail="Weight must be greater than zero")
    if data.weight_kg > 100:
        raise HTTPException(status_code=400, detail="Weight too large to be realistic")

    points_earned = int(qr_item["points_per_kg"] * data.weight_kg)
    co2_saved = qr_item["co2_saved_per_kg"] * data.weight_kg

    supabase.table("recycling_entries").insert({
        "user_id": user.id,
        "qr_id": qr_item["id"],
        "weight_kg": data.weight_kg,
        "points_earned": points_earned,
        "co2_saved": co2_saved,
    }).execute()

    updated = (
        supabase.table("app_users")
        .update({
            "points": user.points + points_earned,
            "co2_saved": user.co2_saved + co2_saved,
            "items_recycled": user.items_recycled + 1
        })
        .eq("id", user.id)
        .execute()
    )

    if updated.data is None:
        raise HTTPException(status_code=500, detail="Failed to update user stats")

    return RecycleSubmitResponse(
        points_earned=points_earned,
        co2_saved=co2_saved,
        total_points=user.points + points_earned,
        total_items_recycled=user.items_recycled + 1,
        total_co2_saved=user.co2_saved + co2_saved,
    )

