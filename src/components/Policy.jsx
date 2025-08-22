import React, { useState } from "react";
import { Shield, Globe, Mail } from "lucide-react";

export default function RiddleYouPrivacyPolicy() {
  const [lang, setLang] = useState("sv");

  const EffectiveDate = "2025-08-22"; // YYYY-MM-DD
  const appName = "Riddle You";
  const company = "P&J Digital";
  const contactEmail = "riddleyouinfo@gmail.com";

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white p-3 shadow">
              <Shield className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {appName} – Privacy Policy
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
              <Globe className="h-4 w-4" /> Svenska
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
              <Globe className="h-4 w-4" /> English
            </button>
          </div>
        </header>

        {/* Meta */}
        <section className="mt-6">
          <div className="rounded-2xl bg-white p-5 shadow">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
            </dl>
          </div>
        </section>

        {/* Content */}
        <article className="prose prose-gray mt-8 max-w-none prose-h2:mt-10 prose-h3:mt-8">
          {lang === "sv" ? (
            <SwedishPolicy
              appName={appName}
              company={company}
              contactEmail={contactEmail}
              EffectiveDate={EffectiveDate}
            />
          ) : (
            <EnglishPolicy
              appName={appName}
              company={company}
              contactEmail={contactEmail}
              EffectiveDate={EffectiveDate}
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

/** Swedish Policy **/
function SwedishPolicy({ appName, company, contactEmail, EffectiveDate }) {
  return (
    <div>
      <h2>Integritetspolicy</h2>
      <p>
        Denna integritetspolicy gäller för mobilappen <strong>{appName}</strong>{" "}
        (”Applikationen”), som tillhandahålls av <strong>{company}</strong>{" "}
        (”Tjänsteleverantören”). Tjänsten erbjuds i befintligt skick (”AS IS”).
      </p>

      <h3>Insamling och användning av information</h3>
      <p>
        Applikationen samlar in information när du laddar ner och använder den.
        Denna information kan inkludera:
      </p>
      <ul>
        <li>Din e-postadress och lösenord (vid inloggning)</li>
        <li>Din enhets IP-adress</li>
        <li>
          Sidor du besöker i Applikationen, datum/tid samt hur länge du stannar
        </li>
        <li>Operativsystem och plattform (iOS/Android)</li>
      </ul>
      <p>
        Tjänsteleverantören kan använda informationen för att tillhandahålla och
        förbättra Applikationen, hantera användarkonton och autentisering, skicka
        viktig information och visa annonser via AdMob.
      </p>
      <p>
        Applikationen samlar <strong>inte</strong> in exakt platsinformation från
        din mobila enhet.
      </p>

      <h3>Tredjepartsåtkomst</h3>
      <p>Vi kan dela uppgifter i följande fall:</p>
      <ul>
        <li>När det krävs enligt lag</li>
        <li>När det är nödvändigt för att skydda rättigheter eller säkerhet</li>
        <li>
          Med betrodda samarbetspartners som hjälper till med driften och följer
          denna policy
        </li>
      </ul>
      <p>
        Applikationen använder tredjepartstjänster som kan samla in uppgifter,
        t.ex.:
      </p>
      <ul>
        <li>Google Play Services</li>
        <li>AdMob (annonsering)</li>
      </ul>

      <h3>Apple iOS-användare</h3>
      <p>
        Enligt Apples regler kan du bli ombedd att ge tillstånd för spårning via
        AppTrackingTransparency. Om du nekar används inte dina data för personlig
        annonsering eller spårning.
      </p>

      <h3>Rätt att avstå</h3>
      <p>
        Du kan när som helst stoppa insamling av information genom att avinstallera
        Applikationen.
      </p>

      <h3>Databevarande</h3>
      <p>
        Tjänsteleverantören behåller användardata så länge du har ett konto. För
        att begära radering, kontakta oss på{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h3>Barn</h3>
      <p>
        Applikationen är inte avsedd för barn under 13 år. Kontakta oss om du tror
        att ett barn lämnat personuppgifter.
      </p>

      <h3>Säkerhet</h3>
      <p>
        Vi vidtar rimliga åtgärder för att skydda uppgifter. Ingen metod är dock
        helt säker.
      </p>

      <h3>Ändringar</h3>
      <p>
        Policyn kan uppdateras. Fortsatt användning innebär att du accepterar
        ändringarna.
      </p>

      <p>
        <strong>Gäller från:</strong> {EffectiveDate}
      </p>

      <h3>Kontakt</h3>
      <p>
        Har du frågor? Kontakta oss på{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </div>
  );
}

/** English Policy **/
function EnglishPolicy({ appName, company, contactEmail, EffectiveDate }) {
  return (
    <div>
      <h2>Privacy Policy</h2>
      <p>
        This Privacy Policy applies to the mobile application{" "}
        <strong>{appName}</strong>, provided by <strong>{company}</strong>.
      </p>

      <h3>Information Collection and Use</h3>
      <ul>
        <li>Email and password (login)</li>
        <li>Device IP address</li>
        <li>Visited pages, date/time, duration</li>
        <li>Operating system (iOS/Android)</li>
      </ul>
      <p>
        Provider may use data to improve the App, manage accounts, send notices,
        and show ads via AdMob.
      </p>
      <p>
        The Application does <strong>not</strong> collect precise location data.
      </p>

      <h3>Third-Party Access</h3>
      <p>We may share data if required by law, for security, or with partners.</p>
      <ul>
        <li>Google Play Services</li>
        <li>AdMob (advertising)</li>
      </ul>

      <h3>Apple iOS Users</h3>
      <p>
        You may be asked for tracking permission (ATT). Denying means no
        personalized ads.
      </p>

      <h3>Opt-Out Rights</h3>
      <p>Stop data collection by uninstalling the App.</p>

      <h3>Data Retention</h3>
      <p>
        Data is kept while you have an account. Request deletion at{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h3>Children</h3>
      <p>Not intended for kids under 13. Contact us if data was provided.</p>

      <h3>Security</h3>
      <p>We take reasonable steps but no method is 100% secure.</p>

      <h3>Changes</h3>
      <p>Policy may change. Continued use = acceptance.</p>

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
