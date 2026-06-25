import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <div ref={ref} className="stat-num">
      {count}{suffix}
    </div>
  );
}

function AvatarGlow() {
  return (
    <motion.div
      className="avatar-glow-wrap"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ position: 'relative', width: 96, height: 96, marginBottom: '1.75rem' }}
    >
      {/* Outer glow ring */}
      <motion.div
        style={{
          position: 'absolute', inset: -6,
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, #8b5cf6, #3b82f6, #ec4899, #8b5cf6)',
          zIndex: 0,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      {/* Inner mask */}
      <div style={{
        position: 'absolute', inset: 2,
        borderRadius: '50%',
        background: 'var(--bg)',
        zIndex: 1,
      }} />
      {/* Pulse ring */}
      <motion.div
        style={{
          position: 'absolute', inset: -6,
          borderRadius: '50%',
          border: '2px solid rgba(139,92,246,0.5)',
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.18], opacity: [0.6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
      />
      {/* Avatar */}
      <img
        src="https://avatars.githubusercontent.com/u/20680676?v=4"
        alt="Manu Barki"
        style={{
          position: 'absolute', inset: 4,
          width: 'calc(100% - 8px)', height: 'calc(100% - 8px)',
          borderRadius: '50%',
          objectFit: 'cover',
          zIndex: 2,
        }}
      />
    </motion.div>
  );
}

function HeroCard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 200, damping: 30 });
  const sRotY = useSpring(rotY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      rotX.set(-y * 12);
      rotY.set(x * 16);
    };
    const onLeave = () => { rotX.set(0); rotY.set(0); };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, [rotX, rotY]);

  return (
    <motion.div ref={wrapRef} className="hero-card-wrap" style={{ rotateX: sRotX, rotateY: sRotY, perspective: 900 }}>
      <div className="hero-card glass-md">
        <div className="hc-top">
          <img className="hc-avatar" src="https://avatars.githubusercontent.com/u/20680676?v=4" alt="Manu Barki" />
          <div>
            <div className="hc-name">Manu Barki</div>
            <div className="hc-role">Lead Talent Partner @ Atlan</div>
          </div>
        </div>
        <div className="hc-divider" />
        <div className="hc-row">
          <div className="hc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div><div className="hc-label">Location</div><div className="hc-val">Bengaluru, India</div></div>
        </div>
        <div className="hc-row">
          <div className="hc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
          </div>
          <div><div className="hc-label">Company</div><div className="hc-val">Atlan</div></div>
        </div>
        <div className="hc-row">
          <div className="hc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <div><div className="hc-label">Focus</div><div className="hc-val">AI-powered recruiting tools</div></div>
        </div>
        <div className="hc-divider" />
        <div className="pill-row">
          <span className="pill"><span className="pill-dot" style={{ background: 'var(--green)' }} />Open to connect</span>
          <span className="pill"><span className="pill-dot" style={{ background: 'var(--purple2)' }} />Builder</span>
          <span className="pill"><span className="pill-dot" style={{ background: 'var(--blue2)' }} />Recruiter</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <AvatarGlow />

          <motion.div className="hero-badge" {...fadeUp(0.0)}>
            <span className="dot" aria-hidden="true" />
            Lead Talent Partner · Atlan · Bengaluru
          </motion.div>

          <motion.h1 className="hero-title" {...fadeUp(0.15)}>
            Hiring with<br /><span className="grad-text">intelligence.</span>
          </motion.h1>

          <motion.p className="hero-sub" {...fadeUp(0.25)}>
            I'm Manu Barki — 13+ years scaling engineering and product teams.
            I build AI-powered sourcing tools that turn days of recruiting work into minutes.
          </motion.p>

          <motion.div className="cta-row" {...fadeUp(0.35)}>
            <a className="btn btn-primary" href="#tools">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
              See My Tools
            </a>
            <a className="btn btn-ghost" href="https://github.com/Manubarki" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </motion.div>

          <motion.div className="hero-stats" {...fadeUp(0.45)}>
            <div>
              <AnimatedCounter target={12} suffix="+" />
              <div className="stat-label">AI Tools Built & Building</div>
            </div>
            <div>
              <AnimatedCounter target={13} suffix="+" />
              <div className="stat-label">Years Recruiting</div>
            </div>
            <div>
              <AnimatedCounter target={10} />
              <div className="stat-label">Open Source Repos</div>
            </div>
          </motion.div>
        </div>

        <div className="hero-right">
          <motion.div {...fadeUp(0.3)}>
            <HeroCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
