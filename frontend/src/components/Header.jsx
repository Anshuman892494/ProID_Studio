import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            try {
                setUser(JSON.parse(userData));
                setIsLoggedIn(true);
            } catch {
                localStorage.removeItem("user");
            }
        }
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 max-w-[1280px]">
                <div className="flex justify-between items-center h-16">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-3">
                        <Link to={isLoggedIn ? "/dashboard" : "/"} className="flex items-center gap-2.5 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-xl shadow-sm transition-transform group-hover:scale-105">
                                <i className="fas fa-id-card"></i>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-extrabold text-gray-900 tracking-tight flex items-center gap-1.5">
                                    ProID <span className="text-primary font-black">Studio</span>
                                </span>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 -mt-1">
                                    Smart ID Generator
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-all border-b-2 ${isActive("/dashboard")
                                            ? "text-primary border-primary bg-primary/5 font-bold"
                                            : "text-gray-600 border-transparent hover:text-primary hover:bg-gray-50"
                                        }`}
                                >
                                    <i className="fas fa-th-large"></i>
                                    Dashboard
                                </Link>

                                <Link
                                    to="/generate"
                                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-all border-b-2 ${isActive("/generate")
                                            ? "text-primary border-primary bg-primary/5 font-bold"
                                            : "text-gray-600 border-transparent hover:text-primary hover:bg-gray-50"
                                        }`}
                                >
                                    <i className="fas fa-wand-magic-sparkles text-primary"></i>
                                    ID Studio
                                </Link>

                                <Link
                                    to="/templates"
                                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-all border-b-2 ${isActive("/templates")
                                            ? "text-primary border-primary bg-primary/5 font-bold"
                                            : "text-gray-600 border-transparent hover:text-primary hover:bg-gray-50"
                                        }`}
                                >
                                    <i className="fas fa-layer-group text-purple-600"></i>
                                    Templates
                                </Link>

                                <Link
                                    to="/bulk-generate"
                                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-all border-b-2 ${isActive("/bulk-generate")
                                            ? "text-primary border-primary bg-primary/5 font-bold"
                                            : "text-gray-600 border-transparent hover:text-primary hover:bg-gray-50"
                                        }`}
                                >
                                    <i className="fas fa-file-csv text-emerald-600"></i>
                                    Bulk CSV
                                </Link>

                                <Link
                                    to="/helpsupport"
                                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-all border-b-2 ${isActive("/helpsupport")
                                            ? "text-primary border-primary bg-primary/5 font-bold"
                                            : "text-gray-600 border-transparent hover:text-primary hover:bg-gray-50"
                                        }`}
                                >
                                    <i className="fas fa-circle-question text-amber-500"></i>
                                    Support
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/"
                                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-all border-b-2 ${isActive("/")
                                            ? "text-primary border-primary bg-primary/5 font-bold"
                                            : "text-gray-600 border-transparent hover:text-primary hover:bg-gray-50"
                                        }`}
                                >
                                    <i className="fas fa-house"></i>
                                    Home
                                </Link>

                                <Link
                                    to="/about"
                                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-all border-b-2 ${isActive("/about")
                                            ? "text-primary border-primary bg-primary/5 font-bold"
                                            : "text-gray-600 border-transparent hover:text-primary hover:bg-gray-50"
                                        }`}
                                >
                                    <i className="fas fa-circle-info"></i>
                                    About Us
                                </Link>

                                <Link
                                    to="/helpsupport"
                                    className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-all border-b-2 ${isActive("/helpsupport")
                                            ? "text-primary border-primary bg-primary/5 font-bold"
                                            : "text-gray-600 border-transparent hover:text-primary hover:bg-gray-50"
                                        }`}
                                >
                                    <i className="fas fa-headset"></i>
                                    Help & Support
                                </Link>
                            </>
                        )}
                    </nav>

                    {/* Right User Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        {isLoggedIn ? (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                    className="flex items-center gap-3 px-3 py-1.5 border border-gray-300 hover:border-primary transition-all bg-gray-50 hover:bg-white"
                                >
                                    <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-bold text-sm">
                                        {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs font-bold text-gray-900 leading-tight">
                                            {user?.name || "User"}
                                        </div>
                                        <div className="text-[10px] text-gray-500 truncate max-w-[110px]">
                                            {user?.organization || user?.email || "Pro Member"}
                                        </div>
                                    </div>
                                    <i className={`fas fa-chevron-down text-xs text-gray-400 transition-transform ${isProfileMenuOpen ? "rotate-180" : ""}`}></i>
                                </button>

                                {/* User Dropdown Menu */}
                                {isProfileMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-xl py-2 z-50 animate-fade-in">
                                        <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Signed in as</p>
                                            <p className="text-sm font-bold text-gray-900 truncate">{user?.email}</p>
                                        </div>

                                        <Link
                                            to="/dashboard"
                                            onClick={() => setIsProfileMenuOpen(false)}
                                            className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary flex items-center gap-2.5 transition-colors"
                                        >
                                            <i className="fas fa-gauge w-4 text-gray-400"></i>
                                            Dashboard
                                        </Link>

                                        <Link
                                            to="/update-password"
                                            onClick={() => setIsProfileMenuOpen(false)}
                                            className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary flex items-center gap-2.5 transition-colors"
                                        >
                                            <i className="fas fa-key w-4 text-gray-400"></i>
                                            Update Password
                                        </Link>

                                        <div className="border-t border-gray-100 my-1"></div>

                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2.5 transition-colors"
                                        >
                                            <i className="fas fa-right-from-bracket w-4"></i>
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    to="/login"
                                    className="px-5 py-2 text-sm font-bold text-gray-700 hover:text-primary border border-gray-300 hover:border-primary transition-all"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-sm"
                                >
                                    Get Started Free
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="lg:hidden p-2 text-gray-700 hover:text-primary focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
                    </button>
                </div>

                {/* Mobile Menu Drawer */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 py-4 bg-white animate-fade-in space-y-3">
                        {isLoggedIn ? (
                            <>
                                <div className="px-3 py-2 bg-gray-50 border border-gray-200 mb-2 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-bold">
                                        {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">{user?.name}</div>
                                        <div className="text-xs text-gray-500">{user?.email}</div>
                                    </div>
                                </div>

                                <Link
                                    to="/dashboard"
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-primary/5 hover:text-primary border-l-4 border-transparent hover:border-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className="fas fa-th-large w-5 text-primary"></i>
                                    Dashboard
                                </Link>

                                <Link
                                    to="/generate"
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-primary/5 hover:text-primary border-l-4 border-transparent hover:border-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className="fas fa-wand-magic-sparkles w-5 text-primary"></i>
                                    ID Studio
                                </Link>

                                <Link
                                    to="/bulk-generate"
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-primary/5 hover:text-primary border-l-4 border-transparent hover:border-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className="fas fa-file-csv w-5 text-emerald-600"></i>
                                    Bulk CSV
                                </Link>

                                <Link
                                    to="/helpsupport"
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-primary/5 hover:text-primary border-l-4 border-transparent hover:border-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className="fas fa-headset w-5 text-amber-500"></i>
                                    Help & Support
                                </Link>

                                <Link
                                    to="/update-password"
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-primary/5 hover:text-primary border-l-4 border-transparent hover:border-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className="fas fa-key w-5 text-gray-500"></i>
                                    Update Password
                                </Link>

                                <div className="pt-2 border-t border-gray-200">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-center py-2.5 bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <i className="fas fa-right-from-bracket"></i>
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/"
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-primary/5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className="fas fa-house w-5 text-primary"></i>
                                    Home
                                </Link>

                                <Link
                                    to="/about"
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-primary/5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className="fas fa-circle-info w-5 text-primary"></i>
                                    About Us
                                </Link>

                                <Link
                                    to="/helpsupport"
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-primary/5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className="fas fa-headset w-5 text-primary"></i>
                                    Help & Support
                                </Link>

                                <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
                                    <Link
                                        to="/login"
                                        className="w-full text-center py-2.5 border border-gray-300 font-bold text-gray-800 text-sm hover:bg-gray-50"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="w-full text-center py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:opacity-90"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Get Started Free
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}