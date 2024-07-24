import { createSelectSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { brands } from "~/server/schemas/brands.schema";

const getBrands = createSelectSchema(brands);
export default defineEventHandler(async (event) => {
  try {
    const data = await db
      .select({
        id: brands.id,
        name: brands.name,
      })
      .from(brands)
      .execute();
    return data;
  } catch (error) {
    console.log(error);
  }
});
