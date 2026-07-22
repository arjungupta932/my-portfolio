import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import { contactDetails } from "../data/portfolioData";

function Contact() {
  const [status, setStatus] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault(); setStatus("sending");
    const form = event.currentTarget;
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!service || !template || !publicKey) { setStatus("demo"); return; }
    try { await emailjs.sendForm(service, template, form, publicKey); form.reset(); setStatus("success"); } catch { setStatus("error"); }
  };
  return <section id="contact" className="px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 p-6 sm:p-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">Get in touch</p><h2 className="section-title">Let’s build something meaningful.</h2><p className="mt-5 leading-7 text-slate-400">Have an opportunity, idea, or project in mind? I’d love to hear from you.</p><div className="mt-8 space-y-4">{contactDetails.map((item) => { const Icon = item.icon; const link = item.label === "Email" ? `mailto:${item.value}` : item.value.startsWith("http") ? item.value : `tel:${item.value.replace(/\s/g, "")}`; return <a key={item.label} href={link} target={item.value.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/35 p-3 transition hover:border-cyan-300/50"><span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-300/10 text-cyan-300"><Icon /></span><span><span className="block text-xs text-slate-500">{item.label}</span><span className="text-sm text-slate-200">{item.value}</span></span></a>; })}</div></div>
  <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="glass-card grid gap-4 p-6 sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><label className="field-label">Name<input required name="from_name" placeholder="Your name" className="field" /></label><label className="field-label">Email<input required type="email" name="reply_to" placeholder="you@example.com" className="field" /></label></div><label className="field-label">Subject<input required name="subject" placeholder="How can I help?" className="field" /></label><label className="field-label">Message<textarea required name="message" rows="5" placeholder="Tell me about your project..." className="field resize-none" /></label><button disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-bold text-white disabled:opacity-60"><FaPaperPlane />{status === "sending" ? "Sending…" : "Send message"}</button>{status === "success" && <p className="text-sm text-emerald-300">Message sent — thank you!</p>}{status === "demo" && <p className="text-sm text-amber-200">Add your EmailJS VITE_EMAILJS_* variables to enable delivery.</p>}{status === "error" && <p className="text-sm text-rose-300">Message could not be sent. Please try email instead.</p>}</motion.form></div></section>;
}
export default Contact;
