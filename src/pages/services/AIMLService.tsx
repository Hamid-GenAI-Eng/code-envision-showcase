import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Eye, BarChart3, Zap, Target, Cpu, CheckCircle } from "lucide-react";

const AIMLService = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Custom ML models for prediction, classification, and pattern recognition"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual quality inspection"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends, demand, and business outcomes with advanced algorithms"
    },
    {
      icon: Target,
      title: "Recommendation Systems",
      description: "Personalized content and product recommendations for users"
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      description: "Neural networks for complex pattern recognition and automation"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation for repetitive tasks and decision-making"
    }
  ];

  const applications = [
    {
      title: "Manufacturing Intelligence",
      description: "Quality control, predictive maintenance, and production optimization",
      useCases: ["Defect detection", "Equipment monitoring", "Supply chain optimization"]
    },
    {
      title: "Financial Analytics",
      description: "Risk assessment, fraud detection, and algorithmic trading",
      useCases: ["Credit scoring", "Market analysis", "Regulatory compliance"]
    },
    {
      title: "Healthcare AI",
      description: "Medical imaging analysis, drug discovery, and patient monitoring",
      useCases: ["Diagnostic imaging", "Treatment planning", "Clinical decision support"]
    },
    {
      title: "Retail Intelligence",
      description: "Customer behavior analysis, inventory optimization, and pricing strategies",
      useCases: ["Demand forecasting", "Price optimization", "Customer segmentation"]
    }
  ];

  const technologies = [
    { name: "TensorFlow/PyTorch", category: "Deep Learning Frameworks" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "CUDA/GPU Computing", category: "High Performance" },
    { name: "Docker/Kubernetes", category: "ML Operations" },
    { name: "Apache Spark", category: "Big Data Processing" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <Badge variant="outline" className="mb-4 bg-white/10 border-white/20 text-white">
              AI/ML & Computer Vision
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Intelligent Solutions
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Powered by AI & Machine Learning
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your business with cutting-edge AI and machine learning solutions. From computer 
              vision to predictive analytics, we build intelligent systems that automate processes and unlock insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Explore AI Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                AI Readiness Assessment
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
                Manual Processes and
                <span className="gradient-text"> Hidden Data Insights</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Organizations struggle with manual, time-consuming processes that could be automated, 
                  while valuable insights remain buried in their data due to lack of advanced analytics.
                </p>
                <p className="leading-relaxed">
                  Without AI-powered solutions, businesses miss opportunities for optimization, 
                  predictive maintenance, quality control, and intelligent decision-making.
                </p>
              </div>
            </div>
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">AI/ML Opportunities</h3>
                <div className="space-y-4">
                  {[
                    "Manual quality inspection processes",
                    "Reactive maintenance strategies",
                    "Limited customer personalization",
                    "Inefficient resource allocation",
                    "Lack of predictive insights",
                    "Time-consuming data analysis"
                  ].map((opportunity, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {opportunity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Solutions</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              AI-Powered Business Intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We develop custom AI and machine learning solutions that transform your data into 
              actionable insights and automate complex business processes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-border hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Industry Applications</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              AI Solutions Across Industries
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="p-8 border-border hover:shadow-elevation transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{app.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm mb-2">Use Cases</h4>
                    {app.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                        {useCase}
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
              <Badge variant="outline" className="mb-4">Technology & Tools</Badge>
              <h2 className="text-3xl font-bold font-space-grotesk mb-6">
                State-of-the-Art
                <span className="gradient-text"> AI Technology Stack</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We leverage the most advanced AI frameworks and tools to build robust, 
                scalable machine learning solutions that deliver real business value.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-bold mb-3">AI Development Process</h3>
                <div className="space-y-3">
                  {[
                    "Data collection and preparation",
                    "Model development and training",
                    "Performance evaluation and tuning",
                    "Production deployment and monitoring"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-xs font-bold text-orange-600">{index + 1}</span>
                      </div>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Core Technologies</h3>
                <div className="space-y-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold">{tech.name}</h4>
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">{tech.category}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-lg">
                  <h4 className="font-bold mb-2">MLOps & Deployment</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete ML lifecycle management with automated testing, deployment, 
                    and monitoring for production-ready AI solutions.
                  </p>
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
              Healthcare Data Analytics Platform
            </h2>
          </div>
          
          <Card className="p-8 border-border">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-orange-600">Challenge</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Multi-hospital network needed unified patient data analysis across facilities 
                    to improve outcomes and reduce costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-orange-600">Solution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    HIPAA-compliant analytics platform with predictive health insights, 
                    risk assessment, and treatment optimization AI.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-orange-600">Results</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-orange-600">30%</div>
                    <div className="text-xs text-muted-foreground">Reduction in readmissions</div>
                    <div className="text-2xl font-bold text-orange-600">50%</div>
                    <div className="text-xs text-muted-foreground">Faster diagnosis</div>
                    <div className="text-2xl font-bold text-orange-600">20%</div>
                    <div className="text-xs text-muted-foreground">Cost reduction</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Benefits</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Transform Your Business with AI
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "60%",
                description: "Reduction in manual tasks",
                icon: Zap
              },
              {
                metric: "45%",
                description: "Improvement in accuracy",
                icon: Target
              },
              {
                metric: "3x",
                description: "Faster decision making",
                icon: Brain
              },
              {
                metric: "25%",
                description: "Cost savings achieved",
                icon: BarChart3
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{benefit.metric}</div>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
            Ready to Unlock the Power of AI?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's explore how AI and machine learning can transform your business processes and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule AI Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
              Download AI Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIMLService;