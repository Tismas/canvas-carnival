import * as Yup from "yup";

const envSchema = Yup.object({
  DATABASE_URL: Yup.string().required(),
  GITHUB_CLIENT_ID: Yup.string().required(),
  GITHUB_CLIENT_SECRET: Yup.string().required(),
});

const envs = envSchema.validateSync(process.env);

export const getEnvVariable = (key: keyof Yup.InferType<typeof envSchema>) => {
  return envs[key];
};
