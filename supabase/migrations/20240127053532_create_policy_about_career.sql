create policy "Users can update own careers."
on "public"."careers" for update
using ( auth.uid() = "public"."careers"."created_by_user_id" );