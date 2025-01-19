import { InferSelectModel } from "drizzle-orm";
import type { task, user } from "./schema";

export type UserDto = InferSelectModel<typeof user>;
export type TaskDto = InferSelectModel<typeof task>;
