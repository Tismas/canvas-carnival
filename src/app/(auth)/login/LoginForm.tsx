"use client";

import { InputFormField } from "@/components/InputFormField";
import { Formik, Form } from "formik";
import { useState } from "react";
import { ErrorAlert } from "@/components/ErrorAlert";
import { LoginFormSchema } from "./schema";
import { logIn } from "./login";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginFormSchema}
      onSubmit={async (credentials, form) => {
        form.setSubmitting(true);

        const logInError = await logIn(credentials);
        setError(logInError);
        if (!logInError) router.push("/");

        form.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          {error && <ErrorAlert>{error}</ErrorAlert>}
          <InputFormField
            name="email"
            label="Email"
            autoComplete="email"
            type="text"
            placeholder="johny@example.com"
          />
          <InputFormField
            name="password"
            label="Password"
            autoComplete="current-password"
            type="password"
            placeholder="********"
          />
          <div>
            <button
              className="w-full bg-primary-500 hover:bg-primary-400 text-gray-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
