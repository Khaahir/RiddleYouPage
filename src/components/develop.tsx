import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

// En enda komponent: visar en modal med texten "Under utveckling" som kan stängas med ett kryss.
export default function UnderDevelopmentModal() {
  const [open, setOpen] = useState(true);
  const containerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleBackdrop = (e) => {
    if (e.target === containerRef.current) setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={containerRef}
          onMouseDown={handleBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="udm-title"
            aria-describedby="udm-desc"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
          >
            <button
              ref={closeRef}
              onClick={() => setOpen(false)}
              aria-label="Stäng"
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-amber-500" aria-hidden="true" />
                <h2 id="udm-title" className="text-xl font-semibold">
                  Under utveckling
                </h2>
              </div>
              <p id="udm-desc" className="text-gray-600">
                Den här hemsidan är under utveckling.... 
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
