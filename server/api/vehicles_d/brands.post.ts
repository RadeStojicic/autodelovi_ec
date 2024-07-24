import { createInsertSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { brands } from "~/server/schemas/brands.schema";

const brandInsert = createInsertSchema(brands);
export default defineEventHandler(async (event) => {
  const brand = parse(brandInsert, await readBody(event));
  return await db
    .insert(brands)
    .values(brand)
    .returning({ id: brands.id })
    .execute();
});
