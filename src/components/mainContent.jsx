import React from "react";

function MainContent() {
  return (
    <main className="px-6 py-12 max-w-6xl mx-auto">
      {/* Hero section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Välkommen till RiddleYou
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
       Riddle You är en spännande skattjakt-app där du löser kluriga gåtor och följer ledtrådar för att hitta skatten. Perfekt för vänner, familj eller events – en blandning av lek, äventyr och hjärngympa!
        </p>
      </section>

      {/* Card grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Feature One</h2>
          <p className="text-gray-600">
            Learn how our tools can help you improve your workflow and stay
            productive every day.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Feature Two</h2>
          <p className="text-gray-600">
            Access resources that guide you through challenges and push you
            toward success.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Feature Three</h2>
          <p className="text-gray-600">
            Join a vibrant community where ideas are shared and innovations are
            born.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}

export default MainContent;
