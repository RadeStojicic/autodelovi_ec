import { createInsertSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { products } from "~/server/schemas/products.schema";

const productInsert = createInsertSchema(products);
export default defineEventHandler(async (event) => {
  const product = parse(productInsert, await readBody(event));
  return await db.insert(products).values(product).execute();
});
