import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ScrollCompanion() {
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [section, setSection] = useState('hero');

  useEffect(() => {
    const unsub = scrollY.on('change', (latest) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? latest / maxScroll : 0;
      setScrollProgress(progress);

      if (latest < 600) setSection('hero');
      else if (latest < 1600) setSection('tools');
      else if (latest < 2400) setSection('projects');
      else if (latest < 3200) setSection('about');
      else setSection('contact');
    });
    return () => unsub();
  }, [scrollY]);

  const walkY = useTransform(scrollY, [0, document.documentElement.scrollHeight], [0, 200]);
  const bounce = Math.sin(scrollProgress * Math.PI * 4) * 5;

  return (
    <motion.div
      ref={containerRef}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 pointer-events-none"
      style={{ opacity: scrollProgress > 0.05 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div style={{ y: walkY }} className="relative w-20 h-32">
        {/* SVG Anime Character */}
        <svg viewBox="0 0 80 120" className="w-full h-full drop-shadow-lg">
          {/* Head */}
          <circle cx="40" cy="20" r="12" fill="#f9a875" />

          {/* Hair */}
          <path d="M 28 18 Q 25 8 40 5 Q 55 8 52 18" fill="#1a1a2e" />
          <path d="M 32 14 Q 30 10 36 8" stroke="#1a1a2e" strokeWidth="2" fill="none" />
          <path d="M 48 14 Q 50 10 44 8" stroke="#1a1a2e" strokeWidth="2" fill="none" />

          {/* Eyes */}
          <circle cx="35" cy="18" r="2" fill="#0a0a0f" />
          <circle cx="45" cy="18" r="2" fill="#0a0a0f" />
          <circle cx="35.5" cy="17" r="0.8" fill="#fff" />
          <circle cx="45.5" cy="17" r="0.8" fill="#fff" />

          {/* Smile */}
          <path d="M 37 22 Q 40 24 43 22" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Body (blue jacket) */}
          <rect x="28" y="32" width="24" height="28" rx="4" fill="#3b82f6" />

          {/* Jacket collar */}
          <path d="M 30 32 L 28 28 L 32 30 Z" fill="#2c5aa0" />
          <path d="M 50 32 L 52 28 L 48 30 Z" fill="#2c5aa0" />

          {/* Left arm - animated */}
          <g
            style={{
              transform: `rotate(${
                section === 'hero' ? -20 : section === 'tools' ? -60 : section === 'about' ? 40 : 0
              }deg)`,
              transformOrigin: '32px 34px',
              transition: 'transform 0.4s ease-out',
            }}
          >
            <rect x="24" y="34" width="8" height="20" rx="4" fill="#f9a875" />
            <circle cx="28" cy="55" r="4" fill="#f9a875" />
          </g>

          {/* Right arm - holding book/tablet */}
          <g
            style={{
              transform: `rotate(${
                section === 'tools' ? 30 : section === 'projects' ? 25 : section === 'about' ? 35 : 0
              }deg)`,
              transformOrigin: '48px 34px',
              transition: 'transform 0.4s ease-out',
            }}
          >
            <rect x="48" y="34" width="8" height="20" rx="4" fill="#f9a875" />
            <circle cx="52" cy="55" r="4" fill="#f9a875" />
          </g>

          {/* Body accent */}
          <rect x="30" y="35" width="20" height="3" rx="1.5" fill="#60a5fa" opacity="0.6" />

          {/* Legs */}
          <g style={{ transform: `translateY(${bounce}px)` }}>
            <rect x="32" y="60" width="6" height="16" rx="3" fill="#1a1a2e" />
            <rect x="42" y="60" width="6" height="16" rx="3" fill="#1a1a2e" />
            <circle cx="35" cy="77" r="3.5" fill="#2a2a3e" />
            <circle cx="45" cy="77" r="3.5" fill="#2a2a3e" />
          </g>

          {/* Pulse/glow effect for certain sections */}
          {(section === 'hero' || section === 'contact') && (
            <motion.circle
              cx="40"
              cy="20"
              r="12"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              opacity="0.6"
              animate={{ r: [12, 16], opacity: [0.6, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </svg>

        {/* Floating label */}
        {section === 'hero' && (
          <motion.div
            className="absolute -top-8 left-0 right-0 text-center text-xs font-semibold text-purple-300"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            Let's go!
          </motion.div>
        )}
        {section === 'tools' && (
          <motion.div
            className="absolute -top-8 left-0 right-0 text-center text-xs font-semibold text-green-300"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            Cool tools!
          </motion.div>
        )}
        {section === 'projects' && (
          <motion.div
            className="absolute -top-8 left-0 right-0 text-center text-xs font-semibold text-blue-300"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            Open source 🎉
          </motion.div>
        )}
        {section === 'about' && (
          <motion.div
            className="absolute -top-8 left-0 right-0 text-center text-xs font-semibold text-amber-300"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            That's me!
          </motion.div>
        )}
        {section === 'contact' && (
          <motion.div
            className="absolute -top-8 left-0 right-0 text-center text-xs font-semibold text-pink-300"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            Let's chat!
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
