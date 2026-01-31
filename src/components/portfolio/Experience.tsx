import { motion } from "framer-motion";
import { Briefcase, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";

export const Experience = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1 });

  const activities = [
    "experience.activity1",
    "experience.activity2",
    "experience.activity3",
    "experience.activity4",
    "experience.activity5",
  ];

  return (
    <section id="experience" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="gradient-text">{t("experience.title")}</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

              {/* Experience Card */}
              <div className="relative md:pl-20">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary glow hidden md:flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-background" />
                </motion.div>

                <div className="bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-border">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/20">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{t("experience.role")}</h3>
                        <p className="text-muted-foreground">{t("experience.company")}</p>
                      </div>
                      <span className="px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                        {t("experience.period")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      {t("experience.description")}
                    </p>

                  <h4 className="font-semibold mb-4 text-foreground">
                    {t("experience.activitiesTitle")}
                  </h4>     
                                 
                    <ul className="space-y-3">
                      {activities.map((activity, index) => (
                        <motion.li
                          key={activity}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{t(activity)}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
