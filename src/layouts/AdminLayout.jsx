import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar.jsx';
import { TopNavbar } from '../components/layout/TopNavbar.jsx';
export function AdminLayout() { return <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100"><Sidebar/><div className="lg:pl-72"><TopNavbar/><main className="px-4 py-6 sm:px-6 lg:px-8"><Outlet/></main></div></div>; }
