import { LanguageProvider } from "@/contexts/LanguageContext";
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Publications,
  Contact,
  Footer,
} from "@/components/portfolio";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background dark">
        <Header />

        {/* Espaço para compensar o header fixo */}
        <main className="pt-20">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;