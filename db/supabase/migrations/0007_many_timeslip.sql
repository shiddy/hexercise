CREATE TABLE IF NOT EXISTS "workout_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"excercise_id" integer,
	"muscle_group_id" integer NOT NULL,
	"sets" integer NOT NULL,
	"recommended_reps" integer[] DEFAULT '{}'::integer[] NOT NULL,
	"finished_reps" integer[] DEFAULT '{}'::integer[] NOT NULL,
	"completed" boolean NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workout_table" ADD CONSTRAINT "workout_table_excercise_id_excercise_table_id_fk" FOREIGN KEY ("excercise_id") REFERENCES "public"."excercise_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workout_table" ADD CONSTRAINT "workout_table_muscle_group_id_muscle_groups_table_id_fk" FOREIGN KEY ("muscle_group_id") REFERENCES "public"."muscle_groups_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
