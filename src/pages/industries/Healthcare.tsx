import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Brain,
  Users,
  Database,
  Clock,
  Smartphone,
  FileText,
  Stethoscope
} from "lucide-react";
import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";

const Healthcare = () => {
  const solutions = [
    {
      title: "Electronic Health Records (EHR)",
      description: "Comprehensive patient data management and clinical workflows",
      icon: FileText,
      features: ["HIPAA compliance", "Interoperability", "Clinical decision support", "Mobile access"]
    },
    {
      title: "Telemedicine Platforms",
      description: "Remote patient care and virtual consultation systems",
      icon: Smartphone,
      features: ["Video consultations", "Prescription management", "Patient monitoring", "Integration APIs"]
    },
    {
      title: "Medical AI & Diagnostics",
      description: "AI-powered diagnostic tools and medical imaging analysis",
      icon: Brain,
      features: ["Image analysis", "Predictive analytics", "Drug discovery", "Clinical insights"]
    },
    {
      title: "Hospital Management Systems",
      description: "Complete hospital operations and resource management",
      icon: Activity,
      features: ["Patient flow", "Inventory management", "Staff scheduling", "Revenue cycle"]
    },
    {
      title: "Clinical Trial Management",
      description: "Research and clinical trial coordination platforms",
      icon: Database,
      features: ["Protocol management", "Patient recruitment", "Data collection", "Regulatory compliance"]
    },
    {
      title: "Remote Patient Monitoring",
      description: "IoT-enabled continuous patient health tracking",
      icon: Heart,
      features: ["Wearable integration", "Real-time alerts", "Chronic care", "Emergency response"]
    }
  ];

  const caseStudies = [
    {
      client: "Regional Hospital Network",
      challenge: "Fragmented patient data across multiple systems",
      solution: "Unified EHR platform with AI-powered clinical decision support",
      results: ["40% faster diagnosis", "25% reduction in errors", "90% physician satisfaction"],
      industry: "Hospital System"
    },
    {
      client: "Telehealth Startup",
      challenge: "Scaling virtual care platform for 1M+ patients",
      solution: "Cloud-native telemedicine platform with auto-scaling",
      results: ["99.9% uptime", "500% patient growth", "15-second avg connection time"],
      industry: "Telemedicine"
    },
    {
      client: "Pharmaceutical Company",
      challenge: "Accelerating drug discovery through AI",
      solution: "Machine learning platform for molecular analysis",
      results: ["60% faster screening", "30% cost reduction", "12 new drug candidates"],
      industry: "Pharmaceutical"
    }
  ];

  const technologies = [
    "Python/TensorFlow", "React/Node.js", "FHIR Standards", "HL7 Integration",
    "AWS/Azure Healthcare", "Docker/Kubernetes", "PostgreSQL/MongoDB", "Redis",
    "OpenCV", "PyTorch", "Blockchain", "IoT Platforms",
    "WebRTC", "Socket.io", "Elasticsearch", "Apache Kafka"
  ];

  const compliance = [
    "HIPAA", "HITECH", "FDA 21 CFR Part 11", "ISO 27001", "GDPR", "SOC 2", "DICOM", "ICD-10"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Time-to-Market",
      description: "Rapid development and deployment of healthcare solutions"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "HIPAA-compliant architecture with end-to-end encryption"
    },
    {
      icon: Users,
      title: "Patient-Centric Design",
      description: "Intuitive interfaces focused on patient experience"
    },
    {
      icon: Zap,
      title: "Scalable Infrastructure",
      description: "Cloud-native solutions that grow with your practice"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-status-online via-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Healthcare Innovation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              Revolutionizing Healthcare with
              <span className="block text-primary-glow">Digital Solutions</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We build HIPAA-compliant healthcare software that improves patient outcomes, 
              streamlines operations, and enables breakthrough medical innovations through AI and IoT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-dark hover:bg-white/90">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Healthcare Solutions
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
              Why Choose Our Healthcare Solutions
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
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From electronic health records to AI-powered diagnostics, we deliver solutions 
              that transform healthcare delivery and patient outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-elevation transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-status-online/10 rounded-lg group-hover:bg-status-online group-hover:text-white transition-all">
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="group-hover:text-status-online transition-colors">
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
              Healthcare Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real impact on patient care and healthcare operations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-elevation transition-all">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-status-online text-white">{study.industry}</Badge>
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
                          <Heart className="w-4 h-4 text-status-online flex-shrink-0" />
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
                Healthcare-Grade Technology
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our healthcare solutions are built with HIPAA-compliant architecture, 
                advanced security protocols, and seamless integration capabilities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Stethoscope className="w-6 h-6 text-status-online" />
                  <span className="font-semibold">Clinical-Grade Accuracy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-status-online" />
                  <span className="font-semibold">HIPAA Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-6 h-6 text-status-online" />
                  <span className="font-semibold">AI-Powered Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="w-6 h-6 text-status-online" />
                  <span className="font-semibold">Real-time Monitoring</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Healthcare Technologies:</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Compliance & Standards:</h3>
              <div className="flex flex-wrap gap-2">
                {compliance.map((standard, index) => (
                  <Badge key={index} className="text-sm bg-status-online text-white">
                    {standard}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-status-online to-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
            Ready to Transform Healthcare Delivery?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build HIPAA-compliant solutions that improve patient outcomes and streamline operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-dark hover:bg-white/90">
              Start Your Healthcare Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Healthcare Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;