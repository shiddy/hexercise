import { eq } from 'drizzle-orm';
import { db } from '../index.ts';
import { SelectPost, SelectUser, postsTable, usersTable, SelectWorkout, workout } from '../schema.ts';

// export async function updatePost(id: SelectPost['id'], data: Partial<Omit<SelectPost, 'id'>>) {
//   await db.update(postsTable).set(data).where(eq(postsTable.id, id));
// }

export async function updateWorkout(id: SelectWorkout['id'], data: Partial<Omit<SelectWorkout, 'id'>>) {
  await db.update(workout).set(data).where(eq(workout.id, id));
  return true;
}
