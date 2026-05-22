import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutDashboard, Users, CalendarDays, Briefcase, HeartHandshake, GraduationCap, Shield, Newspaper, BarChart3, Settings, X } from 'lucide-react';
import { useUiStore } from '../../app/store/uiStore.js';

const sections = [
  { title:'Dashboard', icon:LayoutDashboard, to:'/app/dashboard' },
  { title:'Users & Notifications', icon:Users, children:[['Users','/app/users'],['Notifications','/app/notifications'],['User Notifications','/app/user-notifications'],['Report Users','/app/report-users'],['User Connectors','/app/user-connectors']]},
  { title:'Events', icon:CalendarDays, children:[['Event Announcements','/app/event-announcements'],['Event Participants','/app/event-participants'],['Event Categories','/app/event-categories'],['Event Comments','/app/event-comments']]},
  { title:'Jobs & Skills', icon:Briefcase, children:[['Jobs','/app/jobs'],['Skills','/app/skills'],['User Skills','/app/user-skills'],['Job Skills','/app/job-skills']]},
  { title:'Donations', icon:HeartHandshake, children:[['Campaigns','/app/donation-campaigns'],['Donations','/app/donations'],['Transactions','/app/payment-logs'],['Campaign Categories','/app/campaign-categories']]},
  { title:'Academic & Organization', icon:GraduationCap, children:[['Departments','/app/departments'],['Batches','/app/batches'],['Majors','/app/majors'],['Alumni','/app/alumni'],['Alumni Office','/app/alumni-office']]},
  { title:'Groups & Security', icon:Shield, children:[['Groups','/app/groups'],['Group Members','/app/group-members'],['Roles','/app/roles'],['Permissions','/app/permissions'],['Role Permissions','/app/role-permissions'],['User Roles','/app/user-roles']]},
  { title:'Content Feed', icon:Newspaper, children:[['Feeds','/app/content-feeds'],['Feed Comments','/app/feed-comments'],['Reports','/app/report-feeds'],['Reactions','/app/feed-reactions']]},
  { title:'Reports', icon:BarChart3, to:'/app/reports' },
  { title:'Settings', icon:Settings, to:'/app/settings' },
];

function LinkItem({ item }) { const Icon=item.icon; if(item.to) return <NavLink to={item.to} className={({isActive})=>`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition ${isActive?'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25':'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}><Icon className="h-5 w-5"/>{item.title}</NavLink>;
return <details className="group" open><summary className="flex cursor-pointer list-none items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"><Icon className="h-5 w-5"/>{item.title}</summary><div className="ml-8 mt-1 grid gap-1 border-l border-slate-200 pl-3 dark:border-slate-800">{item.children.map(([label,to])=><NavLink key={to} to={to} className={({isActive})=>`rounded-xl px-3 py-2 text-sm transition ${isActive?'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300':'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}>{label}</NavLink>)}</div></details> }
function SidebarContent() { const close=useUiStore(s=>s.closeSidebar); return <div className="flex h-full flex-col gap-4 p-4"><div className="flex items-center justify-between px-2"><div><h2 className="text-lg font-black text-slate-950 dark:text-white">AlumniPro</h2><p className="text-xs text-slate-500">Admin Management</p></div><button onClick={close} className="lg:hidden"><X/></button></div><nav className="grid gap-1 overflow-y-auto pb-8">{sections.map((item)=><LinkItem key={item.title} item={item}/>)}</nav></div> }
export function Sidebar(){ const open=useUiStore(s=>s.sidebarOpen); const close=useUiStore(s=>s.closeSidebar); return <><aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-slate-200 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 lg:block"><SidebarContent/></aside><AnimatePresence>{open&&<><motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={close} className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"/><motion.aside initial={{x:-300}} animate={{x:0}} exit={{x:-300}} className="fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-slate-950 lg:hidden"><SidebarContent/></motion.aside></>}</AnimatePresence></> }
