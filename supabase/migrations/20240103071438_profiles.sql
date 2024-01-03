create policy "Users can view their own profile."
on "public"."profiles"
as permissive
for select
to public
using ((auth.uid() = id));



