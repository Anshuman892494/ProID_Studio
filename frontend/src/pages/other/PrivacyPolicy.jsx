import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-sans">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
                <div className="animate-fade-in">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-10 mb-8 border border-gray-300 shadow-md text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                            Privacy Policy
                        </h1>
                        <p className="text-white/90 text-sm">
                            Last Updated: January 01, 2026
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-10 mb-8">
                        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
                            {/* Introduction */}
                            <section>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2 flex items-center gap-2">
                                    <i className="fas fa-shield-halved text-primary"></i> 1. Introduction
                                </h2>
                                <p className="mb-3">
                                    Welcome to <strong>ProID Studio</strong>. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our ID Card Generator service.
                                </p>
                                <p>
                                    By accessing or using our service, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
                                </p>
                            </section>

                            {/* Information Collection */}
                            <section>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2 flex items-center gap-2">
                                    <i className="fas fa-database text-primary"></i> 2. Information We Collect
                                </h2>

                                <h3 className="text-base font-bold text-gray-900 mb-2 mt-4">2.1 Personal Information</h3>
                                <p className="mb-2">When you register for an account or use our services, we may collect:</p>
                                <ul className="list-disc pl-5 mb-4 space-y-1">
                                    <li><strong>Name and Contact Information:</strong> Full name, email address, phone number, and organization details</li>
                                    <li><strong>Account Credentials:</strong> Username, password, and authentication tokens</li>
                                </ul>

                                <h3 className="text-base font-bold text-gray-900 mb-2">2.2 ID Card Data</h3>
                                <p className="mb-2">When you create ID cards, we store:</p>
                                <ul className="list-disc pl-5 mb-4 space-y-1">
                                    <li><strong>ID Card Content:</strong> Member details, photos, identification numbers</li>
                                    <li><strong>Design Elements:</strong> Templates, logos, custom colors, and layout preferences</li>
                                    <li><strong>Generated Files:</strong> Final high-res ID card images and metadata</li>
                                </ul>
                            </section>

                            {/* Data Security */}
                            <section>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2 flex items-center gap-2">
                                    <i className="fas fa-lock text-primary"></i> 3. Data Security & Rights
                                </h2>
                                <p className="mb-3">
                                    We implement 256-bit SSL encryption to protect your information in transit and at rest. Your employee and student records remain confidential and are never shared with third parties.
                                </p>
                                <div className="bg-gray-50 border border-gray-200 p-4 font-mono text-xs">
                                    <p className="font-bold text-gray-900 mb-1">Contact Data Controller:</p>
                                    <p>Email: <a href="mailto:anshumanverma9795@gmail.com" className="text-primary hover:underline font-bold">anshumanverma9795@gmail.com</a></p>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Related Links */}
                    <div className="bg-gray-100 border border-gray-200 p-6 flex flex-wrap items-center justify-between gap-4 text-xs">
                        <span className="font-bold text-gray-700 uppercase tracking-wider">Related Legal Documents:</span>
                        <div className="flex gap-4">
                            <Link to="/terms" className="text-primary font-bold hover:underline">Terms of Service</Link>
                            <span>•</span>
                            <Link to="/contact" className="text-primary font-bold hover:underline">Contact Support</Link>
                            <span>•</span>
                            <Link to="/about" className="text-primary font-bold hover:underline">About Us</Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}