import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { socialLinks } from "../data/portfolioData";

function Footer() {
  return <footer className="px-5 pb-8 pt-2 lg:px-8"><div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" /><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 py-8 sm:flex-row"><p className="text-sm text-slate-500">© {new Date().getFullYear()} Arjun Gupta. Crafted with React.</p><div className="flex items-center gap-3">{socialLinks.map((item) => { const Icon = item.icon; return <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-300"><Icon /></a>; })}<button onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })} aria-label="Back to top" className="grid h-9 w-9 place-items-center rounded-full bg-cyan-300 text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200"><FaArrowUp /></button></div></div></footer>;
}
export default Footer;
