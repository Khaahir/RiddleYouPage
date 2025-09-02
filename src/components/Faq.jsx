import React, { useState } from "react";
import { ChevronDown, Mail, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Hur fungerar skattjakten i appen?",
    answer:
      "Du löser gåtor för att hitta digitala skatter som är utspridda på en karta – en blandning av logik, kartläsning och äventyr.",
  },
  {
    question: "Hur använder jag kartan för att hitta skatterna?",
    answer:
      "Kartan visar ungefärliga positioner för skatterna. När du är i närheten (cirka 30 meter) kan du låsa upp skatten som ger dig en ny gåta – eller om det är sista skatten får du en badge.",
  },
  {
    question: "Vad är skillnaden mellan lätt, medel och svår nivå?",
    answer:
      "Lätta gåtor passar nybörjare. Medel kräver mer tänkande, och svåra är utmanande även för erfarna problemlösare.",
  },
  {
    question: "Hur fungerar gåtorna och hur löser jag dem?",
    answer:
      "Varje skatt är låst bakom en gåta. Läs texten noggrant och använd kartan och din logik för att lista ut svaret.",
  },
  {
    question: "Kan jag spela tillsammans med vänner?",
    answer:
      "Appen är individuell, men ni kan spela sida vid sida, dela gåtor och jämföra vem som hittar flest skatter först. Alla spelar från sitt eget konto, men det är roligt att uppleva skattjakten tillsammans!",
  },
  {
    question: "Hur fungerar topplistan och hur kommer jag med?",
    answer:
      "Topplistan visar spelare som samlat flest poäng genom att hitta skatter. Lös gåtor och samla poäng för att klättra.",
  },
  {
    question: "Behöver jag ha internetanslutning hela tiden?",
    answer:
      "Ja, för att ladda kartan, hitta kistor och uppdatera din status i spelet krävs internetanslutning.",
  },
  {
    question: "Hur vet jag att jag har hittat en skatt?",
    answer:
      "När du löst gåtan rätt och befinner dig på rätt plats ser du skatten på kartan och kan låsa upp den.",
  },
  {
    question: "Hur många skatter finns det att hitta?",
    answer:
      "Antalet skatter varierar och uppdateras löpande. Håll utkik efter nya utmaningar och platser i appen!",
  },
  {
    question: "Vad är badges och hur tjänar jag dem?",
    answer:
      "Badges är digitala utmärkelser du får när du uppnår mål – t.ex. hitta ett visst antal skatter, klara en svår gåta eller spela i flera städer. De visas i din profil och visar dina framsteg.",
  },
  {
    question: "I vilka städer finns skattjakten tillgänglig?",
    answer:
      "Just nu finns skattjakten i Karlskoga, Karlstad, Kristinehamn och Örebro. Vi lägger till nya städer löpande – håll utkik i appen!",
  },
  {
    question: "Kommer det nya skatter eller uppdateringar?",
    answer:
      "Ja! Nya skatter, gåtor och funktioner läggs till regelbundet. Se till att ha senaste versionen av appen och håll koll i fliken Gåtor för nya utmaningar.",
  },
  {
    question: "Hur samlar jag poäng?",
    answer:
      "Du får poäng när du löser en gåta och hittar en skatt. Svårare gåtor ger fler poäng, och extra bonusar kan komma vid specialevent eller badges.",
  },
  {
    question: "Vad händer om jag fastnar på en gåta?",
    answer:
      "Prova samarbeta med en vän eller använd en ledtråd om det finns. Vissa gåtor kräver tålamod och kreativt tänkande!",
  },
];

export default function RiddleYouFAQWeb() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contactEmail = "riddleyouinfo@gmail.com";

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* SEO JSON-LD */}
  

        {/* Header */}
        <header className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white p-3 shadow">
              <HelpCircle className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Hjälp & Vanliga frågor</h1>
              <p className="mt-1 text-sm text-gray-600">Riddle You</p>
            </div>
          </div>

          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(
              "Supportförfrågan"
            )}&body=${encodeURIComponent("Hej! Jag behöver hjälp med...")}`}
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90"
          >
            Kontakta oss
          </a>
        </header>


        {/* FAQ list */}
        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="sr-only">
            Vanliga frågor
          </h2>
          <div className="space-y-3">
            {faqData.map((item, index) => {
              const open = activeIndex === index;
              return (
                <div key={index} className="overflow-hidden rounded-2xl bg-white shadow">
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                    onClick={() => toggle(index)}
                  >
                    <span className="text-base font-semibold text-gray-900">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {open && (
                    <div className="border-t px-5 py-4 text-sm leading-6 text-gray-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(
              "Supportförfrågan"
            )}&body=${encodeURIComponent("Hej! Jag behöver hjälp med...")}`}
            className="inline-flex items-center gap-2 rounded-full border border-gray-900 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-50"
          >
            <Mail className="h-4 w-4" /> Kontakta support
          </a>
        </div>
      </div>
    </main>
  );
}
