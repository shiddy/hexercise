CREATE TABLE IF NOT EXISTS "muscle_groups_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "muscles_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"sci_name" text NOT NULL,
	"muscle_group_id" integer NOT NULL
);
--> statement-breakpoint
DROP TABLE "posts_table";--> statement-breakpoint
DROP TABLE "users_table";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "muscles_table" ADD CONSTRAINT "muscles_table_muscle_group_id_muscle_groups_table_id_fk" FOREIGN KEY ("muscle_group_id") REFERENCES "public"."muscle_groups_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
