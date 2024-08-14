import {boolean, integer, pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core';

export const bocadillos = pgTable('tabla_bocadillos', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  deMierda: boolean('deMierda').notNull(),
  cm: integer('cm').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Bocadillo = typeof bocadillos.$inferSelect;
export type BocadilloInsert = typeof bocadillos.$inferInsert;

