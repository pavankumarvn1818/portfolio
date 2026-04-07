import { timeline, certifications } from "./data/index.js";
import Section from "./Section";

function TimelineItem({ item }) {
  const isHighlight = item.highlight;

  return (
    <div className="flex gap-5 items-start">
      {/* Icon dot */}
      <div
        className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
          isHighlight
            ? "bg-yellow-500/20 border-2 border-yellow-400"
            : "bg-slate-800 border-2 border-sky-500"
        }`}
      >
        {item.icon}
      </div>

      {/* Card */}
      <div
        className={`rounded-xl p-4 flex-1 transition-colors ${
          isHighlight
            ? "bg-yellow-500/5 border border-yellow-400/40 hover:border-yellow-400/70"
            : "bg-slate-900 border border-slate-800 hover:border-sky-500/40"
        }`}
      >
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <span
            className={`text-xs font-semibold ${
              isHighlight ? "text-yellow-400" : "text-sky-400"
            }`}
          >
            {item.year}
          </span>
          {isHighlight && (
            <span className="text-xs bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 px-2 py-0.5 rounded-full">
              🥇 1st Prize · National Level
            </span>
          )}
          {item.type === "achievement" && !isHighlight && (
            <span className="text-xs bg-sky-400/10 border border-sky-400/20 text-sky-300 px-2 py-0.5 rounded-full">
              Achievement
            </span>
          )}
        </div>

        <h4
          className={`font-semibold mt-0.5 ${
            isHighlight ? "text-yellow-100" : "text-white"
          }`}
        >
          {item.title}
        </h4>

        <p
          className={`text-sm mt-1 leading-relaxed ${
            isHighlight ? "text-yellow-200/70" : "text-slate-400"
          }`}
        >
          {item.sub}
        </p>

        {/* Tags for Guardian X */}
        {item.tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Links for Guardian X */}
        {(item.linkedinUrl || item.projectUrl) && (
          <div className="flex gap-3 mt-3 flex-wrap">
            {item.projectUrl && (
              <a
                href={item.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Project Overview ↗
              </a>
            )}
            {item.linkedinUrl && (
              <a
                href={item.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
              >
                LinkedIn Post ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <Section id="achievements" className="py-20">
      <h2 className="text-3xl font-bold mb-2">
        My <span className="text-sky-400">Journey</span>
      </h2>
      <p className="text-slate-400 text-sm mb-10">
        Education, Experience &amp; Achievements
      </p>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800" />
        <div className="space-y-7">
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      </div>


      {/* Certifications */}
{/*       
      <div className="mt-14">
        <h3 className="text-lg font-semibold mb-1 text-slate-200">
          🏅 Certifications
        </h3>
        <p className="text-slate-500 text-xs mb-5">Completed online courses</p>
        <div className="flex flex-wrap gap-3">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 hover:border-sky-500/50 transition-colors"
            >
              <p className="text-sm font-medium text-white">{c.name}</p>
              <p className="text-xs text-slate-400 mt-0.5">{c.platform}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Volunteer */}
      <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-slate-300 mb-3">
          🤝 Co-curricular & Volunteering
        </h3>
        <ul className="space-y-2">
          <li className="text-sm text-slate-400 flex gap-2">
            <span className="text-sky-400">›</span>
            Volunteered at <span className="text-slate-300 font-medium">SPARDHA'23</span>
          </li>
          <li className="text-sm text-slate-400 flex gap-2">
            <span className="text-sky-400">›</span>
            Attended 24-hour Hackathon{" "}
            <span className="text-slate-300 font-medium">AVYNA-2024</span>
          </li>
          <li className="text-sm text-slate-400 flex gap-2">
            <span className="text-sky-400">›</span>
            National Hackathon by{" "}
            <span className="text-slate-300 font-medium">
              HackMedia — Aug 2025, National College, Bengaluru
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
