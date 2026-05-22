import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout.jsx';
import { AuthLayout } from '../../layouts/AuthLayout.jsx';
import { ProtectedRoute } from './ProtectedRoute.jsx';
import { PageLoader } from '../../components/common/PageLoader.jsx';
import { CrudPage } from '../../features/crud/CrudPage.jsx';
import { entityConfigs } from '../../features/crud/entityConfigs.js';

const DashboardPage = lazy(() => import('../../features/dashboard/DashboardPage.jsx'));
const LoginPage = lazy(() => import('../../features/auth/LoginPage.jsx'));
const RegisterPage = lazy(() => import('../../features/auth/RegisterPage.jsx'));
const ForgotPasswordPage = lazy(() => import('../../features/auth/ForgotPasswordPage.jsx'));
const ResetPasswordPage = lazy(() => import('../../features/auth/ResetPasswordPage.jsx'));
const SettingsPage = lazy(() => import('../../features/settings/SettingsPage.jsx'));
const ReportsPage = lazy(() => import('../../features/reports/ReportsPage.jsx'));

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
          </Route>
          <Route element={<ProtectedRoute roles={["super_admin", "admin"]} />}>
            <Route path="/app" element={<AdminLayout />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="settings" element={<SettingsPage />} />
              {entityConfigs.map((config) => (
                <Route key={config.slug} path={config.slug} element={<CrudPage config={config} />} />
              ))}
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
