import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, MessageSquare, Search, Zap, Database, Shield, CheckCircle, Code2, FileText } from "lucide-react";

const GenAIService = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "GPT-powered chatbots and virtual assistants with natural language understanding"
    },
    {
      icon: Search,
      title: "RAG Systems",
      description: "Retrieval-Augmented Generation for accurate, context-aware AI responses"
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "Automated document processing, extraction, and intelligent summarization"
    },
    {
      icon: Code2,
      title: "Code Generation",
      description: "AI-powered code completion, generation, and automated code review systems"
    },
    {
      icon: Database,
      title: "Knowledge Management",
      description: "Intelligent knowledge bases with semantic search and AI-driven insights"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Secure AI implementations with data privacy and compliance safeguards"
    }
  ];

  const benefits = [
    "90% reduction in content creation time",
    "85% improvement in customer query resolution",
    "70% faster document processing",
    "Real-time knowledge discovery",
    "Automated workflow optimization",
    "Enterprise-grade security and compliance"
  ];

  const ragComponents = [
    {
      title: "Data Ingestion",
      description: "Multi-format document processing with intelligent chunking strategies",
      technologies: ["PDF", "Word", "Excel", "Web Pages", "APIs", "Databases"]
    },
    {
      title: "Vector Storage",
      description: "High-performance embedding storage with semantic similarity search",
      technologies: ["Pinecone", "Weaviate", "Chroma", "Elasticsearch", "PostgreSQL pgvector"]
    },
    {
      title: "LLM Integration",
      description: "Enterprise-grade language models with custom fine-tuning capabilities",
      technologies: ["GPT-4", "Claude", "Llama 2", "PaLM", "Custom Models"]
    },
    {
      title: "Response Generation",
      description: "Context-aware responses with citation tracking and fact verification",
      technologies: ["Chain-of-Thought", "ReAct", "Multi-Agent", "Tool Use"]
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
              Generative AI & RAG Systems
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Transform Business with
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Intelligent AI Solutions
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Harness the power of generative AI and retrieval-augmented generation to create 
              intelligent systems that understand, learn, and adapt to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Explore AI Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                Request AI Demo
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
                Information Overload and
                <span className="gradient-text"> Manual Processing Bottlenecks</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Organizations struggle with vast amounts of unstructured data, manual content creation, 
                  and the inability to quickly extract actionable insights from their knowledge bases.
                </p>
                <p className="leading-relaxed">
                  Traditional search and knowledge management systems fail to understand context, 
                  leading to poor user experiences and missed business opportunities.
                </p>
              </div>
            </div>
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">AI Implementation Challenges</h3>
                <div className="space-y-4">
                  {[
                    "Information scattered across multiple systems",
                    "Manual content creation and documentation",
                    "Poor search relevance and context understanding",
                    "Time-consuming knowledge discovery processes",
                    "Lack of personalized user experiences",
                    "Security concerns with AI implementations"
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
              Advanced GenAI Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We build custom generative AI solutions and RAG systems that transform how your 
              organization creates, discovers, and utilizes knowledge.
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

      {/* RAG Architecture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">RAG Architecture</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Retrieval-Augmented Generation Pipeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our enterprise RAG systems combine the power of retrieval and generation 
              to deliver accurate, contextual, and verifiable AI responses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ragComponents.map((component, index) => (
              <Card key={index} className="p-6 border-border hover:shadow-elevation transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-purple-600">{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{component.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{component.description}</p>
                  <div className="space-y-2">
                    {component.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs mr-1 mb-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="outline" className="mb-4">AI Capabilities</Badge>
              <h2 className="text-3xl font-bold font-space-grotesk mb-6">
                Enterprise-Grade AI Features
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our GenAI solutions provide intelligent automation, content generation, 
                and knowledge discovery capabilities that scale with your business needs.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 border-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Use Cases</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">Intelligent Customer Support</h4>
                    <p className="text-sm text-muted-foreground">
                      AI agents that provide accurate answers from your knowledge base
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">Content Generation</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated creation of documentation, reports, and marketing content
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">Research & Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Intelligent document analysis and insight extraction
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-lg">
                    <h4 className="font-bold mb-2">Code Assistant</h4>
                    <p className="text-sm text-muted-foreground">
                      AI-powered development tools and automated code generation
                    </p>
                  </div>
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
              Legal Firm Knowledge Management System
            </h2>
          </div>
          
          <Card className="p-8 border-border">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-purple-600">Challenge</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Large law firm needed to quickly search through thousands of legal documents 
                    and case files to find relevant precedents and information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-purple-600">Solution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Implemented RAG system with legal document processing, semantic search, 
                    and AI-powered legal research assistant with citation verification.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-purple-600">Results</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-purple-600">90%</div>
                    <div className="text-xs text-muted-foreground">Faster research time</div>
                    <div className="text-2xl font-bold text-purple-600">95%</div>
                    <div className="text-xs text-muted-foreground">Answer accuracy</div>
                    <div className="text-2xl font-bold text-purple-600">60%</div>
                    <div className="text-xs text-muted-foreground">Productivity increase</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6">
            Ready to Unlock AI-Powered Intelligence?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's explore how generative AI and RAG systems can transform your business operations and decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule AI Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10">
              Explore Use Cases
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenAIService;