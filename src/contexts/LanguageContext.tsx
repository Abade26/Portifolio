import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.title": "Desenvolvedor .NET",
    "hero.tagline": "Transformando ideias em soluções escaláveis e eficientes",
    "hero.downloadCV": "Baixar CV",
    "hero.contact": "Entrar em Contato",

    // About
    "about.title": "Sobre Mim",
    "about.description": "Sou Desenvolvedor .NET com experiência no desenvolvimento e evolução de sistemas, atuando principalmente no back-end. Trabalho com .NET Core, criação de serviços em background (Worker Services) e Entity Framework Core para acesso e manipulação de dados. Tenho foco em código limpo, boas práticas de arquitetura e soluções que automatizam processos e aumentam a eficiência dos sistemas.",
    "about.stats.experience": "Anos de experiência",
    "about.stats.specialization": "Especialização",
    "about.stats.systems": "Sistemas desenvolvidos",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.backend": "Back-end",
    "skills.database": "Banco de Dados",
    "skills.other": "Outras Habilidades",
    "skills.pratices": "Práticas de desenvolvimento",

    // Experience
    "experience.title": "Experiência Profissional",
    "experience.role": "Desenvolvedor .NET",
    "experience.company": "Ministério Público",
    "experience.period": "02/2024 - 12/2025",
    "experience.description": "Atuação no desenvolvimento e evolução de sistemas institucionais.",
    "experience.activity1": "Desenvolvimento e manutenção de sistemas internos",
    "experience.activity2": "Implementação de novas funcionalidades baseadas em regras de negócio",
    "experience.activity3": "Correções de bugs e melhoria de performance",
    "experience.activity4": "Criação de serviços automatizados",
    "experience.activity5":"Participação no projeto de desativação automática de estagiários e voluntários",
    "experience.activitiesTitle": "Principais atividades:",

    // Projects
    "projects.title": "Projetos",
    "projects.project1.title": "Serviço de Desativação Automática",
    "projects.project1.description": "Sistema automatizado responsável por desativar registros de estagiários e voluntários com base em regras administrativas, reduzindo trabalho manual e falhas operacionais.",
    "projects.project2.title": "Manutenção e Evolução de Sistemas Institucionais",
    "projects.project2.description":"Atuação contínua na melhoria de sistemas internos, implementando novas funcionalidades, correções e otimizações.",
    "projects.project3.title":"Walleye - Detecção Inteligente de Rachaduras Estruturais com IA",
    "projects.project3.description":"Sistema de detecção de rachaduras estruturais utilizando Inteligência Artificial e Raspberry Pi. A solução realiza inspeções em tempo real com visão computacional, enviando alertas automáticos e permitindo monitoramento remoto via interface web.",
    "projects.project4.title": "Monitoramento de Gases com MQ-135/MQ-7",
    "projects.project4.description":"Sistema IoT para monitoramento de qualidade do ar com ESP8266, sensores MQ-135 e MQ-7 e display OLED. O dispositivo coleta leituras periódicas, classifica a qualidade do ar e envia os dados para Supabase e ThingSpeak para armazenamento e visualização remota.",

    // Project tags
    "projects.tags.automation": "Automação",
    "projects.tags.backgroundService": "Serviço em Background",
    "projects.tags.dotnet": ".NET",
    "projects.tags.sqlServer": "SQL Server",
    "projects.tags.maintenance": "Manutenção",
    "projects.tags.optimization": "Otimização",

    "projects.tags.python": "Python",
    "projects.tags.ia": "IA",
    "projects.tags.visaoComputacional": "Visão Computacional",
    "projects.tags.yolo": "YOLOv8",
    "projects.tags.raspberry": "Raspberry Pi",
    "projects.tags.deepLearning": "Deep Learning",
    "projects.tags.c++": "C++",

    // IoT project tags
    "projects.tags.iot": "IoT",
    "projects.tags.sistemasEmbarcados": "Sistemas Embarcados",
    "projects.tags.esp8266": "ESP8266",
    "projects.tags.sensores": "Sensores",
    "projects.tags.monitoramento": "Monitoramento em Tempo Real",
    "projects.tags.cloud": "Cloud / Nuvem",

    "projects.project5.title": "PsicoConnect – Plataforma Web para Atendimento Psicológico",
    "projects.project5.description":"Plataforma web desenvolvida para simular um sistema real de atendimento psicológico, com múltiplos perfis, especialidades e chat em tempo real. Projeto focado em organização, modularização e escalabilidade.",
    "projects.tags.html": "HTML",
    "projects.tags.css": "CSS",
    "projects.tags.javascript": "JavaScript",
    "projects.tags.firebase": "Firebase",
    "projects.tags.webSystem": "Sistema Web",


    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Vamos conversar sobre seu próximo projeto",
    "contact.email": "E-mail",
    "contact.linkedin": "LinkedIn",
    "contact.whatsapp": "WhatsApp",

    // Footer
    "footer.rights": "Todos os direitos reservados",
    "footer.builtWith": "Desenvolvido com",
  },

  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.title": ".NET Developer",
    "hero.tagline": "Transforming ideas into scalable and efficient solutions",
    "hero.downloadCV": "Download CV",
    "hero.contact": "Get in Touch",

    // About
    "about.title": "About Me",
    "about.description": "I am a .NET Developer with experience in the development and evolution of systems, working primarily on the back end. I work with .NET Core, building background services (Worker Services), and using Entity Framework Core for data access and manipulation. I focus on clean code, good architectural practices, and solutions that automate processes and improve system efficiency.",
    "about.stats.experience": "Years of experience",
    "about.stats.specialization": "Specialization",
    "about.stats.systems": "Systems developed",

    // Skills
    "skills.title": "Technical Skills",
    "skills.backend": "Back-end",
    "skills.database": "Database",
    "skills.other": "Other Skills",
    "skills.pratices": "Dev Practices",

    // Experience
    "experience.title": "Professional Experience",
    "experience.role": ".NET Developer",
    "experience.company": "Public Prosecutor's Office",
    "experience.period": "02/2024 - 12/2025",
    "experience.description": "Working on the development and evolution of institutional systems.",
    "experience.activity1": "Development and maintenance of internal systems",
    "experience.activity2": "Implementation of new features based on business rules",
    "experience.activity3": "Bug fixes and performance improvements",
    "experience.activity4": "Creation of automated services",
    "experience.activity5": "Participation in the automatic deactivation project for interns and volunteers",
    "experience.activitiesTitle": "Main activities:",

    // Projects
    "projects.title": "Projects",

    "projects.project1.title": "Automatic Deactivation Service",
    "projects.project1.description": "Automated system responsible for deactivating intern and volunteer records based on administrative rules, reducing manual work and operational failures.",

    "projects.project2.title":
      "Maintenance and Evolution of Institutional Systems",
    "projects.project2.description":
      "Continuous work on improving internal systems, implementing new features, fixes and optimizations.",

    "projects.project3.title":
      "Walleye - Smart Structural Crack Detection with AI",
    "projects.project3.description":
      "Structural crack detection system using AI and Raspberry Pi. The solution performs real-time inspections with computer vision, sends automatic alerts, and enables remote monitoring through a web interface.",

    "projects.project4.title": "IoT Air Quality Monitoring System",
    "projects.project4.description":
    "IoT system for air quality monitoring using ESP8266, MQ-135 and MQ-7 sensors, OLED display and cloud integration with Supabase and ThingSpeak.",

    "projects.project5.title": "PsicoConnect – Web Platform for Psychological Care",
    "projects.project5.description":
    "Web platform built to simulate a real psychological care system, with multiple profiles, specialties and real-time chat. Project focused on organization, modularization and scalability.",
    "projects.tags.html": "HTML",
    "projects.tags.css": "CSS",
    "projects.tags.javascript": "JavaScript",
    "projects.tags.firebase": "Firebase",
    "projects.tags.webSystem": "Web System",

    // Project tags
    "projects.tags.automation": "Automation",
    "projects.tags.backgroundService": "Background Service",
    "projects.tags.dotnet": ".NET",
    "projects.tags.sqlServer": "SQL Server",
    "projects.tags.maintenance": "Maintenance",
    "projects.tags.optimization": "Optimization",

    "projects.tags.python": "Python",
    "projects.tags.ia": "AI",
    "projects.tags.visaoComputacional": "Computer Vision",
    "projects.tags.yolo": "YOLOv8",
    "projects.tags.raspberry": "Raspberry Pi",
    "projects.tags.deepLearning": "Deep Learning",

    // IoT project tags
    "projects.tags.iot": "IoT",
    "projects.tags.sistemasEmbarcados": "Embedded Systems",
    "projects.tags.esp8266": "ESP8266",
    "projects.tags.sensores": "Sensors",
    "projects.tags.monitoramento": "Real-time Monitoring",
    "projects.tags.cloud": "Cloud",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's talk about your next project",
    "contact.email": "E-mail",
    "contact.linkedin": "LinkedIn",
    "contact.whatsapp": "WhatsApp",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.builtWith": "Built with",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
