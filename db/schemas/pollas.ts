import { boolean, integer, numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const pollas = pgTable("pollas", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  entro: boolean("entro").notNull(),
  cuanto_de_gordo: integer("cuanto_de_gordo").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
})

export type Polla = typeof pollas.$inferSelect;
export type PollaInsert = typeof pollas.$inferInsert;



