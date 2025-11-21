CREATE TABLE IF NOT EXISTS recycling_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  -- Unique entry ID
    user_id UUID NOT NULL REFERENCES app_users(id),  -- Link to app user
    qr_id TEXT NOT NULL REFERENCES qr_items(id),          -- QR code scanned
    weight_kg NUMERIC(6,2) NOT NULL CHECK (weight_kg > 0),  -- Weight reported
    points_earned INT NOT NULL,
    co2_saved FLOAT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

