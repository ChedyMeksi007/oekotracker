import os
from supabase import create_client, Client
from dotenv import load_dotenv
import random
import string

load_dotenv()  # Load .env with SUPABASE_URL and SUPABASE_KEY

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def generate_temp_password(length=12):
    """Generate a random temporary password for old users"""
    chars = string.ascii_letters + string.digits + "!@#$%^&*()"
    return "".join(random.choice(chars) for _ in range(length))


def migrate_users():
    # 1. Fetch all users from old table
    old_users_resp = supabase.table("users").select("*").execute()
    if old_users_resp.data is None:
        print("No users found in old table.")
        return

    for old_user in old_users_resp.data:
        email = old_user["email"]
        username = old_user["username"]
        points = old_user.get("points", 0)
        co2_saved = old_user.get("co2_saved", 0.0)
        items_recycled = old_user.get("items_recycled", 0)
        created_at = old_user.get("created_at")

        temp_password = generate_temp_password()

        try:
            # 2. Create Supabase Auth user
            auth_resp = supabase.auth.admin.create_user({
                "email": email,
                "password": temp_password,
                "email_confirm": True
            })
            auth_id = auth_resp.user.id
            print(f"Created auth user {email} with id {auth_id}")

            # 3. Insert into app_users table
            app_user_resp = supabase.table("app_users").insert({
                "auth_id": auth_id,
                "username": username,
                "points": points,
                "co2_saved": co2_saved,
                "items_recycled": items_recycled,
                "created_at": created_at
            }).execute()

            if app_user_resp.data:
                print(f"Inserted app_user row for {username}")
            else:
                print(f"Failed to insert app_user for {username}")

        except Exception as e:
            print(f"Error migrating user {email}: {e}")


if __name__ == "__main__":
    migrate_users()

