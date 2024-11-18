import * as Yup from "yup";

export const LoginFormSchema = Yup.object({
  email: Yup.string().required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

export type LoginFormValues = Yup.InferType<typeof LoginFormSchema>;
