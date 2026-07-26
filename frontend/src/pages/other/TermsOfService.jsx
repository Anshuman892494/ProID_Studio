import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-sans">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
                <div className="animate-fade-in">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-10 mb-8 border border-gray-300 shadow-md text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                            Terms of Service
                        </h1>
                        <p className="text-white/90 text-sm">
                            Last Updated: January 01, 2026
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-10 mb-8">
                        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
                            {/* Notice */}
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 text-amber-900 text-xs font-semibold">
                                IMPORTANT: Please read these Terms of Service carefully before using ProID Studio. By accessing our services, you agree to be bound by these terms.
                            </div>

                            {/* Terms */}
                            <section>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2 flex items-center gap-2">
                                    <i className="fas fa-file-contract text-primary"></i> 1. Permitted Use & Prohibitions
                                </h2>
                                <p className="mb-3">
                                    You may use ProID Studio to design and export identification cards for legitimate employees, students, and organization members.
                                </p>
                                <div className="bg-red-50 border border-red-200 p-4 text-red-900 text-xs">
                                    <p className="font-bold mb-1">STRICTLY PROHIBITED:</p>
                                    <p>Generating fake government IDs, fraudulent documents, impersonating official authorities, or uploading illegal content. Violators will be reported to legal authorities.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2 flex items-center gap-2">
                                    <i className="fas fa-gavel text-primary"></i> 2. Governing Law
                                </h2>
                                <p>
                                    These Terms shall be governed by the laws of India, including the Information Technology Act, 2000. Jurisdiction lies strictly within Indian courts.
                                </p>
                            </section>
                        </div>
                    </div>

                    {/* Related Links */}
                    <div className="bg-gray-100 border border-gray-200 p-6 flex flex-wrap items-center justify-between gap-4 text-xs">
                        <span className="font-bold text-gray-700 uppercase tracking-wider">Acceptance of Terms:</span>
                        <div className="flex gap-4">
                            <Link to="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link>
                            <span>•</span>
                            <Link to="/contact" className="text-primary font-bold hover:underline">Contact Support</Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}