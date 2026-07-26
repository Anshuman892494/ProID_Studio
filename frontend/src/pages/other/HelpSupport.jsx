import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HelpSupport() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [activeTab, setActiveTab] = useState("all");

    const faqs = [
        {
            question: "What file formats can I upload for logos and photos?",
            answer: "We support high-resolution PNG, JPG, JPEG, and WebP files. For company logos, transparent PNG files are recommended for best quality.",
            category: "general"
        },
        {
            question: "How does Bulk CSV Card Generation work?",
            answer: "In the Bulk CSV page, download our sample CSV template, fill in student/employee details (Name, ID, Role, Department), and upload it. The studio generates all cards automatically in batch.",
            category: "bulk"
        },
        {
            question: "What printing size and DPI specifications are used?",
            answer: "ProID Studio generates standard CR80 ID cards (85.6mm x 53.98mm) at 300 DPI high resolution, perfectly matching plastic PVC card printers and standard laminators.",
            category: "printing"
        },
        {
            question: "Is my card data and photos stored securely?",
            answer: "Yes, all student and employee data is stored with 256-bit SSL encryption. We never share your data or card designs with third parties.",
            category: "security"
        },
        {
            question: "Can I download cards in PDF and image format?",
            answer: "Yes! In the ID Studio, click 'Download PNG' for high-resolution graphics or 'Export PDF' for standard printable CR80 PDF documents.",
            category: "general"
        },
        {
            question: "How do I scan the QR code on the ID card?",
            answer: "Every card automatically generates a high-density QR code containing member ID and verification link, scannable by any mobile camera or QR reader.",
            category: "printing"
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const filteredFaqs = faqs.filter((faq) => {
        const matchesQuery =
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTab = activeTab === "all" || faq.category === activeTab;
        return matchesQuery && matchesTab;
    });

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
                {/* Hero Header & Search */}
                <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-12 mb-10 border border-gray-300 shadow-lg text-center relative overflow-hidden">
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4 inline-block">
                        ProID Help Center
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        How can we help you today?
                    </h1>
                    <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                        Search our knowledge base, browse FAQs, or get in touch with our dedicated support team.
                    </p>

                    {/* Interactive Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Type your question or issue (e.g. CSV, PNG, Print)..."
                            className="w-full px-5 py-4 pl-12 text-gray-900 bg-white shadow-xl focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                        />
                        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm font-bold"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Quick Assistance Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-primary">
                        <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-4">
                            <i className="fas fa-book-open"></i>
                        </div>
                        <h3 className="font-extrabold text-gray-900 text-lg mb-2">Documentation & Guides</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                            Learn how to upload logos, pick color themes, and export high-res print files.
                        </p>
                        <a href="#guides" className="text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider inline-flex items-center gap-1">
                            Read Guides <i className="fas fa-arrow-right text-[10px]"></i>
                        </a>
                    </div>

                    <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-primary">
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold mb-4">
                            <i className="fas fa-file-csv"></i>
                        </div>
                        <h3 className="font-extrabold text-gray-900 text-lg mb-2">Bulk CSV Assistant</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                            Learn how to format CSV files for batch generating 100+ cards simultaneously.
                        </p>
                        <Link to="/bulk-generate" className="text-xs font-bold text-emerald-700 hover:text-emerald-900 uppercase tracking-wider inline-flex items-center gap-1">
                            Go to Bulk CSV <i className="fas fa-arrow-right text-[10px]"></i>
                        </Link>
                    </div>

                    <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-primary">
                        <div className="w-12 h-12 bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold mb-4">
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3 className="font-extrabold text-gray-900 text-lg mb-2">Direct Contact</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                            Need customized card templates or technical assistance? Talk to our team.
                        </p>
                        <a href="#contact" className="text-xs font-bold text-purple-700 hover:text-purple-900 uppercase tracking-wider inline-flex items-center gap-1">
                            Contact Team <i className="fas fa-arrow-right text-[10px]"></i>
                        </a>
                    </div>
                </div>

                {/* Step-by-step Interactive Guides */}
                <section className="mb-12" id="guides">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
                            <i className="fas fa-rocket text-primary"></i> Getting Started Guides
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white border border-gray-200 p-5 shadow-sm">
                            <div className="w-8 h-8 bg-primary text-white font-bold flex items-center justify-center text-sm mb-3">
                                1
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Enter Card Details</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Enter holder Name, Designation, ID Number, Organization, and Phone in ID Studio.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-5 shadow-sm">
                            <div className="w-8 h-8 bg-primary text-white font-bold flex items-center justify-center text-sm mb-3">
                                2
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Choose Color Theme</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Select from Corporate Blue, Modern Emerald, Executive Dark, Sunset Amber, or Custom colors.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-5 shadow-sm">
                            <div className="w-8 h-8 bg-primary text-white font-bold flex items-center justify-center text-sm mb-3">
                                3
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Upload Photo & Logo</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Upload profile headshot photo and organization logo for instant high-res rendering.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-5 shadow-sm">
                            <div className="w-8 h-8 bg-primary text-white font-bold flex items-center justify-center text-sm mb-3">
                                4
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Export PNG / PDF</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Export high-res PNG for digital use or standard CR80 PDF for PVC card printing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Frequently Asked Questions (Accordion) */}
                <section className="mb-12">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
                                <i className="fas fa-circle-question text-primary"></i> Frequently Asked Questions
                            </h2>
                            <p className="text-xs text-gray-500 mt-1">Click on any question to view the answer</p>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex items-center gap-1 bg-gray-100 p-1 border border-gray-200 text-xs font-bold">
                            {["all", "general", "bulk", "printing", "security"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-3 py-1.5 uppercase transition-colors ${activeTab === cat ? "bg-primary text-white" : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        {filteredFaqs.length === 0 ? (
                            <div className="bg-white border border-gray-200 p-8 text-center text-gray-500">
                                <i className="fas fa-search text-2xl mb-2 text-gray-400"></i>
                                <p className="font-bold text-sm">No FAQs found for "{searchQuery}"</p>
                            </div>
                        ) : (
                            filteredFaqs.map((faq, idx) => (
                                <div key={idx} className="bg-white border border-gray-200 shadow-sm">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full text-left p-4 font-bold text-gray-900 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors text-sm"
                                    >
                                        <span className="flex items-center gap-2">
                                            <i className="fas fa-question-circle text-primary text-xs"></i>
                                            {faq.question}
                                        </span>
                                        <i className={`fas fa-chevron-down text-xs text-gray-400 transition-transform ${openFaqIndex === idx ? "rotate-180 text-primary" : ""}`}></i>
                                    </button>

                                    {openFaqIndex === idx && (
                                        <div className="px-4 pb-4 pt-1 text-xs text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </section>

                {/* Contact Hub Box */}
                <section className="bg-white border border-gray-200 p-8 shadow-sm" id="contact">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-200 pb-6 mb-6">
                        <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 inline-block mb-2">
                                Dedicated Customer Support
                            </span>
                            <h3 className="text-2xl font-extrabold text-gray-900">Still have questions?</h3>
                            <p className="text-xs text-gray-600 mt-1">Our support engineers are available Monday through Saturday to assist you.</p>
                        </div>

                        <a
                            href="mailto:anshumanverma9795@gmail.com"
                            className="px-6 py-3 bg-primary hover:bg-secondary text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all text-center"
                        >
                            <i className="fas fa-envelope mr-2"></i> Send Email Inquiry
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                        <div className="p-4 bg-gray-50 border border-gray-200 flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center font-bold text-base">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <div className="text-gray-500 font-medium">Email Address</div>
                                <a href="mailto:anshumanverma9795@gmail.com" className="font-bold text-primary hover:underline">
                                    anshumanverma9795@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 border border-gray-200 flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-base">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div>
                                <div className="text-gray-500 font-medium">Response SLA</div>
                                <div className="font-bold text-gray-900">Within 24 Business Hours</div>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 border border-gray-200 flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-base">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <div className="text-gray-500 font-medium">Phone Support</div>
                                <a href="tel:+918924949494" className="font-bold text-purple-700">
                                    +91 892494xxxx
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}