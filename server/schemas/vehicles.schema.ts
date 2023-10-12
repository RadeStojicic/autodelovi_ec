import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const vehicles = pgTable("vehicles", {
  id: serial("id").primaryKey().notNull(),
  mark: text("mark").notNull(),
  model: text("model").notNull(),
  year: text("year").notNull(),
});
