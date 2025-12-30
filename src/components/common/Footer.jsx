import React from "react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-orange-50 border-t border-orange-200 z-40">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">

        {/* Left */}
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-orange-600">MiniMealHub</span>.
          All rights reserved.
        </p>

        {/* Center */}
        <div className="flex space-x-4 my-2 md:my-0">
          <a href="#" className="hover:text-orange-600 transition">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-orange-600 transition">
            Terms
          </a>
          <span>|</span>
          <a href="#" className="hover:text-orange-600 transition">
            Support
          </a>
        </div>

        {/* Right */}
        <p className="text-gray-500">
          Made with ❤️ for families
        </p>
      </div>
    </footer>
  );
};
