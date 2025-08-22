import React, { useState } from "react";
import { FileText, Mail } from "lucide-react";

/**
 * Riddle You – Terms of Use Page (Användarvillkor)
 * Tech: React + Tailwind CSS
 * Notes:
 *  - Drop this component into your app or Next.js.
 *  - Tailwind must be configured in your project.
 *  - Swedish & English with a language toggle.
 *  - Effective date: 2025-08-22
 */

export default function RiddleYouTermsOfUse() {
  const [lang, setLang] = useState("sv");

  const EffectiveDate = "2025-08-22"; // YYYY-MM-DD
  const appName = "Riddle You";
  const company = "P&J Digital";
  const contactEmail = "riddleyouinfo@gmail.com";
  const governingLaw = "Sweden"; // Adjust if needed

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white p-3 shadow">
              <FileText className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {appName} – Terms of Use
              </h1>
              <p className="mt-1 text-sm text-gray-600">{company}</p>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-2 rounded-full bg-white p-1 shadow">
            <button
              onClick={() => setLang("sv")}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition ${
                lang === "sv"
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-pressed={lang === "sv"}
            >
              Svenska
            </button>
            <button
              onClick={() => setLang("en")}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition ${
                lang === "en"
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-pressed={lang === "en"}
            >
              English
            </button>
          </div>
        </header>

        {/* Meta */}
        <section className="mt-6">
          <div className="rounded-2xl bg-white p-5 shadow">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">
                  App
                </dt>
                <dd className="text-sm font-medium text-gray-900">{appName}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">
                  Provider
                </dt>
                <dd className="text-sm font-medium text-gray-900">{company}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">
                  Effective Date
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  {EffectiveDate}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">
                  Governing Law
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  {governingLaw}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Content */}
        <article className="prose prose-gray mt-8 max-w-none prose-h2:mt-10 prose-h3:mt-8">
          {lang === "sv" ? (
            <SwedishTerms
              appName={appName}
              company={company}
              contactEmail={contactEmail}
              EffectiveDate={EffectiveDate}
              governingLaw={governingLaw}
            />
          ) : (
            <EnglishTerms
              appName={appName}
              company={company}
              contactEmail={contactEmail}
              EffectiveDate={EffectiveDate}
              governingLaw={governingLaw}
            />
          )}
        </article>

        {/* Footer / Contact */}
        <footer className="mt-12">
          <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow">
            <Mail className="h-5 w-5" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium">Questions?</p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm text-gray-700 underline underline-offset-4"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

/** Swedish Terms **/
function SwedishTerms({
  appName,
  company,
  contactEmail,
  EffectiveDate,
  governingLaw,
}) {
  return (
    <div>
      <h2>Användarvillkor</h2>
      <p>
        Dessa Användarvillkor reglerar din användning av{" "}
        <strong>{appName}</strong>, som tillhandahålls av <strong>{company}</strong>.
        Genom att installera, skapa ett konto eller använda Applikationen
        accepterar du villkoren.
      </p>

      <h3>1. Behörighet</h3>
      <p>
        Du måste vara minst 13 år gammal för att använda Applikationen. Om du är
        mellan 13–18 år krävs vårdnadshavares samtycke.
      </p>

      <h3>2. Konto och säkerhet</h3>
      <ul>
        <li>För vissa funktioner behöver du skapa ett konto.</li>
        <li>
          Du ansvarar för att hålla dina inloggningsuppgifter hemliga och för all
          aktivitet som sker via ditt konto.
        </li>
        <li>
          Meddela oss omedelbart vid obehörig användning eller säkerhetsintrång.
        </li>
      </ul>

      <h3>3. Tillåten användning</h3>
      <p>Du förbinder dig att inte:</p>
      <ul>
        <li>använda appen i strid med lag eller tredje parts rättigheter,</li>
        <li>kringgå säkerhet eller störa driften,</li>
        <li>ladda upp skadlig kod, skräppost eller olagligt innehåll,</li>
        <li>automatiskt skrapa eller samla in innehåll utan medgivande.</li>
      </ul>

      <h3>4. Innehåll och rättigheter</h3>
      <p>
        Allt innehåll och programvara ägs av {company} eller dess licensgivare och
        skyddas av upphovsrätt. Du får en begränsad licens att använda
        Applikationen för personligt bruk.
      </p>

      <h3>5. Annonser och tredjepartstjänster</h3>
      <p>
        Applikationen visar annonser via AdMob och kan länka till tredjepartstjänster.
        {company} ansvarar inte för tredje parts innehåll eller praxis.
      </p>

      <h3>6. Avgifter och köp</h3>
      <p>
        Eventuella köp eller avgifter gäller enligt de villkor som visas i butiken
        eller appen. Skatter kan tillkomma.
      </p>

      <h3>7. Uppsägning</h3>
      <p>
        Vi kan avsluta din åtkomst vid brott mot villkoren. Du kan avsluta genom
        att avinstallera eller radera ditt konto (kontakta oss).
      </p>

      <h3>8. Friskrivningar</h3>
      <p>
        Applikationen tillhandahålls i befintligt skick ("AS IS") utan garantier.
      </p>

      <h3>9. Ansvarsbegränsning</h3>
      <p>
        {company} ansvarar inte för indirekta eller följdskador eller förlust av
        data eller intäkter.
      </p>

      <h3>10. Skadeslöshet</h3>
      <p>
        Du samtycker till att hålla {company} skadeslösa från krav eller kostnader
        som uppstår till följd av din användning.
      </p>

      <h3>11. Ändringar</h3>
      <p>
        Villkoren kan uppdateras. Fortsatt användning innebär att du accepterar
        ändringarna.
      </p>

      <h3>12. Tillämplig lag</h3>
      <p>
        Dessa Villkor styrs av lagarna i {governingLaw}. Tvister avgörs av behörig
        domstol i {governingLaw}.
      </p>

      <p>
        <strong>Gäller från:</strong> {EffectiveDate}
      </p>

      <h3>Kontakt</h3>
      <p>
        Frågor? Kontakta oss på{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </div>
  );
}

/** English Terms **/
function EnglishTerms({
  appName,
  company,
  contactEmail,
  EffectiveDate,
  governingLaw,
}) {
  return (
    <div>
      <h2>Terms of Use</h2>
      <p>
        These Terms govern your use of <strong>{appName}</strong>, provided by{" "}
        <strong>{company}</strong>. By using the Application you agree to them.
      </p>

      <h3>1. Eligibility</h3>
      <p>
        You must be at least 13 years old to use the Application. If 13–18, guardian
        consent is required.
      </p>

      <h3>2. Account and Security</h3>
      <ul>
        <li>Some features require an account.</li>
        <li>
          You are responsible for your credentials and all activity under your
          account.
        </li>
        <li>Notify us of unauthorized use.</li>
      </ul>

      <h3>3. Acceptable Use</h3>
      <ul>
        <li>Do not violate law or rights.</li>
        <li>Do not disrupt or hack security.</li>
        <li>Do not upload illegal or harmful content.</li>
        <li>No scraping or automation without consent.</li>
      </ul>

      <h3>4. Content & IP</h3>
      <p>
        Content is owned by {company} or licensors. License is limited and personal.
      </p>

      <h3>5. Ads & Third-Party Services</h3>
      <p>
        The app shows ads via AdMob and may link externally. {company} is not
        responsible for third-party practices.
      </p>

      <h3>6. Fees</h3>
      <p>Any purchases are subject to store/app terms. Taxes may apply.</p>

      <h3>7. Termination</h3>
      <p>
        We may suspend or terminate access for violations. You may terminate by
        uninstalling or deleting your account.
      </p>

      <h3>8. Disclaimers</h3>
      <p>The app is provided "AS IS" with no warranties.</p>

      <h3>9. Limitation of Liability</h3>
      <p>
        {company} is not liable for indirect or consequential damages or loss of
        data/revenue.
      </p>

      <h3>10. Indemnification</h3>
      <p>
        You agree to indemnify {company} from claims and expenses due to your
        usage.
      </p>

      <h3>11. Changes</h3>
      <p>
        Terms may be updated. Continued use means acceptance.
      </p>

      <h3>12. Governing Law</h3>
      <p>
        Governed by laws of {governingLaw}. Disputes resolved in {governingLaw}.
      </p>

      <p>
        <strong>Effective Date:</strong> {EffectiveDate}
      </p>

      <h3>Contact</h3>
      <p>
        Questions? Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </div>
  );
}
