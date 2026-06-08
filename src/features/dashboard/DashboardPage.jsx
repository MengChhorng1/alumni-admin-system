import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Users,
  CalendarDays,
  Briefcase,
  HeartHandshake,
  UsersRound,
  Newspaper,
} from "lucide-react";
import { PageHeader } from "../../components/layout/PageHeader.jsx";
const stats = [
  ["Total Users", "12,840", Users, "from alumni network"],
  ["Total Events", "284", CalendarDays, "active and archived"],
  ["Total Jobs", "1,024", Briefcase, "career opportunities"],
  ["Total Donations", "$84.2k", HeartHandshake, "campaign revenue"],
  ["Total Groups", "98", UsersRound, "community groups"],
  ["Content Feeds", "4,219", Newspaper, "posts and media"],
];
const growth = Array.from({ length: 12 }, (_, i) => ({
  month: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][i],
  users: 400 + i * 80 + Math.round(Math.sin(i) * 120),
  donations: 200 + i * 55,
}));
const recent = [
  "New alumni registration: Sok Dara",
  "Event approved: Career Fair 2026",
  "Donation campaign reached 70%",
  "New job posted by TechLabs",
  "Group report resolved",
];
export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Analytics Dashboard"
        description="Modern overview of users, events, jobs, donations, content, and system activity."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map(([label, value, Icon, desc], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="rounded-[1.5rem] bg-gradient-to-br from-white to-indigo-50 p-5 shadow-sm ring-1 ring-slate-200 dark:from-slate-900 dark:to-indigo-950/30 dark:ring-slate-800"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-600 text-white">
                <Icon />
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                +12%
              </span>
            </div>
            <p className="mt-5 text-sm text-slate-500">{label}</p>
            <h3 className="mt-1 text-3xl font-black text-slate-950 dark:text-white">
              {value}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <section className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 xl:col-span-2">
          <h2 className="mb-4 font-bold">User Growth</h2>
          <div className="h-80">
            <ResponsiveContainer>
              <AreaChart data={growth}>
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#4f46e5"
                  fill="url(#g)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
        <section className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="mb-4 font-bold">Recent Activity</h2>
          <div className="grid gap-3">
            {recent.map((item, i) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 p-3 text-sm dark:bg-slate-950"
              >
                <span className="mr-2 font-bold text-indigo-500">0{i + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 xl:col-span-3">
          <h2 className="mb-4 font-bold">Donation Revenue</h2>
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={growth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="donations" fill="#06b6d4" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
  );
}
