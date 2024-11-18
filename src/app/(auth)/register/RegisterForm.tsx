"use client";

import { InputFormField } from "@/components/InputFormField";
import { Formik, Form } from "formik";
import { createAccount } from "./actions";
import { useState } from "react";
import { ErrorAlert } from "@/components/ErrorAlert";
import { RegisterFormSchema } from "./schema";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterFormSchema}
      onSubmit={async (values, form) => {
        form.setSubmitting(true);

        const { error } = await createAccount(values);
        setError(error);

        if (!error) {
          router.push("/");
        }

        form.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          {error && <ErrorAlert>{error}</ErrorAlert>}
          <InputFormField
            name="name"
            label="Name"
            autoComplete="name"
            type="text"
            placeholder="johny"
          />
          <InputFormField
            name="email"
            label="Email"
            autoComplete="email"
            type="email"
            placeholder="johny@example.com"
          />
          <InputFormField
            name="password"
            label="Password"
            autoComplete="password"
            type="password"
            placeholder="********"
          />
          <div>
            <button
              className="w-full bg-primary-500 hover:bg-primary-400 text-gray-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
