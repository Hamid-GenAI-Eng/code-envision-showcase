import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Zap, Globe, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence First",
      description: "We deliver world-class solutions that exceed expectations and drive measurable business impact."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our mission. We build lasting partnerships through trust, transparency, and results."
    },
    {
      icon: Zap,
      title: "Innovation Drive",
      description: "We stay ahead of technology trends to bring cutting-edge solutions to your business challenges."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "From startups to enterprises, we scale solutions that make a difference worldwide."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous testing, best practices, and continuous improvement ensure reliable, secure solutions."
    },
    {
      icon: Heart,
      title: "People First",
      description: "We invest in our team and culture because great people build great products."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Founded",
      description: "Started with a vision to transform how businesses leverage technology"
    },
    {
      year: "2020",
      title: "AI Focus",
      description: "Expanded into AI/ML solutions and generative AI applications"
    },
    {
      year: "2022",
      title: "Enterprise Scale",
      description: "Reached 100+ enterprise clients across 15 industries"
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "International expansion with offices in 3 continents"
    }
  ];

  const leadership = [
    {
      name: "Ahmed Hassan",
      role: "Co-Founder & CEO",
      image: "/src/assets/ahmed-profile.jpg",
      bio: "15+ years in enterprise software, former Microsoft architect"
    },
    {
      name: "Hamid Al-Rashid", 
      role: "Co-Founder & CTO",
      image: "/src/assets/hamid-profile.jpg",
      bio: "AI researcher and full-stack architect with 12+ years experience"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnterpriseNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Building the Future of
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Enterprise Technology
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We're a team of visionaries, engineers, and strategists who believe technology 
              should empower businesses to achieve extraordinary outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Mission</Badge>
              <h2 className="text-4xl font-bold font-space-grotesk mb-6">
                Transforming Ideas Into 
                <span className="gradient-text"> Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We exist to bridge the gap between ambitious business goals and technological reality. 
                Every solution we create is designed to not just meet requirements, but to unlock 
                new possibilities and drive sustainable growth.
              </p>
              <Button variant="hero" size="lg" className="shadow-glow">
                Explore Our Work
              </Button>
            </div>
            <div className="space-y-8">
              <Card className="p-8 border-border bg-card/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the global leader in custom enterprise solutions, setting the standard 
                  for innovation, quality, and client success in the digital transformation era.
                </p>
              </Card>
              <Card className="p-8 border-border bg-card/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-muted-foreground">
                  We combine deep technical expertise with strategic business insight, 
                  ensuring every solution is both technically excellent and commercially viable.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center border-border hover:shadow-elevation transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Milestones & Growth
            </h2>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-lg text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">
              Meet Our Founders
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-8 text-center border-border">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-4">{leader.role}</p>
                  <p className="text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="shadow-glow">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;