import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    key: "backend",
    skills: [
      { name: "C#", icon: "💜" },
      { name: ".NET", icon: "🟣" },
      { name: "APIs REST", icon: "🔗" },
      { name: "ASP.NET Core", icon: "🔗" },
      { name: "ASP.NET WebForms", icon: "🔗" },
      { name: "Windows Worker Service", icon: "⚙️" },
      { name: "Entity Framework Core", icon: "⚙️" },
      { name: "NHibernate", icon: "⚙️" },
      { name: "Fluent NHibernate", icon: "⚙️" },
    ],
  },
  {
    key: "database",
    skills: [
      { name: "SQL Server", icon: "🗄️" },
      { name: "Data Modeling", icon: "📊" },
      { name: "LINQ", icon: "🗄️" },
      { name: "QueryOver", icon: "🗄️" },
      { name: "Migrations (EF Core)", icon: "📊" },
    ],
  },
  {
    key: "other",
    skills: [
      { name: "Legacy Systems", icon: "🔧" },
      { name: "Active Directory / LDAP", icon: "🔐" },
      { name: "System Integration", icon: "🔄" },
      { name: "Business Logic", icon: "💡" },
      { name: "Version Control", icon: "📝" },
      { name: "Git / GitHub", icon: "🔧" },
    ],
  },
];

const learningSkills = [{ name: "Docker", icon: "🐳" }];

export const Skills = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
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
              <span className="gradient-text">{t("skills.title")}</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {t(`skills.${category.key}`)}
                  </h3>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-4 py-2 text-sm flex items-center gap-2 cursor-default hover:bg-primary/20 transition-colors"
                        >
                          <span>{skill.icon}</span>
                          <span>{skill.name}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning / in-progress skills — visually distinct from mastered skills */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="max-w-6xl mx-auto mt-8"
          >
            <div className="relative bg-card/50 rounded-2xl p-6 border border-dashed border-border">
              <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">
                {t("skills.learning")}
              </h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {learningSkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm flex items-center gap-2 cursor-default opacity-70 border-dashed"
                    >
                      <span>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          */}

          {/* Tech logos/icons strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 flex justify-center items-center gap-8 md:gap-16 flex-wrap"
          >
            {[".NET", "C#", "SQL", "REST", "Git"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 0.5, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="text-2xl md:text-3xl font-bold text-muted-foreground cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};