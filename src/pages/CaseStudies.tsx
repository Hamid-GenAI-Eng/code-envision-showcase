import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, TrendingUp, Clock, Users } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Manufacturing ERP Transformation",
      client: "Fortune 500 Manufacturer",
      industry: "Manufacturing",
      technology: ["ERP", "Cloud", "AI"],
      challenge: "Legacy system integration and real-time production monitoring across 15 global facilities",
      solution: "Custom ERP solution with IoT integration and predictive maintenance AI",
      results: [
        { metric: "45%", description: "Reduction in downtime" },
        { metric: "$2.3M", description: "Annual cost savings" },
        { metric: "3x", description: "Faster reporting" }
      ],
      image: "/placeholder.svg",
      duration: "18 months",
      teamSize: "12 experts"
    },
    {
      title: "AI-Powered CRM for Financial Services",
      client: "Regional Banking Group",
      industry: "Financial Services", 
      technology: ["CRM", "AI/ML", "Analytics"],
      challenge: "Improve customer acquisition and retention with personalized financial products",
      solution: "Custom CRM with AI-driven customer insights and automated lead scoring",
      results: [
        { metric: "85%", description: "Increase in qualified leads" },
        { metric: "32%", description: "Improvement in customer retention" },
        { metric: "60%", description: "Faster loan approvals" }
      ],
      image: "/placeholder.svg",
      duration: "12 months",
      teamSize: "8 experts"
    },
    {
      title: "E-commerce Platform Modernization",
      client: "Leading Retail Chain",
      industry: "Retail",
      technology: ["Web Apps", "Mobile", "Cloud"],
      challenge: "Outdated e-commerce platform limiting growth and mobile experience",
      solution: "Modern React-based platform with progressive web app capabilities",
      results: [
        { metric: "150%", description: "Increase in mobile conversions" },
        { metric: "40%", description: "Faster page load times" },
        { metric: "25%", description: "Boost in overall sales" }
      ],
      image: "/placeholder.svg",
      duration: "10 months",
      teamSize: "6 experts"
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "Multi-Hospital Network",
      industry: "Healthcare",
      technology: ["AI/ML", "Data Analytics", "Cloud"],
      challenge: "Unified patient data analysis across multiple hospitals for better outcomes",
      solution: "HIPAA-compliant analytics platform with predictive health insights",
      results: [
        { metric: "30%", description: "Reduction in readmissions" },
        { metric: "50%", description: "Faster diagnosis times" },
        { metric: "20%", description: "Cost reduction per patient" }
      ],
      image: "/placeholder.svg",
      duration: "15 months", 
      teamSize: "10 experts"
    },
    {
      title: "Smart Logistics Management System",
      client: "Global Shipping Company",
      industry: "Logistics",
      technology: ["IoT", "AI", "Mobile"],
      challenge: "Real-time tracking and optimization of global shipping operations",
      solution: "IoT-enabled tracking system with AI-powered route optimization",
      results: [
        { metric: "35%", description: "Fuel cost savings" },
        { metric: "90%", description: "On-time delivery rate" },
        { metric: "100%", description: "Real-time visibility" }
      ],
      image: "/placeholder.svg",
      duration: "14 months",
      teamSize: "9 experts"
    },
    {
      title: "GenAI Customer Support Automation",
      client: "SaaS Technology Company",
      industry: "Technology",
      technology: ["GenAI", "NLP", "API Integration"],
      challenge: "Scale customer support without increasing headcount",
      solution: "RAG-powered AI assistant with seamless human handoff capabilities",
      results: [
        { metric: "80%", description: "Query resolution rate" },
        { metric: "60%", description: "Reduction in support tickets" },
        { metric: "24/7", description: "Availability achieved" }
      ],
      image: "/placeholder.svg",
      duration: "8 months",
      teamSize: "5 experts"
    }
  ];

  const industries = ["All", "Manufacturing", "Financial Services", "Retail", "Healthcare", "Logistics", "Technology"];
  const technologies = ["All", "ERP", "CRM", "AI/ML", "Web Apps", "Mobile", "Cloud", "GenAI"];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Success Stories &
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped organizations across industries achieve digital 
              transformation and measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Filter by Industry</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Badge key={industry} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Filter by Technology</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group border-border hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {study.technology.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline">{study.industry}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {study.teamSize}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  
                  <p className="text-muted-foreground text-sm mb-8">
                    <strong>Solution:</strong> {study.solution}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.description}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group/btn">
                    View Full Case Study
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Impact</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Delivering Measurable Results
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Client Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help you achieve similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="shadow-glow">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;