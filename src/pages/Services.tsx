import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Users, Globe, Brain, MessageSquare, Smartphone, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "ERP Software",
      description: "Custom enterprise resource planning solutions that streamline operations, improve efficiency, and provide real-time business insights.",
      features: ["Financial Management", "Supply Chain", "Manufacturing", "HR & Payroll"],
      link: "/services/erp",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "CRM Solutions",
      description: "Customer relationship management systems that enhance sales processes, improve customer retention, and drive revenue growth.",
      features: ["Lead Management", "Sales Analytics", "Customer Support", "Marketing Automation"],
      link: "/services/crm",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      title: "Premium Web Applications",
      description: "High-performance web applications and websites built with modern technologies for exceptional user experiences.",
      features: ["React/Next.js", "Progressive Web Apps", "E-commerce", "Enterprise Portals"],
      link: "/services/web-apps",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "AI/ML/Computer Vision",
      description: "Advanced artificial intelligence and machine learning solutions that automate processes and unlock data insights.",
      features: ["Predictive Analytics", "Computer Vision", "NLP", "Automation"],
      link: "/services/ai-ml",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MessageSquare,
      title: "GenAI & RAG Solutions",
      description: "Generative AI applications, conversational AI agents, and retrieval-augmented generation systems for intelligent automation.",
      features: ["AI Chatbots", "Document AI", "RAG Systems", "Custom LLMs"],
      link: "/services/genai",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android.",
      features: ["React Native", "Native iOS/Android", "Cross-platform", "App Store Optimization"],
      link: "/services/mobile",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure, integration services, and DevOps solutions for scalable, secure, and efficient operations.",
      features: ["AWS/Azure/GCP", "Microservices", "CI/CD", "API Integration"],
      link: "/services/cloud-devops",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, challenges, and technical requirements through comprehensive analysis."
    },
    {
      step: "02", 
      title: "Architecture & Design",
      description: "Our experts design scalable, secure solutions with detailed technical specifications and user experience maps."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing, code reviews, and client feedback integration throughout the process."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with comprehensive training, documentation, and ongoing maintenance support."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Enterprise Solutions
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                That Scale & Deliver
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              From ERP and CRM systems to AI-powered applications, we build custom solutions 
              that transform how businesses operate and compete.
            </p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Explore Our Capabilities
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in building enterprise-grade software that drives business transformation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group p-8 border-border hover:shadow-elevation transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Link to={service.link}>
                        <Button variant="outline" className="group/btn">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery from concept to deployment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="p-6 text-center border-border">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss your project requirements and build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;