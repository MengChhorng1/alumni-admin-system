import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthCard } from "./AuthCard.jsx";
import { Button } from "../../components/ui/Button.jsx";
import { Input } from "../../components/ui/Input.jsx";
import { useAuthStore } from "../../app/store/authStore.js";
export default function RegisterPage() {
  const nav = useNavigate();
  const registerUser = useAuthStore((s) => s.register);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = async (data) => {
    await registerUser(data);
    toast.success("Admin account created");
    nav("/app/dashboard");
  };
  return (
    <AuthCard
      title="Create admin account"
      subtitle="Register for the alumni management console"
      footerText="Already have account?"
      footerLink="/auth/login"
      footerLinkText="Sign in"
    >
      <form onSubmit={handleSubmit(submit)} className="grid gap-4">
        <Input
          label="Full name"
          error={errors.name?.message}
          {...register("name", { required: "Name is required" })}
        />
        <Input
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email", { required: "Email is required" })}
        />
        <Input
          label="Password"
          type="password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: 6,
          })}
        />
        <Button className="w-full">Create Account</Button>
      </form>
    </AuthCard>
  );
}
