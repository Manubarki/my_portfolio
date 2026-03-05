import { motion } from "framer-motion";
import { Briefcase, Users, Handshake } from "lucide-react";

const milestones = [
  { company: "Atlan", period: "Jun 2023 – Present", role: "Recruiter → Lead Recruiter → Talent Partner", detail: "Building Product, Design & Engineering teams for startups to global enterprises", achievements: ["Product team 6→15, Design 3→10, Frontend Eng 2→8", "7-8 senior roles (P4+ incl. Director) closed per quarter", "4/4 performance rating & promotion within first year"] },
  { company: "Microsoft", period: "May 2021 – May 2023", role: "Recruiter, PM/UX Orgs", detail: "Scaled engineering teams at India Development Center", achievements: ["Doubled offer output YoY", "Offer decline rate <10% for 2 consecutive years", "Established new team in India from scratch"] },
  { company: "Akamai", period: "Jan 2018 – May 2021", role: "Talent Acquisition Specialist II", detail: "Sourced specialized talent for core networking & security teams", achievements: ["Spot award for filling niche senior security roles", "First Prize: Selling Pitch Script Development", "Led GitHub search & diversity sourcing initiatives"] },
  { company: "CareerNet", period: "Apr 2013 – Jan 2018", role: "Custom talent builds", detail: "Delivered for fast-growing startups and large R&D orgs" },
];

const About = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 space-y-6"
        >
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">❯</span> about.read()
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-display">
            More than a recruiter -{" "}
            <span className="text-gradient-primary">a talent partner</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 text-secondary-foreground leading-relaxed"
          >
            <p className="text-lg">
              I help founders, product leaders, and engineering heads solve the hard hiring
              problems — and build teams that actually move the needle.
            </p>
            <p>
              At <span className="text-foreground font-semibold">Atlan</span> (since 2023), I was promoted to Lead Recruiter within my first year — scaling the Product team from 6 to 15, Design from 3 to 10, and Frontend Engineering from 2 to 8 in a single quarter. I consistently close 7-8 senior roles (P4+ including Director) per quarter.
            </p>
            <p>
              Before Atlan, I doubled offer output at{" "}
              <span className="text-foreground font-semibold">Microsoft</span> (2021-2023) while keeping decline rates under 10%, earned a spot award at{" "}
              <span className="text-foreground font-semibold">Akamai</span> (2018-2021) for filling niche senior security roles, and delivered custom talent builds at{" "}
              <span className="text-foreground font-semibold">CareerNet</span> for
              fast-growing startups and large R&D orgs.
            </p>
            <p>
              I see recruitment as a long-term partnership. I care deeply about candidate
              experience, inclusive hiring, and building trust with stakeholders - so every
              hire feels thoughtful, not rushed.
            </p>
            <p className="text-primary font-semibold">
              If you're building a team that needs to scale and innovate, let's connect.
            </p>
          </motion.div>

          {/* Values + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Values */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Briefcase, label: "12+ Years\nTech Hiring" },
                { icon: Users, label: "Advanced\nSourcing" },
                { icon: Handshake, label: "AI\nNative" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-lg border border-glow bg-card p-4 text-center"
                >
                  <Icon className="w-6 h-6 text-primary" />
                  <span className="text-xs font-mono text-muted-foreground whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Journey */}
            <div className="space-y-4">
              <h3 className="font-mono text-sm text-muted-foreground">// journey</h3>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.company}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-1" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="font-semibold text-foreground">{m.company}</p>
                    <p className="text-xs text-muted-foreground font-mono">{m.period}</p>
                    <p className="text-sm text-primary font-mono">{m.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">{m.detail}</p>
                    {m.achievements && (
                      <ul className="mt-2 space-y-1">
                        {m.achievements.map((a, j) => (
                          <li key={j} className="flex items-start gap-1.5 text-xs text-secondary-foreground">
                            <span className="text-primary mt-0.5 shrink-0">✦</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
