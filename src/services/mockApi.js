const delay = (ms = 250) => new Promise((r) => setTimeout(r, ms));
const statuses = ["active", "pending", "blocked", "completed"];
const store = new Map();

function seed(config) {
  if (store.has(config.slug)) return store.get(config.slug);
  const rows = Array.from({ length: 24 }, (_, i) => {
    const row = {};
    config.columns.forEach((c) => {
      if (c === "id") row[c] = i + 1;
      else if (c.includes("email")) row[c] = `user${i + 1}@alumni.edu`;
      else if (
        c.includes("date") ||
        c.includes("_at") ||
        c.includes("deadline")
      )
        row[c] = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
      else if (c.includes("status")) row[c] = statuses[i % statuses.length];
      else if (c.startsWith("is_")) row[c] = i % 2 === 0;
      else if (c.includes("amount")) row[c] = (i + 1) * 125;
      else row[c] = `${c.replaceAll("_", " ")} ${i + 1}`;
    });
    return row;
  });
  store.set(config.slug, rows);
  return rows;
}
export const mockApi = {
  async list(config) {
    await delay();
    return seed(config);
  },
  async create(config, data) {
    await delay();
    const rows = seed(config);
    const row = { id: Date.now(), ...data };
    store.set(config.slug, [row, ...rows]);
    return row;
  },
  async update(config, id, data) {
    await delay();
    const rows = seed(config).map((r) =>
      String(r.id) === String(id) ? { ...r, ...data } : r,
    );
    store.set(config.slug, rows);
    return rows.find((r) => String(r.id) === String(id));
  },
  async remove(config, ids) {
    await delay();
    const set = new Set(ids.map(String));
    store.set(
      config.slug,
      seed(config).filter((r) => !set.has(String(r.id))),
    );
    return true;
  },
};
