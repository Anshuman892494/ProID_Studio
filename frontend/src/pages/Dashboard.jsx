import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import templatesCatalog from "../templates";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUserCards = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5050/api/cards", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setCards(data.cards);
      } else {
        console.error("Fetch cards failed:", data.message);
      }
    } catch (err) {
      console.error("Fetch dashboard cards error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserCards();
  }, []);

  const deleteCard = async (id) => {
    if (!window.confirm("Are you sure you want to delete this ID card?")) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5050/api/cards/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setCards((prev) => prev.filter((c) => c._id !== id));
      }
    } catch (err) {
      console.error("Delete card error:", err);
    }
  };

  const filteredCards = cards.filter((card) => {
    const name = card.holderDetails?.name || card.title || "";
    const designation = card.holderDetails?.designation || "";
    const idNum = card.holderDetails?.idNumber || "";
    return (
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idNum.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const quickLinks = [
    {
      title: "Smart ID Studio",
      description: "Design custom single ID cards with live preview & QR code",
      icon: "fa-wand-magic-sparkles",
      link: "/generate",
      badge: "Studio",
      badgeColor: "bg-emerald-100 text-emerald-800",
      color: "bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-teal-600 hover:to-emerald-700"
    },
    {
      title: "Bulk CSV Generator",
      description: "Generate 100s of employee/student cards in batch",
      icon: "fa-file-csv",
      link: "/bulk-generate",
      badge: "Batch",
      badgeColor: "bg-blue-100 text-blue-800",
      color: "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-600 hover:to-blue-700"
    },
    {
      title: "Account & Password",
      description: "Update account credentials & security settings",
      icon: "fa-key",
      link: "/update-password",
      badge: "Security",
      badgeColor: "bg-purple-100 text-purple-800",
      color: "bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-indigo-800 hover:to-purple-600"
    },
    {
      title: "Help & Support Hub",
      description: "Step-by-step guides, FAQs and customer support",
      icon: "fa-headset",
      link: "/helpsupport",
      badge: "Support",
      badgeColor: "bg-amber-100 text-amber-800",
      color: "bg-gradient-to-r from-slate-700 to-gray-900 hover:from-gray-900 hover:to-slate-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-sans">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Hero Banner */}
        <div className="mb-8 bg-gradient-to-r from-primary to-secondary text-white p-6 md:p-8 border border-gray-300 shadow-lg relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Pro Workspace
                </span>
                <span className="text-xs text-white/80">
                  {user.organization || "Independent Creator"}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                Welcome, <span className="text-accent">{user.name || "User"}</span>! 👋
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl">
                Manage your saved ID cards, launch the Smart Studio, or export batch cards easily from your dashboard.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/generate"
                className="px-6 py-3 bg-white hover:bg-gray-100 text-primary font-bold shadow-md transition-all flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                <i className="fas fa-plus text-primary"></i> Create New Card
              </Link>
            </div>
          </div>

          {/* Stats Bar Pills */}
          <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white">
            <div className="bg-white/10 p-3 backdrop-blur-sm border border-white/10">
              <div className="text-xs text-white/70 font-semibold uppercase">Total Saved Cards</div>
              <div className="text-2xl font-bold">{cards.length}</div>
            </div>
            <div className="bg-white/10 p-3 backdrop-blur-sm border border-white/10">
              <div className="text-xs text-white/70 font-semibold uppercase">Account Status</div>
              <div className="text-2xl font-bold text-emerald-300 flex items-center gap-1.5">
                <i className="fas fa-circle-check text-base"></i> Active
              </div>
            </div>
            <div className="bg-white/10 p-3 backdrop-blur-sm border border-white/10">
              <div className="text-xs text-white/70 font-semibold uppercase">Export Formats</div>
              <div className="text-2xl font-bold">PDF / PNG</div>
            </div>
            <div className="bg-white/10 p-3 backdrop-blur-sm border border-white/10">
              <div className="text-xs text-white/70 font-semibold uppercase">Security Level</div>
              <div className="text-2xl font-bold text-amber-300">256-bit SSL</div>
            </div>
          </div>
        </div>

        {/* Quick Studio Tools */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2 tracking-tight">
              <i className="fas fa-bolt text-primary"></i> Quick Studio Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className={`${link.color} p-6 text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-200 group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <i className={`fas ${link.icon} text-xl`}></i>
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 uppercase tracking-wider ${link.badgeColor}`}>
                      {link.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:translate-x-1 transition-transform">
                    {link.title}
                  </h3>
                  <p className="text-xs text-white/85 leading-relaxed">{link.description}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                  <span>Launch Tool</span>
                  <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured ID Card Templates Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2 tracking-tight">
                <i className="fas fa-layer-group text-primary"></i> Featured ID Card Templates
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Pre-designed CR80 formats for corporate, academic, and medical use</p>
            </div>

            <Link
              to="/templates"
              className="text-primary hover:text-secondary font-bold text-xs uppercase tracking-wider flex items-center gap-1 bg-primary/10 px-3 py-1.5 transition-colors border border-primary/20"
            >
              View All Templates ({templatesCatalog.length}) <i className="fas fa-arrow-right text-[10px]"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {templatesCatalog.map((tpl) => (
              <div
                key={tpl.id}
                className="bg-white border border-gray-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{tpl.category}</span>
                    <span className={`text-[9px] font-black px-2 py-0.5 uppercase tracking-wider ${tpl.badgeColor}`}>
                      {tpl.badge}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm text-gray-900 group-hover:text-primary transition-colors truncate">
                    {tpl.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 line-clamp-2 mt-1 mb-4 leading-snug">
                    {tpl.description}
                  </p>
                </div>

                <Link
                  to={`/generate?template=${tpl.id}`}
                  className="w-full py-2 bg-gray-50 hover:bg-primary hover:text-white text-gray-800 font-bold text-[11px] uppercase tracking-wider text-center block transition-all border border-gray-200 hover:border-primary"
                >
                  Use Template
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Cards Grid & User Info Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Saved Cards List (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-200 p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <i className="fas fa-id-card text-primary"></i> Saved ID Cards ({filteredCards.length})
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">Your created ID card templates and records</p>
                </div>

                {/* Search Bar */}
                <div className="relative min-w-[220px]">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, ID or role..."
                    className="w-full px-3.5 py-2 pl-9 text-xs border border-gray-300 focus:outline-none focus:border-primary transition-colors"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-16 text-gray-500">
                  <i className="fas fa-circle-notch fa-spin text-3xl mb-3 text-primary"></i>
                  <p className="font-semibold text-sm">Fetching your saved cards...</p>
                </div>
              ) : filteredCards.length === 0 ? (
                <div className="text-center py-14 bg-gray-50 border border-dashed border-gray-300 p-8">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-id-badge text-3xl"></i>
                  </div>
                  <h4 className="text-base font-bold text-gray-800 mb-1">
                    {searchQuery ? "No matching cards found" : "No Saved Cards Yet"}
                  </h4>
                  <p className="text-gray-500 text-xs max-w-sm mx-auto mb-6">
                    {searchQuery
                      ? `No cards found matching "${searchQuery}". Try a different keyword.`
                      : "Create your first professional ID card using our interactive studio."}
                  </p>
                  <Link
                    to="/generate"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-secondary text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                  >
                    <i className="fas fa-plus"></i> Open ID Studio
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredCards.map((card) => (
                    <div
                      key={card._id}
                      className="bg-white border border-gray-200 hover:border-primary transition-all shadow-sm flex flex-col justify-between group"
                    >
                      <div className="p-4">
                        {card.cardImage ? (
                          <div className="w-full h-44 bg-gray-100 border border-gray-200 overflow-hidden mb-3 flex items-center justify-center p-2">
                            <img
                              src={card.cardImage}
                              alt="Card Preview"
                              className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-36 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 mb-3 flex flex-col items-center justify-center text-primary">
                            <i className="fas fa-id-card text-4xl mb-2"></i>
                            <span className="text-xs font-bold">Standard Card</span>
                          </div>
                        )}

                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-extrabold text-gray-900 text-base truncate">
                              {card.holderDetails?.name || card.title || "Untitled Card"}
                            </h4>
                            <p className="text-xs text-primary font-bold uppercase tracking-wider">
                              {card.holderDetails?.designation || "ID Card"}
                            </p>
                          </div>
                          <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider border border-gray-200">
                            {card.template || "CR80"}
                          </span>
                        </div>

                        <div className="mt-3 pt-2 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs text-gray-600">
                          <div>
                            <span className="text-[10px] text-gray-400 block uppercase font-semibold">ID Number</span>
                            <span className="font-mono font-bold text-gray-800">{card.holderDetails?.idNumber || "N/A"}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-gray-400 block uppercase font-semibold">Organization</span>
                            <span className="font-bold text-gray-800 truncate block">{card.holderDetails?.organization || "ProID"}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-between text-xs">
                        <span className="text-gray-500 text-[11px]">
                          <i className="far fa-calendar-alt mr-1"></i>
                          {new Date(card.createdAt).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => deleteCard(card._id)}
                          className="text-red-600 hover:text-red-800 font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <i className="fas fa-trash-alt"></i> Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Account Profile Info Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Account Card */}
            <div className="bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
                <i className="fas fa-user-gear text-primary"></i> Account Profile
              </h3>

              <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 border border-gray-200">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-extrabold text-xl">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{user.name || "User"}</h4>
                  <p className="text-xs text-gray-500">{user.email || "N/A"}</p>
                  <span className="inline-block mt-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                    Verified User
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                  <span className="text-gray-500 font-medium">Organization</span>
                  <span className="font-bold text-gray-900">{user.organization || "Independent"}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                  <span className="text-gray-500 font-medium">Phone</span>
                  <span className="font-bold text-gray-900">{user.phone || "Not provided"}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                  <span className="text-gray-500 font-medium">Account Role</span>
                  <span className="font-bold text-primary uppercase">{user.role || "Member"}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
                <Link
                  to="/update-password"
                  className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold text-center block text-xs uppercase tracking-wider transition-colors"
                >
                  <i className="fas fa-key mr-2"></i> Update Password
                </Link>
                <Link
                  to="/helpsupport"
                  className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-center block text-xs uppercase tracking-wider transition-colors border border-gray-300"
                >
                  <i className="fas fa-circle-question mr-2"></i> Help Center
                </Link>
              </div>
            </div>

            {/* Quick Tips Box */}
            <div className="bg-primary/5 border border-primary/20 p-5">
              <h4 className="font-bold text-primary text-sm mb-2 flex items-center gap-2">
                <i className="fas fa-lightbulb text-amber-500"></i> ProID Studio Tip
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                When generating bulk cards from CSV, ensure your CSV header columns match <code className="bg-white px-1 py-0.5 border border-gray-300 text-primary">Name</code>, <code className="bg-white px-1 py-0.5 border border-gray-300 text-primary">ID</code>, and <code className="bg-white px-1 py-0.5 border border-gray-300 text-primary">Role</code>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}