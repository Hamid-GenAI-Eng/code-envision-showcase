import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Smartphone, Zap, Shield, Palette, Code, CheckCircle } from "lucide-react";

const WebAppsService = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Frameworks",
      description: "Built with React, Next.js, Vue.js, and other cutting-edge technologies"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect experience across all devices"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed with lazy loading, caching, and CDN integration"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security with SSL, authentication, and data protection"
    },
    {
      icon: Palette,
      title: "Custom UI/UX",
      description: "Bespoke designs that reflect your brand and optimize user experience"
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Cloud-native solutions that grow with your business needs"
    }
  ];

  const technologies = [
    { name: "React/Next.js", description: "Modern frontend frameworks" },
    { name: "Node.js/Express", description: "Scalable backend solutions" },
    { name: "TypeScript", description: "Type-safe development" },
    { name: "Tailwind CSS", description: "Utility-first styling" },
    { name: "PostgreSQL/MongoDB", description: "Robust databases" },
    { name: "AWS/Azure", description: "Cloud deployment" }
  ];

  const appTypes = [
    {
      title: "Enterprise Portals",
      description: "Internal dashboards and employee self-service platforms",
      features: ["Role-based access", "SSO integration", "Analytics dashboards"]
    },
    {
      title: "E-commerce Platforms",
      description: "Full-featured online stores with payment integration",
      features: ["Payment gateways", "Inventory management", "Order tracking"]
    },
    {
      title: "SaaS Applications",
      description: "Multi-tenant software solutions with subscription management",
      features: ["Multi-tenancy", "Billing integration", "API management"]
    },
    {
      title: "Progressive Web Apps",
      description: "App-like experiences that work offline and across devices",
      features: ["Offline functionality", "Push notifications", "App-like UX"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <Badge variant="outline" className="mb-4 bg-white/10 border-white/20 text-white">
              Premium Web Applications
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Exceptional Web Experiences
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                That Drive Business Growth
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              From enterprise portals to e-commerce platforms, we create high-performance web 
              applications that engage users and deliver measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                Start Your Project
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
                Outdated Web Presence
                <span className="gradient-text"> Limiting Growth Potential</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Many businesses struggle with outdated websites and web applications that fail to 
                  engage users, convert visitors, or adapt to modern user expectations.
                </p>
                <p className="leading-relaxed">
                  Poor performance, security vulnerabilities, and lack of mobile optimization 
                  result in lost opportunities and decreased customer satisfaction.
                </p>
              </div>
            </div>
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Common Web App Issues</h3>
                <div className="space-y-4">
                  {[
                    "Slow loading times and poor performance",
                    "Poor mobile user experience",
                    "Security vulnerabilities",
                    "Outdated design and functionality",
                    "Limited scalability options",
                    "Poor search engine visibility"
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {issue}
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
              Modern Web Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We build fast, secure, and scalable web applications using the latest technologies 
              and best practices for optimal user experience and business performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-border hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Application Types</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Specialized Solutions for Every Need
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <Card key={index} className="p-8 border-border hover:shadow-elevation transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="outline" className="mb-4">Technology Stack</Badge>
              <h2 className="text-3xl font-bold font-space-grotesk mb-6">
                Cutting-Edge Technologies for
                <span className="gradient-text"> Superior Performance</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We use the most advanced web technologies to ensure your applications are fast, 
                secure, maintainable, and future-proof.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-bold mb-3">Performance Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600">90+</div>
                    <div className="text-sm text-muted-foreground">Lighthouse Score</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600">&lt;2s</div>
                    <div className="text-sm text-muted-foreground">Load Time</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600">A+</div>
                    <div className="text-sm text-muted-foreground">Security Grade</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Core Technologies</h3>
                <div className="space-y-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold">{tech.name}</h4>
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Success Story</Badge>
            <h2 className="text-3xl font-bold font-space-grotesk mb-6">
              E-commerce Platform Modernization
            </h2>
          </div>
          
          <Card className="p-8 border-border">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-purple-600">Challenge</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leading retail chain needed to modernize their outdated e-commerce platform 
                    to improve mobile experience and increase conversions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-purple-600">Solution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built modern React-based platform with progressive web app capabilities, 
                    optimized performance, and enhanced mobile experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-purple-600">Results</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-purple-600">150%</div>
                    <div className="text-xs text-muted-foreground">Mobile conversions</div>
                    <div className="text-2xl font-bold text-purple-600">40%</div>
                    <div className="text-xs text-muted-foreground">Faster load times</div>
                    <div className="text-2xl font-bold text-purple-600">25%</div>
                    <div className="text-xs text-muted-foreground">Sales increase</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Development Process</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              From Concept to Launch
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Requirements analysis, user research, and technical architecture"
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "UI/UX design, wireframes, and interactive prototypes"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile development with continuous testing and optimization"
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deployment, monitoring, and ongoing maintenance"
              }
            ].map((phase, index) => (
              <Card key={index} className="p-6 text-center border-border">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-purple-600 mb-4">{phase.step}</div>
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
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's create a web experience that engages your users and drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebAppsService;