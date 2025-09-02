import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#001D39] text-white px-6 text-center">
      <h1 className="text-4xl font-extrabold">Tack för din förfrågan!</h1>
      <p className="mt-4 max-w-xl text-lg text-white/80">
        Vi har tagit emot ditt meddelande och återkommer till dig inom 1–2 arbetsdagar.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-[var(--brand)] px-6 py-3 font-semibold text-white shadow hover:brightness-95"
      >
        Tillbaka till startsidan
      </Link>
    </main>
  );
}
