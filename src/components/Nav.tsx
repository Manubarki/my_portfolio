import { motion, useScroll, useTransform } from 'framer-motion';

export default function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0.45, 0.85]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0.08, 0.18]);
  const blur = useTransform(scrollY, [0, 80], [16, 28]);

  return (
    <motion.nav
      className="p-nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        backgroundColor: useTransform(bgOpacity, v => `rgba(10,10,18,${v})`),
        borderColor: useTransform(borderOpacity, v => `rgba(255,255,255,${v})`),
        backdropFilter: useTransform(blur, v => `blur(${v}px)`),
      }}
    >
      <div className="nav-logo">Manu Barki<span>.</span></div>
      <div className="nav-links">
        <a href="#tools">Tools</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="https://www.linkedin.com/in/manubarki/" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
        <a href="#contact" className="nav-cta">Contact</a>
      </div>
    </motion.nav>
  );
}
