import React, { useState } from "react";
import { FileText, Scale, Mail } from "lucide-react";

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
  const [lang, setLang] = useState<"sv" | "en">("sv");

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
              <h1 className="text-3xl font-bold tracking-tight">{appName} – Terms of Use</h1>
              <p className="mt-1 text-sm text-gray-600">{company}</p>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-2 rounded-full bg-white p-1 shadow">
            <button
              onClick={() => setLang("sv")}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition ${
                lang === "sv" ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-pressed={lang === "sv"}
            >
              Svenska
            </button>
            <button
              onClick={() => setLang("en")}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition ${
                lang === "en" ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
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
                <dt className="text-xs uppercase tracking-wide text-gray-500">App</dt>
                <dd className="text-sm font-medium text-gray-900">{appName}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">Provider</dt>
                <dd className="text-sm font-medium text-gray-900">{company}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">Effective Date</dt>
                <dd className="text-sm font-medium text-gray-900">{EffectiveDate}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">Governing Law</dt>
                <dd className="text-sm font-medium text-gray-900">{governingLaw}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Content */}
        <article className="prose prose-gray mt-8 max-w-none prose-h2:mt-10 prose-h3:mt-8">
          {lang === "sv" ? (
            <SwedishTerms appName={appName} company={company} contactEmail={contactEmail} EffectiveDate={EffectiveDate} governingLaw={governingLaw} />
          ) : (
            <EnglishTerms appName={appName} company={company} contactEmail={contactEmail} EffectiveDate={EffectiveDate} governingLaw={governingLaw} />
          )}
        </article>

        {/* Footer / Contact */}
        <footer className="mt-12">
          <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow">
            <Mail className="h-5 w-5" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium">Questions?</p>
              <a href={`mailto:${contactEmail}`} className="text-sm text-gray-700 underline underline-offset-4">
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
function SwedishTerms({ appName, company, contactEmail, EffectiveDate, governingLaw }: { appName: string; company: string; contactEmail: string; EffectiveDate: string; governingLaw: string }) {
  return (
    <div>
      <h2>Användarvillkor</h2>
      <p>
        Dessa Användarvillkor (”Villkoren”) reglerar din användning av <strong>{appName}</strong> (”Applikationen”), som tillhandahålls av <strong>{company}</strong>. Genom att installera, skapa ett konto eller använda Applikationen accepterar du Villkoren.
      </p>

      <h3>1. Behörighet</h3>
      <p>Du måste vara minst 13 år gammal för att använda Applikationen. Om du är mellan 13–18 år krävs vårdnadshavares samtycke.</p>

      <h3>2. Konto och säkerhet</h3>
      <ul>
        <li>För att använda vissa funktioner behöver du skapa ett konto med e‑post och lösenord.</li>
        <li>Du ansvarar för att hålla dina inloggningsuppgifter hemliga och för all aktivitet som sker via ditt konto.</li>
        <li>Meddela oss omedelbart vid obehörig användning eller säkerhetsintrång.</li>
      </ul>

      <h3>3. Tillåten användning</h3>
      <p>Du förbinder dig att inte:</p>
      <ul>
        <li>använda Applikationen i strid med lag eller tredje parts rättigheter,</li>
        <li>försöka kringgå säkerhet eller störa driften,</li>
        <li>ladda upp skadlig kod, skräppost eller innehåll som är olagligt, kränkande eller diskriminerande,</li>
        <li>automatiskt skrapa, samla in eller indexera innehåll utan skriftligt medgivande.</li>
      </ul>

      <h3>4. Innehåll och immateriella rättigheter</h3>
      <ul>
        <li>Allt innehåll och programvara i Applikationen ägs av {company} eller dess licensgivare och skyddas av upphovsrätt.</li>
        <li>Du får en begränsad, icke-exklusiv, icke-överförbar licens att använda Applikationen för personligt bruk.</li>
      </ul>

      <h3>5. Annonser och tredjepartstjänster</h3>
      <p>Applikationen visar annonser via AdMob och kan länka till tredjepartstjänster. {company} ansvarar inte för innehåll, riktighet eller praxis hos tredje part. Din användning av sådana tjänster kan omfattas av deras villkor och integritetspolicyer.</p>

      <h3>6. Avgifter och köp</h3>
      <p>Om köp, prenumerationer eller andra avgifter införs gäller de priser och villkor som visas i butiken eller i Applikationen vid köptillfället (i förekommande fall). Skatter kan tillkomma.</p>

      <h3>7. Uppsägning</h3>
      <p>Vi kan när som helst stänga av eller avsluta din åtkomst till Applikationen vid brott mot Villkoren eller om säkerhetsskäl föreligger. Du kan avsluta genom att avinstallera Applikationen och/eller radera ditt konto (kontakta oss vid behov).</p>

      <h3>8. Friskrivningar</h3>
      <p>Applikationen tillhandahålls i befintligt skick ("AS IS") utan garantier av något slag, uttryckliga eller underförstådda, inklusive men inte begränsat till säljbarhet, lämplighet för visst ändamål och icke-intrång.</p>

      <h3>9. Ansvarsbegränsning</h3>
      <p>I den utsträckning som medges enligt tillämplig lag ska {company} inte hållas ansvarigt för indirekta, tillfälliga, särskilda eller följdskador, eller för förlust av data, intäkter eller goodwill som uppstår ur eller i samband med din användning av Applikationen.</p>

      <h3>10. Skadeslöshet</h3>
      <p>Du samtycker till att hålla {company} skadeslösa från krav, förluster och kostnader (inklusive rimliga advokatkostnader) som uppstår till följd av din användning av Applikationen eller brott mot dessa Villkor.</p>

      <h3>11. Ändringar av Villkoren</h3>
      <p>Vi kan uppdatera Villkoren då och då. Fortsatt användning efter att ändringar publicerats innebär att du accepterar de uppdaterade villkoren.</p>

      <h3>12. Tillämplig lag och tvister</h3>
      <p>Dessa Villkor styrs av lagarna i {governingLaw}, utan hänsyn till lagvalsprinciper. Tvister ska i första hand lösas genom förhandling. Om tvist kvarstår kan den avgöras av behörig domstol i {governingLaw}.</p>

      <p>
        <strong>Gäller från:</strong> {EffectiveDate}
      </p>

      <h3>Kontakt</h3>
      <p>
        Frågor? Kontakta oss på <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </div>
  );
}

/** English Terms **/
function EnglishTerms({ appName, company, contactEmail, EffectiveDate, governingLaw }: { appName: string; company: string; contactEmail: string; EffectiveDate: string; governingLaw: string }) {
  return (
    <div>
      <h2>Terms of Use</h2>
      <p>
        These Terms of Use (the "Terms") govern your use of <strong>{appName}</strong> (the "Application"), provided by <strong>{company}</strong>. By installing, creating an account, or using the Application, you agree to be bound by these Terms.
      </p>

      <h3>1. Eligibility</h3>
      <p>You must be at least 13 years old to use the Application. If you are between 13–18, parental/guardian consent is required.</p>

      <h3>2. Account and Security</h3>
      <ul>
        <li>Certain features require an account with email and password.</li>
        <li>You are responsible for maintaining the confidentiality of your credentials and for activities under your account.</li>
        <li>Notify us immediately of any unauthorized use or security breach.</li>
      </ul>

      <h3>3. Acceptable Use</h3>
      <p>You agree not to:</p>
      <ul>
        <li>use the Application in violation of law or third-party rights,</li>
        <li>circumvent security or disrupt operation,</li>
        <li>upload harmful code, spam, or content that is illegal, abusive, or discriminatory,</li>
        <li>scrape, harvest, or index content by automated means without written consent.</li>
      </ul>

      <h3>4. Content & Intellectual Property</h3>
      <ul>
        <li>All content and software in the Application are owned by {company} or its licensors and are protected by copyright and other laws.</li>
        <li>You are granted a limited, non-exclusive, non-transferable license to use the Application for personal purposes.</li>
      </ul>

      <h3>5. Ads & Third-Party Services</h3>
      <p>The Application displays ads via AdMob and may link to third-party services. {company} is not responsible for third-party content, accuracy, or practices. Your use of such services may be subject to their terms and privacy policies.</p>

      <h3>6. Fees & Purchases</h3>
      <p>If purchases, subscriptions, or fees are introduced, the prices and terms presented in the store or in the Application at the time of purchase will apply (if applicable). Taxes may apply.</p>

      <h3>7. Termination</h3>
      <p>We may suspend or terminate your access at any time for violations of the Terms or for security reasons. You may terminate by uninstalling the Application and/or deleting your account (contact us if needed).</p>

      <h3>8. Disclaimers</h3>
      <p>The Application is provided "AS IS" without warranties of any kind, whether express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</p>

      <h3>9. Limitation of Liability</h3>
      <p>To the extent permitted by law, {company} shall not be liable for any indirect, incidental, special, consequential, or exemplary damages, or for loss of data, revenue, or goodwill arising out of or in connection with your use of the Application.</p>

      <h3>10. Indemnification</h3>
      <p>You agree to indemnify and hold {company} harmless from claims, losses, and expenses (including reasonable attorneys’ fees) arising from your use of the Application or breach of these Terms.</p>

      <h3>11. Changes to the Terms</h3>
      <p>We may update these Terms from time to time. Continued use after changes are posted constitutes acceptance of the updated Terms.</p>

      <h3>12. Governing Law & Disputes</h3>
      <p>These Terms are governed by the laws of {governingLaw}, without regard to conflict of laws principles. Disputes shall be resolved by negotiation in the first instance; failing that, by the competent courts in {governingLaw}.</p>

      <p>
        <strong>Effective Date:</strong> {EffectiveDate}
      </p>

      <h3>Contact</h3>
      <p>
        Questions? Contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </div>
  );
}
