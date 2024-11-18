"use client";

import { InputFormField } from "@/components/InputFormField";
import { signIn } from "next-auth/react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useState } from "react";

export const LoginFormSchema = Yup.object({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required("Password is required!"),
});

export const LoginForm = () => {
  const [error, setError] = useState("");

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginFormSchema}
      onSubmit={async ({ username, password }, form) => {
        const signInResult = await signIn("credentials", {
          username,
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
          {error && (
            <div className="w-full p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          <InputFormField
            name="username"
            label="Username"
            autoComplete="username"
            type="text"
            placeholder="johny"
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
