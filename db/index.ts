// import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// config({ path: '.env' }); // or .env.local

const client = postgres(
  {
    host: "127.0.0.1",
    port: "5432",
    user: "postgres",
    password: "your-super-secret-and-long-postgres-password",
    database: "postgres"
  }
)
export const db = drizzle(client);
