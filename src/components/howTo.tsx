import React from "react";
import { Sparkles, MapPin, Gift, Share2, Compass, Puzzle, Lock } from "lucide-react";

function HowTo() {
  return (
    
    <section  className="w-full px-6 py-12 
  bg-gradient-to-b from-blue-50 via-white to-blue-50 
  bg-[url('')] bg-cover bg-center text-white">
      
      <div id="hur" className="flex justify-center mb-10">
        <h2 className="text-3xl sm:text-3xl font-extrabold flex items-center gap-2">
          HUR MAN SPELAR
        </h2>
      </div>

      {/* Steg */}
      <div   className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
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
      <div  className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold">VÄLJ DITT ÄVENTYR</h2>
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
<section  className="flex flex-col items-center text-center justify-center my-20 px-6">
  
  <div className="flex flex-col lg:flex-row items-center max-w-5xl">
    <img 
      className="h-96 w-auto rounded-3xl shadow-lg mb-8 lg:mb-0 lg:mr-16" 
      src="where.png" 
      alt="Karta över lanseringsstäder" 
    />
   
    <p className="text-lg leading-relaxed max-w-xl text-gray-200">


  <h2  className="text-3xl font-extrabold mb-10 tracking-wide">VART</h2>
      Vår tjänst är ännu inte lanserad, men den kommer att släppas först i 
      <span className="font-semibold"> Kristinehamn, Karlskoga, Karlstad</span> och 
      <span className="font-semibold"> Örebro</span>. Därefter planerar vi att stegvis expandera till fler städer. 
      <br /><br />
      Målet är att successivt göra tjänsten tillgänglig i hela regionen  och på sikt även nationellt. 
      <span className="italic"> Håll utkik efter lanseringsdatumet, kanske är din stad nästa!</span>
    </p>
  </div>
</section>

    </section>
  );
}

export default HowTo;
