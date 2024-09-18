import { asc, between, count, eq, and, getTableColumns, sql } from 'drizzle-orm';
import { db } from '../index.ts';
import { 
  SelectMuscleGroups, muscleGroupsTable,
  musclesTable, SelectExcercise,
  excerciseTable, ExcerciseToMuscleGroupMap,
  equipmentTable, SelectWorkout, workoutTable,
  mesocycleTable, SelectMesocycle
} from '../../db/schema.ts';

export async function getMuscleGroupByName(name: SelectMuscleGroups['name']): Promise<
  Array<{
    id: number;
    name: string;
    muscles: string[];
  }>
> {
  let mg = await db.select().from(muscleGroupsTable).where(eq(muscleGroupsTable.name, name));
  const uhnu = await db.select().from(musclesTable)
    .where(eq(musclesTable.muscle_group_id, mg[0].id));
  Object.assign(mg[0], {muscles: (uhnu.map((e) => e.sci_name))});
  return mg;
}

export async function getExcerciseByName(name: SelectExcercise['name']): Promise<
  Array<{
    id: number;
    name: string;
    equipment: string;
    muscleGroups: any[];
  }>
> {
  let ex = await db.select().from(excerciseTable).where(eq(excerciseTable.name, name));
  let eqip = await db.select().from(equipmentTable).where(eq(equipmentTable.id, ex[0].equipment_id));
  delete ex[0].equipment_id
  let map = await db.select().from(ExcerciseToMuscleGroupMap).where(eq(ExcerciseToMuscleGroupMap.excercise_id, ex[0].id));
  let mgs = [];
  for (let map_id of map) {
    const mg = await db.select().from(muscleGroupsTable).where(eq(muscleGroupsTable.id, map_id.muscle_group_id));
    mgs.push(mg[0]);
  }
  Object.assign(ex[0], {equiptment: eqip[0].name, muscleGroups: mgs});
  return ex[0];
}

export async function getWorkoutByMesocycleDay(meso_id: SelectMesocycle['id'], day) {
  let meso = await db.select().from(mesocycleTable).where(eq(mesocycleTable.id, meso_id))
    .leftJoin(workoutTable, and(eq(workoutTable.mesocycle_id, meso_id), eq(workoutTable.mesocycle_day, day)))
    .leftJoin(excerciseTable, eq(workoutTable.excercise_id, excerciseTable.id))
    .leftJoin(equipmentTable, eq(equipmentTable.id, excerciseTable.equipment_id))
    .leftJoin(muscleGroupsTable, eq(muscleGroupsTable.id, workoutTable.muscle_group_id))
    .orderBy(asc(workoutTable.id));
  return meso;
}
