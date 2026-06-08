import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthCard } from "./AuthCard.jsx";
import { Button } from "../../components/ui/Button.jsx";
import { Input } from "../../components/ui/Input.jsx";
export default function ForgotPasswordPage() {
  const { register, handleSubmit } = useForm();
  return (
    <AuthCard
      title="Forgot password"
      subtitle="Receive a reset link in your inbox"
      footerText="Remembered it?"
      footerLink="/auth/login"
      footerLinkText="Sign in"
    >
      <form
        onSubmit={handleSubmit(() => toast.success("Reset link sent"))}
        className="grid gap-4"
      >
        <Input
          label="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <Button className="w-full">Send Reset Link</Button>
      </form>
    </AuthCard>
  );
}
