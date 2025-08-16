import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">MyWebsite</h2>
          <p className="text-sm">
            Building beautiful web experiences with React & Tailwind.
            Stay connected and explore more.
          </p>
        </div>

        {/* Column 3 - Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-white" />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Riddle You. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
