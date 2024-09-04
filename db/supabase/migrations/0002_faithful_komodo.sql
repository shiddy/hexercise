CREATE TABLE IF NOT EXISTS "excercise_to_muscle_group_map" (
	"id" serial PRIMARY KEY NOT NULL,
	"excercise_id" integer NOT NULL,
	"muscle_group_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "equipment_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "excercise_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"muscle_group_map_id" integer NOT NULL,
	"muscle_group_id" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "excercise_to_muscle_group_map" ADD CONSTRAINT "excercise_to_muscle_group_map_excercise_id_excercise_table_id_fk" FOREIGN KEY ("excercise_id") REFERENCES "public"."excercise_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "excercise_to_muscle_group_map" ADD CONSTRAINT "excercise_to_muscle_group_map_muscle_group_id_muscle_groups_table_id_fk" FOREIGN KEY ("muscle_group_id") REFERENCES "public"."muscle_groups_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "excercise_table" ADD CONSTRAINT "excercise_table_muscle_group_map_id_excercise_to_muscle_group_map_id_fk" FOREIGN KEY ("muscle_group_map_id") REFERENCES "public"."excercise_to_muscle_group_map"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "muscles_table" ADD CONSTRAINT "muscles_table_sci_name_unique" UNIQUE("sci_name");