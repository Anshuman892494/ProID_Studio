import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
    // Get user from localStorage
    const user = JSON.parse(localStorage.getItem("user") || '{}');

    // Quick links
    const quickLinks = [
        { title: "Create New ID", description: "Generate a new ID card", icon: "fa-plus", link: "/generate", color: "bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-primary" },
        { title: "My Templates", description: "View saved templates", icon: "fa-layer-group", link: "#", color: "bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-primary" },
        { title: "Account Settings", description: "Update profile & security", icon: "fa-user-cog", link: "/update-password", color: "bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-primary" },
        { title: "Help & Support", description: "Get help & documentation", icon: "fa-question-circle", link: "/helpsupport", color: "bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-primary" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />

            <main className="container mx-auto px-4 py-8">
                {/* Dashboard Header */}
                <div className="mb-8 animate-fade-in">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Welcome back, <span className="text-primary">{user.name || "User"}</span>! 👋
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Here's what's happening with your ID cards today.
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-primary mb-2">Quick Actions</h2>
                    <p className="text-gray-600 mb-6">Get started with these actions</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.link}
                                className={`${link.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] animate-fade-in-up`}
                                style={{ animationDelay: `${index * 100 + 400}ms` }}
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            <i className={`fas ${link.icon} text-xl`}></i>
                                        </div>
                                        <i className="fas fa-chevron-right text-white/80"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg mb-2">{link.title}</h3>
                                        <p className="text-sm opacity-90">{link.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Activity - Takes 2/3 width on large screens */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                    <i className="fas fa-history text-primary"></i> Recent Activity
                                </h3>
                                {/* <button className="text-primary hover:text-secondary font-medium text-sm flex items-center gap-1 transition-colors duration-300">
                                    View All <i className="fas fa-arrow-right text-xs"></i>
                                </button> */}
                            </div>

                            <div className="space-y-4">
                                {/* Add Activities Here */}
                            </div>
                        </div>
                    </div>
                    {/* User Info - Takes 1/3 width on large screens */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up animation-delay-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <i className="fas fa-user-circle text-primary"></i> Account Information
                            </h3>

                            <div className="space-y-5">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-user text-primary"></i>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Full Name</div>
                                        <div className="font-medium text-gray-800">{user.name || "Not set"}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-envelope text-primary"></i>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Email</div>
                                        <div className="font-medium text-gray-800 truncate">{user.email || "Not set"}</div>
                                    </div>
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