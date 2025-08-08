import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github,
  Calendar,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm font-medium bg-white/10 text-white border-white/20">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            Ready to <span className="text-primary-glow">Transform</span> Your Vision?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Let's discuss how we can bring your ideas to life with cutting-edge technology and exceptional execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-space-grotesk mb-6">Connect With Our Founders</h3>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary-glow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email Us</h4>
                        <p className="text-white/70">contact@codeenvision.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-secondary-glow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Call Us</h4>
                        <p className="text-white/70">+92 XXX XXXXXXX</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-trust-green/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-trust-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Location</h4>
                        <p className="text-white/70">Pakistan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline-premium" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white hover:text-elite-dark">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Call
                </Button>
                <Button variant="outline-premium" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white hover:text-elite-dark">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Live Chat
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <Button size="icon" variant="outline-premium" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-elite-dark">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline-premium" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-elite-dark">
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl font-space-grotesk text-white">Start Your Project</CardTitle>
              <p className="text-white/70">Tell us about your vision and we'll make it reality</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-white/80 mb-2 block">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white/80 mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-white/80 mb-2 block">Project Type</label>
                <Input 
                  placeholder="e.g., AI Application, Web Platform, Mobile App" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-white/80 mb-2 block">Project Details</label>
                <Textarea 
                  placeholder="Describe your project requirements, goals, and timeline..." 
                  rows={5}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              
              <p className="text-xs text-white/60 text-center">
                We'll respond within 24 hours with a detailed project proposal
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
            <div className="w-3 h-3 bg-trust-green rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm">Registered with Government of Pakistan • NTN Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;