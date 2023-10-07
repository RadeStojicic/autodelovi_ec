import { pgTable, text, integer, serial, boolean } from "drizzle-orm/pg-core";

export const productImages = pgTable("productImages", {
  id: serial("id").primaryKey().notNull(),
  image: text("image").notNull(),
  product_id: integer("product_id").notNull(),
  IsMainImage: boolean("IsMainImage").notNull(),
});
