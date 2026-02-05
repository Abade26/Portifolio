import { motion } from "framer-motion";
import { ExternalLink, Settings, Wrench, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
    {
    key: "project3",
    icon: Wrench,
    tags: ["python","ia","visaoComputacional","yolo","raspberry","deepLearning"],
    demoUrl: "https://www.youtube.com/watch?v=gwSmVQ5t_iU",
    repoUrl: "https://github.com/Abade26/Deteccao-IA-Rachadura",
  },
  {
    key: "project4",
    icon: Wrench,
    tags: ["c++", "iot","sistemasEmbarcados","esp8266","sensores","monitoramento","cloud"],
    repoUrl: "https://github.com/Abade26/Sistemas_Digitais_Monitoramento-Ar",
  },
  {
    key: "project5",
    icon: Wrench,
    tags: ["html", "css", "javascript", "firebase", "webSystem"],
    repoUrl: "https://github.com/Abade26/Tela-principal-PsicoConnect",
  },
  {
    key: "project1",
    icon: Settings,
    tags: ["automation", "backgroundService", "dotnet", "sqlServer"],
  },
  {
    key: "project2",
    icon: Wrench,
    tags: ["dotnet", "sqlServer", "maintenance", "optimization"],
  },
];

export const Projects = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="gradient-text">
                {t("projects.title")}
              </span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Accent */}
                  <div className="h-1 bg-gradient-to-r from-primary to-accent" />

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      >
                        <project.icon className="w-6 h-6 text-primary" />
                      </motion.div>

                      {/* Links (Video + GitHub) */}
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Ver demonstração"
                            className="p-2 rounded-lg hover:bg-secondary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 text-muted-foreground" />
                          </a>
                        )}

                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Ver código no GitHub"
                            className="p-2 rounded-lg hover:bg-secondary transition-colors"
                          >
                            <Github className="w-4 h-4 text-muted-foreground" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title / Description */}
                    <CardTitle className="mt-4 group-hover:text-primary transition-colors">
                      {t(`projects.${project.key}.title`)}
                    </CardTitle>

                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {t(`projects.${project.key}.description`)}
                    </CardDescription>
                  </CardHeader>

                  {/* Tags */}
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            inView ? { opacity: 1, scale: 1 } : {}
                          }
                          transition={{
                            delay:
                              0.5 +
                              index * 0.15 +
                              tagIndex * 0.05,
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          >
                            {t(`projects.tags.${tag}`)}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
