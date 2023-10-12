import { pgTable, text, integer, serial } from "drizzle-orm/pg-core";
import { categories } from "./categories.schema";

export const subcategories = pgTable("subcategories", {
  id: serial("id").primaryKey().notNull(),
  category_id: integer("category_id")
    .notNull()
    .references(() => categories.id),
  name: text("name").notNull(),
});
