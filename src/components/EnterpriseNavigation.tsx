import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Building2,
  Code2,
  Brain,
  Globe,
  Shield,
  Users,
  Briefcase,
  Phone
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
// Removed logoImage import, using public/logo.jpg

const EnterpriseNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  
  const isSpecialPage = location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service';

  // Render a simplified, fully visible navbar on policy pages to ensure readability
  if (isSpecialPage) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 text-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="inline-flex items-center">
              <img src="/Logo.jpg" alt="Code Envision" className="w-12 h-12 rounded-full object-cover" />
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="/" className="text-white px-3 py-1 rounded-md hover:bg-white/5">Home</a>
            <a href="/services" className="text-white px-3 py-1 rounded-md hover:bg-white/5">Services</a>
            <a href="/industries" className="text-white px-3 py-1 rounded-md hover:bg-white/5">Industries</a>
            <a href="/about" className="text-white px-3 py-1 rounded-md hover:bg-white/5">About</a>
            <a href="/contact" className="text-white px-3 py-1 rounded-md hover:bg-white/5">Contact</a>
          </div>

          <div className="flex items-center space-x-3">
            <a href="/contact" className="hidden lg:inline-block bg-white text-slate-900 px-3 py-1 rounded-md">Contact</a>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md">
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 border-t border-white/10">
            <div className="p-6 space-y-4">
              <a href="/" className="block text-white">Home</a>
              <a href="/services" className="block text-white">Services</a>
              <a href="/industries" className="block text-white">Industries</a>
              <a href="/about" className="block text-white">About</a>
              <a href="/contact" className="block text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      category: "Enterprise Solutions",
      items: [
        { name: "ERP Software", href: "/services/erp", icon: Building2, description: "Complete enterprise resource planning" },
        { name: "CRM Solutions", href: "/services/crm", icon: Users, description: "Customer relationship management" },
        { name: "Integration & Cloud", href: "/services/cloud", icon: Globe, description: "DevOps and cloud solutions" }
      ]
    },
    {
      category: "AI & Innovation",
      items: [
        { name: "AI / ML / Computer Vision", href: "/services/ai", icon: Brain, description: "Artificial intelligence solutions" },
        { name: "GenAI & RAG Systems", href: "/services/genai", icon: Code2, description: "Next-gen AI applications" },
        { name: "Premium Web Apps", href: "/services/web", icon: Shield, description: "Enterprise web platforms" }
      ]
    }
  ];

  const industries = [
    { name: "Financial Services", href: "/industries/financial-services" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "E-commerce", href: "/industries/ecommerce" }
  ];

  const handleNavClick = (elementId: string) => {
    setIsOpen(false);
    setActiveSubmenu(null);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  const handleGetConsultation = () => {
    // if already on home, scroll to #contact
    if (location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // otherwise navigate to home then scroll after a short delay
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const getNavItemClass = () => {
    if (isSpecialPage) return "text-white hover:text-primary-glow hover:bg-white/10";
    return isScrolled
      ? "text-foreground hover:text-primary hover:bg-primary-muted"
      : "text-white hover:text-primary-glow hover:bg-white/10";
  };

  const isRouteActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isSpecialPage
        ? 'bg-transparent'
        : isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-elevation border-b border-border' 
          : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Logo positioned at the absolute left-most of the nav */}
          <img
            src="/Logo.jpg"
            alt="Company Logo"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full object-cover shadow-card z-30 pointer-events-auto"
          />
          {/* Pill container that gives the visible rounded boundary over hero */}
          <div className={`w-full max-w-[1200px] mx-auto rounded-[22px] border-[2px] px-5 py-2 transition-all duration-300 ${
            isScrolled
              ? 'bg-white/6 shadow-elevation border-white/95 ring-2 ring-white/60 backdrop-blur-md'
              : 'bg-white/6 border-white/85 ring-2 ring-white/35 backdrop-blur-md'
          }`}>
            <div className="flex items-center justify-between h-14">
          {/* left placeholder so content doesn't collide with absolute logo */}
          <div className="pl-12 hidden lg:block" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Home Button */}
            <a 
              href="/"
              className={`px-3 py-1.5 rounded-full transition-all font-medium ${getNavItemClass()} ${isRouteActive('/') ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm' : ''}`}
            >
              Home
            </a>
            {/* Services Mega Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveSubmenu('services')}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <button className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all ${
                isScrolled 
                  ? "text-foreground hover:text-primary hover:bg-primary-muted" 
                  : "text-white hover:text-primary-glow hover:bg-white/10"
              }`}>
                <span className="font-medium">Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Mega Menu Dropdown */}
              {activeSubmenu === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-[600px] bg-white rounded-2xl shadow-cinematic border border-border/50 p-8 animate-fade-in-up z-[110]"
                >
                  <div className="grid grid-cols-2 gap-8">
                    {services.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h3 className="font-space-grotesk font-bold text-lg mb-4 text-foreground">
                          {category.category}
                        </h3>
                        <div className="space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <a
                              key={itemIndex}
                              href={item.href}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary-muted transition-all group/item"
                            >
                              <div className="p-2 bg-primary/10 rounded-lg group-hover/item:bg-primary group-hover/item:text-white transition-all">
                                <item.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-semibold text-foreground group-hover/item:text-primary">
                                  {item.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {item.description}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">Ready to get started?</h4>
                        <p className="text-sm text-muted-foreground">Let's discuss your project requirements</p>
                      </div>
                      <Button className="shadow-card" onClick={handleGetConsultation}>
                        Get Consultation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveSubmenu('industries')}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                isScrolled 
                  ? "text-foreground hover:text-primary hover:bg-primary-muted" 
                  : "text-white hover:text-primary-glow hover:bg-white/10"
              }`}>
                <span className="font-medium">Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeSubmenu === 'industries' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-elevation border border-border/50 p-4 animate-fade-in-up z-[110]"
                >
                  {industries.map((industry, index) => (
                    <a
                      key={index}
                      href={industry.href}
                      className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary-muted rounded-lg transition-all"
                    >
                      {industry.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Nav Items */}
            <button 
              onClick={() => handleNavClick("about")}
              className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                isScrolled 
                  ? "text-foreground hover:text-primary hover:bg-primary-muted" 
                  : "text-white hover:text-primary-glow hover:bg-white/10"
              }`}
            >
              About
            </button>
            
            <button 
              onClick={() => handleNavClick("projects")}
              className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                isScrolled 
                  ? "text-foreground hover:text-primary hover:bg-primary-muted" 
                  : "text-white hover:text-primary-glow hover:bg-white/10"
              }`}
            >
              Case Studies
            </button>

            <a 
              href="/insights"
              className={`px-3 py-1.5 rounded-full transition-all font-medium ${getNavItemClass()} ${isRouteActive('/insights') ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm' : ''}`}
            >
              Insights
            </a>

            <a 
              href="/careers"
              className={`px-3 py-1.5 rounded-full transition-all font-medium ${getNavItemClass()} ${isRouteActive('/careers') ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm' : ''}`}
            >
              Careers
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className={`${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white hover:text-primary-glow hover:bg-white/10"
              }`}
              onClick={() => handleNavClick("contact")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all ${
              isScrolled 
                ? "text-foreground hover:bg-primary-muted" 
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-border/50 animate-fade-in-up">
            <div className="p-6 space-y-6">
              {/* Mobile Services */}
              <div>
                <h3 className="font-space-grotesk font-bold text-lg mb-4">Services</h3>
                <div className="space-y-3 pl-4">
                  {services.flatMap(category => category.items).map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Regular Items */}
              <div className="space-y-4">
                <button 
                  onClick={() => handleNavClick("about")}
                  className="block w-full text-left text-foreground hover:text-primary font-medium"
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavClick("projects")}
                  className="block w-full text-left text-foreground hover:text-primary font-medium"
                >
                  Case Studies
                </button>
                <a href="/insights" className="block text-foreground hover:text-primary font-medium">
                  Insights
                </a>
                <a href="/careers" className="block text-foreground hover:text-primary font-medium">
                  Careers
                </a>
              </div>

              {/* Mobile CTAs */}
              <div className="pt-6 border-t border-border/30 space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  onClick={() => handleNavClick("contact")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnterpriseNavigation;