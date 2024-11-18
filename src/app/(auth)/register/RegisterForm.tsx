"use client";

import { InputFormField } from "@/components/InputFormField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export const RegisterFormSchema = Yup.object({
  username: Yup.string().min(3).max(50).required(),
  password: Yup.string().min(10).max(256).required(),
  email: Yup.string().email().required(),
});

export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={RegisterFormSchema}
      onSubmit={async (values, helpers) => {
        console.log(values);
        helpers.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <InputFormField
            name="username"
            label="Username"
            autoComplete="username"
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
