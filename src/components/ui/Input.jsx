import clsx from 'clsx';
export function Input({ label, error, className='', ...props }) {
  return <label className="block"><span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span><input className={clsx('w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-950', className)} {...props}/>{error && <span className="mt-1 block text-xs text-rose-500">{error}</span>}</label>;
}
