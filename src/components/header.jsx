import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Stäng menyn på Escape och klick utanför
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const navItems = [
    { label: "Om", href: "#om" },
    { label: "Vart", href: "#vart" },
    { label: "Event", href: "#event" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="bg-[#001D39] text-white">
      {/* Top bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <img className="h-30 w-auto sm:h-" src="riddleUlogo.png" alt="logo" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-30 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg rounded-md px-1 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          ref={btnRef}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
        >
          <span className="sr-only">Meny</span>
          {/* Hamburgarikonen */}
          {!open ? (
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            // Stäng-ikon
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-3 mb-3 rounded-2xl bg-white/10 backdrop-blur px-3 py-2 ring-1 ring-white/10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px- py-3 text-base hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
