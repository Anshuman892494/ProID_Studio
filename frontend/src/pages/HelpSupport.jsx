import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HelpSupport() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-5xl mx-auto animate-fade-in">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-3xl font-bold text-primary mb-4">
                            Help & Support
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                            Get assistance, find answers to common questions, and learn how to make the most of ProID Studio
                        </p>
                    </div>

                    {/* Quick Help Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-primary/10">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-4">
                                <i className="fas fa-question-circle text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3">FAQs</h3>
                            <p className="text-gray-600 mb-4">Find quick answers to common questions</p>
                            <a href="#faqs" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                                Browse FAQs <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-primary/10">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-4">
                                <i className="fas fa-book text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3">Troubleshooting</h3>
                            <p className="text-gray-600 mb-4">Step-by-step instructions</p>
                            <a href="#Troubleshooting" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                                View Guides <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-primary/10">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-4">
                                <i className="fas fa-headset text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3">Contact Support</h3>
                            <p className="text-gray-600 mb-4">Get in touch with our support team</p>
                            <Link to="/contact" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                                Contact Us <i className="fas fa-arrow-right ml-2"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
                        <div className="prose prose-lg max-w-none">
                            {/* Getting Started Section */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b border-gray-200">
                                    <i className="fas fa-rocket text-primary mr-3"></i>
                                    Getting Started
                                </h2>

                                <div className="space-y-6">
                                    <div className="bg-primary/5 rounded-lg p-5 border-l-4 border-primary">
                                        <h3 className="text-lg font-semibold text-primary mb-2">1. Create Your Account</h3>
                                        <p className="text-gray-700">Sign up for a free account to start creating ID cards. No credit card required for the free plan.</p>
                                    </div>

                                    <div className="bg-primary/5 rounded-lg p-5 border-l-4 border-primary/80">
                                        <h3 className="text-lg font-semibold text-primary mb-2">2. Choose a Template</h3>
                                        <p className="text-gray-700">Browse our template library and select a design that fits your needs.</p>
                                    </div>

                                    <div className="bg-primary/5 rounded-lg p-5 border-l-4 border-primary/60">
                                        <h3 className="text-lg font-semibold text-primary mb-2">3. Customize Your Design</h3>
                                        <p className="text-gray-700">Add your logo, photos, text, and customize colors to match your brand.</p>
                                    </div>

                                    <div className="bg-primary/5 rounded-lg p-5 border-l-4 border-primary/40">
                                        <h3 className="text-lg font-semibold text-primary mb-2">4. Generate & Download</h3>
                                        <p className="text-gray-700">Generate your ID cards and download them in high-quality PDF or image formats.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Frequently Asked Questions */}
                            <section className="mb-10" id="faqs">
                                <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b border-gray-200">
                                    <i className="fas fa-question-circle text-primary mr-3"></i>
                                    Frequently Asked Questions
                                </h2>

                                <div className="space-y-4">
                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button className="w-full text-left p-4 bg-primary/5 hover:bg-primary/10 transition-colors duration-200 flex justify-between items-center">
                                            <span className="font-semibold text-primary">What file formats can I upload for logos and photos?</span>
                                            <i className="fas fa-chevron-down text-primary/60"></i>
                                        </button>
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">
                                                We support JPG, PNG, and SVG files. For best results, use high-resolution images (minimum 300x300 pixels) and SVG format for logos.
                                            </p>
                                        </div>
                                    </div>

                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button className="w-full text-left p-4 bg-primary/5 hover:bg-primary/10 transition-colors duration-200 flex justify-between items-center">
                                            <span className="font-semibold text-primary">Can I use ProID Studio for commercial purposes?</span>
                                            <i className="fas fa-chevron-down text-primary/60"></i>
                                        </button>
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">
                                                Yes, with our Business and Enterprise plans. Our free plan is for personal and non-commercial use only. Please review our Terms of Service for details.
                                            </p>
                                        </div>
                                    </div>

                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button className="w-full text-left p-4 bg-primary/5 hover:bg-primary/10 transition-colors duration-200 flex justify-between items-center">
                                            <span className="font-semibold text-primary">How do I cancel my subscription?</span>
                                            <i className="fas fa-chevron-down text-primary/60"></i>
                                        </button>
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">
                                                You can cancel anytime from your Account Settings → Billing section. Your subscription will remain active until the end of the billing period.
                                            </p>
                                        </div>
                                    </div>

                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button className="w-full text-left p-4 bg-primary/5 hover:bg-primary/10 transition-colors duration-200 flex justify-between items-center">
                                            <span className="font-semibold text-primary">Is my data secure with ProID Studio?</span>
                                            <i className="fas fa-chevron-down text-primary/60"></i>
                                        </button>
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">
                                                Yes, we use industry-standard encryption and security measures. Your data is stored securely and we never share your information with third parties. Read our <Link to="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link> for more details.
                                            </p>
                                        </div>
                                    </div>

                                    {/* FAQ Item */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button className="w-full text-left p-4 bg-primary/5 hover:bg-primary/10 transition-colors duration-200 flex justify-between items-center">
                                            <span className="font-semibold text-primary">What printing specifications do you recommend?</span>
                                            <i className="fas fa-chevron-down text-primary/60"></i>
                                        </button>
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">
                                                For best results, use 300 DPI resolution, standard ID card size (3.375" x 2.125"), and PVC or thick cardstock paper. Our templates are optimized for professional printing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Troubleshooting */}
                            <section className="mb-10" id="Troubleshooting">
                                <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b border-gray-200">
                                    <i className="fas fa-tools text-primary mr-3"></i>
                                    Troubleshooting
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                                        <i className="fas fa-exclamation-triangle text-primary mt-1"></i>
                                        <div>
                                            <h4 className="font-semibold text-primary mb-1">Upload Issues</h4>
                                            <p className="text-primary/80 text-sm">If files aren't uploading, check file size (max 10MB), format, and internet connection.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                                        <i className="fas fa-exclamation-circle text-primary mt-1"></i>
                                        <div>
                                            <h4 className="font-semibold text-primary mb-1">Slow Performance</h4>
                                            <p className="text-primary/80 text-sm">Clear browser cache, update browser, or try reducing image sizes for better performance.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                                        <i className="fas fa-info-circle text-primary mt-1"></i>
                                        <div>
                                            <h4 className="font-semibold text-primary mb-1">Print Quality Issues</h4>
                                            <p className="text-primary/80 text-sm">Ensure you're downloading high-quality PDFs and using recommended printer settings.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Contact Support Section */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b border-gray-200">
                                    <i className="fas fa-headset text-primary mr-3"></i>
                                    Still Need Help?
                                </h2>

                                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                                    <h3 className="text-xl font-semibold text-primary mb-4">Contact Our Support Team</h3>
                                    <p className="text-gray-700 mb-6">
                                        Our support team is available to help you with any questions or issues you may have.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-700">Email Support</p>
                                                    <a href="mailto:support@proidstudio.com" className="text-primary hover:text-primary/80">
                                                        anshumanverma9795@gmail.com
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                                                    <i className="fas fa-clock"></i>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-700">Response Time</p>
                                                    <p className="text-gray-600">Within 24 hours on business days</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                                                    <i className="fas fa-phone"></i>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-700">Phone Support</p>
                                                    <a href="tel:+911234567890" className="text-primary hover:text-primary/80">
                                                        +91 892494xxxx
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                                                    <i className="fas fa-comments"></i>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-700">Live Chat</p>
                                                    <p className="text-gray-600">Available 9 AM - 6 PM IST</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <h4 className="font-semibold text-primary mb-3">Before Contacting Support</h4>
                                        <ul className="list-disc pl-5 text-primary/80 space-y-1">
                                            <li>Check if your question is already answered in the FAQs</li>
                                            <li>Have your account email ready</li>
                                            <li>Include screenshots if reporting an issue</li>
                                            <li>Specify the browser and device you're using</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}