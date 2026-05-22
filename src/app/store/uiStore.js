import { create } from 'zustand';

export const useUiStore = create((set) => ({
  sidebarOpen: false,
  collapsed: false,
  openSidebar: () => set({ sidebarOpen: true }),
  closeSidebar: () => set({ sidebarOpen: false }),
  toggleCollapsed: () => set((s) => ({ collapsed: !s.collapsed })),
}));
