import { motion } from "framer-motion";
import { FaCodeBranch, FaLightbulb, FaRocket, FaTrophy } from "react-icons/fa";
import { achievementsData } from "../data/portfolioData";

const icons = [FaRocket, FaCodeBranch, FaLightbulb, FaTrophy];

function Achievements() {
  return <section id="achievements" className="section-shell px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="eyebrow">Strengths</p><h2 className="section-title mx-auto">Built through curiosity and practice.</h2><p className="mx-auto mt-4 max-w-2xl text-slate-400">A clear snapshot of the foundations I bring to an internship or entry-level engineering role.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{achievementsData.map((achievement, index) => { const Icon = icons[index]; return <motion.article key={achievement.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -6 }} className="glass-card p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-300/20 text-cyan-200"><Icon /></span><h3 className="mt-5 font-bold text-white">{achievement.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{achievement.detail}</p></motion.article>; })}</div></div></section>;
}
export default Achievements;
