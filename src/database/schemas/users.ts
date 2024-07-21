import { createId } from '@paralleldrive/cuid2';
import {
  pgTable,
  date,
  serial,
  uniqueIndex,
  varchar,
  pgEnum,
} from 'drizzle-orm/pg-core';

const roleEnum = pgEnum('role', ['speaker', 'participant', 'staff']);

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    subscription: varchar('subscription', { length: 100 }).$defaultFn(() =>
      createId(),
    ),
    name: varchar('name', { length: 256 }).notNull(),
    phone: varchar('name', { length: 256 }).notNull(),
    email: varchar('name', { length: 256 }).notNull(),
    identity: varchar('identity', { length: 20 }).notNull(),
    birthdate: date('birthdate').notNull(),
    role: roleEnum('role'),
  },
  (users) => ({
    nameIndex: uniqueIndex('name_idx').on(users.name),
  }),
);

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert; // insert type
