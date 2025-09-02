import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div id="kontakt" className="space-y-3 text-center md:text-left">
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
          <div className="flex flex-col space-y-1">
            <Link to="/policy">Policy</Link>
            <Link to="/terms">Terms and agreements</Link>
            <Link to="/faq">FAQ</Link>
          </div>
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
            {/* App Store button */}
            <a
              href="https://apps.apple.com/us/app/riddle-you/id6751143702"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-25 md:h-25"
                src="appstore.svg"
                alt="Download on the App Store"
              />
            </a>

            {/* Google Play (coming soon) */}
            <div className="flex flex-col items-center text-center">
              <img
                className="h-25 md:h-25 opacity-60"
                src="googleplay.svg"
                alt="Get it on Google Play (coming soon)"
              />
              <p className="text-xs text-gray-500 mt-1">
                Kommer snart till Android!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6kQ2od7NmOvLElTcHq1zQggsasihLDut9r3ZNOGZko7aKkA/viewform?fbzx=3668833737319837413"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline hover:text-white mt-1"
              >
                Klicka här för beta-test
              </a>
            </div>
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
