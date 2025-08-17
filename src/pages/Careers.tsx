import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Users, Heart, TrendingUp, Globe, Award, MapPin, Clock, DollarSign } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning budget, mentorship programs, and clear advancement paths"
    },
    {
      icon: Globe,
      title: "Remote Flexibility",
      description: "Work from anywhere with quarterly team gatherings and co-working stipends"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Performance bonuses, equity participation, and innovation rewards"
    }
  ];

  const openRoles = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      description: "Build scalable enterprise applications using React, Node.js, and cloud technologies."
    },
    {
      title: "AI/ML Engineer",
      department: "AI/Data",
      location: "Remote / San Francisco",
      type: "Full-time", 
      experience: "3+ years",
      description: "Develop cutting-edge AI solutions, RAG systems, and conversational AI platforms."
    },
    {
      title: "ERP Solutions Architect",
      department: "Consulting",
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "7+ years", 
      description: "Design and implement enterprise ERP systems for Fortune 500 clients."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      experience: "4+ years",
      description: "Create intuitive, beautiful interfaces for complex enterprise software."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      description: "Build robust CI/CD pipelines and manage cloud infrastructure at scale."
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote / Boston",
      type: "Full-time",
      experience: "5+ years",
      description: "Drive enterprise partnerships and expand our market presence globally."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Join Our <span className="text-gradient">Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Shape the future of enterprise technology with a team that values innovation, 
            craftsmanship, and meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="premium">
              <Users className="w-5 h-5 mr-2" />
              View Open Positions
            </Button>
            <Button size="lg" variant="outline-premium">
              Learn Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Culture & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe great technology comes from great people working together with purpose.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center group hover:shadow-elevation hover:border-primary/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find your next challenge and grow with our team.
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <Card key={index} className="p-6 hover:shadow-elevation hover:border-primary/20 transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {role.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <Badge variant="secondary">{role.department}</Badge>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {role.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {role.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {role.experience}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{role.description}</p>
                  </div>
                  <div className="lg:ml-6">
                    <Button variant="outline-premium" className="w-full lg:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't see a perfect fit? Send us your information and we'll keep you in mind for future opportunities.
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Position of Interest
                  </label>
                  <Input placeholder="e.g., Senior Developer" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  LinkedIn Profile / Portfolio URL
                </label>
                <Input placeholder="https://linkedin.com/in/johndoe" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cover Letter / Why are you interested? *
                </label>
                <Textarea 
                  placeholder="Tell us about yourself, your experience, and why you'd like to join our team..."
                  className="min-h-32"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Resume / CV Upload
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <p className="text-muted-foreground">
                    Drag & drop your resume here, or click to browse
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
              </div>

              <Button type="submit" size="lg" variant="premium" className="w-full">
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;