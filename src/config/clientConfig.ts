import * as Yup from "yup";

const envSchema = Yup.object({
  BASE_URL: Yup.string().required(),
});
const config = envSchema.validateSync({
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const getClientConfigValue = (
  key: keyof Yup.InferType<typeof envSchema>
) => {
  return config[key];
};
