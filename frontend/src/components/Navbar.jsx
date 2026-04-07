import { useState } from "react";
import { navLinks } from "./data/index";

export default function Navbar({ active, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (n) => {
    onNav(n);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <span className="font-bold text-lg tracking-tight text-sky-400">
          Pavan<span className="text-white">.</span>dev
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((n) => (
            <button
              key={n}
              onClick={() => handleNav(n)}
              className={`text-sm transition-colors ${
                active === n
                  ? "text-sky-400 font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pb-4 pt-2 flex flex-col gap-3">
          {navLinks.map((n) => (
            <button
              key={n}
              onClick={() => handleNav(n)}
              className={`text-sm text-left ${
                active === n ? "text-sky-400" : "text-slate-400"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
