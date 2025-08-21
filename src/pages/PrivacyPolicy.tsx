import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#0B1120] to-[#0E1F3C] text-white">
      <EnterpriseNavigation />
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] opacity-30 mix-blend-overlay pointer-events-none" />
      <main className="container mx-auto px-4 py-16 mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Privacy Policy</h1>
          </div>

              <Card className="mb-8 bg-gradient-to-br from-[#0E1F3C]/80 to-[#0B1120]/80 border border-blue-500/20 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Introduction</h2>
              <p className="mb-6 text-gray-200 leading-relaxed">
                At Code Envision Technologies, we value your trust. This Privacy Policy explains how we collect, use, and protect your personal and business data when you use our services and platforms.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Information We Collect</h2>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-200">
                <li className="leading-relaxed">Personal details (name, email, phone, etc.)</li>
                <li className="leading-relaxed">Business details (company, services, preferences)</li>
                <li className="leading-relaxed">Usage data (website activity, cookies, analytics)</li>
                <li className="leading-relaxed">Technical data (device, IP address, browser info)</li>
              </ul>              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. How We Use Your Data</h2>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-200">
                <li className="leading-relaxed">Delivering web, mobile, and AI solutions</li>
                <li className="leading-relaxed">Improving our SaaS platforms and services</li>
                <li className="leading-relaxed">Ensuring compliance with laws and regulations</li>
                <li className="leading-relaxed">Secure communication and client support</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Data Security</h2>
              <p className="mb-6 text-gray-200 leading-relaxed">
                We implement industry-standard encryption, firewalls, and security protocols to protect your information.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Sharing of Information</h2>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-200">
                <li className="leading-relaxed">We do not sell your data.</li>
                <li className="leading-relaxed">Limited sharing only with trusted third-party providers (hosting, payment, analytics).</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. User Rights</h2>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-200">
                <li className="leading-relaxed">Access, update, or delete your data</li>
                <li className="leading-relaxed">Opt-out of marketing communications</li>
                <li className="leading-relaxed">Request data portability</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
