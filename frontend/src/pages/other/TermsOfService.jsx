import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto animate-fade-in">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <h1 className="text-xl md:text-4xl font-bold text-primary mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Last Updated: January 01, 2026
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
                        <div className="prose prose-lg max-w-none">
                            {/* Important Notice */}
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <i className="fas fa-exclamation-triangle text-yellow-400 text-xl"></i>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-yellow-700">
                                            <strong>IMPORTANT:</strong> Please read these Terms of Service carefully before using ProID Studio. By accessing or using our services, you agree to be bound by these terms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Agreement */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
                                <p className="text-gray-700">
                                    By accessing or using ProID Studio's ID Card Generator service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not access or use the Service. These Terms constitute a legal agreement between you and ProID Studio.
                                </p>
                            </section>

                            {/* Definitions */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">2. Definitions</h2>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li><strong>"Service"</strong> refers to the ProID Studio ID Card Generator platform, including all features, functionality, and content.</li>
                                    <li><strong>"User"</strong> refers to any individual or entity that accesses or uses the Service.</li>
                                    <li><strong>"Content"</strong> refers to any data, text, images, graphics, or other materials uploaded, generated, or stored using the Service.</li>
                                    <li><strong>"Account"</strong> refers to your registered user account with ProID Studio.</li>
                                </ul>
                            </section>

                            {/* Eligibility */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">3. Eligibility</h2>
                                <p className="text-gray-700 mb-4">
                                    To use the Service, you must:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Be at least 18 years of age as per the Indian Contract Act, 1872</li>
                                    <li>Have the legal capacity to enter into binding contracts</li>
                                    <li>Provide accurate, current, and complete registration information</li>
                                    <li>Maintain the security of your account credentials</li>
                                    <li>Comply with all applicable laws of India</li>
                                </ul>
                            </section>

                            {/* Account Responsibilities */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">4. Account Responsibilities</h2>
                                <p className="text-gray-700 mb-4">
                                    You are responsible for:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Maintaining the confidentiality of your account password</li>
                                    <li>All activities that occur under your account</li>
                                    <li>Ensuring that your account information remains accurate and up-to-date</li>
                                    <li>Notifying us immediately of any unauthorized use of your account</li>
                                    <li>Using the Service only for lawful purposes</li>
                                </ul>
                            </section>

                            {/* Acceptable Use */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">5. Acceptable Use</h2>

                                <h3 className="text-xl font-semibold text-secondary mb-3">5.1 Permitted Use</h3>
                                <p className="text-gray-700 mb-4">
                                    You may use the Service to:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Create professional identification cards for legitimate purposes</li>
                                    <li>Manage and organize identification information for your organization</li>
                                    <li>Generate ID cards for employees, students, or members</li>
                                    <li>Customize templates to match your organization's branding</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-secondary mb-3">5.2 Prohibited Activities</h3>
                                <p className="text-gray-700 mb-4">
                                    You may NOT use the Service to:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Create fake identification cards or fraudulent documents</li>
                                    <li>Impersonate another person or entity</li>
                                    <li>Violate any laws, regulations, or third-party rights</li>
                                    <li>Upload viruses, malware, or harmful code</li>
                                    <li>Attempt to gain unauthorized access to the Service or other accounts</li>
                                    <li>Use the Service for any illegal or fraudulent activities</li>
                                    <li>Harass, abuse, or harm others</li>
                                    <li>Generate ID cards for unauthorized commercial purposes</li>
                                </ul>
                                <p className="text-gray-700 mb-4">
                                    You agree not to use the Service in violation of the Information Technology Act, 2000,
                                    the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021,
                                    or any other applicable laws in force in India.
                                </p>

                            </section>

                            {/* Intellectual Property */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">6. Intellectual Property Rights</h2>

                                <h3 className="text-xl font-semibold text-secondary mb-3">6.1 Our Rights</h3>
                                <p className="text-gray-700 mb-4">
                                    ProID Studio owns all rights, title, and interest in and to:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>The Service platform and its underlying technology</li>
                                    <li>All software, code, designs, and documentation</li>
                                    <li>Our trademarks, logos, and brand elements</li>
                                    <li>Pre-made templates and design elements provided by us</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-secondary mb-3">6.2 Your Rights</h3>
                                <p className="text-gray-700 mb-4">
                                    You retain ownership of:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Your uploaded content (photos, logos, text)</li>
                                    <li>Your organization's branding and intellectual property</li>
                                    <li>Generated ID cards containing your content</li>
                                </ul>
                                <p className="text-gray-700">
                                    By using the Service, you grant us a limited license to store, process, and display your content solely for providing the Service.
                                </p>
                            </section>

                            {/* Subscriptions & Payments */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">7. Subscriptions & Payments</h2>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li><strong>Fees:</strong> Some features require paid subscriptions. Fees are clearly displayed during signup.</li>
                                    <li><strong>Billing:</strong> Subscriptions renew automatically unless canceled before the renewal date.</li>
                                    <li><strong>Cancellation:</strong> You may cancel your subscription at any time through your account settings.</li>
                                    <li><strong>Refunds:</strong> Refunds are handled on a case-by-case basis as outlined in our Refund Policy.</li>
                                    <li><strong>Taxes:</strong> You are responsible for any applicable taxes related to your subscription.</li>
                                </ul>
                            </section>

                            {/* Termination */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">8. Termination</h2>
                                <p className="text-gray-700 mb-4">
                                    We may suspend or terminate your access to the Service if:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>You violate these Terms of Service</li>
                                    <li>You engage in fraudulent or illegal activities</li>
                                    <li>You fail to pay applicable fees</li>
                                    <li>We discontinue the Service</li>
                                </ul>
                                <p className="text-gray-700">
                                    You may terminate your account at any time by contacting support or through your account settings.
                                </p>
                            </section>

                            {/* Disclaimer of Warranties */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">9. Disclaimer of Warranties</h2>
                                <p className="text-gray-700 mb-4">
                                    To the maximum extent permitted under applicable Indian law, the Service is provided
                                    on an "AS IS" and "AS AVAILABLE" basis.
                                </p>

                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Warranties OF MERCHANTABILITY</li>
                                    <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                                    <li>NON-INFRINGEMENT</li>
                                    <li>ACCURACY OR RELIABILITY</li>
                                    <li>ERROR-FREE OPERATION</li>
                                    <li>UNINTERRUPTED ACCESS</li>
                                </ul>
                            </section>

                            {/* Limitation of Liability */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">10. Limitation of Liability</h2>
                                <p className="text-gray-700 mb-4">
                                    To the maximum extent permitted under applicable Indian law, ProID Studio shall not be liable for:
                                </p>

                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES</li>
                                    <li>LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES</li>
                                    <li>UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA</li>
                                    <li>ANY DAMAGES RESULTING FROM SERVICE INTERRUPTIONS</li>
                                    <li>YOUR USE OR INABILITY TO USE THE SERVICE</li>
                                </ul>
                            </section>

                            {/* Indemnification */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">11. Indemnification</h2>
                                <p className="text-gray-700">
                                    You agree to indemnify and hold harmless ProID Studio, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Your use of the Service</li>
                                    <li>Your violation of these Terms</li>
                                    <li>Your violation of any laws or third-party rights</li>
                                    <li>Your uploaded content</li>
                                </ul>
                            </section>

                            {/* Governing Law */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">12. Governing Law and Jurisdiction</h2>
                                <p className="text-gray-700">
                                    These Terms of Service shall be governed by and construed in accordance with the laws of India,
                                    including but not limited to the Information Technology Act, 2000, and rules made thereunder.
                                </p>
                                <p className="text-gray-700 mt-2">
                                    The courts located in India shall have exclusive jurisdiction over any disputes arising out of
                                    or relating to these Terms or the use of the Service.
                                </p>
                            </section>
                            {/* Data Protection and Privacy */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">13. Data Protection and Privacy</h2>
                                <p className="text-gray-700">
                                    ProID Studio processes personal data in accordance with applicable Indian data protection laws,
                                    including the Information Technology Act, 2000, and related rules.
                                    By using the Service, you consent to the collection, storage, and processing of your data
                                    as described in our Privacy Policy.
                                </p>
                            </section>


                            {/* Changes to Terms */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">14. Changes to Terms</h2>
                                <p className="text-gray-700 mb-4">
                                    We reserve the right to modify these Terms at any time. We will notify you of significant changes by:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                    <li>Posting the updated Terms on this page</li>
                                    <li>Sending an email notification to registered users</li>
                                    <li>Displaying a notice within the Service</li>
                                </ul>
                                <p className="text-gray-700">
                                    Your continued use of the Service after such changes constitutes acceptance of the new Terms.
                                </p>
                            </section>

                            {/* Contact Information */}
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">15. Contact Information</h2>
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <p className="text-gray-700 mb-4">
                                        For questions about these Terms of Service, please contact:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-envelope text-primary"></i>
                                            <span>Email: <span className="text-primary hover:text-secondary">anshumanverma9795@gmail.com</span></span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                        </div>
                    </div>

                    {/* Acceptance Section */}
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                        <h3 className="text-xl font-semibold text-primary mb-4 text-center">Acceptance of Terms</h3>
                        <p className="text-center text-gray-700 mb-4">
                            By using ProID Studio, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/privacy" className="bg-white hover:bg-gray-50 text-primary font-medium px-4 py-2 rounded-lg transition-colors duration-300 border border-primary/20">
                                <i className="fas fa-shield-alt mr-2"></i>
                                Privacy Policy
                            </Link>
                            <Link to="/contact" className="bg-white hover:bg-gray-50 text-primary font-medium px-4 py-2 rounded-lg transition-colors duration-300 border border-primary/20">
                                <i className="fas fa-headset mr-2"></i>
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}