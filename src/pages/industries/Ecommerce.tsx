import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  CreditCard,
  Truck,
  Users,
  BarChart3,
  Smartphone,
  Search,
  Star,
  Globe
} from "lucide-react";
import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";

const Ecommerce = () => {
  const solutions = [
    {
      title: "Custom E-commerce Platforms",
      description: "Scalable online stores with advanced features and integrations",
      icon: ShoppingCart,
      features: ["Multi-vendor support", "Mobile optimization", "Payment integration", "Inventory management"]
    },
    {
      title: "Mobile Commerce Apps",
      description: "Native and hybrid mobile apps for iOS and Android",
      icon: Smartphone,
      features: ["Push notifications", "Offline shopping", "Social login", "In-app payments"]
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple gateway support",
      icon: CreditCard,
      features: ["Multi-currency", "Fraud detection", "PCI compliance", "Recurring payments"]
    },
    {
      title: "Marketplace Solutions",
      description: "Multi-vendor marketplace platforms with vendor management",
      icon: Users,
      features: ["Vendor onboarding", "Commission management", "Dispute resolution", "Analytics dashboard"]
    },
    {
      title: "Order Management Systems",
      description: "Complete order fulfillment and logistics management",
      icon: Truck,
      features: ["Order tracking", "Shipping integration", "Returns management", "Warehouse management"]
    },
    {
      title: "Search & Personalization",
      description: "AI-powered search and recommendation engines",
      icon: Search,
      features: ["Smart search", "Product recommendations", "Personalized content", "A/B testing"]
    }
  ];

  const caseStudies = [
    {
      client: "Fashion Retailer",
      challenge: "Low conversion rates and poor mobile experience",
      solution: "Responsive e-commerce platform with AI recommendations",
      results: ["45% increase in conversion", "60% mobile traffic growth", "35% higher AOV"],
      industry: "Fashion & Retail"
    },
    {
      client: "B2B Marketplace",
      challenge: "Complex B2B workflows and bulk ordering needs",
      solution: "Custom B2B platform with advanced pricing and catalogs",
      results: ["200% increase in orders", "50% faster checkout", "40% reduction in support tickets"],
      industry: "B2B Commerce"
    },
    {
      client: "Electronics Store",
      challenge: "Inventory management across multiple channels",
      solution: "Omnichannel inventory and order management system",
      results: ["99% inventory accuracy", "30% faster fulfillment", "25% reduction in stockouts"],
      industry: "Electronics"
    }
  ];

  const technologies = [
    "React/Next.js", "Node.js/Express", "Shopify Plus", "Magento",
    "WooCommerce", "PostgreSQL/MongoDB", "Redis", "Elasticsearch",
    "Stripe/PayPal", "AWS/Google Cloud", "Docker/Kubernetes", "GraphQL",
    "React Native", "Flutter", "Progressive Web Apps", "Microservices"
  ];

  const integrations = [
    "Stripe", "PayPal", "Square", "Shopify", "Amazon", "eBay", "Google Analytics", "Mailchimp",
    "Salesforce", "HubSpot", "Zendesk", "Slack", "QuickBooks", "NetSuite"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for better user experience"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "PCI DSS compliant with advanced security measures"
    },
    {
      icon: Globe,
      title: "Global Ready",
      description: "Multi-currency, multi-language support"
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Advanced analytics and reporting capabilities"
    }
  ];

  const platforms = [
    { name: "Shopify Plus", description: "Enterprise e-commerce platform" },
    { name: "Magento Commerce", description: "Flexible and scalable solution" },
    { name: "WooCommerce", description: "WordPress-based e-commerce" },
    { name: "Custom Solutions", description: "Tailored to your exact needs" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-accent via-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              E-commerce Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              Building World-Class
              <span className="block text-primary-glow">E-commerce Experiences</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We create high-converting e-commerce platforms, mobile apps, and marketplaces 
              that drive sales, enhance customer experience, and scale with your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-dark hover:bg-white/90">
                Get E-commerce Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
              Why Choose Our E-commerce Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
              Complete E-commerce Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom e-commerce platforms to mobile apps and marketplaces, 
              we deliver solutions that convert visitors into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-elevation transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
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

      {/* Platforms */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
              E-commerce Platforms We Work With
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the right platform for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-all group">
                <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
              E-commerce Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven results across different e-commerce verticals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-elevation transition-all">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-accent text-white">{study.industry}</Badge>
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
                          <Star className="w-4 h-4 text-accent flex-shrink-0" />
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
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
                Modern E-commerce Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We use cutting-edge technologies and best practices to build fast, 
                secure, and scalable e-commerce solutions that deliver exceptional user experiences.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-accent" />
                  <span className="font-semibold">High Performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-accent" />
                  <span className="font-semibold">PCI DSS Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Mobile Optimized</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Analytics Integration</span>
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

              <h3 className="text-xl font-semibold mb-4">Popular Integrations:</h3>
              <div className="flex flex-wrap gap-2">
                {integrations.map((integration, index) => (
                  <Badge key={index} className="text-sm bg-accent text-white">
                    {integration}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
            Ready to Launch Your E-commerce Success?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build a high-converting e-commerce platform that drives growth and delights customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-dark hover:bg-white/90">
              Start Your E-commerce Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download E-commerce Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;