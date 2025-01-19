import { AuthForm } from "../AuthForm";
import { SignInHeader } from "./SignInHeader";
import { SignInForm } from "./SignInForm";
import { SignInButtons } from "./SignInButtons";

export default function SignIn() {
  return (
    <AuthForm
      header={<SignInHeader />}
      form={<SignInForm />}
      buttons={<SignInButtons />}
    />
  );
}
