import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToCaseStudies = () => {
    const section = document.querySelector('#projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const section = document.querySelector('#contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh pt-24">
      {/* Cinematic Background System */}
      <div className="absolute inset-0">
        {/* Primary gradient layer */}
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        
        {/* Hero image with enhanced blending */}
        <div 
          className="absolute inset-0 bg-gradient-hero"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-glow animate-pulse opacity-30" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        
        {/* Parallax floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Cinematic Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-cinematic">
          {/* Premium Badge */}
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-gradient-primary text-white border-white/20 backdrop-blur-sm px-6 py-2 text-sm font-medium shadow-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              World-Class Enterprise Solutions
            </Badge>
          </div>
          
          {/* Hero Headlines - Enterprise Scale */}
          <h1 className="text-white mb-5 leading-none">
            <span className="block mb-3 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="gradient-text bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
                Transform
              </span>{" "}
              <span className="text-white">Vision Into</span>
            </span>
            <span className="block text-3xl md:text-4xl lg:text-4xl font-playfair-display font-bold text-white">
              Digital Excellence
            </span>
          </h1>
          
          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-10 leading-relaxed">
            We architect enterprise-grade solutions that scale. From AI-powered platforms to comprehensive 
            ERP systems, we deliver technology that transforms industries and accelerates growth.
          </p>
          
          {/* CTA System - Enterprise Focus */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="min-w-[200px] bg-white text-elite-dark hover:bg-white/90 font-semibold text-base px-6 py-3 shadow-cinematic"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToCaseStudies}
              className="min-w-[200px] bg-white text-elite-dark hover:bg-white/90 font-semibold text-base px-6 py-3 shadow-cinematic"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Showcase
            </Button>
          </div>
          
          {/* Enterprise Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">50+</div>
              <div className="text-white/70 text-base">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">99.9%</div>
              <div className="text-white/70 text-base">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary-glow mb-2">24/7</div>
              <div className="text-white/70 text-base">Enterprise Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-status-online mb-2">Verified</div>
              <div className="text-white/70 text-base">Gov. Registered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/60 text-xs font-medium">Scroll to Explore</span>
        </div>
      </div>
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-transparent bg-gradient-radial opacity-60"></div>
    </section>
  );
};

export default Hero;