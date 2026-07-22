import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Skills</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Crafting modern experiences with a versatile stack</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillsData.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-500/10 backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-full bg-cyan-400/15 p-3 text-cyan-300">
                    <Icon />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.7 }}
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
