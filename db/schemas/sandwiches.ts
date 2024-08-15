import {boolean, integer, pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core';

export const sandwiches = pgTable('sandwich_table', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  sandwich: boolean('deMierda').notNull(),
  sandwich_2: integer('cm').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Sandwich = typeof sandwiches.$inferSelect;
export type SandwichInsert = typeof sandwiches.$inferInsert;

