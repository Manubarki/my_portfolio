import { motion } from "framer-motion";

import projectAiFit from "@/assets/project-ai-fit.png";
import projectXray from "@/assets/project-xray.png";
import projectGithub from "@/assets/project-github.png";

interface ProjectCardProps {
  emoji: string;
  title: string;
  techBadge: string;
  techColor: string;
  bullets: string[];
  image: string;
  index: number;
}

const ProjectCard = ({ emoji, title, techBadge, techColor, bullets, image, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-xl border border-glow bg-card overflow-hidden hover:glow-primary transition-all duration-500"
    >
      {/* Project screenshot */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 p-6 md:p-8 space-y-4">
        <div className="flex items-start justify-between">
          <span className="text-4xl">{emoji}</span>
          <span
            className="px-3 py-1 rounded-full text-xs font-mono font-semibold border"
            style={{
              color: techColor,
              borderColor: `${techColor}40`,
              backgroundColor: `${techColor}10`,
            }}
          >
            {techBadge}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">
          {title}
        </h3>

        <ul className="space-y-2.5">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-secondary-foreground text-sm md:text-base">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const projects = [
  {
    emoji: "⚡",
    title: "AI Fit Scoring Chrome Extension",
    techBadge: "Claude + Gemini",
    techColor: "#a855f7",
    image: projectAiFit,
    bullets: [
      "Instantly scores candidate fit against job requirements",
      "Explains why they match with detailed reasoning",
      "Highlights relevant keywords on LinkedIn and any ATS",
      "Cuts profile screening time dramatically",
    ],
  },
  {
    emoji: "🌐",
    title: "Automated Google X-ray Engine",
    techBadge: "Google Apps Script",
    techColor: "#22c55e",
    image: projectXray,
    bullets: [
      "Runs daily in the background - zero manual effort",
      "Appends fresh profiles automatically to pipeline",
      "Removes duplicates by default",
      "Pipeline grows while I sleep",
    ],
  },
  {
    emoji: "🐙",
    title: "GitHub Repo Miner",
    techBadge: "n8n + GitHub",
    techColor: "#f97316",
    image: projectGithub,
    bullets: [
      "Finds top repositories by technology and stars",
      "Extracts repo owners and contributor profiles",
      "Builds clean outbound lists beyond LinkedIn",
      "Surfaces engineers who ship real code",
    ],
  },
];

const Projects = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 space-y-6"
        >
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">❯</span> projects.list()
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-display">
            I stopped sourcing manually.{" "}
            <span className="text-gradient-primary">I built systems</span> ⚙️
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Tired of spending hours screening hundreds of profiles, repeating the same
            X-ray searches weekly, and missing great engineers who aren't active on LinkedIn.
            So I automated it all.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
