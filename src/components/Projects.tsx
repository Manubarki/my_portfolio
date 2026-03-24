import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import projectGithub from "@/assets/project-github.png";
import projectXray from "@/assets/project-xray.png";
import projectAiFit from "@/assets/project-ai-fit.png";
import projectSysdesign from "@/assets/project-sysdesign.png";
import projectCompass from "@/assets/project-sourcing-compass.jpg";
import projectOutbound from "@/assets/project-outbound.jpg";

interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
  techBadge: string;
  techColor: string;
  bullets: string[];
  image?: string;
  index: number;
  githubUrl?: string;
  liveUrl?: string;
  techStack: string[];
}

const ProjectCard = ({ emoji, title, description, techBadge, techColor, bullets, image, index, githubUrl, liveUrl, techStack }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-xl border border-glow bg-card overflow-hidden hover:glow-primary transition-all duration-500 flex flex-col md:flex-row"
    >
      {/* Project screenshot */}
      {image && (
        <div className="relative overflow-hidden md:w-72 shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card to-transparent" />
        </div>
      )}

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 p-6 md:p-8 space-y-4 flex-1">
        <div className="flex items-start justify-between">
          <span className="text-4xl">{emoji}</span>
          <div className="flex items-center gap-2">
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
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
            {description}
          </p>
        </div>

        <ul className="space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-secondary-foreground text-sm md:text-base">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {techStack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-md text-xs font-mono bg-muted text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const projects: Omit<ProjectCardProps, "index">[] = [
  {
    emoji: "🧭",
    title: "SourcingCompass",
    description: "AI-powered talent mapping tool that generates a complete sourcing strategy in under 30 seconds — target companies, poachability signals, adjacent talent pools, and LinkedIn search titles.",
    techBadge: "AI Agent",
    techColor: "#a855f7",
    image: projectCompass,
    githubUrl: "https://github.com/Manubarki/SourcingCompass",
    liveUrl: "https://sourcing-compass-lake.vercel.app",
    techStack: ["JavaScript", "OpenAI", "Vercel"],
    bullets: [
      "Generates target companies with match confidence, talent density, and poachability scores",
      "Surfaces adjacent talent pools and wildcard bets most recruiters miss",
      "Shows poachability signals — layoffs, equity cliffs, slow growth — with specific reasoning",
      "Recommends exact LinkedIn job titles to search, mapped to real company usage",
    ],
  },
  {
    emoji: "⚡",
    title: "LinkedIn Profile Scorer",
    description: "Chrome extension that sits on top of LinkedIn and LinkedIn Recruiter to automatically score candidate profiles against your hiring criteria in real time.",
    techBadge: "Chrome Extension",
    techColor: "#3b82f6",
    image: projectAiFit,
    githubUrl: "https://github.com/Manubarki/LinkedinProfileScorer",
    techStack: ["JavaScript", "Chrome API", "Claude / Gemini"],
    bullets: [
      "Analyzes headline, experience, skills, and about section against your job requirements",
      "Assigns a fit score with detailed reasoning on why they match or don't",
      "Highlights matching and missing keywords directly on the LinkedIn profile page",
      "Works on both LinkedIn and LinkedIn Recruiter — no context switching needed",
    ],
  },
  {
    emoji: "🌐",
    title: "X-Ray Sourcing Agent",
    description: "Automated Google X-ray search engine for LinkedIn profiles. Runs on demand via a UI and automatically every Monday via Vercel Cron, appending fresh profiles to a Google Sheet.",
    techBadge: "Serper + Vercel Cron",
    techColor: "#22c55e",
    image: projectXray,
    githubUrl: "https://github.com/Manubarki/x-ray-sourcing-agent",
    liveUrl: "https://x-ray-souring-agent.vercel.app",
    techStack: ["JavaScript", "Serper.dev", "Google Sheets API", "Vercel Cron"],
    bullets: [
      "Runs weekly cron jobs — zero manual effort, pipeline grows on autopilot",
      "Extracts LinkedIn /in/ profiles via Google X-ray Boolean queries",
      "Auto-appends new profiles to Google Sheets with SHA-1 deduplication",
      "Configurable queries, pages, and schedule via environment variables",
    ],
  },
  {
    emoji: "🐙",
    title: "Repo Extract",
    description: "Search any GitHub repo, extract up to ~2,000 contributors, enrich their profiles with company, location, socials, and emails — then export everything to CSV.",
    techBadge: "GitHub API",
    techColor: "#f97316",
    image: projectGithub,
    githubUrl: "https://github.com/Manubarki/repo-extract",
    liveUrl: "https://manubarki.github.io/repo-extract/",
    techStack: ["TypeScript", "React", "GitHub API"],
    bullets: [
      "Searches repos by keyword, owner, or name — sorted by stars with pagination",
      "Extracts all contributors with enriched profiles: name, bio, company, location, socials",
      "Bulk email discovery using commit data and event history",
      "Location-based filtering and one-click CSV export of the full dataset",
    ],
  },
  {
    emoji: "📨",
    title: "OutboundAssist",
    description: "AI-powered outbound messaging assistant that drafts personalized outreach messages for candidates based on their profile data and the role context.",
    techBadge: "AI + Automation",
    techColor: "#ec4899",
    image: projectOutbound,
    techStack: ["n8n", "OpenAI", "Google Sheets"],
    bullets: [
      "Generates hyper-personalized outreach based on candidate profile and role fit",
      "Pulls context from sourced candidate data to craft relevant messages",
      "Supports multiple outreach channels — email, LinkedIn InMail, and more",
      "Batch processing for high-volume outbound campaigns",
    ],
  },
  {
    emoji: "🧠",
    title: "System Design Interview Evaluator",
    description: "AI agent that reviews system design interview transcripts and outputs structured Hire / No Hire decisions with rubric-based ratings and level recommendations.",
    techBadge: "Glean Agent",
    techColor: "#6366f1",
    image: projectSysdesign,
    techStack: ["Glean", "AI Agent", "Rubric Engine"],
    bullets: [
      "Reviews full interview transcripts and outputs Hire / No Hire decisions",
      "Rubric-based ratings across 6 dimensions including AI/ML skills",
      "Recommends level signal from P4 to P7 with confidence scoring",
      "Flags evidence gaps and suggests follow-up questions for the debrief",
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

        <div className="grid gap-6 grid-cols-1">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
