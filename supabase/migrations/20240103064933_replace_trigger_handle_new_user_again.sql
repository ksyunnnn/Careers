create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, email, first_name, last_name)
  values (new.id, new.email, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name');
  return new;
end;
$$ language plpgsql security definer;

-- trigger the function every time a user is created
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();