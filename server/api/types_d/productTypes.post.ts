import { createInsertSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { productTypes } from "~/server/schemas/productTypes.schema";

const productTypeInsert = createInsertSchema(productTypes);
export default defineEventHandler(async (event) => {
  const productType = parse(productTypeInsert, await readBody(event));
  return await db
    .insert(productTypes)
    .values(productType)
    .returning({ id: productTypes.id })
    .execute();
});
