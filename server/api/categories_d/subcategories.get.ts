import { createSelectSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { subcategories } from "~/server/schemas/subcategories.schema";
const getSubcategories = createSelectSchema(subcategories);

export default defineEventHandler(async (event) => {
  try {
    const data = await db
      .select({
        id: subcategories.id,
        name: subcategories.name,
        category_id: subcategories.category_id,
      })
      .from(subcategories)
      .execute();
    return data;
  } catch (error) {
    console.log(error);
  }
});
