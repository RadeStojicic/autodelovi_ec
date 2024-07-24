import { Config } from "drizzle-kit";

export default {
  schema: ["./server/**/*.schema.ts"],
  dbCredentials: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "postgres",
    password: process.env.DB_PASSWORD,
    port: 5432,
  },
  driver: "pg",
} satisfies Config;
