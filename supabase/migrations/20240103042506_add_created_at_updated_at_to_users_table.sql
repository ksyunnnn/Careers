alter table if exists public.users
add created_at timestamptz default now(),
add updated_at timestamptz default now();

