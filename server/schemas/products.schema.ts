import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  doublePrecision,
} from "drizzle-orm/pg-core";
import { subcategories } from "./subcategories.schema";
import { categories } from "./categories.schema";
import { brands } from "./brands.schema";
import { models } from "./models.schema";
import { years } from "./years.schema";

export const products = pgTable("products", {
  id: serial("id").primaryKey().notNull(),
  category_id: integer("category_id")
    .notNull()
    .references(() => categories.id),
  subcategory_id: integer("subcategory_id")
    .notNull()
    .references(() => subcategories.id),
  brand_id: integer("brand_id")
    .notNull()
    .references(() => brands.id),
  model_id: integer("model_id")
    .notNull()
    .references(() => models.id),
  year_id: integer("year_id")
    .notNull()
    .references(() => years.id),
  name: text("name").notNull(),
  price: doublePrecision("price").notNull(),
  supplies: integer("supplies").notNull(),
  aboutProduct: text("aboutProduct").notNull(),
  description: text("description").notNull(),
  additionalInfo: text("additionalInfo").notNull(),
  discount: integer("discount"),
});
