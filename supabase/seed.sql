INSERT INTO users (email, password_hash, username, points, co2_saved, items_recycled)
VALUES
  (
    'admin@example.com',
    crypt('AdminPass123!', gen_salt('bf')), -- hashed password
    'admin_user',
    100,
    50.5,
    20
  ),
  (
    'john@example.com',
    crypt('Password123!', gen_salt('bf')),
    'john_doe',
    10,
    5.2,
    3
  ),
  (
    'jane@example.com',
    crypt('Password123!', gen_salt('bf')),
    'jane_smith',
    15,
    8.1,
    5
  );

