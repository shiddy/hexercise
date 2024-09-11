// import { drizzle } from "https://esm.sh/drizzle-orm/postgres-js"
// import { defineConfig  } from "https://esm.sh/drizzle-kit"
import { defineConfig  } from "drizzle-kit"
// import "jsr:@std/dotenv/load";
// import { config } from "https://esm.sh/dotenv"
// import postgres from "https://esm.sh/postgres"


// config({ path: '.env' }); // or .env.local
// const client = postgres(process.env.DATABASE_URL!);
// const client = postgres("http://127.0.0.1:8000"!);
// export const db = drizzle(client);

// console.log(Deno.env.get("PG_HOST"));
// PG_HOST = "dev.tell.house"
// PG_PORT = "5432"
// PG_USER = "postgres"
// PG_DB = "postgres"


export default defineConfig({
  schema: './db/schema.ts',
  out: './db/supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    host: "dev.tell.house",
    port: "5432",
    user: "postgres",
    password: "your-super-secret-and-long-postgres-password",
    database: "postgres"
  },
});
