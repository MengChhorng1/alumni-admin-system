const colors = {
  active:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  pending:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  blocked: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  completed: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
};
export function StatusBadge({ value = "active" }) {
  const key = String(value).toLowerCase();
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${colors[key] || colors.active}`}
    >
      {value}
    </span>
  );
}
