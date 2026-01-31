import { motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    key: "email",
    icon: Mail,
    href: "mailto:rodrigoabadedev@gmail.com",
    value: "rodrigoabadedev@gmail.com",
    color: "primary",
  },
  {
    key: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rodrigo-abade/",
    value: "https://www.linkedin.com/in/rodrigo-abade/",
    color: "accent",
  },
  {
    key: "whatsapp",
    icon: MessageCircle,
    href: "https://wa.me/5571992511721",
    value: "+55 (71) 99251-1721",
    color: "primary",
  },
];

export const Contact = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="gradient-text">{t("contact.title")}</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground"
            >
              {t("contact.subtitle")}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.key}
                href={contact.href}
                target={contact.key !== "email" ? "_blank" : undefined}
                rel={contact.key !== "email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 text-center h-full">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4"
                    >
                      <contact.icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    <h3 className="text-lg font-semibold mb-2">
                      {t(`contact.${contact.key}`)}
                    </h3>

                    <p className="text-sm text-muted-foreground break-all">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="gap-2 glow"
              onClick={() => window.open("mailto:rodrigoabadedev@gmail.com")}
            >
              <Send className="w-4 h-4" />
              {t("hero.contact")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
