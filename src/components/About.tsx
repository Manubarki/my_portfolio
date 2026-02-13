import { motion } from "framer-motion";
import { Briefcase, Users, Handshake } from "lucide-react";

const milestones = [
  { company: "Atlan", role: "Principal Recruiter → Talent Partner", detail: "Building Product, Design & Engineering teams for startups to global enterprises" },
  { company: "Microsoft IDC", role: "High-velocity hiring", detail: "Scaled engineering teams at India Development Center" },
  { company: "Akamai", role: "Niche engineering", detail: "Sourced specialized talent for core networking & security teams" },
  { company: "CareerNet", role: "Custom talent builds", detail: "Delivered for fast-growing startups and large R&D orgs" },
];

const About = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-6"
        >
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">❯</span> about.read()
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-display">
            More than a recruiter —{" "}
            <span className="text-gradient-primary">a talent partner</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-secondary-foreground leading-relaxed"
          >
            <p className="text-lg">
              I help founders, product leaders, and engineering heads solve the hard hiring
              problems — and build teams that actually move the needle.
            </p>
            <p>
              At <span className="text-foreground font-semibold">Atlan</span>, I've grown
              from Principal Recruiter to Talent Partner, working shoulder-to-shoulder with
              leadership to build strong Product, Design, and Engineering teams that support
              everything from early-stage startups to global enterprises.
            </p>
            <p>
              Before Atlan, I cut my teeth across high-speed hiring at{" "}
              <span className="text-foreground font-semibold">Microsoft's India Development Center</span>,
              niche engineering teams at{" "}
              <span className="text-foreground font-semibold">Akamai</span>, and custom
              talent builds at{" "}
              <span className="text-foreground font-semibold">CareerNet</span> for
              fast-growing startups and large R&D orgs. Along the way, I learned how to
              spot — and engage — great talent before anyone else does.
            </p>
            <p>
              I see recruitment as a long-term partnership. I care deeply about candidate
              experience, inclusive hiring, and building trust with stakeholders — so every
              hire feels thoughtful, not rushed.
            </p>
            <p className="text-primary font-semibold">
              If you're building a team that needs to scale and innovate, let's connect.
            </p>
          </motion.div>

          {/* Values + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  viewport={{ once: true }}
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
                    <p className="text-sm text-primary font-mono">{m.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">{m.detail}</p>
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
