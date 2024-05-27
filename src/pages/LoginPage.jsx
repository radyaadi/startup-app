import LoginForm from "../components/molecules/form/login-form";
import AuthenticationTemplate from "../templates/AuthenticationTemplate";

export default function LoginPage() {
  return (
    <AuthenticationTemplate>
      <LoginForm />
    </AuthenticationTemplate>
  );
}
