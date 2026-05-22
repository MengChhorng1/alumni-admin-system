import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthCard } from './AuthCard.jsx';
import { Button } from '../../components/ui/Button.jsx';
import { Input } from '../../components/ui/Input.jsx';
export default function ResetPasswordPage(){ const {register,handleSubmit}=useForm(); return <AuthCard title="Reset password" subtitle="Create a strong new password" footerText="Back to" footerLink="/auth/login" footerLinkText="Login"><form onSubmit={handleSubmit(()=>toast.success('Password reset successfully'))} className="grid gap-4"><Input label="New password" type="password" {...register('password',{required:true})}/><Input label="Confirm password" type="password" {...register('confirm',{required:true})}/><Button className="w-full">Reset Password</Button></form></AuthCard> }
