import { Config } from "drizzle-kit";

export default {
  schema: ["./server/**/*.schema.ts"],
  dbCredentials: {
    user: "postgres",
    host: "db.zkmuuhputvodyxcbyxav.supabase.co",
    database: "postgres",
    password: "GoDyR123autodelovi",
    port: 5432,
  },
  driver: "pg",
} satisfies Config;
