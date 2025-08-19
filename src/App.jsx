// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import HowTo from "./components/howTo";
import UnderDevelopmentModal from "./components/develop";
import EventPage from "./components/events";

export default function App() {
  return (
    <section className="bg-[#021118] min-h-screen">
      <UnderDevelopmentModal />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <MainContent />
              <HowTo />
              <Footer />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Header />
              <EventPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </section>
  );
}
