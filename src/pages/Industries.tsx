import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Truck, ShoppingCart, Heart, GraduationCap, Landmark, Factory, Zap } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      description: "Streamline operations with smart manufacturing solutions, IoT integration, and predictive maintenance systems.",
      challenges: ["Legacy system modernization", "Supply chain optimization", "Quality control automation"],
      solutions: ["Custom ERP systems", "IoT monitoring platforms", "Predictive analytics"],
      caseStudy: "45% reduction in downtime for Fortune 500 manufacturer",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Secure, compliant fintech solutions including banking platforms, trading systems, and risk management tools.",
      challenges: ["Regulatory compliance", "Security requirements", "Real-time processing"],
      solutions: ["Core banking systems", "Risk analytics platforms", "Blockchain solutions"],
      caseStudy: "85% increase in qualified leads for regional banking group",
      color: "from-green-500 to-green-600"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Modern retail platforms, inventory management, and customer experience solutions that drive sales growth.",
      challenges: ["Omnichannel integration", "Inventory optimization", "Customer personalization"],
      solutions: ["E-commerce platforms", "POS systems", "Customer analytics"],
      caseStudy: "150% increase in mobile conversions for leading retail chain",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description: "HIPAA-compliant healthcare solutions, patient management systems, and medical data analytics platforms.",
      challenges: ["Data privacy compliance", "Interoperability", "Patient care coordination"],
      solutions: ["EHR systems", "Telemedicine platforms", "Clinical analytics"],
      caseStudy: "30% reduction in readmissions for multi-hospital network",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Supply chain optimization, fleet management, and real-time tracking solutions for efficient operations.",
      challenges: ["Route optimization", "Real-time tracking", "Cost reduction"],
      solutions: ["Fleet management systems", "Route optimization AI", "IoT tracking"],
      caseStudy: "35% fuel cost savings for global shipping company",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Building2,
      title: "Real Estate & Construction",
      description: "Property management platforms, construction project management, and smart building solutions.",
      challenges: ["Project coordination", "Resource management", "Compliance tracking"],
      solutions: ["Project management platforms", "BIM integration", "IoT building systems"],
      caseStudy: "40% faster project completion for construction firm",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Learning management systems, educational platforms, and student information systems.",
      challenges: ["Remote learning", "Student engagement", "Administrative efficiency"],
      solutions: ["LMS platforms", "Virtual classrooms", "Student portals"],
      caseStudy: "200% increase in student engagement for online university",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Smart grid solutions, energy management systems, and utility customer portals.",
      challenges: ["Grid modernization", "Energy efficiency", "Regulatory compliance"],
      solutions: ["Smart grid platforms", "Energy analytics", "Customer portals"],
      caseStudy: "25% reduction in energy waste for utility company",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const expertise = [
    {
      title: "Industry-Specific Compliance",
      description: "Deep understanding of regulatory requirements across all industries we serve"
    },
    {
      title: "Domain Expertise",
      description: "Specialized knowledge in industry workflows, challenges, and best practices"
    },
    {
      title: "Proven Track Record",
      description: "500+ successful projects across 15+ industries with measurable results"
    },
    {
      title: "Future-Ready Solutions",
      description: "Technology strategies that scale and adapt to changing industry demands"
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
              Industry-Focused
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We understand that every industry has unique challenges, requirements, and opportunities. 
              Our specialized expertise delivers solutions that truly fit your business.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Industries We Serve</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Specialized Solutions for Every Sector
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From manufacturing to healthcare, we bring deep industry knowledge and technical expertise 
              to solve your most complex challenges.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group p-8 border-border hover:shadow-elevation transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center flex-shrink-0`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {industry.description}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Key Challenges</h4>
                          <div className="space-y-1">
                            {industry.challenges.map((challenge, idx) => (
                              <div key={idx} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                                {challenge}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Our Solutions</h4>
                          <div className="space-y-1">
                            {industry.solutions.map((solution, idx) => (
                              <div key={idx} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                {solution}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-primary">Success Story:</strong> {industry.caseStudy}
                        </p>
                      </div>
                      
                      <Button variant="outline" className="group/btn">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Expertise</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Why Industries Trust Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our industry-focused approach ensures solutions that not only work but excel 
              within your specific business context.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <Card key={index} className="p-6 text-center border-border">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Industry Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6">
            Ready to Transform Your Industry Operations?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss how our industry-specific expertise can solve your unique challenges 
            and drive measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule Industry Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
              Download Industry Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;