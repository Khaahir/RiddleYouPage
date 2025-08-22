import React, { useState } from "react";
import { Shield, Globe, Mail } from "lucide-react";

export default function RiddleYouPrivacyPolicy() {
  const [lang, setLang] = useState<"sv" | "en">("sv");

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
              <h1 className="text-3xl font-bold tracking-tight">{appName} – Privacy Policy</h1>
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
              <Globe className="h-4 w-4" /> Svenska
            </button>
            <button
              onClick={() => setLang("en")}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition ${
                lang === "en" ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
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
            </dl>
          </div>
        </section>

        {/* Content */}
        <article className="prose prose-gray mt-8 max-w-none prose-h2:mt-10 prose-h3:mt-8">
          {lang === "sv" ? <SwedishPolicy appName={appName} company={company} contactEmail={contactEmail} EffectiveDate={EffectiveDate} /> : <EnglishPolicy appName={appName} company={company} contactEmail={contactEmail} EffectiveDate={EffectiveDate} />}
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

/** Swedish Policy **/
function SwedishPolicy({ appName, company, contactEmail, EffectiveDate }: { appName: string; company: string; contactEmail: string; EffectiveDate: string }) {
  return (
    <div>
      <h2>Integritetspolicy</h2>
      <p>
        Denna integritetspolicy gäller för mobilappen <strong>{appName}</strong> (”Applikationen”), som tillhandahålls av <strong>{company}</strong> (”Tjänsteleverantören”). Tjänsten
        erbjuds i befintligt skick (”AS IS”).
      </p>

      <h3>Insamling och användning av information</h3>
      <p>
        Applikationen samlar in information när du laddar ner och använder den. Denna information kan inkludera:
      </p>
      <ul>
        <li>Din e-postadress och lösenord (vid inloggning)</li>
        <li>Din enhets IP-adress</li>
        <li>Sidor du besöker i Applikationen, datum/tid samt hur länge du stannar</li>
        <li>Operativsystem och plattform (iOS/Android)</li>
      </ul>
      <p>
        Tjänsteleverantören kan använda informationen för att tillhandahålla och förbättra Applikationen, hantera användarkonton och autentisering, skicka viktig information och visa annonser via AdMob.
      </p>
      <p>Applikationen samlar <strong>inte</strong> in exakt platsinformation från din mobila enhet.</p>

      <h3>Tredjepartsåtkomst</h3>
      <p>Vi kan dela uppgifter i följande fall:</p>
      <ul>
        <li>När det krävs enligt lag (t.ex. domstolsbeslut eller rättslig process)</li>
        <li>När det är nödvändigt för att skydda rättigheter, säkerhet eller för att utreda missbruk</li>
        <li>Med betrodda samarbetspartners som hjälper till med driften och som har åtagit sig att följa denna policy</li>
      </ul>
      <p>Applikationen använder tredjepartstjänster som kan samla in uppgifter som används för att identifiera dig, exempelvis:</p>
      <ul>
        <li>Google Play Services</li>
        <li>AdMob (annonsering)</li>
      </ul>

      <h3>Apple iOS-användare</h3>
      <p>
        I enlighet med Apples regler kan du bli ombedd att ge tillstånd för spårning via AppTrackingTransparency (ATT). Om du nekar kommer dina data inte att användas för personlig annonsering eller spårning över appar.
      </p>

      <h3>Rätt att avstå</h3>
      <p>Du kan när som helst stoppa insamling av information genom att avinstallera Applikationen via din enhet eller appbutiken.</p>

      <h3>Databevarande</h3>
      <p>
        Tjänsteleverantören behåller användardata så länge du har ett konto och under en rimlig tid därefter. För att begära radering av dina uppgifter, kontakta oss på <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h3>Barn</h3>
      <p>
        Applikationen är inte avsedd för barn under 13 år. Om en förälder eller vårdnadshavare upptäcker att ett barn har lämnat personuppgifter, vänligen kontakta oss så att dessa kan raderas.
      </p>

      <h3>Säkerhet</h3>
      <p>
        Vi vidtar rimliga tekniska, administrativa och fysiska åtgärder för att skydda insamlade uppgifter, inklusive skydd av inloggningsuppgifter. Ingen metod för överföring eller lagring är dock helt säker.
      </p>

      <h3>Ändringar</h3>
      <p>
        Denna policy kan uppdateras från tid till annan genom att denna sida ändras. Fortsatt användning av Applikationen innebär att du accepterar eventuella ändringar.
      </p>

      <p>
        <strong>Gäller från:</strong> {EffectiveDate}
      </p>

      <h3>Kontakt</h3>
      <p>
        Har du frågor om denna policy? Kontakta oss på <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </div>
  );
}

/** English Policy **/
function EnglishPolicy({ appName, company, contactEmail, EffectiveDate }: { appName: string; company: string; contactEmail: string; EffectiveDate: string }) {
  return (
    <div>
      <h2>Privacy Policy</h2>
      <p>
        This Privacy Policy applies to the mobile application <strong>{appName}</strong> (the “Application”), provided by <strong>{company}</strong> (the “Service Provider”). The service is offered on an “AS IS” basis.
      </p>

      <h3>Information Collection and Use</h3>
      <p>
        The Application collects information when you download and use it. This information may include:
      </p>
      <ul>
        <li>Your email address and password (for login)</li>
        <li>Your device’s IP address</li>
        <li>Pages you visit within the Application, the time and date of your visit, and time spent</li>
        <li>The operating system and platform (iOS/Android)</li>
      </ul>
      <p>
        The Service Provider may use this information to provide and improve the Application, manage user accounts and authentication, send important notices, and display ads via AdMob.
      </p>
      <p>The Application does <strong>not</strong> collect precise location data from your mobile device.</p>

      <h3>Third-Party Access</h3>
      <p>Information may be disclosed in the following cases:</p>
      <ul>
        <li>As required by law (e.g., subpoena or legal process)</li>
        <li>When necessary to protect rights, safety, or investigate misuse</li>
        <li>With trusted partners who assist with operations and agree to comply with this policy</li>
      </ul>
      <p>The Application uses third-party services that may collect information used to identify you, such as:</p>
      <ul>
        <li>Google Play Services</li>
        <li>AdMob (advertising)</li>
      </ul>

      <h3>Apple iOS Users</h3>
      <p>
        In line with Apple’s rules, you may be prompted for tracking permission via AppTrackingTransparency (ATT). If you deny permission, your data will not be used for personalized advertising or cross-app tracking.
      </p>

      <h3>Opt-Out Rights</h3>
      <p>You can stop all information collection by uninstalling the Application via your device or app marketplace.</p>

      <h3>Data Retention</h3>
      <p>
        The Service Provider retains user data for as long as you maintain an account and for a reasonable period thereafter. To request deletion of your data, contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h3>Children</h3>
      <p>
        The Application is not intended for children under the age of 13. If a parent or guardian becomes aware that a child has provided personal information, please contact us so it can be deleted.
      </p>

      <h3>Security</h3>
      <p>
        We implement reasonable technical, administrative, and physical measures to protect collected information, including login credentials. However, no method of transmission or storage is completely secure.
      </p>

      <h3>Changes</h3>
      <p>
        This Privacy Policy may be updated from time to time by updating this page. Continued use of the Application constitutes acceptance of the updated policy.
      </p>

      <p>
        <strong>Effective Date:</strong> {EffectiveDate}
      </p>

      <h3>Contact Us</h3>
      <p>
        If you have questions about this policy, contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </div>
  );
}
