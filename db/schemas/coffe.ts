import {pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core';

export const coffeSchema = pgTable('coffe_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  variety: text('variety'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Coffe = typeof coffeSchema.$inferSelect;
export type CoffeInsert = typeof coffeSchema.$inferInsert;
