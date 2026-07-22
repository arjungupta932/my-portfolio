import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) setTheme(savedTheme);
    const timer = window.setTimeout(() => setLoading(false), 900);
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
      setShowTop(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => { window.clearTimeout(timer); window.removeEventListener("scroll", handleScroll); };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-[#0f172a]"><div className="text-center"><div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" /><p className="font-semibold tracking-[.3em] text-cyan-300">ARJUN GUPTA</p></div></motion.div>}
      </AnimatePresence>
      <div className="fixed left-0 top-0 z-[90] h-1 bg-gradient-to-r from-blue-500 to-cyan-300" style={{ width: `${progress}%` }} />
      <Navbar theme={theme} onThemeToggle={() => setTheme((value) => value === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <motion.button initial={false} animate={{ opacity: showTop ? 1 : 0, scale: showTop ? 1 : .8, pointerEvents: showTop ? "auto" : "none" }} onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })} aria-label="Back to top" className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-cyan-200/50 bg-slate-900/80 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,.3)] backdrop-blur hover:bg-cyan-300 hover:text-slate-950"><FaArrowUp /></motion.button>
    </>
  );
}

export default App;
