import { useState } from "react";
import { contactInfo, socialLinks } from "./data/index";
import Section from "./Section";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {

      
       const res = await fetch("https://portfolio-iapg.onrender.com", {
      
      //  const res = await fetch("http://localhost:5000/contact", {


        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }
  };

  return (
    <Section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-2">
        Get In <span className="text-sky-400">Touch</span>
      </h2>
      <p className="text-slate-400 text-sm mb-10">I'd love to hear from you</p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info side */}
        <div className="space-y-5">
          <p className="text-slate-300 leading-relaxed">
            I'm actively looking for entry-level full-stack developer roles and internships.
            Feel free to reach out!
          </p>

          {contactInfo.map((c) => (
            <div key={c.label} className="flex items-center gap-3 text-slate-400 text-sm">
              <span>{c.icon}</span>
              {c.href ? (
                <a href={c.href} className="hover:text-sky-400 transition-colors">
                  {c.label}
                </a>
              ) : (
                <span>{c.label}</span>
              )}
            </div>
          ))}

          <div className="flex gap-3 pt-2 flex-wrap">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs rounded-lg border border-slate-700 text-slate-300 hover:border-sky-400 hover:text-sky-400 transition-colors"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Form side */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your Message"
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 resize-none"
          />

          <button
            type="submit"
            className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            Send Message 🚀
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-sm text-slate-400 mt-2">{status}</p>
          )}
        </form>
      </div>
    </Section>
  );
}
