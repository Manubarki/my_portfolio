import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-glow py-12">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">❯</span> Built with ☕ and automation
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
    </footer>
  );
};

export default Footer;
