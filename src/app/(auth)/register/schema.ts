import * as Yup from "yup";

export const RegisterFormSchema = Yup.object({
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

export type RegisterFormValues = Yup.InferType<typeof RegisterFormSchema>;
