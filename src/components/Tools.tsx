import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const marqueeItems = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, label: 'CNCF GitHub Search' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>, label: 'MAD Landscape' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, label: 'GitHub Repo Search' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>, label: 'Sourcing Compass' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>, label: 'Profile Scorer' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, label: 'LI Recruiter Skill' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, label: 'CloserIQ' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>, label: 'Atlan Warm Connections' },
];

function ToolCard({ href, children, wide, index = 0 }: { href?: string; children: React.ReactNode; wide?: boolean; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let shine: HTMLDivElement | null = el.querySelector('.tilt-shine');
    if (!shine) {
      shine = document.createElement('div');
      shine.className = 'tilt-shine';
      el.appendChild(shine);
    }
    const s = shine;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 14}deg) translateZ(6px)`;
      s.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.11), transparent 65%)`;
      s.style.opacity = '1';
    };
    const onLeave = () => { el.style.transform = ''; s.style.opacity = '0'; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, []);

  const cls = `tool-card glass tilt-card glint-card${wide ? ' wide' : ''}`;
  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={cls}
        href={href}
        target="_blank"
        rel="noopener"
        style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.div
      ref={ref}
      className={cls}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Tools() {
  const all = [...marqueeItems, ...marqueeItems];
  return (
    <section id="tools" className="p-section">
      <div className="inner">
        <motion.div className="tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>AI Toolkit</motion.div>
        <motion.h2 className="sec-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Tools I've built for recruiting</motion.h2>
        <motion.p className="sec-sub" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>Every tool solves a real problem I hit daily — from sourcing to closing, for both engineering and GTM roles.</motion.p>

        <div className="marquee-wrap" aria-hidden="true">
          <div className="marquee-track">
            {all.map((item, i) => (
              <span key={i} className="marquee-item">{item.icon}{item.label}</span>
            ))}
          </div>
        </div>

        <div className="bento">
          <ToolCard href="https://cncf-repo-search.lovable.app/" index={0}>
            <div className="tc-top">
              <div className="tc-icon" style={{ background: 'rgba(52,211,153,0.1)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <span className="tc-badge badge-live">↗ Live Tool</span>
            </div>
            <div className="tc-name">CNCF GitHub Search</div>
            <div className="tc-desc">Search cloud-native open-source contributors across all CNCF projects on GitHub, ranked by commit activity.</div>
            <div className="tc-use"><strong>Engineering</strong>Hiring a Senior Kubernetes engineer? Surface top contributors to Kubernetes, Istio, or Prometheus repos.</div>
          </ToolCard>

          <ToolCard href="https://madscape.lovable.app/" index={1}>
            <div className="tc-top">
              <div className="tc-icon" style={{ background: 'rgba(96,165,250,0.1)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <span className="tc-badge badge-live">↗ Live Tool</span>
            </div>
            <div className="tc-name">MAD Landscape Search</div>
            <div className="tc-desc">Access ML, Data, and AI company lists with GitHub and X-ray search capabilities for instant target company mapping.</div>
            <div className="tc-use"><strong>GTM</strong>Building an AE target list for AI/ML? Map sellers from Databricks, Snowflake, and dbt in seconds.</div>
          </ToolCard>

          <ToolCard href="https://manubarki.github.io/repo-extract/" index={2}>
            <div className="tc-top">
              <div className="tc-icon" style={{ background: 'rgba(167,139,250,0.1)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ color: '#a78bfa' }} aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <span className="tc-badge badge-live">↗ Live Tool</span>
            </div>
            <div className="tc-name">GitHub Repo Search</div>
            <div className="tc-desc">Search top contributors within any GitHub repository — ranked with profiles, public emails, and contribution stats.</div>
            <div className="tc-use"><strong>Engineering</strong>Drop any repo URL (e.g. Apache Iceberg) and get a ranked shortlist ready to reach out to.</div>
          </ToolCard>

          <ToolCard href="https://sourcing-compass-lake.vercel.app" wide index={3}>
            <div className="tc-top">
              <div className="tc-icon" style={{ background: 'rgba(244,114,182,0.1)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              </div>
              <span className="tc-badge badge-live">↗ Live Tool</span>
            </div>
            <div className="tc-name">Sourcing Compass</div>
            <div className="tc-desc">AI-powered talent mapping. Paste a JD and get target companies, adjacent talent pools, wildcard bets, and title variations — with relevance, talent density, and poachability scores.</div>
            <div className="tc-use"><strong>Engineering & GTM</strong>Works for Principal AI Engineers as well as Enterprise AE searches across North America. One tool, both motions.</div>
          </ToolCard>

          <ToolCard index={4}>
            <div className="tc-top">
              <div className="tc-icon" style={{ background: 'rgba(96,165,250,0.1)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <span className="tc-badge badge-ext">Chrome Extension</span>
            </div>
            <div className="tc-name">LinkedIn / Ashby Profile Scorer</div>
            <div className="tc-desc">Instant AI scoring on LinkedIn and Ashby — fit score, summary, and keyword highlights in one click without leaving the page.</div>
            <div className="tc-use"><strong>Screening</strong>200+ inbound applicants? Surface the top 20 in under an hour instead of a full day.</div>
          </ToolCard>

          <ToolCard index={5}>
            <div className="tc-top">
              <div className="tc-icon" style={{ background: 'rgba(167,139,250,0.1)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <span className="tc-badge badge-skill">Claude Skill</span>
            </div>
            <div className="tc-name">LinkedIn Recruiter Search</div>
            <div className="tc-desc">A Claude skill that drives LinkedIn Recruiter — builds the boolean, applies filters, returns a shortlist and Excel file for the hiring manager.</div>
            <div className="tc-use"><strong>Automation</strong>Paste intake notes into Claude. The skill handles the boolean, filters, shortlist, and export.</div>
          </ToolCard>

          <ToolCard index={6}>
            <div className="tc-top">
              <div className="tc-icon" style={{ background: 'rgba(251,191,36,0.1)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <span className="tc-badge badge-skill">Claude Skill</span>
            </div>
            <div className="tc-name">CloserIQ</div>
            <div className="tc-desc">Build a closing strategy at the offer stage. Pulls motivations, likely objections, talking points, and a step-by-step closing plan.</div>
            <div className="tc-use"><strong>Offer Stage</strong>Finalist weighing two offers? CloserIQ builds a tailored plan for the hiring manager to win them over.</div>
          </ToolCard>

          <ToolCard index={7}>
            <div className="tc-top">
              <div className="tc-icon" style={{ background: 'rgba(52,211,153,0.1)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <span className="tc-badge badge-ext">Chrome Extension</span>
            </div>
            <div className="tc-name">Atlan Warm Connections</div>
            <div className="tc-desc">Suggest Atlanians who are alumni of a target company — so every outreach starts warm, not cold.</div>
            <div className="tc-use"><strong>Outreach</strong>Before sending that InMail, find out which Atlanian already knows this person.</div>
          </ToolCard>
        </div>
      </div>
    </section>
  );
}
