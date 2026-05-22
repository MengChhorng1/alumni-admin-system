import { create } from 'zustand';

const demoUser = { id: 1, name: 'Admin User', email: 'admin@alumni.edu', role: 'super_admin' };

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('alumni_user') || 'null'),
  login: async ({ email }) => {
    const user = { ...demoUser, email };
    localStorage.setItem('alumni_user', JSON.stringify(user));
    set({ user });
    return user;
  },
  register: async (data) => {
    const user = { ...demoUser, name: data.name, email: data.email };
    localStorage.setItem('alumni_user', JSON.stringify(user));
    set({ user });
    return user;
  },
  logout: () => {
    localStorage.removeItem('alumni_user');
    set({ user: null });
  },
  hasRole: (roles = []) => {
    const current = JSON.parse(localStorage.getItem('alumni_user') || 'null');
    return !roles.length || roles.includes(current?.role);
  },
}));
