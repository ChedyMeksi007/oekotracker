ALTER TABLE recycling_entries
DROP CONSTRAINT IF EXISTS recycling_entries_user_id_fkey;

ALTER TABLE recycling_entries
ADD CONSTRAINT recycling_entries_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES app_users(id)
ON DELETE CASCADE;

