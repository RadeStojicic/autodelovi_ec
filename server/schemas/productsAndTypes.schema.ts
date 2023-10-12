import { pgTable, serial } from "drizzle-orm/pg-core";
import { products } from "./products.schema";
import { productTypes } from "./productTypes.schema";

export const productsAndTypes = pgTable("productsAndTypes", {
  product_id: serial("product_id")
    .primaryKey()
    .notNull()
    .references(() => products.id),
  type_id: serial("type_id")
    .notNull()
    .references(() => productTypes.id),
});
