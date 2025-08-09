import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Search, Calendar, User, ArrowRight, TrendingUp, Clock, Eye } from "lucide-react";

const Insights = () => {
  const featuredPost = {
    title: "The Future of Enterprise AI: RAG Systems and Conversational Interfaces",
    excerpt: "Exploring how Retrieval-Augmented Generation is transforming how enterprises interact with their data, and practical implementation strategies for AI-powered business solutions.",
    author: "Ahmed Hassan",
    date: "March 15, 2024",
    readTime: "12 min read",
    views: "2.3k",
    image: "/api/placeholder/800/400",
    tags: ["AI", "RAG", "Enterprise", "Machine Learning"]
  };

  const categories = [
    { name: "All Posts", count: 47 },
    { name: "AI & Machine Learning", count: 15 },
    { name: "Enterprise Software", count: 12 },
    { name: "Cloud & DevOps", count: 8 },
    { name: "Industry Insights", count: 7 },
    { name: "Case Studies", count: 5 }
  ];

  const recentPosts = [
    {
      title: "Building Scalable ERP Systems: Architecture Patterns for the Modern Enterprise",
      excerpt: "Deep dive into microservices architecture, data consistency patterns, and performance optimization strategies for large-scale ERP implementations.",
      author: "Hamid Raza",
      date: "March 12, 2024",
      readTime: "8 min read",
      views: "1.8k",
      tags: ["ERP", "Architecture", "Microservices"],
      category: "Enterprise Software"
    },
    {
      title: "CRM Integration Strategies: Connecting Sales, Marketing, and Customer Success",
      excerpt: "Best practices for implementing unified customer data platforms and creating seamless workflows across departments.",
      author: "Sarah Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      views: "1.5k",
      tags: ["CRM", "Integration", "Customer Success"],
      category: "Enterprise Software"
    },
    {
      title: "Computer Vision in Manufacturing: Quality Control and Predictive Maintenance",
      excerpt: "Real-world applications of computer vision for industrial automation, defect detection, and equipment monitoring.",
      author: "Dr. Michael Rodriguez",
      date: "March 8, 2024",
      readTime: "10 min read",
      views: "2.1k",
      tags: ["Computer Vision", "Manufacturing", "AI"],
      category: "AI & Machine Learning"
    },
    {
      title: "DevOps at Scale: Managing Multi-Cloud Infrastructure for Enterprise Applications",
      excerpt: "Strategies for orchestrating complex deployments across AWS, Azure, and GCP while maintaining security and compliance.",
      author: "Ahmed Hassan",
      date: "March 5, 2024",
      readTime: "9 min read",
      views: "1.9k",
      tags: ["DevOps", "Cloud", "Infrastructure"],
      category: "Cloud & DevOps"
    },
    {
      title: "The ROI of Custom Software Development: When to Build vs Buy",
      excerpt: "Framework for evaluating custom development investments and calculating long-term value for enterprise software decisions.",
      author: "Jessica Williams",
      date: "March 3, 2024",
      readTime: "7 min read",
      views: "1.6k",
      tags: ["Strategy", "ROI", "Decision Framework"],
      category: "Industry Insights"
    },
    {
      title: "Mobile-First Enterprise: Building Apps That Drive Business Results",
      excerpt: "Design principles and development strategies for creating mobile applications that enhance productivity and user engagement.",
      author: "Hamid Raza",
      date: "March 1, 2024",
      readTime: "8 min read",
      views: "1.4k",
      tags: ["Mobile", "UX", "Enterprise"],
      category: "Enterprise Software"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Insights & <span className="text-gradient">Thought Leadership</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Deep technical insights, industry trends, and practical guidance from our team of 
            enterprise technology experts.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search articles, topics, technologies..."
              className="pl-10 h-12 bg-background/80 backdrop-blur-sm border-border/50"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "secondary" : "ghost"}
                    className="w-full justify-between text-left"
                  >
                    <span>{category.name}</span>
                    <Badge variant="outline" className="ml-2">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get weekly insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="your@email.com" />
                  <Button variant="premium" size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Featured Article */}
            <Card className="p-0 mb-12 overflow-hidden group hover:shadow-elevation transition-all duration-300">
              <div className="aspect-video bg-gradient-subtle relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {featuredPost.views}
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline-premium" className="group/btn">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Recent Articles Grid */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Recent Articles</h2>
                <Button variant="outline">
                  View All
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {recentPosts.map((post, index) => (
                  <Card key={index} className="group hover:shadow-elevation transition-all duration-300 cursor-pointer">
                    <div className="aspect-video bg-gradient-subtle relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/5" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Insights;