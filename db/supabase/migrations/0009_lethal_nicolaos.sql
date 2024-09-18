CREATE TABLE IF NOT EXISTS "excercise_to_variation_map" (
	"id" serial PRIMARY KEY NOT NULL,
	"excercise_id" integer NOT NULL,
	"variation_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mesocycle_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"days_total" integer NOT NULL,
	"weeks_total" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "variation_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "workout_table" ADD COLUMN "variation_id" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "excercise_to_variation_map" ADD CONSTRAINT "excercise_to_variation_map_excercise_id_excercise_table_id_fk" FOREIGN KEY ("excercise_id") REFERENCES "public"."excercise_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "excercise_to_variation_map" ADD CONSTRAINT "excercise_to_variation_map_variation_id_variation_table_id_fk" FOREIGN KEY ("variation_id") REFERENCES "public"."variation_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workout_table" ADD CONSTRAINT "workout_table_variation_id_variation_table_id_fk" FOREIGN KEY ("variation_id") REFERENCES "public"."variation_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
