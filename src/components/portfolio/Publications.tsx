import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
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

const publications = [
  {
    key: "pub1",
    icon: BookOpen,
    tags: ["doi", "ai", "computerVision", "raspberryPi"],
    doiUrl: "https://doi.org/10.51189/ii-conapec/70773",
  },
];

export const Publications = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="publications" ref={ref} className="py-20 md:py-32">
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
              <span className="gradient-text">{t("publications.title")}</span>
            </motion.h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
                whileHover={{ y: -5 }}
                className={`group w-full max-w-xl mx-auto ${
                  publications.length === 1 ? "md:col-span-2" : ""
                }`}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Top accent */}
                  <div className="h-1 bg-gradient-to-r from-primary to-accent" />

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      >
                        <pub.icon className="w-6 h-6 text-primary" />
                      </motion.div>

                      {/* External link */}
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a
                          href={pub.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Ver publicação"
                          className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </a>
                      </div>
                    </div>

                    {/* Title */}
                    <CardTitle className="mt-4 group-hover:text-primary transition-colors">
                      {t(`publications.${pub.key}.title`)}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {t(`publications.${pub.key}.description`)}
                    </CardDescription>
                  </CardHeader>

                  {/* Tags */}
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: 0.5 + index * 0.15 + tagIndex * 0.05,
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          >
                            {t(`publications.tags.${tag}`)}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* DOI */}
                    <div className="mt-4 text-sm text-muted-foreground">
                      DOI:{" "}
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-primary transition-colors break-all"
                      >
                        10.51189/ii-conapec/70773
                      </a>
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