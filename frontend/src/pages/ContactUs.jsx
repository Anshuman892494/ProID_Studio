import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactUs() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general"
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const categories = [
        { value: "general", label: "General Inquiry", icon: "fa-question-circle" },
        { value: "technical", label: "Technical Support", icon: "fa-cogs" },
        { value: "billing", label: "Billing & Payments", icon: "fa-credit-card" },
        { value: "account", label: "Account Issues", icon: "fa-user" },
        { value: "feature", label: "Feature Request", icon: "fa-lightbulb" },
        { value: "business", label: "Business Inquiry", icon: "fa-briefcase" }
    ];

    const contactInfo = [
        { icon: "fa-envelope", title: "Email", value: "anshumanverma9795@gmail.com", link: "mailto:anshumanverma9795@gmail.com" },
        { icon: "fa-map-marker-alt", title: "Address", value: "Ballia, Uttar Pradesh - India" },
        { icon: "fa-clock", title: "Support Hours", value: "Monday - Friday: 9 AM - 6 PM \nWeekends: 10 AM - 4 PM " }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setError("");
        setSuccess("");
    };

    const validateForm = () => {
        if (!form.name.trim()) {
            setError("Please enter your name");
            return false;
        }
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setError("Please enter a valid email address");
            return false;
        }
        if (!form.subject.trim()) {
            setError("Please enter a subject");
            return false;
        }
        if (!form.message.trim() || form.message.length < 10) {
            setError("Please enter a message with at least 10 characters");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!validateForm()) return;

        setLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSuccess("Thank you for your message! We'll get back to you within 24 hours.");
            setForm({ name: "", email: "", subject: "", message: "", category: "general" });
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto animate-fade-in">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <h1 className="text-xl md:text-4xl font-bold text-primary mb-4">
                            Contact Us
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We're here to help! Get in touch with our support team for any questions or concerns.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 sticky top-8">
                                <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                    <i className="fas fa-info-circle"></i>
                                    Contact Information
                                </h2>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <i className={`fas ${item.icon} text-primary`}></i>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        className="text-gray-600 hover:text-primary transition-colors duration-300 whitespace-pre-line"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Media */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: "fa-facebook", color: "hover:bg-secondary hover:text-white", link: "https://www.facebook.com/anshumanvermaanshu.anshu" },
                                            { icon: "fa-linkedin", color: "hover:bg-secondary hover:text-white", link: "https://www.linkedin.com/in/anshuman-varma-0586b3337/" },
                                            { icon: "fa-github", color: "hover:bg-secondary hover:text-white", link: "https://github.com/Anshuman892494" },
                                            { icon: "fa-instagram", color: "hover:bg-secondary hover:text-white", link: "https://www.instagram.com/anshuman_verma_anshu/" }
                                        ].map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-primary`}
                                                aria-label={social.icon.replace('fa-', '')}
                                            >
                                                <i className={`fab ${social.icon}`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
                                <h2 className="text-xl font-bold text-primary mb-6">Send Us a Message</h2>

                                {/* Status Messages */}
                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <div className="flex items-start gap-3">
                                            <i className="fas fa-exclamation-circle text-red-500 mt-0.5"></i>
                                            <span className="text-sm text-red-700">{error}</span>
                                        </div>
                                    </div>
                                )}

                                {success && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-start gap-3">
                                            <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                                            <span className="text-sm text-green-700">{success}</span>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name and Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Enter your full name"
                                                required
                                                disabled={loading}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                required
                                                disabled={loading}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100"
                                            />
                                        </div>
                                    </div>

                                    {/* Category and Subject */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Inquiry Category *
                                            </label>
                                            <select
                                                id="category"
                                                name="category"
                                                value={form.category}
                                                onChange={handleChange}
                                                disabled={loading}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 bg-white"
                                            >
                                                {categories.map((cat) => (
                                                    <option key={cat.value} value={cat.value}>
                                                        {cat.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                value={form.subject}
                                                onChange={handleChange}
                                                placeholder="What is this regarding?"
                                                required
                                                disabled={loading}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Please provide details about your inquiry..."
                                            rows={6}
                                            required
                                            disabled={loading}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 disabled:bg-gray-100 resize-none"
                                        />
                                        <p className="text-xs text-gray-500 mt-2">
                                            Please include relevant details such as account email, order number, or screenshots if applicable.
                                        </p>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-1px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <i className="fas fa-spinner fa-spin"></i>
                                                Sending Message...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-paper-plane"></i>
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}