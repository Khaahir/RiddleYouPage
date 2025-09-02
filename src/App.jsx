// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import HowTo from "./components/HowTo";
import EventPage from "./components/EventsPage"
import RiddleYouPrivacyPolicy from "./components/Policy";
import RiddleYouTermsOfUse from "./components/Terms";
import RiddleYouFAQWeb from "./components/Faq";
import Thanks from "./components/Thanks";

export default function App() {
  return (
    <section className="bg-[#021118] min-h-screen">
      {/* Uncomment when needed */}
      {/* <UnderDevelopmentModal /> */}

      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MainContent />
              <HowTo />
            </>
          }
        />

        <Route path="/events" element={<EventPage />} />
        <Route path="/policy" element={<RiddleYouPrivacyPolicy />} />
        <Route path="/terms" element={<RiddleYouTermsOfUse />} />
        <Route path="/faq" element={<RiddleYouFAQWeb />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>

      <Footer />
    </section>
  );
}
