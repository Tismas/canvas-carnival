"use client";

import { AuthForm } from "../AuthForm";
import { RegisterHeader } from "./RegisterHeader";
import { RegisterForm } from "./RegisterForm";
import { RegisterButtons } from "./RegisterButtons";

export default function Register() {
  return (
    <AuthForm
      header={<RegisterHeader />}
      form={<RegisterForm />}
      buttons={<RegisterButtons />}
    />
  );
}
