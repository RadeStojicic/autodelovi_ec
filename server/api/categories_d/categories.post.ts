import { createInsertSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { categories } from "~/server/schemas/categories.schema";

const categoryInsert = createInsertSchema(categories);
export default defineEventHandler(async (event) => {
  const category = parse(categoryInsert, await readBody(event));
  return await db
    .insert(categories)
    .values(category)
    .returning({ id: categories.id })
    .execute();
});
