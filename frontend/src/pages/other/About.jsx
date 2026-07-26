import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
    const values = [
        { icon: "fa-shield-halved", title: "Security First", description: "Strict 256-bit SSL encryption and confidential member data protection." },
        { icon: "fa-bolt", title: "Bulk Efficiency", description: "Automated CSV parsing engine capable of batch printing 100s of cards." },
        { icon: "fa-wand-magic-sparkles", title: "Smart Studio", description: "Intuitive live preview design studio with custom themes and QR verification." },
        { icon: "fa-print", title: "CR80 Standards", description: "Industry-standard printable PDF outputs formatted for PVC printers." }
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-sans">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
                <div className="animate-fade-in">
                    {/* Header Banner */}
                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-12 mb-8 border border-gray-300 shadow-md text-center">
                        <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-3 inline-block">
                            About ProID Studio
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
                            Empowering Organizations Worldwide
                        </h1>
                        <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                            ProID Studio provides enterprise-grade ID card design, batch CSV generation, and digital verification solutions for schools, colleges, corporations, and events.
                        </p>
                    </div>

                    {/* Mission Statement */}
                    <div className="bg-white border border-gray-200 p-8 shadow-sm mb-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <i className="fas fa-bullseye text-2xl"></i>
                            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Our Mission</h2>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            Our goal is to eliminate complex design software hurdles and provide a seamless web platform where any institution can create, customize, and batch-print professional CR80 ID cards in minutes.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Built with modern security practices, responsive UI, live rendering, and scannable QR verification for all organizational identity needs.
                        </p>
                    </div>

                    {/* Core Values */}
                    <div className="mb-8">
                        <h2 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                            <i className="fas fa-star text-primary"></i> Key Capabilities & Core Values
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-6 shadow-sm flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center font-bold text-xl flex-shrink-0">
                                        <i className={`fas ${value.icon}`}></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-base mb-1">{value.title}</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Founder Section */}
                    <div className="bg-white border border-gray-200 p-6 md:p-8 shadow-sm">
                        <h2 className="text-xl font-extrabold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                            Platform Leadership
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="w-20 h-20 bg-primary text-white flex items-center justify-center font-extrabold text-2xl">
                                AV
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="font-bold text-gray-900 text-lg">Anshuman Varma</h3>
                                <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">Founder & Lead Engineer</p>
                                <p className="text-xs text-gray-600 max-w-xl leading-relaxed mb-3">
                                    Dedicated to building high-performance web applications and identity solutions for modern organizations.
                                </p>
                                <div className="flex justify-center sm:justify-start gap-3 text-sm">
                                    <a href="https://github.com/Anshuman892494" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/anshuman-varma-0586b3337/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}