import { createInsertSchema } from "drizzle-valibot";
import { parse } from "valibot";
import { years } from "~/server/schemas/years.schema";

const yearInsert = createInsertSchema(years);
export default defineEventHandler(async (event) => {
  const year = parse(yearInsert, await readBody(event));
  return await db
    .insert(years)
    .values(year)
    .returning({ id: years.id })
    .execute();
});
