import {pgTable, serial, text, timestamp, boolean} from 'drizzle-orm/pg-core';

export const tareas = pgTable('task', {
    id: serial('id').primaryKey(),
    tarea: text('tarea').notNull(),
    done: boolean('done').default(false),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Tarea = typeof tareas.$inferSelect;
export type TareaInsert = typeof tareas.$inferInsert;