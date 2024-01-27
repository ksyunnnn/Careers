create policy "Enable access for authenticated users only"
on "public"."careers"
as permissive
for select
to authenticated
using (true);


create policy "Enable insert for authenticated users only"
on "public"."careers"
as permissive
for insert
to authenticated
with check (true);



