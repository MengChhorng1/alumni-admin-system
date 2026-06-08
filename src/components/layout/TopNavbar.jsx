import { useState } from "react";
import { Menu, Moon, Search, Sun, LogOut, Download } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useUiStore } from "../../app/store/uiStore.js";
import { useAuthStore } from "../../app/store/authStore.js";
import { useTheme } from "../../app/providers/ThemeProvider.jsx";

import PictureDownloadModal from "../pictures/PictureDownloadModal";

export function TopNavbar() {
  const open    = useUiStore((s) => s.openSidebar);
  const logout  = useAuthStore((s) => s.logout);
  const nav     = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const [openImages, setOpenImages] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          <button onClick={open} className="lg:hidden">
            <Menu />
          </button>

          <div className="hidden max-w-xl flex-1 items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-slate-500 dark:bg-slate-900 md:flex">
            <Search className="h-4 w-4" />
            <input
              className="w-full bg-transparent text-sm outline-none"
              placeholder="Search users, events, jobs..."
            />
          </div>

          <div className="ml-auto flex items-center gap-2">

            <button
              onClick={() => setOpenImages(true)}
              className="rounded-2xl bg-slate-100 p-2 dark:bg-slate-900"
              title="Download Pictures"
            >
              <Download />
            </button>

            <button
              onClick={toggleTheme}
              className="rounded-2xl bg-slate-100 p-2 dark:bg-slate-900"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>

            <button
              onClick={() => { logout(); nav("/auth/login"); }}
              className="rounded-2xl bg-slate-100 p-2 text-rose-500 dark:bg-slate-900"
            >
              <LogOut />
            </button>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-3 py-2 dark:bg-slate-900">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                A
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold">Admin User</p>
                <p className="text-xs text-slate-500">Super Admin</p>
              </div>
            </div>

          </div>
        </div>
      </header>

      <PictureDownloadModal
        open={openImages}
        onClose={() => setOpenImages(false)}
      />
    </>
  );
}