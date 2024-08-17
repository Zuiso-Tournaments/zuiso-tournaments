import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const films = pgTable('films', {
  filmId: serial('id').primaryKey(),
  title: text('title').notNull(),
  watched: boolean('watched').notNull(),
  priority: integer('priority').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Film = typeof films.$inferSelect;
export type FilmInsert = typeof films.$inferInsert;
