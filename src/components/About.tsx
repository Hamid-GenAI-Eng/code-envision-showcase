import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, MapPin } from "lucide-react";
import hamidProfile from "@/assets/hamid-profile.jpg";
import ahmedProfile from "@/assets/ahmed-profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            About Code Envision
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            Built on <span className="gradient-text">Trust & Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in July 2025, Code Envision represents the pinnacle of software excellence. 
            Legally registered with the Government of Pakistan, we combine visionary leadership 
            with cutting-edge technology.
          </p>
        </div>

        {/* Company Trust Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <Card className="glow-border hover-lift text-center p-6">
            <CardContent className="p-0">
              <Shield className="w-8 h-8 text-trust-green mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Government Registered</h3>
              <p className="text-sm text-muted-foreground">Legally authorized with the Government of Pakistan</p>
            </CardContent>
          </Card>
          
          <Card className="glow-border hover-lift text-center p-6">
            <CardContent className="p-0">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">NTN Verified</h3>
              <p className="text-sm text-muted-foreground">Official business registration and tax compliance</p>
            </CardContent>
          </Card>
          
          <Card className="glow-border hover-lift text-center p-6">
            <CardContent className="p-0">
              <Users className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">Seasoned professionals with proven track records</p>
            </CardContent>
          </Card>
          
          <Card className="glow-border hover-lift text-center p-6">
            <CardContent className="p-0">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Pakistan Based</h3>
              <p className="text-sm text-muted-foreground">Serving global clients from our Pakistan headquarters</p>
            </CardContent>
          </Card>
        </div>

        {/* Founders Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold font-space-grotesk mb-8">Meet Our Visionary Founders</h3>
            
            {/* Founder 1 */}
            <div className="flex items-start space-x-6 mb-8 p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-elevation transition-all duration-300">
              <img 
                src={hamidProfile} 
                alt="Hamid Saifullah" 
                className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
              />
              <div>
                <h4 className="text-xl font-bold mb-1">Hamid Saifullah</h4>
                <p className="text-primary font-medium mb-2">Co-Founder & Technical Architect</p>
                <p className="text-muted-foreground">
                  Visionary leader with expertise in AI systems, full-stack development, and strategic technology implementation.
                </p>
              </div>
            </div>
            
            {/* Founder 2 */}
            <div className="flex items-start space-x-6 mb-8 p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-elevation transition-all duration-300">
              <img 
                src={ahmedProfile} 
                alt="Ahmed Sarfaraz Tatla" 
                className="w-20 h-20 rounded-full object-cover border-4 border-secondary/20"
              />
              <div>
                <h4 className="text-xl font-bold mb-1">Ahmed Sarfaraz Tatla</h4>
                <p className="text-secondary font-medium mb-2">Co-Founder & Innovation Director</p>
                <p className="text-muted-foreground">
                  Strategic innovator specializing in software architecture, business development, and cutting-edge solutions.
                </p>
              </div>
            </div>

            <Button variant="premium" size="lg" className="mt-4">
              Connect With Founders
            </Button>
          </div>

          {/* Values & Mission */}
          <div className="animate-slide-up">
            <div className="bg-gradient-hero text-white p-8 rounded-3xl shadow-premium">
              <h3 className="text-2xl font-bold font-space-grotesk mb-6">Our Core Values</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary-glow">🎯 Excellence</h4>
                  <p className="text-white/90">We deliver nothing short of exceptional quality in every project, every time.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-secondary-glow">🚀 Innovation</h4>
                  <p className="text-white/90">We push boundaries and embrace cutting-edge technologies to solve complex challenges.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary-glow">🤝 Trust</h4>
                  <p className="text-white/90">We build lasting partnerships through transparency, reliability, and unwavering integrity.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-secondary-glow">⚡ Impact</h4>
                  <p className="text-white/90">We create solutions that transform businesses and drive meaningful results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;