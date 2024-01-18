CREATE UNIQUE INDEX profiles_user_name_key ON public.profiles USING btree (user_name);

alter table "public"."profiles" add constraint "profiles_user_name_key" UNIQUE using index "profiles_user_name_key";


