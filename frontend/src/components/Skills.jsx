import { useRef } from "react";
import { useInView } from "./useInView";
import { skills, skillCategories } from "./data/index";
import Section from "./Section";

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: inView ? `${level}%` : "0%",
            background: color,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-2">
        Tech <span className="text-sky-400">Skills</span>
      </h2>
      <p className="text-slate-400 text-sm mb-10">Technologies I work with</p>

      <div className="grid md:grid-cols-2 gap-x-14">
        {skills.map((s, i) => (
          <SkillBar key={s.name} {...s} delay={i * 80} />
        ))}
      </div>

      <div className="mt-10 space-y-4">
        {skillCategories.map((cat) => (
          <div key={cat.label} className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-sky-400 font-semibold w-20 flex-shrink-0">
              {cat.label}
            </span>
            {cat.items.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-sky-400 hover:text-sky-400 transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
