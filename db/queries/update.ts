import { eq } from 'drizzle-orm';
import { db } from '../index.ts';
import { SelectPost, SelectUser, postsTable, usersTable, SelectWorkout, workoutTable } from '../schema.ts';

// export async function updatePost(id: SelectPost['id'], data: Partial<Omit<SelectPost, 'id'>>) {
//   await db.update(postsTable).set(data).where(eq(postsTable.id, id));
// }

export async function updateWorkout(id: SelectWorkout['id'], data: Partial<Omit<SelectWorkout, 'id'>>) {
  await db.update(workoutTable).set(data).where(eq(workoutTable.id, id));
  return true;
}
