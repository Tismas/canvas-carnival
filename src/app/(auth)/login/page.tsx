"use client";

import { AuthForm } from "../AuthForm";
import { LoginHeader } from "./LoginHeader";
import { LoginForm } from "./LoginForm";
import { LoginButtons } from "./LoginButtons";

export default function Login() {
  return (
    <AuthForm
      header={<LoginHeader />}
      form={<LoginForm />}
      buttons={<LoginButtons />}
    />
  );
}
