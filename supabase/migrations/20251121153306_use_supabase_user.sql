CREATE TABLE app_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auth_id UUID UNIQUE REFERENCES auth.users(id),
    username VARCHAR UNIQUE NOT NULL,
    points INTEGER DEFAULT 0,
    co2_saved FLOAT DEFAULT 0,
    items_recycled INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

