import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { PageHeader } from "../../components/layout/PageHeader.jsx";
import { DataTable } from "../../components/tables/DataTable.jsx";
import { FormModal } from "../../components/forms/FormModal.jsx";
import { mockApi } from "../../services/mockApi.js";

export function CrudPage({ config }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const load = async () => {
    setLoading(true);
    setRows(await mockApi.list(config));
    setLoading(false);
  };
  useEffect(() => {
    load();
  }, [config.slug]);
  const save = async (data) => {
    editing
      ? await mockApi.update(config, editing.id, data)
      : await mockApi.create(config, data);
    toast.success(editing ? "Record updated" : "Record created");
    setOpen(false);
    setEditing(null);
    load();
  };
  const remove = async (ids) => {
    await mockApi.remove(config, ids);
    toast.success("Record deleted");
    load();
  };
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      <PageHeader title={config.title} description={config.description} />
      {loading ? (
        <div className="grid gap-3 rounded-[1.5rem] bg-white p-4 dark:bg-slate-900">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton h-12 rounded-2xl" />
          ))}
        </div>
      ) : (
        <DataTable
          rows={rows}
          columns={config.columns}
          onAdd={() => {
            setEditing(null);
            setOpen(true);
          }}
          onEdit={(row) => {
            setEditing(row);
            setOpen(true);
          }}
          onDelete={remove}
        />
      )}
      <FormModal
        open={open}
        onClose={() => setOpen(false)}
        title={`${editing ? "Edit" : "Create"} ${config.title}`}
        columns={config.columns}
        initialData={editing}
        onSubmit={save}
      />
    </motion.div>
  );
}
