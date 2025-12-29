import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Entrance Animation */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between animate-slideDown">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-600 tracking-wide">
          🍱 Mini Meal Hub
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "Services", "How It Works", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-gray-700 font-medium transition-all duration-300
                         after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                         after:w-0 after:bg-orange-500 after:transition-all after:duration-300
                         hover:after:w-full hover:text-orange-600"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 font-medium hover:text-orange-600 transition cursor-pointer">
            Login
          </button>

          <button className="bg-orange-500 text-white px-5 py-2 rounded-full
                             hover:bg-orange-600 hover:scale-105 transition-all duration-300 cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-white
                    ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col px-6 pb-4 space-y-4">
          {["Home", "Services", "How It Works", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 font-medium hover:text-orange-600 transition"
            >
              {item}
            </a>
          ))}

          <button className="border cursor-pointer border-orange-500 text-orange-500 py-2 rounded-full
                             hover:bg-orange-50 transition">
            Login
          </button>

          <button className="bg-orange-500 text-white py-2 rounded-full
                             hover:bg-orange-600 transition cursor-pointer">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};
