import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />

            <main className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-2xl mb-12">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
                            alt="Professional ID Cards"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
                    </div>

                    <div className="relative z-10 text-white text-center py-16 px-4 md:py-20">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
                            Professional ID Card Solutions
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up animation-delay-200">
                            Create stunning, secure ID cards for your organization with our powerful and intuitive platform
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                            <a
                                href="/generate"
                                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                            >
                                <i className="fas fa-plus mr-2"></i>
                                Create ID Card
                            </a>
                            <a
                                href="/register"
                                className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] border border-white/30"
                            >
                                <i className="fas fa-rocket mr-2"></i>
                                Get Started Free
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-12">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Why Choose Our ProID Studio?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            This Provide the most comprehensive ID card solutions for businesses, schools, and organizations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] animate-fade-in-up">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-bolt text-2xl text-primary"></i>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Quick & Easy</h3>
                            <p className="text-gray-600">
                                Create professional ID cards in minutes with our intuitive interface. No design skills required!
                            </p>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-success mr-2"></i>
                                        Drag & drop interface
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-success mr-2"></i>
                                        Pre-built templates
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-success mr-2"></i>
                                        Bulk generation
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] animate-fade-in-up animation-delay-200">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-shield-alt text-2xl text-primary"></i>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Secure & Reliable</h3>
                            <p className="text-gray-600">
                                Advanced security features to protect your organization's identity with encryption and access controls.
                            </p>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-success mr-2"></i>
                                        Data encryption
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-success mr-2"></i>
                                        Access controls
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-success mr-2"></i>
                                        Audit trails
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] animate-fade-in-up animation-delay-400">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-palette text-2xl text-primary"></i>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Fully Customizable</h3>
                            <p className="text-gray-600">
                                Design ID cards that match your organization's brand and style with complete customization options.
                            </p>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-success mr-2"></i>
                                        Custom branding
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-success mr-2"></i>
                                        Multiple layouts
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-success mr-2"></i>
                                        QR code support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Features */}
                <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl px-6 my-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Everything You Need for Professional ID Cards
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our platform provides all the tools and features to create, manage, and distribute ID cards efficiently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'fa-users', title: 'Team Management', desc: 'Manage multiple users and permissions' },
                            { icon: 'fa-download', title: 'Easy Export', desc: 'Export in PDF, PNG, or CSV formats' },
                            { icon: 'fa-history', title: 'Version History', desc: 'Track changes and restore previous versions' },
                            { icon: 'fa-headset', title: '24/7 Support', desc: 'Dedicated support team always available' },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className={`fas ${feature.icon} text-white text-xl`}></i>
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                                <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-12 text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Ready to Create Professional ID Cards?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Join ProID Studio for free.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/register"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
                            >
                                <i className="fas fa-user-plus mr-2"></i>
                                Join
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}