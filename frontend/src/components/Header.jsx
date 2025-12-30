import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Check if user is logged in
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

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
                <div className="container mx-auto px-4 max-w-[1200px]">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center gap-2.5">
                            <i className="fas fa-id-card text-2xl text-primary"></i>
                            <Link to="/" className="text-xl md:text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300">
                                ProID Studio
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-4 lg:gap-6">
                                {/* <li>
                                    <Link to="/" className="font-semibold text-gray-800 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded transition-all duration-300">
                                        Home
                                    </Link>
                                </li> */}

                                {isLoggedIn ? (
                                    <>
                                        <li>
                                            <Link to="/dashboard" className="font-semibold text-gray-800 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded transition-all duration-300">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/generate" className="font-semibold text-gray-800 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded transition-all duration-300">
                                                Generate ID
                                            </Link>
                                        </li>
                                        <li>
                                            <span className="font-semibold text-secondary px-3 py-2">
                                                Hi, {user?.name || "User"}
                                            </span>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleLogout}
                                                className="bg-danger hover:bg-danger/90 text-white font-semibold px-4 py-2 rounded transition-all duration-300 shadow-sm hover:shadow-md"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/login" className="font-semibold text-gray-800 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded transition-all duration-300">
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/register"
                                                className="bg-gradient-to-r from-primary to-secondary text-white font-semibold text-gray-800 hover:text-white hover:bg-primary/10 px-3 py-2 rounded transition-all duration-300"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-primary hover:text-secondary transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 mt-2 pt-4 pb-4 animate-fade-in">
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link
                                        to="/"
                                        className="block font-semibold text-gray-800 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded transition-all duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>

                                {isLoggedIn ? (
                                    <>
                                        <li>
                                            <Link
                                                to="/dashboard"
                                                className="block font-semibold text-gray-800 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded transition-all duration-300"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/generate"
                                                className="block font-semibold text-gray-800 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded transition-all duration-300"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Generate ID
                                            </Link>
                                        </li>
                                        <li className="pt-3 pb-2 border-t border-gray-200">
                                            <span className="block font-semibold text-secondary px-3 py-2">
                                                Hi, {user?.name || "User"}
                                            </span>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full bg-danger hover:bg-danger/90 text-white font-semibold px-4 py-3 rounded transition-all duration-300 shadow-sm hover:shadow-md"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link
                                                to="/login"
                                                className="block font-semibold text-gray-800 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded transition-all duration-300"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/register"
                                                className="block bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-4 py-3 rounded transition-all duration-300 shadow-sm hover:shadow-md text-center"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}