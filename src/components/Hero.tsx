import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      <div className="absolute inset-0 bg-gradient-glow" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-8 h-8 text-primary opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-6 h-6 text-secondary opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-10 h-10 text-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-primary rounded-full p-4 shadow-premium animate-glow">
              <span className="text-2xl font-bold font-space-grotesk text-white">CE</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk mb-8 leading-tight">
            <span className="gradient-text">Code Envision</span>
            <br />
            <span className="text-foreground">Where Innovation</span>
            <br />
            <span className="text-foreground">Meets Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforming visionary ideas into powerful software solutions. We craft custom AI-driven applications, 
            full-stack platforms, and cutting-edge digital experiences that drive business success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline-premium" size="xl" className="min-w-[200px]">
              Meet The Founders
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-trust-green mb-2">Verified</div>
              <div className="text-muted-foreground">Government Registered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;