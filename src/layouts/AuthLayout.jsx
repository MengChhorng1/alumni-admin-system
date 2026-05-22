import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
export function AuthLayout() { return <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white"><div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl"/><div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"/><motion.div initial={{opacity:0,scale:.98}} animate={{opacity:1,scale:1}} className="relative z-10 grid min-h-screen place-items-center p-4"><Outlet /></motion.div></main>; }
