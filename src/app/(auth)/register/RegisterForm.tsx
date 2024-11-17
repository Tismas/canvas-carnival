import { Input } from "@/components/Input";
import { createUser } from "@/data/user";
import { signIn } from "next-auth/react";
import { useState } from "react";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createUser({
      username,
      password,
      email,
    });
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        autocomplete="email"
        type="email"
        placeholder="johny@example.com"
      />
      <Input
        id="username"
        label="Username"
        value={username}
        setValue={setUsername}
        autocomplete="username"
        type="text"
        placeholder="johny"
      />
      <Input
        id="password"
        label="Password"
        value={password}
        setValue={setPassword}
        autocomplete="password"
        type="password"
        placeholder="********"
      />
      <div>
        <button
          className="w-full bg-primary-500 hover:bg-primary-400 text-gray-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
