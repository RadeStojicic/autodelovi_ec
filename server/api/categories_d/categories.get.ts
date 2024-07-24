import { createSelectSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { categories } from "~/server/schemas/categories.schema";
const getCategories = createSelectSchema(categories);
export default defineEventHandler(async (event) => {
  try {
    const data = await db
      .select({
        id: categories.id,
        name: categories.name,
      })
      .from(categories)
      .execute();
    return data;
  } catch (error) {
    console.log(error);
  }
});
