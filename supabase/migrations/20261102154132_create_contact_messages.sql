/*
# Create contact_messages table

1. New Tables
- `contact_messages`: messages sent through the portfolio contact form.
  - `id` (uuid, primary key)
  - `name` (text, 1-100 characters)
  - `email` (text, 3-200 characters)
  - `message` (text, 1-2000 characters)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security is enabled.
- Visitors (anon) and signed-in users can only INSERT new messages.
- No SELECT, UPDATE or DELETE access is granted, so stored messages are not readable through the public API.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 200),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
