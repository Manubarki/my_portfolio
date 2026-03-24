import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-glow py-12">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
        <p className="text-center text-secondary-foreground">
          Interested in building these tools for your productivity as well?{" "}
          Hit me at{" "}
          <a
            href="mailto:manulb9@gmail.com"
            className="text-primary font-semibold hover:underline"
          >
            manulb9@gmail.com
          </a>
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 pt-4 border-t border-glow">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">❯</span> Built with <span className="text-2xl">☕</span> and automation
          </p>
        <a
          href="https://www.linkedin.com/in/manubarki/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          linkedin.com/in/manubarki
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
