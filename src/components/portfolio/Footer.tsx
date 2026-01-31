import { motion } from "framer-motion";
import { Heart, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const quickLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rodrigo Abade
          </motion.a>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/rodrigo-abade/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/Abade26"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Abade. {t("footer.rights")}.
          </p>
          <p className="flex items-center gap-1">
            {t("footer.builtWith")} <Heart className="w-4 h-4 text-destructive fill-destructive" /> 
            <span className="gradient-text font-medium">React + Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
