import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#003d66]">
        {/* Navbar */}
        <nav className="fixed top-4 left-4 right-4 z-50 rounded-xl backdrop-blur-lg bg-white/10 border border-white/30 shadow-lg transition-all duration-300">
          <div className="flex justify-between items-center px-6 py-5">
            {/* Website Name */}
            <div className="text-xl font-bold text-white drop-shadow-sm">
              MyWebsite
            </div>

            {/* Hamburger (Mobile Only) */}
            <div className="sm:hidden text-white">
              <button onClick={() => setNavOpen(!navOpen)}>
                {navOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

            {/* Links (Desktop Only) */}
            <div className="hidden sm:flex gap-x-8 font-medium text-white">
              <NavLink to="/" label="Home" />
              <NavLink to="/about" label="About" />
              <NavLink to="/quiz" label="Quiz" />
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`sm:hidden transition-all ease-in duration-300 overflow-hidden ${
              navOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col px-6 pb-4 gap-4 text-white font-medium">
              <NavLink to="/" label="Home" onClick={() => setNavOpen(false)} />
              <NavLink to="/about" label="About" onClick={() => setNavOpen(false)} />
              <NavLink to="/quiz" label="Quiz" onClick={() => setNavOpen(false)} />
            </div>
          </div>
        </nav>

        {/* Spacer for fixed navbar */}
        <div className="h-24" />

        {/* Page Content */}
        <div className="text-white px-6 pt-4">
          <h1 className="text-3xl font-bold">Welcome to MyWebsite</h1>
          <p className="mt-4 text-lg">
            This is your homepage. Try resizing the screen to see the responsive navbar!
          </p>
        </div>
      </div>
    </Router>
  );
}

// Reusable NavLink Component
function NavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative !text-white inline-block pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white transition-colors duration-300"
    >
      {label}
    </Link>
  );
}

export default App;
