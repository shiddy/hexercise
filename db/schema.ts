import { boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// export const usersTable = pgTable('users_table', {
//   id: serial('id').primaryKey(),
//   name: text('name').notNull(),
//   age: integer('age').notNull(),
//   email: text('email').notNull().unique(),
// });
// export const postsTable = pgTable('posts_table', {
//   id: serial('id').primaryKey(),
//   title: text('title').notNull(),
//   content: text('content').notNull(),
//   userId: integer('user_id')
//     .notNull()
//     .references(() => usersTable.id, { onDelete: 'cascade' }),
//   createdAt: timestamp('created_at').notNull().defaultNow(),
//   updatedAt: timestamp('updated_at')
//     .notNull()
//     .$onUpdate(() => new Date()),
// });

// export type InsertUser = typeof usersTable.$inferInsert;
// export type SelectUser = typeof usersTable.$inferSelect;

// export type InsertPost = typeof postsTable.$inferInsert;
// export type SelectPost = typeof postsTable.$inferSelect;

// Triceps
//   triceps brachii LongHead,
//   triceps brachii MeidalHead, 
//   triceps brachii ShortHead, 

export const musclesTable = pgTable('muscles_table', {
  id: serial('id').primaryKey(),
  sci_name: text('sci_name').notNull().unique(),
  muscle_group_id: integer('muscle_group_id')
    .notNull()
    .references(() => muscleGroupsTable.id, {})
});

export const muscleGroupsTable = pgTable('muscle_groups_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});

export const equipmentTable = pgTable('equipment_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});

export const excerciseTable = pgTable('excercise_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  equipment_id: integer('equipment_id')
    .notNull()
    .references(() => equipmentTable.id, {}),
});
// specific_muscle: text('specific_muscle')
//   .references(() => musclesTable.sci_name, {}),

export const ExcerciseToMuscleGroupMap = pgTable('excercise_to_muscle_group_map', {
  id: serial('id').primaryKey(),
  excercise_id: integer('excercise_id')
    .notNull()
    .references(() => excerciseTable.id, {}),
  muscle_group_id: integer('muscle_group_id')
    .notNull()
    .references(() => muscleGroupsTable.id, {}),
});

export const workout = pgTable('workout_table', {
  id: serial('id').primaryKey(),
  excercise_id: integer('excercise_id')
    // .notNull() // This is because we can use User Excercises later
    .references(() => excerciseTable.id, {}),
  muscle_group_id: integer('muscle_group_id')
    .notNull()
    .references(() => muscleGroupsTable.id, {}),
  sets: integer('sets')
    .notNull(),
  recommended_weight: integer('recommended_weight')
    .array()
    .notNull()
    .default(sql`'{}'::integer[]`),
  finished_weight: integer('finished_weight')
    .array()
    .notNull()
    .default(sql`'{}'::integer[]`),
  recommended_reps: integer('recommended_reps')
    .array()
    .notNull()
    .default(sql`'{}'::integer[]`),
  finished_reps: integer('finished_reps')
    .array()
    .notNull()
    .default(sql`'{}'::integer[]`),
  completed: integer('completed')
    .array()
    .notNull()
    .default(sql`'{}'::integer[]`),
});

export type SelectMuscles = typeof musclesTable.$inferSelect;
export type SelectMuscleGroups = typeof muscleGroupsTable.$inferSelect;
export type SelectEquipment = typeof equipmentTable.$inferSelect;
export type SelectExcercise = typeof excerciseTable.$inferSelect;
export type SelectExcerciseToMuscleGroupMap = typeof ExcerciseToMuscleGroupMap.$inferSelect;
export type SelectWorkout = typeof workout.$inferSelect;
