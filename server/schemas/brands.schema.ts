import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const brands = pgTable("brands", {
  id: serial("id").primaryKey().notNull(),
  name: text("mark").notNull(),
});
