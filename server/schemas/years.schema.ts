import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { models } from "./models.schema";

export const years = pgTable("years", {
  id: serial("id").primaryKey().notNull(),
  model_id: integer("model_id")
    .notNull()
    .references(() => models.id),
  name: text("model").notNull(),
});
