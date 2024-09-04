ALTER TABLE "excercise_table" DROP CONSTRAINT "excercise_table_muscle_group_id_equipment_table_id_fk";
--> statement-breakpoint
ALTER TABLE "excercise_table" ADD COLUMN "equipment_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "excercise_table" ADD CONSTRAINT "excercise_table_equipment_id_equipment_table_id_fk" FOREIGN KEY ("equipment_id") REFERENCES "public"."equipment_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "excercise_table" DROP COLUMN IF EXISTS "muscle_group_id";