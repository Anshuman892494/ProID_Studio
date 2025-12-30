export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* Footer */}
            <footer className="bg-gray-800 text-white mt-12 py-8">
                <div className="container mx-auto px-4 max-w-[1200px]">
                    <div className="flex flex-col items-center gap-4 text-center">
                        {/* Logo */}
                        <div className="flex items-center gap-2.5 mb-4">
                            <i className="fas fa-id-card text-2xl text-success"></i>
                            <h1 className="text-xl md:text-2xl font-bold text-white">ProID Studio</h1>
                        </div>

                        {/* Tagline */}
                        <p className="text-lg font-medium text-gray-300 max-w-2xl">
                            Professional ID Card Solutions for Organizations
                        </p>

                        {/* Copyright */}
                        <div className="pt-4 mt-4 border-t border-gray-700 w-full max-w-md">
                            <p className="text-gray-400">
                                &copy; {currentYear} ID_Generator. All rights reserved | Version 2.1.0.
                            </p>
                        </div>

                        {/* Social Links */}
                        {/* <div className="flex gap-4 pt-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-success transition-colors duration-300 text-lg"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-success transition-colors duration-300 text-lg"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-success transition-colors duration-300 text-lg"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-success transition-colors duration-300 text-lg"
                                aria-label="GitHub"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </div> */}

                        {/* Quick Links */}
                        <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-gray-400">
                            <a href="/privacy" className="hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <span>•</span>
                            <a href="/terms" className="hover:text-white transition-colors duration-300">
                                Terms of Service
                            </a>
                            <span>•</span>
                            <a href="/contact" className="hover:text-white transition-colors duration-300">
                                Contact Us
                            </a>
                            <span>•</span>
                            <a href="/about" className="hover:text-white transition-colors duration-300">
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}