import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <motion.nav
      className="p-nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
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
