import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Heart,
  Shield,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-elite-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Logo.jpg" 
                alt="Company Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              {/* Removed company name for logo-only branding */}
            </div>
            <p className="text-white/70 leading-relaxed">
              Transforming visionary ideas into powerful software solutions. 
              Building the future through innovation and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Portfolio", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "AI & Machine Learning",
                "Full-Stack Development",
                "Mobile Applications",
                "Cloud Solutions",
                "Data Engineering",
                "Cybersecurity"
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/70">contact@codeenvision.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-white/70">Pakistan</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-elite-dark">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-elite-dark">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-5 h-5 text-secondary" />
            <span className="text-white/80">100% Client Satisfaction</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Code Envision. All rights reserved. Founded July 2025.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;