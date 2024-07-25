
import { pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core';


export const subditos = pgTable('subditos', {
    id: serial('id').primaryKey(),
    nombre: text('nombre').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  });
  
  export type Subditos = typeof subditos.$inferSelect;
  export type SubditosInsert = typeof subditos.$inferInsert;