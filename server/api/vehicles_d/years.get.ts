import { createSelectSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { years } from "~/server/schemas/years.schema";

const getYears = createSelectSchema(years);
export default defineEventHandler(async (event) => {
  try {
    const data = await db
      .select({
        id: years.id,
        model_id: years.model_id,
        name: years.name,
      })
      .from(years)
      .execute();
    return data;
  } catch (error) {
    console.log(error);
  }
});
