import { pgTable, text, integer, serial, boolean } from "drizzle-orm/pg-core";
import { products } from "./products.schema";

export const productImages = pgTable("productImages", {
  id: serial("id").primaryKey().notNull(),
  product_id: integer("product_id")
    .notNull()
    .references(() => products.id),
  path: text("path").notNull(),
  IsMainImage: boolean("IsMainImage").notNull(),
});
