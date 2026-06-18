import { useState } from "react";
import { Download, X, CheckSquare, Square, FileArchive } from "lucide-react";

const images = [
  "IMG_2861.JPG", "IMG_3845.JPG", "IMG_3846.JPG", "IMG_3853.JPG",
  "IMG_3855.JPG", "IMG_3856.JPG", "IMG_3857.JPG", "IMG_3858.JPG",
  "IMG_3860.JPG", "IMG_4491.JPG", "IMG_4895.JPG", "IMG_4898.JPG",
  "IMG_5049.JPG", "IMG_5349.JPG", "IMG_5715.JPG", "IMG_5855.JPG",
  "IMG_6786.JPG", "IMG_7110.JPG", "IMG_7137.JPG", "IMG_7572.JPG",
  "IMG_7678.JPG", "IMG_7824.JPG", "IMG_7894.JPG", "IMG_7901.JPG",
  "image.png",
];

// Resolves to "/alumni-admin-system/images/IMG_xxx.JPG" automatically
// Works in both dev and production regardless of the base path
const imgUrl = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;

export default function PictureDownloadModal({ open, onClose }) {
  const [selected, setSelected] = useState([]);
  const [zipping, setZipping] = useState(false);

  if (!open) return null;

  const toggle = (img) =>
    setSelected((prev) =>
      prev.includes(img) ? prev.filter((x) => x !== img) : [...prev, img]
    );

  const selectAll = () => setSelected([...images]);
  const clearAll  = () => setSelected([]);

  const downloadSelected = () => {
    if (selected.length === 0) {
      alert("Please select at least one image first.");
      return;
    }
    selected.forEach((img, index) => {
      setTimeout(() => {
        const a = document.createElement("a");
        a.href     = imgUrl(img);
        a.download = img;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, index * 200);
    });
  };

  const downloadAsZip = async () => {
    if (selected.length === 0) {
      alert("Please select at least one image first.");
      return;
    }
    setZipping(true);
    try {
      if (!window.JSZip) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
          script.onload  = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      const zip = new window.JSZip();
      await Promise.all(
        selected.map(async (img) => {
          const res  = await fetch(imgUrl(img));
          const blob = await res.blob();
          zip.file(img, blob);
        })
      );
      const content = await zip.generateAsync({ type: "blob" });
      const a = document.createElement("a");
      a.href     = URL.createObjectURL(content);
      a.download = "alumni-photos.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    } catch (err) {
      console.error("ZIP failed:", err);
      alert("ZIP download failed. Try downloading individually instead.");
    } finally {
      setZipping(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="flex h-[90vh] w-full max-w-5xl flex-col rounded-2xl bg-white dark:bg-slate-950 shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 dark:border-slate-800 px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold">Download Pictures</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {selected.length} of {images.length} selected
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-100 dark:bg-slate-900 p-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* ACTION BAR */}
        <div className="flex shrink-0 flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 px-5 py-3">
          <button
            onClick={selectAll}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-3 py-2 text-sm text-white transition-colors"
          >
            <CheckSquare size={16} />
            Select All
          </button>

          <button
            onClick={clearAll}
            className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2 text-sm transition-colors"
          >
            <Square size={16} />
            Clear
          </button>

          <button
            onClick={downloadSelected}
            disabled={selected.length === 0}
            className="flex items-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed px-3 py-2 text-sm text-white transition-colors"
          >
            <Download size={16} />
            Download ({selected.length})
          </button>

          <button
            onClick={downloadAsZip}
            disabled={selected.length === 0 || zipping}
            className="flex items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed px-3 py-2 text-sm text-white transition-colors"
          >
            <FileArchive size={16} />
            {zipping ? "Zipping…" : `ZIP (${selected.length})`}
          </button>
        </div>

        {/* IMAGE GRID */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {images.map((img) => {
              const isActive = selected.includes(img);
              return (
                <div
                  key={img}
                  onClick={() => toggle(img)}
                  className={`
                    relative cursor-pointer rounded-xl border-2 overflow-hidden transition-all
                    ${isActive
                      ? "border-indigo-500 ring-2 ring-indigo-300 dark:ring-indigo-700"
                      : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
                    }
                  `}
                >
                  {/* Checkbox badge */}
                  <div className={`
                    absolute top-2 right-2 z-10 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all
                    ${isActive
                      ? "bg-indigo-600 border-indigo-600"
                      : "bg-white/70 border-slate-400 dark:bg-slate-800/70"
                    }
                  `}>
                    {isActive && (
                      <svg viewBox="0 0 12 12" className="h-3 w-3 text-white fill-none stroke-current stroke-2">
                        <polyline points="2,6 5,9 10,3" />
                      </svg>
                    )}
                  </div>

                  {/* Image */}
                  <img
                    src={imgUrl(img)}
                    alt={img}
                    loading="lazy"
                    className="h-28 w-full object-cover bg-slate-100 dark:bg-slate-800 block"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />

                  {/* Fallback placeholder */}
                  <div
                    style={{ display: "none" }}
                    className="h-28 w-full items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs flex-col gap-1"
                  >
                    <Download size={20} className="opacity-40" />
                    <span>No preview</span>
                  </div>

                  {/* Label */}
                  <div className="px-2 py-1.5 bg-white dark:bg-slate-900">
                    <p className="truncate text-xs text-slate-500">{img}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}