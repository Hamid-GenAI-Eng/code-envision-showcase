import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImage from "@/assets/logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const location = useLocation();
  const isSpecialPage = location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service';

  // Simplified, high-contrast navbar for policy pages only
  if (isSpecialPage) {
    return (
      <nav className="fixed inset-x-0 top-0 z-50 bg-slate-900/95 text-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="inline-flex items-center">
              <img src={logoImage} alt="Code Envision" className="w-10 h-10 rounded-md object-cover" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="/about" className="px-3 py-1 rounded-md text-white hover:bg-white/5">About</a>
            <a href="/services" className="px-3 py-1 rounded-md text-white hover:bg-white/5">Services</a>
            <a href="/projects" className="px-3 py-1 rounded-md text-white hover:bg-white/5">Projects</a>
            <a href="/contact" className="px-3 py-1 rounded-md text-white hover:bg-white/5">Contact</a>
          </div>

          <div className="flex items-center space-x-3">
            <a href="/contact" className="hidden md:inline-block bg-white text-slate-900 px-3 py-1 rounded-md">Get Started</a>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md">
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-900/95 border-t border-white/10">
            <div className="p-4 space-y-3">
              <a href="/about" className="block text-white">About</a>
              <a href="/services" className="block text-white">Services</a>
              <a href="/projects" className="block text-white">Projects</a>
              <a href="/contact" className="block text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>
    );
  }

  return (
    // outer fixed container; keep clicks disabled here and enabled on the inner pill
    <nav className="fixed inset-x-0 top-10 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-4xl px-4">
        {/* logo placed at the left-most side of the nav (absolute) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-auto flex items-center">
          <img
            src={logoImage}
            alt="Code Envision"
            className="w-10 h-10 rounded-lg object-cover"
          />
        </div>

        {/* inner pill: this is the visible nav with a strong white rounded boundary */}
        <div className={`mx-auto w-full max-w-[900px] transition-all duration-300 pointer-events-auto rounded-[22px] border-[2px] px-6 py-2 ${
          isScrolled
            ? 'bg-white/6 shadow-elevation border-white/95 ring-2 ring-white/70 backdrop-blur-md'
            : 'bg-white/6 border-white/85 ring-2 ring-white/40 backdrop-blur-md'
        }`}>
          <div className="flex items-center justify-between h-12">
          {/* left placeholder so content doesn't collide with absolute logo */}
          <div className="pl-10 hidden md:block" />

          {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
        className="text-white/90 hover:text-white transition-colors font-medium px-2 py-1.5"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              onClick={() => handleNavClick('#contact')}
              className="shadow-glow"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
          {/* Mobile Navigation (dropdown underneath the pill) */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2">
              <div className="mx-auto w-full bg-white/5 backdrop-blur-md rounded-lg py-4 px-4 shadow-elevation border border-white/10">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-white/90 hover:text-white transition-colors font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  variant="hero" 
                  className="w-full mt-4"
                  onClick={() => handleNavClick('#contact')}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;