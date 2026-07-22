import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useSpring(-100, { stiffness: 520, damping: 32, mass: 0.25 });
  const y = useSpring(-100, { stiffness: 520, damping: 32, mass: 0.25 });

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const updateCapability = () => setEnabled(query.matches);
    const move = (event) => { x.set(event.clientX); y.set(event.clientY); };
    const enter = (event) => setActive(Boolean(event.target.closest("a, button, [role='button'], .interactive-card")));
    updateCapability();
    query.addEventListener("change", updateCapability);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", enter);
    return () => { query.removeEventListener("change", updateCapability); window.removeEventListener("pointermove", move); window.removeEventListener("pointerover", enter); };
  }, [x, y]);

  if (!enabled) return null;
  return <><motion.div aria-hidden="true" style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[110] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 mix-blend-screen" /><motion.div aria-hidden="true" style={{ x, y }} animate={{ width: active ? 48 : 30, height: active ? 48 : 30, opacity: active ? .9 : .5 }} className="pointer-events-none fixed left-0 top-0 z-[109] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300 bg-cyan-300/10 shadow-[0_0_24px_rgba(34,211,238,.55)]" /></>;
}
export default CustomCursor;
