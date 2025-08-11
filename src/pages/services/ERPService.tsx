import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, BarChart3, Shield, Globe, Users, Zap, CheckCircle } from "lucide-react";

const ERPService = () => {
  const features = [
    {
      icon: Database,
      title: "Financial Management",
      description: "Complete accounting, budgeting, and financial reporting with real-time insights"
    },
    {
      icon: BarChart3,
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain visibility with automated procurement and inventory management"
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Comprehensive HR management including payroll, benefits, and performance tracking"
    },
    {
      icon: Globe,
      title: "Manufacturing Operations",
      description: "Production planning, quality control, and shop floor management integration"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Built-in compliance frameworks and enterprise-grade security measures"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Advanced business intelligence with customizable dashboards and reports"
    }
  ];

  const benefits = [
    "45% reduction in operational costs",
    "3x faster financial reporting",
    "99.9% system uptime guarantee",
    "Complete audit trail and compliance",
    "Scalable architecture for growth",
    "24/7 support and maintenance"
  ];

  const techStack = [
    "Microsoft .NET Core",
    "React/Angular Frontend",
    "SQL Server/PostgreSQL",
    "Azure/AWS Cloud",
    "RESTful APIs",
    "Microservices Architecture"
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <Badge variant="outline" className="mb-4 bg-white/10 border-white/20 text-white">
              Enterprise ERP Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Transform Your Business
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Operations with Custom ERP
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Streamline your entire business ecosystem with our custom ERP solutions. From financial 
              management to supply chain optimization, we build systems that scale with your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">The Challenge</Badge>
              <h2 className="text-4xl font-bold font-space-grotesk mb-6">
                Legacy Systems Are Holding 
                <span className="gradient-text"> Your Business Back</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Many enterprises struggle with fragmented systems that don't communicate effectively, 
                  leading to data silos, inefficient processes, and limited visibility into operations.
                </p>
                <p className="leading-relaxed">
                  Manual processes, outdated interfaces, and lack of real-time insights prevent 
                  organizations from making informed decisions quickly and scaling efficiently.
                </p>
              </div>
            </div>
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Common ERP Challenges</h3>
                <div className="space-y-4">
                  {[
                    "Disconnected business processes",
                    "Limited real-time visibility",
                    "Manual data entry and errors",
                    "Compliance and reporting difficulties",
                    "Scalability limitations",
                    "High maintenance costs"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {challenge}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Solution</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Comprehensive ERP Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We build custom ERP solutions that unify your business processes, provide real-time insights, 
              and scale with your organization's growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-border hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="outline" className="mb-4">Architecture</Badge>
              <h2 className="text-3xl font-bold font-space-grotesk mb-6">
                Modern, Scalable Technology Stack
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our ERP solutions are built using cutting-edge technologies that ensure performance, 
                security, and scalability for enterprise environments.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Technology Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className="flex items-center p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                  <h4 className="font-bold mb-2">System Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    Microservices-based architecture with cloud-native deployment, 
                    ensuring high availability, security, and seamless integration capabilities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Success Story</Badge>
            <h2 className="text-3xl font-bold font-space-grotesk mb-6">
              Fortune 500 Manufacturer Transformation
            </h2>
          </div>
          
          <Card className="p-8 border-border">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-primary">Challenge</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Global manufacturer with 15 facilities struggling with legacy systems, 
                    manual processes, and lack of real-time production visibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-primary">Solution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Custom ERP with IoT integration, predictive maintenance AI, and 
                    real-time production monitoring across all global facilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-primary">Results</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">45%</div>
                    <div className="text-xs text-muted-foreground">Reduction in downtime</div>
                    <div className="text-2xl font-bold text-primary">$2.3M</div>
                    <div className="text-xs text-muted-foreground">Annual cost savings</div>
                    <div className="text-2xl font-bold text-primary">3x</div>
                    <div className="text-xs text-muted-foreground">Faster reporting</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Implementation</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Our Proven Delivery Process
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Comprehensive business process analysis and requirements gathering"
              },
              {
                step: "02",
                title: "Design & Architecture",
                description: "System design, database architecture, and integration planning"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile development with continuous testing and client feedback"
              },
              {
                step: "04",
                title: "Deployment & Training",
                description: "Go-live support, user training, and ongoing maintenance"
              }
            ].map((phase, index) => (
              <Card key={index} className="p-6 text-center border-border">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-4">{phase.step}</div>
                  <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss your ERP requirements and design a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule ERP Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
              Download ERP Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ERPService;