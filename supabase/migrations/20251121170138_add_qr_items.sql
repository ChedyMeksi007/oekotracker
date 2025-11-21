CREATE TABLE qr_items (
    id TEXT PRIMARY KEY,               
    location TEXT NOT NULL,             -- Location of the bin
    material TEXT NOT NULL,             -- Material type (Plastic, Paper, Glass, etc.)
    points_per_kg INT NOT NULL,         -- Points earned per kilogram
    co2_saved_per_kg FLOAT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
