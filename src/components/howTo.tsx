import React from "react";
import { Sparkles, MapPin, Gift, Share2, Compass, Puzzle, Lock } from "lucide-react";

function HowTo() {
  return (
    <section className="w-full px-6 py-12 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Titel */}
      <div className="flex justify-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 flex items-center gap-2">
          HUR MAN SPELAR
        </h1>
      </div>

      {/* Steg */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
          <MapPin className="h-10 w-10 text-blue-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">1. Ladda ner appen</h2>
          <p className="text-gray-600">
            Skapa ett konto och välj din första skattjakt.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
          <Puzzle className="h-10 w-10 text-green-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">2. Följ ledtrådar</h2>
          <p className="text-gray-600">Lös gåtor och upptäck nya platser.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
          <Gift className="h-10 w-10 text-pink-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">3. Hitta skatten</h2>
          <p className="text-gray-600">
            Lås upp hemligheter och belöningar när du klarar uppdraget.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
          <Share2 className="h-10 w-10 text-purple-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">4. Dela ditt äventyr</h2>
          <p className="text-gray-600">
            Jämför med vänner, se topplistan och dela ditt äventyr.
          </p>
        </div>
      </div>

      {/* Nivåval */}
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">VÄLJ DITT ÄVENTYR</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center flex flex-col items-center">
          <Compass className="h-10 w-10 text-yellow-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Lätt</h3>
          <p className="text-gray-600">
            Perfekt för barn, nybörjare och familjer enkla ledtrådar och roliga uppdrag.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center flex flex-col items-center">
          <Puzzle className="h-10 w-10 text-blue-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Medel</h3>
          <p className="text-gray-600">
            Lagom utmanande med list, logik och en twist för smarta skattjägare.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center flex flex-col items-center">
          <Lock className="h-10 w-10 text-red-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Svår</h3>
          <p className="text-gray-600">
            För de modigaste tuffa gåtor, hemligheter och episka belöningar väntar.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowTo;
