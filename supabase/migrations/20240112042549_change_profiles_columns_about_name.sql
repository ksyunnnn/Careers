alter table if exists public.profiles
drop column if exists first_name,
drop column if exists last_name,
add column if not exists user_name text;