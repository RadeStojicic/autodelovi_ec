import { createInsertSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { models } from "~/server/schemas/models.schema";

const modelInsert = createInsertSchema(models);
export default defineEventHandler(async (event) => {
  const model = parse(modelInsert, await readBody(event));
  return await db
    .insert(models)
    .values(model)
    .returning({ id: models.id, brand_id: models.brand_id })
    .execute();
});
