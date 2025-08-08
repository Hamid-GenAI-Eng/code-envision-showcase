import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield,
  Zap,
  Globe,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, machine learning models, and intelligent automation systems that transform business operations.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Neural Networks"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web applications built with React, ASP.NET, Node.js, and modern frameworks for scalable solutions.",
      features: ["React & Next.js", "ASP.NET Core", "FastAPI", "Modern Databases"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      features: ["React Native", "Flutter", "iOS & Android", "Progressive Web Apps"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Robust data pipelines, analytics platforms, and business intelligence solutions for data-driven decisions.",
      features: ["Data Pipelines", "ETL Processes", "Real-time Analytics", "Data Visualization"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, DevOps automation, and deployment strategies for modern applications.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Microservices"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions, vulnerability assessments, and protection strategies for digital assets.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
      color: "text-trust-green",
      bgColor: "bg-trust-green/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Our Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            <span className="gradient-text">World-Class</span> Technology Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in cutting-edge technologies that drive innovation and deliver exceptional results. 
            From AI-powered applications to enterprise-grade systems, we build the future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glow-border hover-lift group cursor-pointer h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-space-grotesk">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
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
            <Button variant="hero" size="lg">
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;