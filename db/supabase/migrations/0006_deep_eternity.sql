ALTER TABLE "excercise_table" DROP CONSTRAINT "excercise_table_muscle_group_map_id_excercise_to_muscle_group_map_id_fk";
--> statement-breakpoint
ALTER TABLE "excercise_table" DROP COLUMN IF EXISTS "muscle_group_map_id";