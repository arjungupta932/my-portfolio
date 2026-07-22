import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";
import { aboutDetails, experienceData } from "../data/portfolioData";

const icons = [FaGraduationCap, FaBriefcase, FaCode];
function About() {
  return <section id="about" className="section-shell px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-md"><div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-blue-500/35 to-cyan-300/25 blur-xl" /><img src={aboutDetails.image} alt="Arjun working" loading="lazy" className="relative aspect-square rounded-[1.7rem] border border-white/15 object-cover" /></motion.div>
    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}><p className="eyebrow">About me</p><h2 className="section-title">Building useful products with care.</h2><p className="mt-6 leading-8 text-slate-400">{aboutDetails.paragraph}</p>
    <div className="mt-7 grid gap-3 sm:grid-cols-3">{aboutDetails.stats.map((stat, index) => { const Icon = icons[index]; return <div key={stat.label} className="glass-card p-4"><Icon className="text-cyan-300" /><p className="mt-3 text-xl font-bold text-white">{stat.value}</p><p className="mt-1 text-xs uppercase tracking-wider text-slate-400">{stat.label}</p></div>; })}</div>
    <div className="mt-6 grid gap-3 sm:grid-cols-2">{experienceData.map((item) => <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"><p className="text-xs font-semibold text-cyan-300">{item.period}</p><h3 className="mt-2 font-bold text-white">{item.title}</h3><p className="mt-1 text-sm text-slate-400">{item.company}</p></article>)}</div></motion.div>
  </div></section>;
}
export default About;
