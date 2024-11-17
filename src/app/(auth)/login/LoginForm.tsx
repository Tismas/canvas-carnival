import { Input } from "@/components/Input";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        autocomplete="current-password"
        type="password"
        placeholder="********"
      />
      <div>
        <button
          className="w-full bg-primary-500 hover:bg-primary-400 text-gray-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};
