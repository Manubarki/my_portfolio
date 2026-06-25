import { motion } from 'framer-motion';

const projects = [
  { href: 'https://github.com/Manubarki/linkedin-profile-builder', lang: 'HTML', color: '#e34c26', name: 'linkedin-profile-builder', desc: 'AI-powered tool that transforms your LinkedIn profile into a compelling personal brand. Powered by Claude AI with real GitHub data enrichment.', stars: 1 },
  { href: 'https://github.com/Manubarki/repo-extract', lang: 'TypeScript', color: '#3178c6', name: 'repo-extract', desc: 'Search any GitHub repo, extract up to ~2,000 contributors, enrich profiles (company, location, socials, emails), filter by location, and export to CSV.', stars: 1 },
  { href: 'https://github.com/Manubarki/LinkedinProfileScorer', lang: 'JavaScript', color: '#f7df1e', name: 'LinkedinProfileScorer', desc: 'Chrome extension that sits on top of LinkedIn and LinkedIn Recruiter to automatically score candidate profiles. Instant fit score + keyword highlights.', stars: 0 },
  { href: 'https://github.com/Manubarki/SourcingCompass', lang: 'JavaScript', color: '#f7df1e', name: 'SourcingCompass', desc: 'AI talent mapping: given a role, generates target companies with match scores, poachability signals (layoffs, equity, growth), adjacent pools, and wildcard sources.', stars: 0 },
  { href: 'https://github.com/Manubarki/x-ray-sourcing-agent', lang: 'JavaScript', color: '#f7df1e', name: 'x-ray-sourcing-agent', desc: 'Google X-ray search for LinkedIn /in/ profiles via Serper.dev. Runs on demand + automatically every Monday via Vercel Cron. New profiles append to Google Sheets.', stars: 0 },
];

export default function Projects() {
  return (
    <section id="projects" className="p-section" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="inner">
        <motion.div className="tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Open Source</motion.div>
        <motion.h2 className="sec-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>GitHub Projects</motion.h2>
        <motion.p className="sec-sub" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>Everything is open source. Fork it, adapt it, ship it.</motion.p>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              className="proj-card glass"
              href={p.href}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.18)' }}
            >
              <div className="proj-lang">
                <span className="lang-dot" style={{ background: p.color }} />{p.lang}
              </div>
              <div className="proj-name">{p.name}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-foot">
                <span className="proj-stars">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  {p.stars}
                </span>
                <span className="proj-link">View on GitHub →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
