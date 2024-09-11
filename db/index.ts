import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import "jsr:@std/dotenv/load";


const client = postgres(
  {
    host: Deno.env.get("PG_HOST"),
    port: Deno.env.get("PG_PORT"),
    user: Deno.env.get("PG_USER"),
    password: Deno.env.get("PG_PASS"),
    database: Deno.env.get("PG_DB"),
  }
)
export const db = drizzle(client);
