import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-gray-300 border-t border-slate-800 mt-16 font-sans">
            <div className="container mx-auto px-4 max-w-7xl pt-12 pb-8">
                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column (2 Cols wide on large screens) */}
                    <div className="lg:col-span-2 pr-0 lg:pr-6">
                        <Link to="/" className="flex items-center gap-2.5 mb-4 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-xl shadow-md">
                                <i className="fas fa-id-card"></i>
                            </div>
                            <span className="text-2xl font-black text-white tracking-tight">
                                ProID <span className="text-accent">Studio</span>
                            </span>
                        </Link>

                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                            Next-generation ID card design studio and automated bulk CSV generator. Built for educational institutions, corporate enterprises, and organizations requiring high-security CR80 cards.
                        </p>

                        {/* Security Badges */}
                        <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 flex items-center gap-1.5 text-emerald-400">
                                <i className="fas fa-shield-halved"></i> 256-Bit SSL Encrypted
                            </span>
                            <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 flex items-center gap-1.5 text-blue-400">
                                <i className="fas fa-qrcode"></i> QR Verified Cards
                            </span>
                        </div>
                    </div>

                    {/* Navigation Column 1: Studio Products */}
                    <div>
                        <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-primary pl-2.5">
                            Studio Tools
                        </h4>
                        <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
                            <li>
                                <Link to="/generate" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    Smart ID Studio
                                </Link>
                            </li>
                            <li>
                                <Link to="/bulk-generate" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    Bulk CSV Generator
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    Saved Cards Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/generate" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    CR80 PDF Export
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Column 2: Resources & Support */}
                    <div>
                        <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-primary pl-2.5">
                            Resources
                        </h4>
                        <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
                            <li>
                                <Link to="/helpsupport" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    Help & Support Center
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    About ProID Studio
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    Contact Support Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/update-password" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    Account Security
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Column 3: Legal & Trust */}
                    <div>
                        <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-primary pl-2.5">
                            Legal & Compliance
                        </h4>
                        <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
                            <li>
                                <Link to="/privacy" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:anshumanverma9795@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                                    <i className="fas fa-angle-right text-primary text-[10px]"></i>
                                    Security Compliance
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar (Copyright & Socials) */}
                <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
                    <div>
                        © {currentYear} <span className="text-gray-300 font-bold">ProID Studio</span>. All rights reserved. Designed for high-volume ID generation.
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-4 text-sm">
                        <a
                            href="https://github.com/Anshuman892494/ProID_Studio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub Repository"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="mailto:anshumanverma9795@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Email Contact"
                        >
                            <i className="fas fa-envelope"></i>
                        </a>
                        <Link
                            to="/helpsupport"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Support Center"
                        >
                            <i className="fas fa-headset"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}