import { createSelectSchema } from "drizzle-valibot";
import { productTypes } from "~/server/schemas/productTypes.schema";
import { parse } from "valibot";

const getProductTypes = createSelectSchema(productTypes);
export default defineEventHandler(async (event) => {
  try {
    const data = await db
      .select({
        id: productTypes.id,
        name: productTypes.name,
      })
      .from(productTypes)
      .execute();
    return data;
  } catch (error) {
    console.log(error);
  }
});
