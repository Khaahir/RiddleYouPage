import React from "react";
import { Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1 - Logo / About */}
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-white">P&J Digital</h2>
          <p className="text-sm leading-relaxed">
            Har du frågor, samarbeten eller supportärenden? <br />
            Kontaktinformation nedan.
          </p>
        </div>

        {/* Column 2 - Kontakt */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-2">Kontakt</h3>
          <p className="text-sm">
            ✉️ Mail:{" "}
            <a
              href="mailto:riddleyouinfo@gmail.com"
              className="underline hover:text-white"
            >
              riddleyouinfo@gmail.com
            </a>
          </p>
        </div>

        {/* Column 3 - Social & Store-links */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61578843456515"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-7 h-7 hover:text-white" />
            </a>
            <a
              href="https://www.instagram.com/joinriddleyou/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-7 h-7 hover:text-white" />
            </a>
          </div>

          {/* Store Badges */}
          <div className="flex gap-3 flex-wrap justify-center md:justify-end">
            <img className="h-40 sm:h-40" src="appstore.svg" alt="App Store" />
            <img className="h-40 sm:h-40" src="googleplay.svg" alt="Google Play" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs sm:text-sm">
        © {new Date().getFullYear()} Riddle You. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
