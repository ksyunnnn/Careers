alter table "public"."careers" drop constraint "careers_created_by_fkey";

alter table "public"."careers" drop column "created_by";

alter table "public"."careers" add column "created_by_user_id" uuid not null;

alter table "public"."careers" add constraint "careers_created_by_user_id_fkey" FOREIGN KEY (created_by_user_id) REFERENCES profiles(id) not valid;

alter table "public"."careers" validate constraint "careers_created_by_user_id_fkey";


