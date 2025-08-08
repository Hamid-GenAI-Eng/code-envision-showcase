import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ExternalLink, 
  Github, 
  Star, 
  TrendingUp, 
  Users, 
  Zap,
  ArrowRight 
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description: "Enterprise-grade analytics platform with machine learning predictions, real-time dashboards, and intelligent insights for data-driven decision making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
      metrics: {
        users: "10K+",
        performance: "99.9%",
        growth: "+150%"
      },
      category: "AI & Analytics",
      featured: true
    },
    {
      title: "E-Commerce Ecosystem",
      description: "Complete e-commerce solution with inventory management, payment processing, order tracking, and intelligent recommendation engine.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      metrics: {
        users: "25K+",
        performance: "99.8%",
        growth: "+200%"
      },
      category: "E-Commerce",
      featured: true
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform with patient management, appointment scheduling, telemedicine integration, and compliance features.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["ASP.NET", "React", "Azure", "HIPAA"],
      metrics: {
        users: "5K+",
        performance: "99.9%",
        growth: "+100%"
      },
      category: "Healthcare",
      featured: false
    },
    {
      title: "Financial Trading Platform",
      description: "Real-time trading platform with advanced charting, portfolio management, risk analysis, and automated trading algorithms.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      tags: ["React", "FastAPI", "WebSocket", "Redis"],
      metrics: {
        users: "15K+",
        performance: "99.95%",
        growth: "+175%"
      },
      category: "FinTech",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Featured Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            <span className="gradient-text">Real Impact</span> Through Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've transformed businesses across industries with innovative solutions that deliver measurable results and exceptional user experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card key={index} className="group overflow-hidden glow-border hover-lift">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-space-grotesk group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-primary mr-1" />
                      <span className="font-bold text-primary">{project.metrics.users}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Active Users</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Zap className="w-4 h-4 text-secondary mr-1" />
                      <span className="font-bold text-secondary">{project.metrics.performance}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Uptime</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-4 h-4 text-trust-green mr-1" />
                      <span className="font-bold text-trust-green">{project.metrics.growth}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Growth</span>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="premium" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card key={index} className="group glow-border hover-lift">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-space-grotesk font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-card rounded-3xl p-8 shadow-elevation">
          <Star className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-space-grotesk mb-4">
            Ready to Build Something <span className="gradient-text">Extraordinary</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our portfolio of successful projects. Let's discuss how we can transform your vision into a powerful, scalable solution.
          </p>
          <Button variant="hero" size="lg">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
