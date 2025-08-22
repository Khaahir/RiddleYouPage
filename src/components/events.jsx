import React, { useState } from "react";

export default function EventPage({ contactHref = "#contact" }) {
  const [status, setStatus] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const hp = form.elements.namedItem("website")?.value;
    if (hp) return; // honeypot

    if (!form.checkValidity()) {
      setStatus("Kolla markerade fält och försök igen.");
      return;
    }

    const formData = new FormData(form);
    if (selectedPackage) formData.set("package", selectedPackage);

    console.log("Event form payload →", Object.fromEntries(formData.entries()));
    setStatus("Tack! Vi återkommer inom 1–2 arbetsdagar.");
    form.reset();
    setSelectedPackage("");
  }

  return (
    <main className="min-h-screen bg-[#001D39] text-white">
      <style>{`:root{--brand:#D46A1D;}`}</style>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Event & Skräddarsydda Skattjakter
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Gör nästa kickoff, födelsedag eller friluftsdag oförglömlig med en
              helt anpassad upplevelse  tema, frågor, rutter och avatarer byggda efter era önskemål.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={contactHref}
                className="rounded-2xl bg-[var(--brand)] px-6 py-3 font-semibold text-black/90 shadow hover:brightness-95"
              >
                Boka rådgivning
              </a>
              <a
                href="#packages"
                className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white/90 hover:bg-white/5"
              >
                Se paket
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Privata fester", body: "30, 40, 50-årsdagar – personliga teman och quiz." },
            { title: "Företagsevent", body: "Kickoff & teambuilding som stärker samarbetet." },
            { title: "Skolor & föreningar", body: "Lärorika uppdrag i stad eller natur." },
            { title: "Kommuner & organisationer", body: "Aktiviteter för större grupper och friluftsdagar." },
            { title: "Barnkalas", body: "Lekfulla skattjakter med barnvänliga teman och enkla uppdrag." },
            { title: "Friluftsdagar", body: "Perfekt för skolor och föreningar som vill ha en utomhusaktivitet." },
            { title: "Konferens", body: "Kombinera er konferens med en kreativ teambuilding-aktivitet." },
            { title: "Turism & besökare", body: "Unik sightseeing-upplevelse med interaktiva moment." },
          ].map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-[var(--brand)]">{it.title}</h3>
              <p className="mt-1 text-white/80">{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Så fungerar det</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Vi skräddarsyr tema, rutt och frågor efter era mål.",
              "Endast ert sällskap får tillgång till eventet i appen.",
              "Bilder, ledtrådar, quiz och avatarer allt är möjligt.",
              "Support före och under eventet.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand)]" />
                <span className="text-white/85">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <h2 className="text-center text-3xl font-extrabold">Paket</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-white/75">
          Alla paket kan skräddarsys efter era behov  tema, frågor, plats och upplägg tar vi fram tillsammans.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Barnkalas",
              meta: "Upp till 15 barn • 45–60 min",
              features: [
                "Barnvänliga teman (pirater, superhjältar, sagor)",
                "5-10 roliga uppdrag & quizfrågor",
                "Enkla ledtrådar & bilder",
                "Diplom till alla barn",
              ],
              details:
                "Perfekt för yngre barn som älskar att leka och utforska. Vi anpassar svårighetsgrad och tema efter ålder.",
              badge: "Nyhet!",
            },
            {
              name: "Bas",
              meta: "Upp till 20 deltagare • 60–90 min",
              features: [
                "Färdig rutt i stad eller natur",
                "10–15 frågor/utmaningar",
                "Anpassat tema (t.ex. födelsedag)",
                "Digital resultattavla",
              ],
              details: "Passar mindre grupper som vill ha en rolig och smidig aktivitet utan större förberedelser.",
              badge: "Mest populär",
            },
            {
              name: "Standard",
              meta: "Upp till 50 deltagare • 90–120 min",
              features: [
                "Skräddarsydd rutt",
                "20–25 frågor med bild & quiz",
                "Personliga inslag (kollega-/tema)",
                "Avatarer & anpassad grafik",
              ],
              details:
                "Rekommenderas för företag eller större grupper där man vill ha extra personliga inslag och högre interaktivitet.",
            },
          ].map((card) => (
            <div
              key={card.name}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm"
            >
              {card.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-[var(--brand)]/90 px-3 py-1 text-xs font-bold text.black/90">
                  {card.badge}
                </span>
              )}
              <h3 className="text-2xl font-bold text-[var(--brand)]">{card.name}</h3>
              <p className="text-sm text.white/70">{card.meta}</p>
              <ul className="mt-4 space-y-2">
                {card.features.map((f) => (
                  <li key={f} className="flex gap-2 text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === card.name ? null : card.name)}
                  className="text-[var(--brand)] underline-offset-4 hover:underline"
                >
                  {expanded === card.name ? "Visa mindre" : "Se detaljer"}
                </button>
                <a
                  href={contactHref}
                  onClick={() => setSelectedPackage(card.name)}
                  className="rounded-xl border border-white/20 px-4 py-2 font-semibold text-white/90 hover:bg-white/5"
                >
                  Välj {card.name}
                </a>
              </div>
              {expanded === card.name && (
                <div className="mt-4 rounded-xl bg-[#0E1C1E]/60 p-4 text-white/80">{card.details}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold">Skicka en förfrågan</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/75">
            Vi återkommer inom 1–2 arbetsdagar med nästa steg och offert.
          </p>
        </div>

        <form
          className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6"
          onSubmit={onSubmit}
          noValidate
        >
          {/* honeypot */}
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Lämna tomt
              <input type="text" name="website" />
            </label>
          </div>

          {/* Namn & företag */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Namn *" id="name">
              <input id="name" name="name" required className={inputCls} autoComplete="name" />
            </Field>
            <Field label="Företag/organisation" id="company">
              <input id="company" name="company" className={inputCls} autoComplete="organization" />
            </Field>
          </div>

          {/* E-post & telefon */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="E-post *" id="email">
              <input id="email" name="email" type="email" required className={inputCls} autoComplete="email" />
            </Field>
            <Field label="Telefon" id="phone">
              <input id="phone" name="phone" type="tel" className={inputCls} autoComplete="tel" />
            </Field>
          </div>

          {/* Valt paket */}
          <Field label="Valt paket" id="package">
            <input
              id="package"
              name="package"
              className={inputCls}
              readOnly
              value={selectedPackage}
              placeholder="Ingen vald ännu"
            />
          </Field>

          {/* Event-typ */}
          <Field label="Typ av event (välj gärna flera)" id="event_type">
            <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Privat fest/födelsedag",
                "Företagsevent/teambuilding",
                "Skola/förening",
                "Kommun/organisation",
                "Barnkalas",
                "Annat",
              ].map((v) => (
                <label key={v} className="flex items-center gap-2 text-white/90">
                  <input
                    type="checkbox"
                    name="event_type[]"
                    value={v}
                    className="h-4 w-4 rounded border-white/20 bg-transparent"
                  />
                  <span>{v}</span>
                </label>
              ))}
            </div>
          </Field>

          {/* Datum & plats */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Datum (eller period)" id="date">
              <input id="date" name="date" placeholder="t.ex. 12 okt eller v.42" className={inputCls} />
            </Field>
            <Field label="Plats/stad" id="location">
              <input id="location" name="location" placeholder="t.ex. Stockholm, utomhus i park" className={inputCls} />
            </Field>
          </div>

          {/* Antal deltagare & budget */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Antal deltagare (ca)" id="participants">
              <input
                id="participants"
                name="participants"
                type="number"
                min={1}
                placeholder="t.ex. 25"
                className={inputCls}
              />
            </Field>
            <Field label="Budgetnivå" id="budget">
              <select id="budget" name="budget" className={inputCls}>
                <option>Öppen för förslag</option>
                <option>Upp till 10 000 kr</option>
                <option>10 000–30 000 kr</option>
                <option>30 000–60 000 kr</option>
                <option>60 000+ kr</option>
              </select>
            </Field>
          </div>

          {/* Extra önskemål */}
          <Field label="Övriga önskemål" id="message">
            <textarea id="message" name="message" rows={4} className={inputCls} placeholder="Beskriv er idé..." />
          </Field>

          {/* Samtycke */}
          <label className="flex items-center gap-2 text-white/80">
            <input
              type="checkbox"
              name="consent"
              required
              className="h-4 w-4 rounded border-white/20 bg-transparent"
            />
            <span>Jag godkänner att mina uppgifter används för att kontakta mig.</span>
          </label>

          {/* Status & knapp */}
          {status && <p className="text-sm text-white/70">{status}</p>}
          <button
            type="submit"
            className="rounded-xl bg-[var(--brand)] px-6 py-3 font-semibold text-black/90 shadow hover:brightness-95"
          >
            Skicka förfrågan
          </button>
        </form>
      </section>
    </main>
  );
}

function Field({ label, id, children }) {
  return (
    <label htmlFor={id} className="block text-sm font-medium text-white/90">
      <span>{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/20 bg-transparent px-3 py-2 text-white placeholder-white/40 focus:border-[var(--brand)] focus:ring-[var(--brand)]";
