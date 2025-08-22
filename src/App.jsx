// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/footer";
import HowTo from "./components/howTo";
import UnderDevelopmentModal from "./components/Develop";
import EventPage from "./components/Events";
import RiddleYouPrivacyPolicy from "./components/policy";
import RiddleYouTermsOfUse from "./components/terms"
import RiddleYouFAQWeb from "./components/faq";

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
      </Routes>

      <Footer />
    </section>
  );
}
