import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, TrendingUp, Target, MessageCircle, BarChart3, Shield, CheckCircle } from "lucide-react";

const CRMService = () => {
  const features = [
    {
      icon: Users,
      title: "Lead Management",
      description: "Advanced lead scoring, nurturing campaigns, and conversion tracking"
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics",
      description: "Real-time sales dashboards, forecasting, and performance insights"
    },
    {
      icon: MessageCircle,
      title: "Customer Support",
      description: "Integrated support ticketing, knowledge base, and satisfaction tracking"
    },
    {
      icon: Target,
      title: "Marketing Automation",
      description: "Email campaigns, social media integration, and lead nurturing workflows"
    },
    {
      icon: BarChart3,
      title: "Sales Pipeline",
      description: "Visual pipeline management with stage tracking and deal forecasting"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with role-based access and audit trails"
    }
  ];

  const benefits = [
    "85% increase in qualified leads",
    "32% improvement in customer retention",
    "60% faster sales cycle",
    "Complete customer journey visibility",
    "Automated workflow efficiency",
    "Mobile-first design for field teams"
  ];

  const integrations = [
    "Email Marketing Platforms",
    "Social Media Networks",
    "Accounting Software",
    "E-commerce Platforms",
    "Communication Tools",
    "Analytics Platforms"
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <Badge variant="outline" className="mb-4 bg-white/10 border-white/20 text-white">
              Customer Relationship Management
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Build Stronger Customer
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Relationships with Smart CRM
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your sales and customer service with our intelligent CRM solutions. From lead 
              generation to customer retention, we build systems that grow your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                Free CRM Assessment
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
                Lost Opportunities and
                <span className="gradient-text"> Disconnected Customer Data</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Many businesses struggle with fragmented customer data across different platforms, 
                  leading to missed opportunities, poor customer experience, and inefficient sales processes.
                </p>
                <p className="leading-relaxed">
                  Without a unified view of customer interactions, sales teams can't effectively 
                  nurture leads, while support teams lack context for meaningful customer assistance.
                </p>
              </div>
            </div>
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Common CRM Problems</h3>
                <div className="space-y-4">
                  {[
                    "Scattered customer information",
                    "Manual lead tracking processes",
                    "Poor sales visibility and forecasting",
                    "Inconsistent customer communication",
                    "Lack of integration between teams",
                    "Limited reporting and analytics"
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
              Intelligent CRM Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We build custom CRM solutions that centralize customer data, automate workflows, 
              and provide actionable insights to drive revenue growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-border hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="outline" className="mb-4">AI-Powered Features</Badge>
              <h2 className="text-3xl font-bold font-space-grotesk mb-6">
                Smart Automation That Drives Results
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our CRM solutions leverage artificial intelligence to automate routine tasks, 
                predict customer behavior, and provide personalized experiences at scale.
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
                <h3 className="text-xl font-bold mb-6">AI Capabilities</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">Predictive Lead Scoring</h4>
                    <p className="text-sm text-muted-foreground">
                      AI algorithms analyze customer behavior to identify high-value prospects
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">Sentiment Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Understand customer emotions through communication analysis
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">Automated Workflows</h4>
                    <p className="text-sm text-muted-foreground">
                      Smart automation for follow-ups, notifications, and task assignments
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">Sales Forecasting</h4>
                    <p className="text-sm text-muted-foreground">
                      AI-driven predictions for accurate revenue forecasting
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
              Regional Banking Group Transformation
            </h2>
          </div>
          
          <Card className="p-8 border-border">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-green-600">Challenge</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Regional banking group needed to improve customer acquisition and retention 
                    while providing personalized financial products and services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-green-600">Solution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Custom CRM with AI-driven customer insights, automated lead scoring, 
                    and personalized product recommendations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-green-600">Results</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-xs text-muted-foreground">Increase in qualified leads</div>
                    <div className="text-2xl font-bold text-green-600">32%</div>
                    <div className="text-xs text-muted-foreground">Improvement in retention</div>
                    <div className="text-2xl font-bold text-green-600">60%</div>
                    <div className="text-xs text-muted-foreground">Faster loan approvals</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Integrations</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Seamless Platform Connectivity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our CRM solutions integrate with your existing tools and platforms to create 
              a unified customer experience across all touchpoints.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-6 text-center border-border hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                  <h3 className="font-bold">{integration}</h3>
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
            Ready to Boost Your Sales Performance?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss your CRM requirements and design a solution that transforms your customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule CRM Demo
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
              Get Free Assessment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRMService;