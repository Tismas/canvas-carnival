"use client";

import { InputFormField } from "@/components/InputFormField";
import { signIn } from "next-auth/react";
import { Formik, Form } from "formik";
import { useState } from "react";
import { ErrorAlert } from "@/components/ErrorAlert";
import { LoginFormSchema } from "./schema";

export const LoginForm = () => {
  const [error, setError] = useState("");

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginFormSchema}
      onSubmit={async ({ email, password }, form) => {
        form.setSubmitting(true);

        const signInResult = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (signInResult?.error) {
          setError("Invalid username or password");
        }

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
