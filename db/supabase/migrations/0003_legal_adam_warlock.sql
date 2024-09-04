DO $$ BEGIN
 ALTER TABLE "excercise_table" ADD CONSTRAINT "excercise_table_muscle_group_id_equipment_table_id_fk" FOREIGN KEY ("muscle_group_id") REFERENCES "public"."equipment_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
