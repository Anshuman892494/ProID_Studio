import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
    const teamMembers = [
        {
            name: "Anshuman Varma",
            role: "CEO & Founder",
            bio: "",
            image: "",
            social: { linkedin: "https://www.linkedin.com/in/anshuman-varma-0586b3337/", github: "https://github.com/Anshuman892494" }
        },
        // {
        //     name: "Prerna Prem",
        //     role: "Lead Designer",
        //     bio: "UI/UX specialist with focus on enterprise solutions",
        //     image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        //     social: { linkedin: "#", dribbble: "#" }
        // },
        // {
        //     name: "Michael Rodriguez",
        //     role: "CTO",
        //     bio: "Former security architect at Fortune 500 companies",
        //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        //     social: { linkedin: "#", github: "#" }
        // },
        // {
        //     name: "Emma Wilson",
        //     role: "Customer Success",
        //     bio: "Dedicated to ensuring client satisfaction and adoption",
        //     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        //     social: { linkedin: "#", twitter: "#" }
        // }
    ];

    const values = [
        { icon: "fa-shield-alt", title: "Security First", description: "We prioritize data protection and privacy in everything we do" },
        { icon: "fa-lightbulb", title: "Innovation", description: "Continuously improving our platform with cutting-edge technology" },
        { icon: "fa-users", title: "Customer Focus", description: "Your success is our success - we're here to support you" },
        { icon: "fa-handshake", title: "Integrity", description: "Honest, transparent, and ethical business practices" },
        { icon: "fa-bolt", title: "Efficiency", description: "Streamlined processes for maximum productivity" },
        { icon: "fa-globe", title: "Accessibility", description: "Making professional ID cards accessible to organizations of all sizes" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto animate-fade-in">
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-xl md:text-4xl font-bold text-primary mb-4">
                            About ProID Studio
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Empowering organizations with professional, secure, and customizable ID card solutions.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white mb-12 shadow-xl">
                        <div className="max-w-3xl mx-auto text-center">
                            <i className="fas fa-bullseye text-3xl mb-4"></i>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-lg md:text-xl opacity-90">
                                Our goal is to make ID card creation easy, secure, and accessible for all organizations.
                                <br /><br />
                                Our platform is designed to simplify daily operations and reduce manual effort. We support businesses, schools, and institutions of all sizes with reliable and user-friendly tools.</p>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <i className={`fas ${value.icon} text-primary text-xl`}></i>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Meet Our Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="text-center">
                                    <div className="relative mb-4">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                                        />
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                                            {Object.entries(member.social).map(([platform, link]) => (
                                                <a
                                                    key={platform}
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                                                    aria-label={`${member.name} ${platform}`}
                                                >
                                                    <i className={`fab fa-${platform}`}></i>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-gray-800">{member.name}</h3>
                                    <p className="text-primary font-medium mb-2">{member.role}</p>
                                    <p className="text-sm text-gray-600">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}