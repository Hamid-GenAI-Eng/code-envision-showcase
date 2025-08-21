import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from 'react';
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        projectType: formData.get('projectType') as string,
        details: formData.get('details') as string
      };

      // Format the email body with proper line breaks
      const emailBody = `
Hello,

A new project inquiry has been submitted:

Name: ${data.name}
Email: ${data.email}
Project Type: ${data.projectType}

Project Details:
${data.details}

Best regards,
${data.name}
`.trim();

      // Create Gmail compose URL
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info.codeenvision@gmail.com&su=${encodeURIComponent(`New Project Inquiry: ${data.projectType}`)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open Gmail in a new tab
      const newWindow = window.open(gmailUrl, '_blank');
      
      if (newWindow) {
        // Clear the form after successful submission
        e.currentTarget.reset();
      } else {
        // If popup was blocked, try mailto as fallback
        const mailtoUrl = `mailto:info.codeenvision@gmail.com?subject=${encodeURIComponent(`New Project Inquiry: ${data.projectType}`)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoUrl;
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error preparing your email. Please try again or contact us directly at code.envision@gmail.com');
    }
  };

  const openWhatsApp = () => {
    try {
      // Open WhatsApp chat with the specified number
      window.open(`https://wa.me/923362704833`, '_blank');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      alert('There was an error opening WhatsApp. Please try again or contact us via email.');
    }
  };

  const scheduleCall = () => {
    const subject = "Schedule a Call Request";
    const body = `Hello,

I would like to schedule a call to discuss a potential project.

Please suggest some convenient time slots for a discussion.

Best regards`;

    try {
      // Gmail compose URL format
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info.codeenvision@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open Gmail in a new tab
      window.open(gmailUrl, '_blank');
    } catch (error) {
      console.error('Error opening Gmail:', error);
      // Fallback to mailto if Gmail fails
      const mailtoUrl = `mailto:info.codeenvision@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
      window.location.href = mailtoUrl;
    }
  };

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
                        <div className="space-y-1">
                          <p className="text-white/70">Projects: code.envision@gmail.com</p>
                          <p className="text-white/70">Meetings: info.codeenvision@gmail.com</p>
                        </div>
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
                <Button 
                  variant="outline-premium" 
                  className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white hover:text-elite-dark"
                  onClick={scheduleCall}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Call
                </Button>
                <Button 
                  variant="outline-premium" 
                  className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white hover:text-elite-dark"
                  onClick={openWhatsApp}
                >
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
          <Card id="start-project" className="bg-white/10 border-white/20 backdrop-blur-sm shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl font-space-grotesk text-white">Start Your Project</CardTitle>
              <p className="text-white/70">Tell us about your vision and we'll make it reality</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-white/80 mb-2 block">Name</label>
                    <Input 
                      name="name"
                      placeholder="Your name" 
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/80 mb-2 block">Email</label>
                    <Input 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="text-sm font-medium text-white/80 mb-2 block">Project Type</label>
                  <Input 
                    name="projectType"
                    placeholder="e.g., AI Application, Web Platform, Mobile App" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    required
                  />
                </div>
                
                <div className="mt-4">
                  <label className="text-sm font-medium text-white/80 mb-2 block">Project Details</label>
                  <Textarea 
                    name="details"
                    placeholder="Describe your project requirements, goals, and timeline..." 
                    rows={5}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full mt-6"
                  onClick={() => {
                    // Add a small delay to show loading state
                    setTimeout(() => {
                      alert('Opening your default email client...');
                    }, 500);
                  }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                <p className="text-xs text-white/60 text-center mt-4">
                  Your default email client will open with a pre-filled message
                </p>
              </form>
              
              <p className="text-xs text-white/60 text-center">
                We'll respond within 24 hours with a detailed project proposal
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Space for margin */}
        <div className="mt-16"></div>
      </div>
    </section>
  );
};

export default Contact;