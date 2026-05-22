import { Inbox } from 'lucide-react';
export function EmptyState({ title = 'No data found', description = 'Try changing search or filters.' }) {
  return <div className="grid place-items-center rounded-3xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700"><Inbox className="mb-3 h-10 w-10 text-slate-400"/><h3 className="font-semibold text-slate-800 dark:text-white">{title}</h3><p className="text-sm text-slate-500 dark:text-slate-400">{description}</p></div>;
}
