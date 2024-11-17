import { z } from "zod";

const SignInCredentials = z.object({
  username: z.string(),
  password: z.string(),
});
const SignUpCredentials = z.object({
  username: z.string(),
  password: z.string().min(10),
  email: z.string().email(),
  avatar: z.string().optional(),
});

interface User {
  username: string;
  email: string;
  password: string;
}

const users: User[] = [];

export const findUser = async (credentials: unknown): Promise<User | null> => {
  const { success, data } = SignInCredentials.safeParse(credentials);
  if (!success) return null;

  const { username, password } = data;

  return (
    users.find((u) => u.username === username && u.password === password) ||
    null
  );
};

export const createUser = async (
  credentials: unknown
): Promise<User | null> => {
  const { success, data } = SignUpCredentials.safeParse(credentials);
  if (!success) return null;

  const user = {
    username: data.username,
    password: data.password,
    email: data.email,
  };
  users.push(user);

  return user;
};
