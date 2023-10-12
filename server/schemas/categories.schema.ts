import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
});
