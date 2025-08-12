import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud, Server, GitBranch, Shield, Zap, CheckCircle, Gauge, Lock, Globe } from "lucide-react";

const CloudService = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to AWS, Azure, GCP with zero downtime and minimal disruption"
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Terraform, CloudFormation, and Pulumi for reproducible, scalable infrastructure"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated deployment pipelines with GitLab, Jenkins, and GitHub Actions"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "SOC2, HIPAA, PCI-DSS compliance with automated security monitoring"
    },
    {
      icon: Gauge,
      title: "Performance Monitoring",
      description: "Real-time monitoring with Datadog, New Relic, and custom dashboards"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Encrypted backups, disaster recovery, and business continuity planning"
    }
  ];

  const benefits = [
    "99.9% uptime guaranteed SLA",
    "75% reduction in infrastructure costs",
    "90% faster deployment cycles",
    "Automated scaling and load balancing",
    "24/7 monitoring and support",
    "Compliance-ready architecture"
  ];

  const technologies = [
    { name: "AWS", category: "Cloud Platform" },
    { name: "Microsoft Azure", category: "Cloud Platform" },
    { name: "Google Cloud", category: "Cloud Platform" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Terraform", category: "IaC" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "Prometheus", category: "Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <Badge variant="outline" className="mb-4 bg-white/10 border-white/20 text-white">
              Integration & Cloud Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Scale Your Infrastructure
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                with Cloud-Native Solutions
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your business with enterprise-grade cloud infrastructure, DevOps automation, 
              and seamless system integrations that scale with your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Schedule Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                View Architecture
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
                Legacy Infrastructure
                <span className="gradient-text"> Holding Back Growth</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Many enterprises struggle with outdated infrastructure, manual deployment processes, 
                  and fragmented systems that can't scale with modern business demands.
                </p>
                <p className="leading-relaxed">
                  Without proper cloud strategy and DevOps practices, businesses face increased costs, 
                  security vulnerabilities, and slower time-to-market for new features.
                </p>
              </div>
            </div>
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Infrastructure Pain Points</h3>
                <div className="space-y-4">
                  {[
                    "High operational costs and downtime",
                    "Manual deployment and scaling processes",
                    "Security vulnerabilities and compliance gaps",
                    "Poor system integration and data silos",
                    "Limited monitoring and observability",
                    "Slow disaster recovery procedures"
                  ].map((problem, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {problem}
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
              Enterprise Cloud Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We design and implement scalable cloud infrastructure with automated DevOps pipelines, 
              ensuring security, compliance, and optimal performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-border hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="outline" className="mb-4">DevOps Excellence</Badge>
              <h2 className="text-3xl font-bold font-space-grotesk mb-6">
                Automated CI/CD Pipelines
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our DevOps methodology ensures rapid, reliable deployments with automated testing, 
                monitoring, and rollback capabilities for maximum uptime and performance.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Implementation Process</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">1. Infrastructure Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive analysis of current systems and migration planning
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">2. Cloud Architecture Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Design scalable, secure, and cost-optimized cloud architecture
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">3. Migration & Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Phased migration with minimal downtime and system integration
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">4. Monitoring & Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuous monitoring, performance tuning, and cost optimization
                    </p>
                  </div>
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
              E-commerce Platform Transformation
            </h2>
          </div>
          
          <Card className="p-8 border-border">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-blue-600">Challenge</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Global e-commerce platform needed to handle Black Friday traffic spikes 
                    while reducing infrastructure costs and improving deployment velocity.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-blue-600">Solution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Implemented auto-scaling Kubernetes clusters on AWS with CI/CD pipelines, 
                    monitoring, and automated disaster recovery procedures.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-blue-600">Results</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">75%</div>
                    <div className="text-xs text-muted-foreground">Cost reduction</div>
                    <div className="text-2xl font-bold text-blue-600">10x</div>
                    <div className="text-xs text-muted-foreground">Faster deployments</div>
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime achieved</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Technology Stack</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Enterprise-Grade Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage industry-leading cloud platforms and DevOps tools to deliver 
              robust, scalable, and secure infrastructure solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 text-center border-border hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
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
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss your cloud strategy and design a scalable solution that grows with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Get Cloud Assessment
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
              View Architecture Examples
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudService;