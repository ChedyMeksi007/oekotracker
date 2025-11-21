CREATE TABLE if not exists users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR UNIQUE NOT NULL,
  password_hash VARCHAR NOT NULL,
  username VARCHAR UNIQUE NOT NULL,
  points INTEGER DEFAULT 0,
  co2_saved FLOAT DEFAULT 0,
  items_recycled INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
