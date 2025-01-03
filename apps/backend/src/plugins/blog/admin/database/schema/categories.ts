import { pgTable } from 'drizzle-orm/pg-core';

export const blog_categories = pgTable('blog_categories', t => ({
  id: t.serial().primaryKey(),
  color: t.varchar({ length: 20 }).notNull(),
  position: t.integer().notNull().default(0),
  slug: t.varchar({ length: 255 }).notNull().unique(),
  created_at: t.timestamp().notNull().defaultNow(),
  updated_at: t.timestamp().notNull().defaultNow(),
}));
