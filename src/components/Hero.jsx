import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FaArrowDown, FaDownload, FaJava, FaNodeJs, FaPaperPlane, FaReact } from "react-icons/fa";
import { heroDetails, socialLinks } from "../data/portfolioData";
import developerIllustration from "../assets/developer-illustration.svg";
import resume from "../assets/resume.pdf";

const techBadges = [
  { label: "React", icon: FaReact, position: "-left-5 top-[23%]", tone: "text-cyan-200 border-cyan-200/30" },
  { label: "📱 React Native", position: "-right-6 top-[41%]", tone: "text-blue-100 border-blue-200/30" },
  { label: "Node.js", icon: FaNodeJs, position: "-left-5 bottom-[24%]", tone: "text-emerald-200 border-emerald-200/30" },
  { label: "🐍 Flask", position: "-right-4 bottom-[17%]", tone: "text-cyan-100 border-cyan-200/30" },
  { label: "Java", icon: FaJava, position: "left-[41%] -bottom-5", tone: "text-orange-200 border-orange-200/30" },
];

function Hero() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const onMove = (event) => { const box = event.currentTarget.getBoundingClientRect(); setPointer({ x: ((event.clientX - box.left) / box.width) * 100, y: ((event.clientY - box.top) / box.height) * 100 }); };
  return <section id="home" onPointerMove={onMove} className="relative isolate flex min-h-[calc(100vh-65px)] items-center overflow-hidden px-5 py-20 lg:px-8">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(59,130,246,.2),transparent_24%),radial-gradient(circle_at_85%_68%,rgba(6,182,212,.16),transparent_25%)]" />
    <motion.div animate={{ y: [0, 18, 0], x: [0, 8, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
    <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute -right-20 bottom-5 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
    <motion.div animate={{ left: `calc(${pointer.x}% - 8rem)`, top: `calc(${pointer.y}% - 8rem)` }} transition={{ type: "spring", stiffness: 45, damping: 18 }} className="pointer-events-none absolute -z-10 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
    <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-cyan-200">Available for opportunities</p>
        <p className="text-lg text-slate-300">Hello, I&apos;m</p><h1 className="mt-1 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">{heroDetails.name}</h1><h2 className="mt-4 text-xl font-semibold text-blue-300 sm:text-2xl">{heroDetails.title}</h2>
        <div className="mt-5 h-8 text-lg font-medium text-cyan-300 sm:text-xl"><TypeAnimation sequence={[...heroDetails.subtitle.flatMap((text) => [text, 1800])]} wrapper="span" speed={50} repeat={Infinity} /></div><p className="mt-6 max-w-xl leading-8 text-slate-400">{heroDetails.description}</p>
        <div className="mt-9 flex flex-wrap gap-4"><a href={resume} download className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-1"><FaDownload />Resume</a><Link to="contact" smooth duration={500} offset={-72} className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"><FaPaperPlane />Hire me</Link></div>
        <div className="mt-7 flex items-center gap-3">{socialLinks.slice(0, 2).map((social) => { const Icon = social.icon; return <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-300"><Icon /></a>; })}</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-8 rounded-[2rem] bg-blue-500/35 blur-3xl" />
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative rounded-[28px] border border-blue-300/35 bg-white/20 p-4 shadow-2xl shadow-blue-950/70 backdrop-blur-xl">
          <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-slate-950/65 px-3 py-1.5 text-xs font-bold text-cyan-100 backdrop-blur"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#4ade80]" />Available for Internship</span>
          <img src={developerIllustration} alt="Software developer working on a laptop" className="mx-auto w-full max-w-sm" />
          <div className="pointer-events-none absolute inset-0">{techBadges.map((badge) => { const Icon = badge.icon; return <span key={badge.label} className={`absolute rounded-xl border bg-slate-900/75 px-3 py-2 text-xs font-bold shadow-lg backdrop-blur ${badge.position} ${badge.tone}`}>{Icon && <Icon className="mr-1 inline text-base" />}{badge.label}</span>; })}</div>
        </motion.div>
      </motion.div>
    </div>
    <Link to="about" smooth duration={500} offset={-72} aria-label="Scroll to about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer text-cyan-200 md:block"><FaArrowDown className="animate-bounce" /></Link>
  </section>;
}
export default Hero;
