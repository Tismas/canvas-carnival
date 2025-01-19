"use client";

import * as Yup from "yup";
import { InputFormField } from "@/components/InputFormField";
import { Formik, Form, FormikHelpers } from "formik";
import { useState } from "react";
import { ErrorAlert } from "@/components/ErrorAlert";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth/authClient";

export const SignInFormSchema = Yup.object({
  email: Yup.string().required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});
export type SignInFormValues = Yup.InferType<typeof SignInFormSchema>;

export const SignInForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (
    values: SignInFormValues,
    form: FormikHelpers<SignInFormValues>
  ) => {
    form.setSubmitting(true);

    const { error } = await authClient.signIn.email(values);
    if (error) {
      setError(error.message || "Something went wrong. Try again later.");
    } else {
      router.push("/");
    }

    form.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInFormSchema}
      onSubmit={handleSubmit}
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
