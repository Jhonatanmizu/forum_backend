import * as schema from './schemas';
import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

export const DRIZZLE_PROVIDER = 'DRIZZLE_PROVIDER';

export const databaseProviders = [
  {
    provide: DRIZZLE_PROVIDER,
    useFactory: async () => {
      const client = new Client({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_PASSWORD,
      });
      await client.connect();
      const db = drizzle(client, { schema });
      return db;
    },
  },
];
