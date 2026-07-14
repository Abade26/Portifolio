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
    "about.description": "Desenvolvedor Backend .NET com experiência prática em sistemas corporativos no Ministério Público do Estado da Bahia (MPBA). Atuei no desenvolvimento de um serviço em background (.NET Worker Service) responsável por automatizar desligamentos de usuários, com integração ao Active Directory via LDAP e regras de negócio baseadas em CPF. Também construí um módulo administrativo completo (CRUD) em ASP.NET WebForms, com arquitetura em camadas (DAL/BLL/DTO) e persistência via NHibernate. Tenho experiência complementar com projetos próprios envolvendo visão computacional e IoT, incluindo publicação em congresso científico.",
    "about.stats.experience": "Anos de experiência",
    "about.stats.specialization": "Especialização",
    "about.stats.systems": "Sistemas desenvolvidos",

    // Skills
   "skills.title": "Habilidades Técnicas",
    "skills.backend": "Back-end",
    "skills.database": "Banco de Dados",
    "skills.other": "Outras Habilidades",
    "skills.pratices": "Práticas de desenvolvimento",
   // "skills.learning": "Em aprendizado",

    // Experience
   "experience.title": "Experiência Profissional",
    "experience.role": "Desenvolvedor .NET",
    "experience.company": "Ministério Público do Estado da Bahia",
    "experience.period": "02/2024 - 12/2025",
    "experience.description": "Atuação no desenvolvimento e manutenção de dois sistemas corporativos distintos no Ministério Público do Estado da Bahia.",
    "experience.activitiesTitle": "Principais atividades:",
    "experience.project1.title": "Projeto 1 — Serviço de Automação de Desligamento (Windows Worker Service)",
    "experience.project1.activity1": "Desenvolvi Windows Worker Service em .NET 6, executado continuamente em background, para automatizar a desativação de contas de estagiários e voluntários com contratos vencidos",
    "experience.project1.activity2": "Implementei regras de negócio para verificar, via CPF, se o usuário ainda possuía outro vínculo ativo antes de decidir pela desativação, evitando desligamentos incorretos",
    "experience.project1.activity3": "Integrei o serviço ao Active Directory via LDAP para desativação automática de contas, reduzindo o risco de acesso indevido após o fim do contrato",
    "experience.project1.activity4": "Utilizei Entity Framework Core para consultas e persistência no SQL Server, com Dependency Injection e logging estruturado",
    "experience.project1.activity5": "Atuei em manutenção corretiva e evolutiva do serviço, incluindo correção de bugs e melhorias de desempenho",
    "experience.project2.title": "Projeto 2 — Módulo de Gerenciamento de Usuários Externos (SRA)",
    "experience.project2.activity1": "Desenvolvi módulo completo de CRUD para gerenciamento de usuários externos em ASP.NET WebForms, seguindo arquitetura em camadas (DAL/BLL/DTO) com Fluent NHibernate",
    "experience.project2.activity2": "Implementei cadastro, edição, ativação/desativação e busca dinâmica de usuários, com paginação via GridView e controle de autenticação por Session",
    "experience.project2.activity3": "Construí relacionamento entre usuários e múltiplos telefones, com validação de CPF e validação de idade mínima",
    "experience.project2.activity4": "Utilizei LINQ e QueryOver para consultas, e Newtonsoft.Json para serialização na integração entre JavaScript e backend",
    "experience.project2.activity5": "Entreguei o módulo de usuários totalmente funcional; demais módulos estavam previstos para fases seguintes, não iniciadas devido ao término do estágio",

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

    // Publication
    "nav.publications": "Publicações",
    "publications.title": "Publicações Acadêmicas",
    "publications.pub1.title":
    "Reconhecimento de Rachaduras Estruturais Usando Inteligência Artificial com Raspberry Pi – II CONAPEC",
    "publications.pub1.description":
    "Resumo publicado nos anais do congresso (DOI). Pesquisa aplicada com detecção de rachaduras usando visão computacional e Raspberry Pi.",
    "publications.tags.doi": "DOI",
    "publications.tags.ai": "IA",
    "publications.tags.computerVision": "Visão Computacional",
    "publications.tags.raspberryPi": "Raspberry Pi",
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
    "about.description": "I'm a Backend .NET Developer with hands-on experience in corporate systems at the Public Prosecutor's Office of the State of Bahia (MPBA). I worked on a background automation service (.NET Worker Service) that integrates with Active Directory via LDAP, and built a complete administrative module in ASP.NET WebForms using a layered architecture (DAL/BLL/DTO). I also have personal projects involving computer vision and IoT, including a technical paper presented at a scientific conference. Comfortable with C#, Entity Framework Core, NHibernate, SQL Server, and object-oriented principles; currently learning containerization with Docker.",
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
    "experience.description": "Worked on the development and maintenance of two distinct corporate systems at the Public Prosecutor's Office of the State of Bahia.",
    "experience.activitiesTitle": "Main activities:",

    "experience.project1.title": "Project 1 — Automated Deactivation Service (Windows Worker Service)",
    "experience.project1.activity1": "Developed a Windows Worker Service in .NET 6, running continuously in the background, to automate the deactivation of intern and volunteer accounts with expired contracts",
    "experience.project1.activity2": "Implemented business rules to check, via CPF (national ID), whether the user still had another active contract before proceeding with deactivation, preventing incorrect terminations",
    "experience.project1.activity3": "Integrated the service with Active Directory via LDAP for automatic account deactivation, reducing the risk of unauthorized access after contract termination",
    "experience.project1.activity4": "Used Entity Framework Core for queries and persistence in SQL Server, with Dependency Injection and structured logging",
    "experience.project1.activity5": "Performed corrective and evolutionary maintenance on the service, including bug fixes and performance improvements",

    "experience.project2.title": "Project 2 — External User Management Module (SRA)",
    "experience.project2.activity1": "Developed a complete CRUD module for managing external users in ASP.NET WebForms, following a layered architecture (DAL/BLL/DTO) with Fluent NHibernate",
    "experience.project2.activity2": "Implemented user registration, editing, activation/deactivation, and dynamic search, with GridView pagination and Session-based authentication",
    "experience.project2.activity3": "Built the relationship between users and multiple phone numbers, including CPF validation and minimum age validation",
    "experience.project2.activity4": "Used LINQ and QueryOver for queries, and Newtonsoft.Json for serialization in the integration between JavaScript and the backend",
    "experience.project2.activity5": "Delivered the user management module fully functional; the remaining modules were planned for subsequent phases, not started due to the end of the internship",

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

    // Publications
    "nav.publications": "Publications",
    "publications.title": "Academic Publications",
    "publications.pub1.title":
    "Structural Crack Recognition Using Artificial Intelligence with Raspberry Pi – II CONAPEC",
    "publications.pub1.description":
    "Abstract published in the conference proceedings (DOI). Applied research on crack detection using computer vision and Raspberry Pi.",
    "publications.tags.doi": "DOI",
    "publications.tags.ai": "AI",
    "publications.tags.computerVision": "Computer Vision",
    "publications.tags.raspberryPi": "Raspberry Pi",
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
