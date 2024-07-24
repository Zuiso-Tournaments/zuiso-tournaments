
import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';


export const subditos = pgTable('subditos', {
    id: serial('id').primaryKey(),
    nombre: varchar('nombre', {length:256}).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  });
  
  export type Subditos = typeof subditos.$inferSelect;
  export type SubditosInsert = typeof subditos.$inferInsert;