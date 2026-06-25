import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div><div className="hc-label">Location</div><div className="hc-val">Bengaluru, India</div></div>
        </div>
        <div className="hc-row">
          <div className="hc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
          </div>
          <div><div className="hc-label">Company</div><div className="hc-val">Atlan</div></div>
        </div>
        <div className="hc-row">
          <div className="hc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
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
          <motion.div className="comic-wrap" {...fadeUp(0)}>
            <div className="comic-flipper">
              <div className="comic-face comic-front">
                <div className="comic-dots" aria-hidden="true" />
                <div className="comic-frame">
                  <svg viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',background:'#ffe566'}}>
                    {/* neck */}
                    <rect x="76" y="148" width="28" height="22" rx="6" fill="#f5c49a"/>
                    {/* jacket collar */}
                    <path d="M55 170 L90 155 L125 170 L130 200 L50 200 Z" fill="#3b82f6"/>
                    <path d="M80 158 L90 155 L100 158 L95 200 L85 200 Z" fill="#1e40af"/>
                    {/* head */}
                    <ellipse cx="90" cy="110" rx="52" ry="56" fill="#f5c49a"/>
                    {/* hair top */}
                    <path d="M38 100 Q40 48 90 44 Q140 48 142 100 Q130 72 90 70 Q50 72 38 100Z" fill="#1a1128"/>
                    {/* hair sides */}
                    <path d="M38 100 Q34 115 38 130 Q42 95 50 88 Z" fill="#1a1128"/>
                    <path d="M142 100 Q146 115 142 130 Q138 95 130 88 Z" fill="#1a1128"/>
                    {/* hair front strands */}
                    <path d="M62 70 Q58 82 62 90" stroke="#1a1128" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    <path d="M75 64 Q70 76 73 85" stroke="#1a1128" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                    <path d="M118 70 Q122 82 118 90" stroke="#1a1128" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    {/* ears */}
                    <ellipse cx="38" cy="112" rx="7" ry="9" fill="#f5c49a"/>
                    <ellipse cx="142" cy="112" rx="7" ry="9" fill="#f5c49a"/>
                    <ellipse cx="38" cy="112" rx="4" ry="6" fill="#e8a882"/>
                    <ellipse cx="142" cy="112" rx="4" ry="6" fill="#e8a882"/>
                    {/* eyebrows */}
                    <path d="M62 94 Q72 90 80 93" stroke="#2d1b4e" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <path d="M100 93 Q108 90 118 94" stroke="#2d1b4e" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    {/* eyes whites */}
                    <ellipse cx="71" cy="108" rx="11" ry="10" fill="#fff"/>
                    <ellipse cx="109" cy="108" rx="11" ry="10" fill="#fff"/>
                    {/* iris */}
                    <circle cx="73" cy="109" r="7" fill="#3d2b6e"/>
                    <circle cx="111" cy="109" r="7" fill="#3d2b6e"/>
                    {/* pupils */}
                    <circle cx="74" cy="110" r="4" fill="#0a0614"/>
                    <circle cx="112" cy="110" r="4" fill="#0a0614"/>
                    {/* eye shine */}
                    <circle cx="76" cy="107" r="2" fill="#fff"/>
                    <circle cx="114" cy="107" r="2" fill="#fff"/>
                    <circle cx="70" cy="112" r="1" fill="rgba(255,255,255,0.5)"/>
                    <circle cx="108" cy="112" r="1" fill="rgba(255,255,255,0.5)"/>
                    {/* lower eyelid */}
                    <path d="M62 115 Q71 120 80 115" stroke="#e8a882" strokeWidth="1.5" fill="none"/>
                    <path d="M100 115 Q109 120 118 115" stroke="#e8a882" strokeWidth="1.5" fill="none"/>
                    {/* nose */}
                    <path d="M88 118 Q86 128 90 130 Q94 128 92 118" stroke="#d4956a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                    <ellipse cx="86" cy="130" rx="4" ry="2.5" fill="#e8a882" opacity="0.6"/>
                    <ellipse cx="94" cy="130" rx="4" ry="2.5" fill="#e8a882" opacity="0.6"/>
                    {/* mouth */}
                    <path d="M76 142 Q90 150 104 142" stroke="#c0785a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <path d="M80 142 Q90 146 100 142" fill="#e8635a" opacity="0.7"/>
                    {/* cheek blush */}
                    <ellipse cx="60" cy="124" rx="10" ry="6" fill="#ffb4a0" opacity="0.35"/>
                    <ellipse cx="120" cy="124" rx="10" ry="6" fill="#ffb4a0" opacity="0.35"/>
                  </svg>
                </div>
                <div className="comic-lines" aria-hidden="true">
                  <span/><span/><span/><span/><span/>
                </div>
                <div className="comic-badge" aria-hidden="true">POW!</div>
                <div className="speech-bubble">
                  Hiring with<br/><strong>AI superpowers</strong> ✦
                </div>
              </div>
              <div className="comic-face comic-back">
                <div className="real-frame">
                  <img src="https://avatars.githubusercontent.com/u/20680676?v=4" alt="Manu Barki" className="real-img" />
                  <div className="real-label">Real me →</div>
                </div>
              </div>
            </div>
            <p className="comic-hint">Hover to flip</p>
          </motion.div>

          <motion.div className="hero-badge" {...fadeUp(0.1)}>
            <span className="dot" aria-hidden="true" />
            Lead Talent Partner · Atlan · Bengaluru
          </motion.div>

          <motion.h1 className="hero-title" {...fadeUp(0.18)}>
            Hiring with<br /><span className="grad-text">intelligence.</span>
          </motion.h1>

          <motion.p className="hero-sub" {...fadeUp(0.26)}>
            I'm Manu Barki — 13+ years scaling engineering and product teams.
            I build AI-powered sourcing tools that turn days of recruiting work into minutes.
          </motion.p>

          <motion.div className="cta-row" {...fadeUp(0.34)}>
            <a className="btn btn-primary" href="#tools">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
              See My Tools
            </a>
            <a className="btn btn-ghost" href="https://github.com/Manubarki" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </motion.div>

          <motion.div className="hero-stats" {...fadeUp(0.42)}>
            <div><div className="stat-num">12+</div><div className="stat-label">AI Tools Built & Building</div></div>
            <div><div className="stat-num">13+</div><div className="stat-label">Years Recruiting</div></div>
            <div><div className="stat-num">10</div><div className="stat-label">Open Source Repos</div></div>
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
