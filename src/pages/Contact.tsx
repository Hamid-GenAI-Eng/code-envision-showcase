import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Global Headquarters",
      details: ["123 Innovation Drive", "Tech City, TC 12345", "United States"]
    },
    {
      icon: Phone,
      title: "Phone & Support",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568 (Support)", "Available 24/7"]
    },
    {
      icon: Mail,
      title: "Email Contact",
      details: ["hello@codeenvision.com", "support@codeenvision.com", "careers@codeenvision.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  const services = [
    "ERP Software Development",
    "CRM Solutions", 
    "Web Application Development",
    "AI/ML/Computer Vision",
    "GenAI & RAG Solutions",
    "Mobile App Development",
    "Cloud & DevOps Services",
    "Digital Transformation",
    "System Integration",
    "Technical Consulting"
  ];

  const budgetRanges = [
    "Under $50K",
    "$50K - $100K", 
    "$100K - $250K",
    "$250K - $500K",
    "$500K - $1M",
    "Over $1M"
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              We're here to listen, advise, and deliver solutions that exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="border-border shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Start Your Project</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your requirements and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name *</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name *</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input type="email" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service of Interest</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Budget Range</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range.toLowerCase().replace(/\s+/g, '-')}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Description *</label>
                    <Textarea 
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Timeline</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="flexible">Timeline is flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full shadow-glow">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4">Get in Touch</Badge>
                <h2 className="text-3xl font-bold font-space-grotesk mb-4">
                  Multiple Ways to Connect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Choose the communication method that works best for you. 
                  Our team is ready to help you achieve your technology goals.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 border-border">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-3 w-4 h-4" />
                    Schedule a Discovery Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="mr-3 w-4 h-4" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="mr-3 w-4 h-4" />
                    Download Service Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-space-grotesk mb-4">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of the tech district, our office is designed for collaboration 
              and innovation. Schedule a visit to meet our team and see our workspace.
            </p>
          </div>
          
          <Card className="overflow-hidden border-border">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-muted-foreground">123 Innovation Drive, Tech City</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold font-space-grotesk mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. Simple web applications typically take 2-3 months, while enterprise ERP implementations can take 6-18 months. We provide detailed timelines during our discovery phase."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and feature enhancements. Our support team ensures your systems run smoothly long after deployment."
              },
              {
                question: "Can you work with our existing technology stack?",
                answer: "Absolutely. We specialize in system integration and can work with virtually any existing technology stack. We'll assess your current systems and recommend the best approach for seamless integration."
              },
              {
                question: "How do you ensure project success?",
                answer: "We follow agile methodologies with regular check-ins, transparent communication, and iterative development. Our clients are involved throughout the process to ensure we're always aligned with their goals."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-border">
                <CardContent className="p-0">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;