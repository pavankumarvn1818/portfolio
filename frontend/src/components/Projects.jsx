import { useState } from "react";
import { projects } from "./data/index";
import Section from "./Section";

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/50 transition-all hover:-translate-y-1 duration-300 flex flex-col">
      <div className="text-3xl mb-3">{p.icon}</div>
      <h3 className="font-bold text-lg mb-1 text-white">{p.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

      <button
        onClick={() => setOpen(!open)}
        className="text-xs text-sky-400 hover:text-sky-300 text-left mb-3 flex items-center gap-1 transition-colors"
      >
        {open ? "▲ Hide roles" : "▼ Show roles"}
      </button>

      {open && (
        <ul className="mb-4 space-y-1">
          {p.roles.map((r, i) => (
            <li key={i} className="text-xs text-slate-400 flex gap-2">
              <span className="text-sky-400 mt-0.5">›</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {p.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-0.5 rounded-full"
            style={{
              background: `${p.color}18`,
              color: p.color,
              border: `1px solid ${p.color}40`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className="text-xs text-slate-500 hover:text-sky-400 transition-colors"
      >
        View on GitHub →
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-2">
        Featured <span className="text-sky-400">Projects</span>
      </h2>
      <p className="text-slate-400 text-sm mb-10">Things I've built</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
