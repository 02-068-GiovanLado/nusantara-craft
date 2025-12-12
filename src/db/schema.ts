import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").unique(),
  price: integer("price").notNull(),
  category: text("category"), // 'bag', 'apparel', 'merch'
  description: text("description"),
  isFeatured: integer("is_featured", { mode: "boolean" }).default(false),
  imageUrl: text("image_url"),
});

export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  type: text("type").default("retail"), // 'retail' or 'b2b'
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow(),
});