import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const productTypes = pgTable("productTypes", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
});
