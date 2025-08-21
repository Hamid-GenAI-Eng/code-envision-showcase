import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import TechnologyStack from "@/components/TechnologyStack";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EnterpriseNavigation />
      <Hero />
      <About />
      <Services />
      <TechnologyStack />
      <Projects />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
