import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore.js';

export function ProtectedRoute({ roles = [] }) {
  const location = useLocation();
  const user = useAuthStore((s) => s.user);
  const hasRole = useAuthStore((s) => s.hasRole);
  if (!user) return <Navigate to="/auth/login" state={{ from: location }} replace />;
  if (!hasRole(roles)) return <Navigate to="/app/dashboard" replace />;
  return <Outlet />;
}
