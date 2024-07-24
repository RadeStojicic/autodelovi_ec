import { createSelectSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { models } from "~/server/schemas/models.schema";

const getModel = createSelectSchema(models);
export default defineEventHandler(async (event) => {
  try {
    const data = await db
      .select({
        id: models.id,
        brand_id: models.brand_id,
        name: models.name,
      })
      .from(models)
      .execute();
    return data;
  } catch (error) {
    console.log(error);
  }
});
