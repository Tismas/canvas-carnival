import { AuthForm } from "../AuthForm";
import { SignUpHeader } from "./SignUpHeader";
import { SignUpForm } from "./SignUpForm";
import { SignUpButtons } from "./SignUpButtons";

export default function SignUp() {
  return (
    <AuthForm
      header={<SignUpHeader />}
      form={<SignUpForm />}
      buttons={<SignUpButtons />}
    />
  );
}
