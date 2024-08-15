import { pgTable, varchar,serial, text, timestamp} from 'drizzle-orm/pg-core';

export const motorbikesSchema = pgTable('motorbikes_table', {
  id: serial('id').primaryKey(),
  marca: varchar('marca', { length: 255 }).notNull(),
  modelo: text('modelo'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});


export type MotorBike = typeof motorbikesSchema.$inferSelect;
export type MotorBikeInsert = typeof motorbikesSchema.$inferInsert;

