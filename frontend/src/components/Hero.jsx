import { useState, useEffect } from "react";
import { socialLinks } from "./data/index";

const ROLES = [
  "Full-Stack Developer",
  "MERN Stack Enthusiast",
  "Spring Boot Developer",
  "ISE Student @ CMRIT",
];

const stats = [
  { val: "4", label: "Projects Built" },
  { val: "6.0", label: "CGPA" },
  { val: "3mo", label: "Internship" },
  { val: "🥇", label: "Expo Winner" },
];

export default function Hero({ onNav }) {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
        else setCharIdx((c) => c + 1);
      } else {
        setTyped(current.slice(0, charIdx - 1));
        if (charIdx === 0) {
          setDeleting(false);
          setRoleIdx((r) => (r + 1) % ROLES.length);
        } else setCharIdx((c) => c - 1);
      }
    }, deleting ? 45 : 75);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="about" className="min-h-[92vh] flex flex-col justify-center py-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Text */}
        <div className="flex-1 space-y-5">
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase">
            👋 Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Pavan Kumar <span className="text-sky-400">VN</span>
          </h1>
          <div className="text-xl sm:text-2xl text-slate-300 h-8 flex items-center gap-1">
            <span>{typed}</span>
            <span className="inline-block w-0.5 h-6 bg-sky-400 animate-pulse" />
          </div>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Motivated Engineering student at CMRIT Bengaluru, specialising in Information
            Science. I build scalable, secure, full-stack web applications with the MERN
            stack &amp; Spring Boot. National-level hackathon participant and{" "}
            <span className="text-yellow-400 font-medium">🥇 Project Expo winner</span> at
            CMR University's Tech Utsav 2025.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onNav("Projects")}
              className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => onNav("Contact")}
              className="px-5 py-2.5 rounded-lg border border-slate-600 hover:border-sky-400 text-slate-300 hover:text-sky-400 text-sm font-semibold transition-colors"
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-5 pt-1 flex-wrap">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-sky-400 text-sm transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
              👨‍💻
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
            Open to Work
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center hover:border-sky-500/50 transition-colors"
          >
            <p className="text-2xl font-bold text-sky-400">{s.val}</p>
            <p className="text-xs text-slate-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
