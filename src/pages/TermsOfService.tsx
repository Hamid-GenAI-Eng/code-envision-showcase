import EnterpriseNavigation from "@/components/EnterpriseNavigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Scale } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#0B1120] to-[#0E1F3C] text-white">
      <EnterpriseNavigation />
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] opacity-30 mix-blend-overlay pointer-events-none" />
      <main className="container mx-auto px-4 py-16 mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Scale className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Terms of Service</h1>
          </div>

              <Card className="mb-8 bg-gradient-to-br from-[#0E1F3C]/80 to-[#0B1120]/80 border border-blue-500/20 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Agreement</h2>
              <p className="mb-6 text-gray-200 leading-relaxed">
                By using our services, you agree to these Terms of Service and our Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Services Covered</h2>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-200">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>AI Solutions (Healthcare, Law, Finance, Manufacturing, Retail, E-commerce, and more)</li>
                <li>Proprietary SaaS platforms</li>
              </ul>              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Client Responsibilities</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li>Provide accurate project details and timelines</li>
                <li>Ensure timely payments as per agreement</li>
                <li>Maintain confidentiality of access credentials</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Our Responsibilities</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li>Deliver high-quality, secure, and scalable solutions</li>
                <li>Protect client data and intellectual property</li>
                <li>Provide timely communication and updates</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Payment & Billing</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li>All invoices must be paid within agreed timelines</li>
                <li>Late payments may incur penalties</li>
                <li>Subscriptions for SaaS platforms are billed monthly or annually</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Intellectual Property</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li>Clients retain rights to their business data and content</li>
                <li>Code Envision retains rights to proprietary software, frameworks, and SaaS platforms</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Limitation of Liability</h2>
              <p className="mb-6 text-gray-300">
                Code Envision Technologies is not liable for indirect damages, losses, or disruptions caused by third-party platforms, internet downtime, or misuse of services.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Termination</h2>
              <p className="mb-4 text-gray-300">We reserve the right to suspend or terminate services if:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li>Payments are delayed beyond contractual terms</li>
                <li>Services are misused or used for unlawful purposes</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary">📌 Company Ownership</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li>Hamid Saifullah (Founder & CTO)</li>
                <li>Ahmed Tatla (Co-Founder & CEO)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
