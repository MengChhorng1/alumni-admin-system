import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { AuthCard } from "./AuthCard.jsx";
import { Button } from "../../components/ui/Button.jsx";
import { Input } from "../../components/ui/Input.jsx";
import { useAuthStore } from "../../app/store/authStore.js";
export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((s) => s.login);
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "admin@alumni.edu", password: "password" },
  });
  const submit = async (data) => {
    setLoading(true);
    await login(data);
    toast.success("Welcome back");
    nav("/app/dashboard");
  };
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to manage alumni operations"
      footerText="New admin?"
      footerLink="/auth/register"
      footerLinkText="Create account"
    >
      <form onSubmit={handleSubmit(submit)} className="grid gap-4">
        <Input
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email", { required: "Email is required" })}
        />
        <div className="relative">
          <Input
            label="Password"
            type={show ? "text" : "password"}
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-9 text-slate-400"
          >
            {show ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/auth/forgot-password" className="text-cyan-300">
            Forgot password?
          </Link>
        </div>
        <Button loading={loading} className="w-full">
          Sign In
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <Button type="button" variant="secondary">
            Google
          </Button>
          <Button type="button" variant="secondary">
            LinkedIn
          </Button>
        </div>
      </form>
    </AuthCard>
  );
}
