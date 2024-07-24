import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { brands } from "./brands.schema";

export const models = pgTable("models", {
  id: serial("id").primaryKey().notNull(),
  brand_id: integer("brand_id")
    .notNull()
    .references(() => brands.id),
  name: text("model").notNull(),
});
