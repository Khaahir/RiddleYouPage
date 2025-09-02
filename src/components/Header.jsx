import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

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
    { label: "Om", hash: "/#om" },
    { label: "Hur", hash: "/#hur" },
    { label: "Event", to: "/events" }, // sida
    { label: "Kontakt", hash: "/#kontakt" },
    { label: "FAQ", hash: "/faq" }
  ];

  const Item = (item, extra = "") =>
    item.to ? (
      <Link
        key={item.label}
        to={item.to}
        onClick={() => setOpen(false)}
        className={`rounded-md ${extra} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60`}
      >
        {item.label}
      </Link>
    ) : (
      <HashLink
        key={item.label}
        to={item.hash}
        smooth
        onClick={() => setOpen(false)}
        className={`rounded-md ${extra} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60`}
      >
        {item.label}
      </HashLink>
    );

  return (
    <header className="bg-[#001627] text-white top-0 z-40">
      <div className="mx-auto flex items-center justify-between px-4 py-3">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2"
        >
          <img className="flex-2 w-30" src="riddleUlogo.png" alt="logo" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((it) => Item(it, "text-lg px-2"))}
        </nav>

        {/* Mobile menu button */}
        <button
          ref={btnRef}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
        >
          {!open ? (
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-3 mb-3 rounded-2xl bg-white/10 backdrop-blur px-3 py-2 ring-1 ring-white/10">
          {navItems.map((it) =>
            Item(it, "block w-full px-4 py-3 text-base rounded-xl")
          )}
        </nav>
      </div>
    </header>
  );
}
