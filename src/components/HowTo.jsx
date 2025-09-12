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
      <div   className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        <div className="p-6 shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
          <img src="skapa.png" alt="" />

        </div>
        <div className="p-6 shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
<img src="losgotor.png" alt="" />          
        </div>
        <div className="p-6 shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
          <img src="belonigar.png" alt="" />
        </div>
        <div className="p-6 shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
          <img src="jamfor.png" alt="" />
        </div>
      </div>

      {/* Nivåval */}
      <div  className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold">VÄLJ DITT ÄVENTYR</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 shadow-lg hover:shadow-xl transition text-center flex flex-col items-center">
            <img src="latt.png" alt="" />
        </div>
        <div className="p-6 shadow-lg hover:shadow-xl transition text-center flex flex-col items-center">
        <img src="medel.png" alt="" />
        </div>
        <div className="p-6 shadow-lg hover:shadow-xl transition text-center flex flex-col items-center">
        <img src="svar.png" alt="" />
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
      <span className="font-semibold"> Kristinehamn, Karlskoga, Karlstad, Stockholm , Göteborg , Örebro</span> 
      <span className="font-semibold"> </span>. Därefter planerar vi att stegvis expandera till fler städer. 
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
