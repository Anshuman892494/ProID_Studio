import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto animate-fade-in">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <h1 className="text-xl md:text-4xl font-bold text-primary mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Last Updated: January 01, 2026
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
                        <div className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                                <p className="text-gray-700 mb-4">
                                    Welcome to <strong>ProID Studio</strong>. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our ID Card Generator service.
                                </p>
                                <p className="text-gray-700">
                                    By accessing or using our service, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
                                </p>
                            </section>

                            {/* Information Collection */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>

                                <h3 className="text-xl font-semibold text-secondary mb-3">2.1 Personal Information</h3>
                                <p className="text-gray-700 mb-4">
                                    When you register for an account or use our services, we may collect:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li><strong>Name and Contact Information:</strong> Your full name, email address, phone number, and organization details</li>
                                    <li><strong>Account Credentials:</strong> Username, password, and other authentication information</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-secondary mb-3">2.2 ID Card Data</h3>
                                <p className="text-gray-700 mb-4">
                                    When you create ID cards, we may store:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li><strong>ID Card Content:</strong> Employee/student information, photos, identification numbers</li>
                                    <li><strong>Design Elements:</strong> Templates, logos, colors, and layout preferences</li>
                                    <li><strong>Generated Files:</strong> Final ID card images and associated metadata</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-secondary mb-3">2.3 Usage Information</h3>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li><strong>Log Data:</strong> IP address, browser type, operating system, referring URLs</li>
                                    <li><strong>Usage Patterns:</strong> Pages visited, features used, time spent on the platform</li>
                                    <li><strong>Device Information:</strong> Device type, screen resolution, and other technical specifications</li>
                                </ul>
                            </section>

                            {/* How We Use Information */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li><strong>Service Provision:</strong> To create, manage, and deliver ID card generation services</li>
                                    <li><strong>Account Management:</strong> To create and maintain your account, process payments, and provide customer support</li>
                                    <li><strong>Improvement:</strong> To analyze usage patterns and improve our platform's functionality and user experience</li>
                                    <li><strong>Communication:</strong> To send service updates, security alerts, and support messages</li>
                                    <li><strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</li>
                                    <li><strong>Compliance:</strong> To comply with legal obligations and enforce our Terms of Service</li>
                                </ul>
                            </section>

                            {/* Data Security */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
                                <p className="text-gray-700 mb-4">
                                    We implement industry-standard security measures to protect your information:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li><strong>Encryption:</strong> All data in transit is encrypted using SSL/TLS protocols</li>
                                    <li><strong>Secure Storage:</strong> Sensitive data is stored in encrypted format</li>
                                    <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms</li>
                                    <li><strong>Regular Audits:</strong> Security audits and vulnerability assessments</li>
                                    <li><strong>Employee Training:</strong> All employees are trained in data protection best practices</li>
                                </ul>
                            </section>

                            {/* Data Retention */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">5. Data Retention</h2>
                                <p className="text-gray-700 mb-4">
                                    We retain your personal information only for as long as necessary:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li><strong>Active Accounts:</strong> Data is retained while your account is active</li>
                                    <li><strong>Inactive Accounts:</strong> Accounts inactive for 24 months may be deleted</li>
                                    <li><strong>Legal Requirements:</strong> Some data may be retained to comply with legal obligations</li>
                                </ul>
                            </section>

                            {/* Your Rights */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
                                <p className="text-gray-700 mb-4">
                                    Depending on your location, you may have the following rights regarding your personal data:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li><strong>Access:</strong> Request access to your personal information</li>
                                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                                    <li><strong>Restriction:</strong> Request restriction of processing of your data</li>
                                    <li><strong>Objection:</strong> Object to certain types of processing</li>
                                </ul>
                            </section>

                            {/* Third-Party Services */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">7. Third-Party Services</h2>
                                <p className="text-gray-700 mb-4">
                                    We may use third-party services for:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li><strong>Analytics:</strong> Usage analytics and performance monitoring</li>
                                    <li><strong>Hosting:</strong> Cloud infrastructure and data storage</li>
                                    <li><strong>Communication:</strong> Email delivery and customer support tools</li>
                                </ul>
                                <p className="text-gray-700">
                                    These third parties have their own privacy policies, and we encourage you to review them.
                                </p>
                            </section>

                            {/* Children's Privacy */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">8. Children's Privacy</h2>
                                <p className="text-gray-700">
                                    Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                                </p>
                            </section>

                            {/* Changes to Policy */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-4">9. Changes to This Policy</h2>
                                <p className="text-gray-700 mb-4">
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                    <li>Posting the new Privacy Policy on this page</li>
                                    <li>Sending you an email notification (if you have provided your email)</li>
                                    <li>Updating the "Last Updated" date at the top of this policy</li>
                                </ul>
                                <p className="text-gray-700">
                                    You are advised to review this Privacy Policy periodically for any changes.
                                </p>
                            </section>

                            {/* Contact Information */}
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Us</h2>
                                <p className="text-gray-700 mb-4">
                                    If you have any questions about this Privacy Policy, please contact:
                                </p>
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-envelope text-primary"></i>
                                            <span>Email: <span className="text-primary hover:text-secondary">anshumanverma9795@gmail.com</span></span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-clock text-primary"></i>
                                            <span>Response Time: Within 48 business hours</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                        <h3 className="text-xl font-semibold text-primary mb-4 text-center">Related Documents</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/terms" className="bg-white hover:bg-gray-50 text-primary font-medium px-4 py-2 rounded-lg transition-colors duration-300 border border-primary/20">
                                <i className="fas fa-file-contract mr-2"></i>
                                Terms of Service
                            </Link>
                            <Link to="/contact" className="bg-white hover:bg-gray-50 text-primary font-medium px-4 py-2 rounded-lg transition-colors duration-300 border border-primary/20">
                                <i className="fas fa-headset mr-2"></i>
                                Contact Us
                            </Link>
                            <Link to="/about" className="bg-white hover:bg-gray-50 text-primary font-medium px-4 py-2 rounded-lg transition-colors duration-300 border border-primary/20">
                                <i className="fas fa-info-circle mr-2"></i>
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}