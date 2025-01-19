"use client";

import * as Yup from "yup";
import { InputFormField } from "@/components/InputFormField";
import { Formik, Form, FormikHelpers } from "formik";
import { useState } from "react";
import { ErrorAlert } from "@/components/ErrorAlert";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth/authClient";

export const SignUpFormSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long!")
    .max(50, "Too long!")
    .required("Name is required!"),
  password: Yup.string()
    .min(10, "Password must be at least 10 characters long!")
    .max(256, "Too long!")
    .required("Password is required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
});
export type SignUpFormValues = Yup.InferType<typeof SignUpFormSchema>;

export const SignUpForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (
    values: SignUpFormValues,
    form: FormikHelpers<SignUpFormValues>
  ) => {
    form.setSubmitting(true);

    const { error } = await authClient.signUp.email(values);
    if (error) {
      setError(error.message || "Something went wrong. Try again later.");
    } else {
      router.push("/");
    }

    form.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={SignUpFormSchema}
      onSubmit={handleSubmit}
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
