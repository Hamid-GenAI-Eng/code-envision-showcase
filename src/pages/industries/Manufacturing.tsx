import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Cog,
  BarChart3,
  Truck,
  Factory,
  Brain,
  Wrench,
  Package,
  Eye
} from "lucide-react";
import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";

const Manufacturing = () => {
  const solutions = [
    {
      title: "Smart Factory Solutions",
      description: "IoT-enabled manufacturing with real-time monitoring and control",
      icon: Factory,
      features: ["Equipment monitoring", "Predictive maintenance", "Quality control", "Energy optimization"]
    },
    {
      title: "Manufacturing Execution Systems (MES)",
      description: "Complete production management and workflow optimization",
      icon: Cog,
      features: ["Production scheduling", "Work order management", "Resource allocation", "Performance tracking"]
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain visibility and optimization",
      icon: Truck,
      features: ["Inventory optimization", "Supplier management", "Demand forecasting", "Logistics tracking"]
    },
    {
      title: "Quality Management Systems",
      description: "Automated quality control and compliance management",
      icon: Eye,
      features: ["Inspection automation", "Defect tracking", "Compliance reporting", "Statistical analysis"]
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered equipment maintenance and failure prevention",
      icon: Wrench,
      features: ["Condition monitoring", "Failure prediction", "Maintenance scheduling", "Cost optimization"]
    },
    {
      title: "Inventory Management",
      description: "Intelligent inventory optimization and warehouse management",
      icon: Package,
      features: ["Real-time tracking", "Automated replenishment", "Warehouse optimization", "Barcode/RFID integration"]
    }
  ];

  const caseStudies = [
    {
      client: "Automotive Manufacturer",
      challenge: "Frequent equipment downtime causing production delays",
      solution: "AI-powered predictive maintenance system with IoT sensors",
      results: ["45% reduction in downtime", "30% maintenance cost savings", "15% increase in productivity"],
      industry: "Automotive"
    },
    {
      client: "Electronics Manufacturer",
      challenge: "Quality control issues and high defect rates",
      solution: "Computer vision quality inspection system",
      results: ["99.5% defect detection", "60% faster inspection", "25% reduction in rework"],
      industry: "Electronics"
    },
    {
      client: "Food Processing Plant",
      challenge: "Inefficient supply chain causing waste and delays",
      solution: "Integrated supply chain management platform",
      results: ["20% inventory reduction", "50% faster order processing", "95% on-time delivery"],
      industry: "Food & Beverage"
    }
  ];

  const technologies = [
    "Python/Django", "React/Node.js", "IoT Platforms", "TensorFlow",
    "PostgreSQL/InfluxDB", "Apache Kafka", "Docker/Kubernetes", "AWS/Azure IoT",
    "MQTT", "OPC UA", "Edge Computing", "Computer Vision",
    "Time Series DB", "Grafana", "Prometheus", "Microservices"
  ];

  const standards = [
    "ISO 9001", "ISO 14001", "ISO 45001", "Industry 4.0", "IEC 61131", "MQTT", "OPC UA", "SCADA"
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Increased Efficiency",
      description: "Optimize production processes and reduce waste"
    },
    {
      icon: Shield,
      title: "Enhanced Quality",
      description: "Automated quality control and defect prevention"
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "AI-powered insights for better decision making"
    },
    {
      icon: Zap,
      title: "Real-time Visibility",
      description: "Complete transparency across operations"
    }
  ];

  const industryTypes = [
    "Automotive", "Electronics", "Food & Beverage", "Pharmaceuticals",
    "Textiles", "Chemical", "Aerospace", "Medical Devices"
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-hover to-accent text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Industry 4.0 Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              Transforming Manufacturing with
              <span className="block text-primary-glow">Smart Technology</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We digitize manufacturing operations with IoT, AI, and automation solutions 
              that increase efficiency, reduce costs, and ensure quality across your production line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-dark hover:bg-white/90">
                Schedule Factory Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Manufacturing Solutions
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
              Manufacturing Excellence Through Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-all">
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
              Comprehensive Manufacturing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From smart factories to predictive maintenance, we deliver end-to-end solutions 
              that transform traditional manufacturing into Industry 4.0 operations.
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

      {/* Industries Served */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized solutions for diverse manufacturing sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industryTypes.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-all group">
                <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{industry}</h3>
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
              Manufacturing Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from our manufacturing partnerships
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
                          <Settings className="w-4 h-4 text-status-online flex-shrink-0" />
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
                Industrial-Grade Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our manufacturing solutions leverage industrial IoT, edge computing, and AI 
                to create robust, scalable systems that operate in demanding factory environments.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Factory className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Industry 4.0 Ready</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Industrial Security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Real-time Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Advanced Analytics</span>
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

              <h3 className="text-xl font-semibold mb-4">Standards & Protocols:</h3>
              <div className="flex flex-wrap gap-2">
                {standards.map((standard, index) => (
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
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
            Ready to Digitize Your Manufacturing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's transform your factory with smart technology and Industry 4.0 solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-dark hover:bg-white/90">
              Start Digital Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Manufacturing Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;