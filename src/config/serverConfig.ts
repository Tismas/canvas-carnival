import * as Yup from "yup";

const envSchema = Yup.object({
  DATABASE_URL: Yup.string().required(),
  GITHUB_CLIENT_ID: Yup.string().required(),
  GITHUB_CLIENT_SECRET: Yup.string().required(),
  BETTER_AUTH_SECRET: Yup.string().required(),
});

const config = envSchema.validateSync(process.env);

export const getServerConfigValue = (
  key: keyof Yup.InferType<typeof envSchema>
) => {
  return config[key];
};
