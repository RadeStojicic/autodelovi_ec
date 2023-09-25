import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import drizzleConfig from "~/drizzle.config";

const client = postgres(drizzleConfig.dbCredentials);
export const db = drizzle(client);
