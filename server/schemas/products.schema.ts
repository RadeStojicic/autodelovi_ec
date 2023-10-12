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
import { vehicles } from "./vehicles.schema";

export const products = pgTable("products", {
  id: serial("id").primaryKey().notNull(),
  category_id: integer("category_id")
    .notNull()
    .references(() => categories.id),
  subcategory_id: integer("subcategory_id")
    .notNull()
    .references(() => subcategories.id),
  vehicle_id: integer("vehicle_id")
    .notNull()
    .references(() => vehicles.id),
  name: text("name").notNull(),
  oldPrice: doublePrecision("oldPrice"),
  newPrice: doublePrecision("newPrice").notNull(),
  quantity: integer("quantity").notNull(),
  supplies: integer("supplies").notNull(),
  aboutProduct: text("aboutProduct").notNull(),
  description: text("description").notNull(),
  additionalInfo: text("additionalInfo").notNull(),
  discount: integer("discount"),
  showFilledHeart: boolean("showFilledHeart").notNull(),
});
