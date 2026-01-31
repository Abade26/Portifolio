import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";

export const About = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="gradient-text">{t("about.title")}</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-accent/30 rounded-br-lg" />

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t("about.description")}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {t("about.stats.experience")}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text">.NET</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {t("about.stats.specialization")}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 }}
                  className="text-center col-span-2 md:col-span-1"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {t("about.stats.systems")}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
