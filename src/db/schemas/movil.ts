import {pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core';

export const movilSchema = pgTable('movil_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  marca: text('marca').notNull(),
  modelo: text('modelo').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Movil = typeof movilSchema.$inferSelect;
export type MovilInsert = typeof movilSchema.$inferInsert;
