import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from "lucide-react";

const TechnologyStack = () => {
  const scrollToStartProject = () => {
    const section = document.querySelector('#contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Focus on the name input after scrolling
      setTimeout(() => {
        const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
        if (nameInput) {
          nameInput.focus();
        }
      }, 800); // Wait for scroll animation to complete
    }
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-card rounded-3xl p-8 shadow-elevation">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-space-grotesk mb-4">
              Powered by <span className="gradient-text">Elite Technology Stack</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              We leverage the most advanced and proven technologies to build exceptional solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
            {[
              "React", "ASP.NET", "Python", "Node.js", "TypeScript", "FastAPI",
              "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "Kubernetes"
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-4 text-center shadow-card hover:shadow-elevation transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToStartProject}
              className="shadow-glow"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
