import { createInsertSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { subcategories } from "~/server/schemas/subcategories.schema";

const subcategoryInsert = createInsertSchema(subcategories);
export default defineEventHandler(async (event) => {
  const subcategory = parse(subcategoryInsert, await readBody(event));
  return await db.insert(subcategories).values(subcategory).execute();
});
