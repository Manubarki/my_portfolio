import { motion } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 container max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >

          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient-primary">Manu Barki</span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-foreground max-w-2xl leading-relaxed">
            I don't just hire engineers.{" "} I{" "}
            <span className="text-primary font-semibold">build the machines that find them</span>.
            More than a decade in recruiting, I learnt one thing - the best hires never come from job boards.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 text-base text-muted-foreground font-mono">
            <span className="px-3 py-1.5 rounded-md bg-secondary border border-glow">
              🏢 Talent @ Atlan
            </span>
            <span className="px-3 py-1.5 rounded-md bg-secondary border border-glow">
              📍 Bangalore
            </span>
          </div>

          <motion.a
            href="https://www.linkedin.com/in/manubarki/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
