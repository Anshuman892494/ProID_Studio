import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
        { icon: "fa-location-dot", title: "Address", value: "Uttar Pradesh - India" },
        { icon: "fa-clock", title: "Support Hours", value: "Mon - Sat: 9 AM - 6 PM IST" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setError("");
        setSuccess("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError("Please fill in all required fields.");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setSuccess("Thank you for contacting ProID Studio support! We will respond within 24 business hours.");
            setForm({ name: "", email: "", subject: "", message: "", category: "general" });
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-sans">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
                <div className="animate-fade-in">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-10 mb-8 border border-gray-300 shadow-md text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                            Contact Us
                        </h1>
                        <p className="text-white/90 text-sm max-w-xl mx-auto">
                            Have questions or need assistance with bulk generation? Get in touch with our team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Contact Information Sidebar (4 Cols) */}
                        <div className="lg:col-span-4">
                            <div className="bg-white border border-gray-200 shadow-sm p-6 mb-6">
                                <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
                                    <i className="fas fa-headset text-primary"></i> Direct Support
                                </h2>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold text-base">
                                                <i className={`fas ${item.icon}`}></i>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</h3>
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        className="text-xs text-primary font-bold hover:underline"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-xs text-gray-600 leading-relaxed">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form (8 Cols) */}
                        <div className="lg:col-span-8">
                            <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-8">
                                <h2 className="text-xl font-extrabold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                                    Send Us a Message
                                </h2>

                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
                                        {error}
                                    </div>
                                )}

                                {success && (
                                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
                                        {success}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-bold text-gray-700 mb-1 uppercase tracking-wider">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Enter full name"
                                                required
                                                className="w-full px-3.5 py-2.5 border border-gray-300 focus:outline-none focus:border-primary transition-colors text-xs"
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-bold text-gray-700 mb-1 uppercase tracking-wider">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                required
                                                className="w-full px-3.5 py-2.5 border border-gray-300 focus:outline-none focus:border-primary transition-colors text-xs"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-bold text-gray-700 mb-1 uppercase tracking-wider">
                                                Inquiry Category
                                            </label>
                                            <select
                                                name="category"
                                                value={form.category}
                                                onChange={handleChange}
                                                className="w-full px-3.5 py-2.5 border border-gray-300 focus:outline-none focus:border-primary transition-colors text-xs bg-white"
                                            >
                                                {categories.map((cat) => (
                                                    <option key={cat.value} value={cat.value}>
                                                        {cat.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block font-bold text-gray-700 mb-1 uppercase tracking-wider">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                placeholder="What is this regarding?"
                                                required
                                                className="w-full px-3.5 py-2.5 border border-gray-300 focus:outline-none focus:border-primary transition-colors text-xs"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-bold text-gray-700 mb-1 uppercase tracking-wider">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Provide details about your inquiry..."
                                            rows={5}
                                            required
                                            className="w-full px-3.5 py-2.5 border border-gray-300 focus:outline-none focus:border-primary transition-colors text-xs resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3 bg-primary hover:bg-secondary text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <i className="fas fa-spinner fa-spin"></i> Sending...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-paper-plane"></i> Send Inquiry Message
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