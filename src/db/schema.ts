import { relations } from "drizzle-orm";
import { timestamp, pgTable, text, integer, serial } from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  password: text(),
  avatar: text(),
});

export const userRelations = relations(users, ({ many }) => ({
  tasks: many(tasks),
}));

export const tasks = pgTable("task", {
  id: serial().primaryKey(),
  event: integer().notNull(),
  taskNumber: integer().notNull(),
  completedAt: timestamp("completedAt", { mode: "date" }),
  userId: text(),
});

export const tasksRelations = relations(tasks, ({ one }) => ({
  user: one(users, {
    fields: [tasks.userId],
    references: [users.id],
  }),
}));
