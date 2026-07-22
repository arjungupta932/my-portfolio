import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaCode, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { navItems } from "../data/portfolioData";

function Navbar({ theme, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollProps = { spy: true, smooth: true, duration: 500, offset: -72 };
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
      <Link to="home" {...scrollProps} className="flex cursor-pointer items-center gap-2.5 font-bold tracking-[.18em] text-white"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-950"><FaCode /></span>ARJUN</Link>
      <div className="hidden items-center gap-6 lg:flex">{navItems.map((item) => <Link key={item.to} to={item.to} {...scrollProps} activeClass="!text-cyan-300" className="cursor-pointer text-sm font-medium text-slate-300 transition hover:text-white">{item.label}</Link>)}</div>
      <div className="flex items-center gap-2"><button onClick={onThemeToggle} aria-label="Toggle colour theme" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-cyan-200 transition hover:border-cyan-300">{theme === "dark" ? <FaSun /> : <FaMoon />}</button><button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle navigation" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-cyan-200 lg:hidden">{isOpen ? <FaTimes /> : <FaBars />}</button></div>
    </nav>
    {isOpen && <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 lg:hidden"><div className="flex flex-col gap-1">{navItems.map((item) => <Link key={item.to} to={item.to} {...scrollProps} onClick={() => setIsOpen(false)} className="cursor-pointer rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-cyan-200">{item.label}</Link>)}</div></div>}
  </header>;
}
export default Navbar;
