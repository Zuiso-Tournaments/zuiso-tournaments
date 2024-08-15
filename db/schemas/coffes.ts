import {boolean, integer, pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core';

export const coffees = pgTable('coffe_table', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  coffe: boolean('deMierda').notNull(),
  coffe_2: integer('cm').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Coffe = typeof coffees.$inferSelect;
export type CoffeInsert = typeof coffees.$inferInsert;

