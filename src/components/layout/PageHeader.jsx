import { motion } from 'framer-motion';
export function PageHeader({ title, description, action }) {
  return <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="text-sm font-medium text-indigo-500">Alumni Admin</p><h1 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h1><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p></div>{action}</motion.div>;
}
