import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  CreditCard,
  PieChart,
  Lock,
  Users,
  Globe,
  BarChart3,
  DollarSign,
  AlertTriangle
} from "lucide-react";
import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";

const FinancialServices = () => {
  const solutions = [
    {
      title: "Core Banking Systems",
      description: "Modern, scalable banking platforms with real-time processing",
      icon: CreditCard,
      features: ["Real-time transactions", "Multi-currency support", "Regulatory compliance", "API-first architecture"]
    },
    {
      title: "Trading Platforms",
      description: "High-frequency trading systems with microsecond latency",
      icon: TrendingUp,
      features: ["Low-latency execution", "Risk management", "Market data feeds", "Algorithmic trading"]
    },
    {
      title: "Risk Management",
      description: "Advanced risk assessment and compliance monitoring",
      icon: Shield,
      features: ["Credit risk modeling", "Fraud detection", "Regulatory reporting", "Stress testing"]
    },
    {
      title: "Wealth Management",
      description: "Portfolio management and client advisory platforms",
      icon: PieChart,
      features: ["Portfolio analytics", "Client portals", "Performance tracking", "Goal-based investing"]
    },
    {
      title: "Digital Payments",
      description: "Secure, fast payment processing solutions",
      icon: DollarSign,
      features: ["Mobile payments", "Cross-border transfers", "Blockchain integration", "Fraud prevention"]
    },
    {
      title: "RegTech Solutions",
      description: "Automated compliance and regulatory reporting",
      icon: AlertTriangle,
      features: ["AML/KYC automation", "Transaction monitoring", "Regulatory reporting", "Audit trails"]
    }
  ];

  const caseStudies = [
    {
      client: "Global Investment Bank",
      challenge: "Legacy trading system causing execution delays",
      solution: "Built next-gen trading platform with sub-millisecond latency",
      results: ["99.99% uptime", "50% faster execution", "$2M cost savings"],
      industry: "Investment Banking"
    },
    {
      client: "Digital Bank",
      challenge: "Needed scalable core banking system for rapid growth",
      solution: "Cloud-native banking platform with microservices architecture",
      results: ["10x scalability", "60% faster time-to-market", "Zero downtime deployments"],
      industry: "Digital Banking"
    },
    {
      client: "Asset Management Firm",
      challenge: "Manual risk reporting taking weeks to complete",
      solution: "Automated risk management and reporting system",
      results: ["90% time reduction", "Real-time risk monitoring", "100% regulatory compliance"],
      industry: "Asset Management"
    }
  ];

  const technologies = [
    "Java/Spring Boot", "Python/Django", "React/Angular", "Node.js",
    "Kubernetes", "Docker", "AWS/Azure", "MongoDB/PostgreSQL",
    "Kafka", "Redis", "Elasticsearch", "Blockchain",
    "TensorFlow", "Apache Spark", "Microservices", "API Gateway"
  ];

  const compliance = [
    "PCI DSS", "SOX", "Basel III", "MiFID II", "GDPR", "PSD2", "FATCA", "Dodd-Frank"
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-hover to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Financial Services Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              Transforming Financial Services with
              <span className="block text-primary-glow">Cutting-Edge Technology</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We deliver secure, compliant, and scalable solutions for banks, investment firms, 
              insurance companies, and fintech startups. From core banking systems to algorithmic 
              trading platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-dark hover:bg-white/90">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From traditional banking to cutting-edge fintech, we build solutions that drive innovation 
              while ensuring security and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-elevation transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-status-online flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from our financial services partnerships
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-elevation transition-all">
                <CardHeader>
                  <Badge className="w-fit mb-2">{study.industry}</Badge>
                  <CardTitle className="text-xl">{study.client}</CardTitle>
                  <CardDescription className="text-base">
                    <strong>Challenge:</strong> {study.challenge}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-status-online flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
                Enterprise-Grade Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We leverage cutting-edge technologies and industry best practices to build 
                robust, scalable financial systems that can handle millions of transactions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="font-semibold">High-Performance Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Bank-Grade Security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Global Scalability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Real-time Analytics</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies We Use:</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Compliance Standards:</h3>
              <div className="flex flex-wrap gap-2">
                {compliance.map((standard, index) => (
                  <Badge key={index} className="text-sm">
                    {standard}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help you build secure, compliant, and innovative financial solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-dark hover:bg-white/90">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialServices;