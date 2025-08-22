import React from "react";
import About from "./about";

function MainContent() {
  return (
    <main className="px-6 py-12 max-w-6xl mx-auto ">
      {/* Hero section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Välkommen till Riddle You
        </h1>
        <p className="text-white max-w-2xl mx-auto">
Riddle You är en interaktiv skattjakt-app som kombinerar spänningen i klassiska gåtor med äventyret att utforska nya platser. Utmana dina vänner eller spela själv  varje gåta leder dig närmare nästa ledtråd, och till slut väntar en skatt. Perfekt för familjer, vänner, skolor och företag som vill ha roliga och kluriga upplevelser tillsammans!
        </p>
      </section>
<About/>
     
    </main>
  );
}

export default MainContent;
