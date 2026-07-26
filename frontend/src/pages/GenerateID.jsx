import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import templatesCatalog from "../templates";
import CanvaBuilderCanvas from "../components/CanvaBuilderCanvas";

export default function GenerateID() {
  const [searchParams] = useSearchParams();
  const templateParam = searchParams.get("template");

  const [studioMode, setStudioMode] = useState("preset"); // "preset" | "canva"
  const [cardSide, setCardSide] = useState("front");
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [holder, setHolder] = useState({
    name: "Alex Morgan",
    designation: "Senior Software Engineer",
    idNumber: "PRO-2026-889",
    organization: "ProID Tech Corp",
    department: "Engineering & IT",
    email: "alex.morgan@proidstudio.com",
    phone: "+91 9876543210",
    bloodGroup: "O+",
    issueDate: "2026-01-15",
    expiryDate: "2028-01-15",
    photoUrl: "",
    logoUrl: ""
  });

  const [config, setConfig] = useState({
    templateId: templateParam || "corporate",
    primaryColor: "#04675b",
    secondaryColor: "#09758a",
    textColor: "#1e293b",
    showQrCode: true,
    orientation: "vertical"
  });

  useEffect(() => {
    if (templateParam) {
      const found = templatesCatalog.find(t => t.id === templateParam);
      if (found) {
        setConfig((prev) => ({
          ...prev,
          templateId: found.id,
          primaryColor: found.defaultColor
        }));
        if (found.sampleData) {
          setHolder((prev) => ({
            ...prev,
            name: found.sampleData.name || prev.name,
            designation: found.sampleData.designation || prev.designation,
            idNumber: found.sampleData.idNumber || prev.idNumber,
            department: found.sampleData.department || prev.department,
            organization: found.sampleData.organization || prev.organization,
            phone: found.sampleData.phone || prev.phone
          }));
        }
      }
    }
  }, [templateParam]);

  const cardRef = useRef(null);

  const samplePhoto = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80";
  const sampleLogo = "https://cdn-icons-png.flaticon.com/512/924/924915.png";

  const photoToUse = holder.photoUrl || samplePhoto;
  const logoToUse = holder.logoUrl || sampleLogo;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHolder((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHolder((prev) => ({ ...prev, photoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHolder((prev) => ({ ...prev, logoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };



  const downloadPNG = async () => {
    if (!cardRef.current) return;
    try {
      setMessage({ type: "info", text: "Generating PNG Image..." });
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null
      });
      const link = document.createElement("a");
      link.download = `${holder.name.replace(/\s+/g, "_")}_ID_Card.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      setMessage({ type: "success", text: "PNG Downloaded successfully! 🎉" });
    } catch (err) {
      console.error("Export PNG error:", err);
      setMessage({ type: "error", text: "Failed to generate PNG image." });
    }
  };

  const downloadPDF = async () => {
    if (!cardRef.current) return;
    try {
      setMessage({ type: "info", text: "Generating High-Res PDF..." });
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff"
      });
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF({
        orientation: config.orientation === "vertical" ? "portrait" : "landscape",
        unit: "mm",
        format: [85.6, 53.98]
      });
      pdf.addImage(imgData, "JPEG", 0, 0, 85.6, 53.98);
      pdf.save(`${holder.name.replace(/\s+/g, "_")}_ID_Card.pdf`);
      setMessage({ type: "success", text: "PDF Downloaded successfully! 📄" });
    } catch (err) {
      console.error("Export PDF error:", err);
      setMessage({ type: "error", text: "Failed to generate PDF." });
    }
  };

  const saveCardToAccount = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage({ type: "error", text: "Please log in to save cards to your account." });
      return;
    }

    try {
      setIsSaving(true);
      setMessage({ type: "info", text: "Saving card to your account..." });

      let cardImage = "";
      if (cardRef.current) {
        const canvas = await html2canvas(cardRef.current, { scale: 1, useCORS: true });
        cardImage = canvas.toDataURL("image/png");
      }

      const response = await fetch("http://localhost:5050/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          title: `${holder.name}'s ID Card`,
          holderDetails: holder,
          designConfig: config,
          qrCodeData: `${holder.name} | ID: ${holder.idNumber} | Org: ${holder.organization}`,
          cardImage
        })
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: "success", text: "ID Card saved to your dashboard! 💾" });
      } else {
        setMessage({ type: "error", text: data.message || "Failed to save card." });
      }
    } catch (err) {
      console.error("Save card error:", err);
      setMessage({ type: "error", text: "Server error while saving card." });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {/* Top Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-6 border border-gray-200 shadow-md">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <i className="fas fa-id-card text-primary"></i> Smart ID Studio
            </h1>
            <p className="text-gray-600 text-sm mt-1">Design, customize, preview, and download print-ready professional ID cards instantly.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={downloadPNG}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <i className="fas fa-file-image text-emerald-400"></i> Export PNG
            </button>
            <button
              onClick={downloadPDF}
              className="px-4 py-2 bg-primary hover:bg-secondary text-white font-semibold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <i className="fas fa-file-pdf text-red-200"></i> Download PDF
            </button>
            <button
              onClick={saveCardToAccount}
              disabled={isSaving}
              className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <i className="fas fa-cloud-upload-alt"></i> {isSaving ? "Saving..." : "Save Card"}
            </button>
          </div>
        </div>

        {/* Status Message Notification */}
        {message.text && (
          <div
            className={`mb-6 p-4 border shadow-sm flex items-center justify-between gap-3 ${
              message.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : message.type === "error"
                ? "bg-red-50 border-red-200 text-red-800"
                : "bg-blue-50 border-blue-200 text-blue-800"
            }`}
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              <i className={`fas ${message.type === "success" ? "fa-check-circle" : message.type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}`}></i>
              <span>{message.text}</span>
            </div>
            <button onClick={() => setMessage({ type: "", text: "" })} className="text-gray-500 hover:text-gray-800">
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}

        {/* Studio Mode Switcher Bar */}
        <div className="bg-white border border-gray-200 p-3 mb-8 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Studio Mode:</span>
            <div className="inline-flex border border-gray-300">
              <button
                onClick={() => setStudioMode("preset")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  studioMode === "preset"
                    ? "bg-primary text-white shadow-sm"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <i className="fas fa-layer-group"></i> Catalog Templates (13)
              </button>
              <button
                onClick={() => setStudioMode("canva")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  studioMode === "canva"
                    ? "bg-purple-600 text-white shadow-sm font-black"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <i className="fas fa-wand-magic-sparkles text-amber-300"></i> Canva Visual Drag & Drop
              </button>
            </div>
          </div>

          <span className="text-xs text-gray-500 font-semibold">
            {studioMode === "preset"
              ? "⚡ Executive pre-designed layouts"
              : "🎨 Visual Canva Drag Studio: Move text & logos freely"}
          </span>
        </div>

        {studioMode === "canva" ? (
          <CanvaBuilderCanvas cardRef={cardRef} initialData={holder} />
        ) : (
          /* Main Grid: Studio Controls vs Live Preview */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT PANEL: Form Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Template & Color Selector */}
            <div className="bg-white border border-gray-200 p-6 shadow-md">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-200 pb-3">
                <i className="fas fa-palette text-primary"></i> Choose Template & Colors
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                {templatesCatalog.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setConfig((prev) => ({ ...prev, templateId: t.id, primaryColor: t.defaultColor }));
                    }}
                    className={`p-2.5 border text-center transition-all ${
                      config.templateId === t.id
                        ? "border-primary bg-primary/5 shadow-sm font-bold"
                        : "border-gray-200 hover:border-gray-300 bg-gray-50"
                    }`}
                  >
                    <div className="w-full h-3 mb-1.5" style={{ backgroundColor: t.defaultColor }}></div>
                    <div className="text-[11px] font-bold text-gray-800 truncate">{t.name}</div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Primary Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={config.primaryColor}
                      onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                      className="w-10 h-10 cursor-pointer bg-white border border-gray-300 p-0.5"
                    />
                    <input
                      type="text"
                      value={config.primaryColor}
                      onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                      className="flex-1 bg-white border border-gray-300 px-3 py-2 text-sm text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Accent Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={config.secondaryColor}
                      onChange={(e) => setConfig({ ...config, secondaryColor: e.target.value })}
                      className="w-10 h-10 cursor-pointer bg-white border border-gray-300 p-0.5"
                    />
                    <input
                      type="text"
                      value={config.secondaryColor}
                      onChange={(e) => setConfig({ ...config, secondaryColor: e.target.value })}
                      className="flex-1 bg-white border border-gray-300 px-3 py-2 text-sm text-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card Holder Details Form */}
            <div className="bg-white border border-gray-200 p-6 shadow-md">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-200 pb-3">
                <i className="fas fa-user-edit text-primary"></i> Card Holder Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={holder.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Designation / Role</label>
                  <input
                    type="text"
                    name="designation"
                    value={holder.designation}
                    onChange={handleInputChange}
                    placeholder="Software Engineer"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">ID Number</label>
                  <input
                    type="text"
                    name="idNumber"
                    value={holder.idNumber}
                    onChange={handleInputChange}
                    placeholder="EMP-10023"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Organization Name</label>
                  <input
                    type="text"
                    name="organization"
                    value={holder.organization}
                    onChange={handleInputChange}
                    placeholder="ProID Corp"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={holder.email}
                    onChange={handleInputChange}
                    placeholder="user@example.com"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={holder.phone}
                    onChange={handleInputChange}
                    placeholder="+1 555-0199"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Blood Group</label>
                  <input
                    type="text"
                    name="bloodGroup"
                    value={holder.bloodGroup}
                    onChange={handleInputChange}
                    placeholder="O+"
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Expiry Date</label>
                  <input
                    type="date"
                    name="expiryDate"
                    value={holder.expiryDate}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-primary outline-none"
                  />
                </div>
              </div>

              {/* Photo & Logo Upload */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Holder Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="w-full text-xs text-gray-600 file:mr-3 file:py-2 file:px-4 file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Company Logo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="w-full text-xs text-gray-600 file:mr-3 file:py-2 file:px-4 file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary cursor-pointer"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Live Preview Canvas (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white border border-gray-200 p-6 shadow-md flex flex-col items-center sticky top-6">
              
              {/* Preview Header & Controls */}
              <div className="w-full flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <i className="fas fa-eye text-primary"></i> Live Preview
                </h3>

                <div className="flex items-center gap-1 bg-gray-100 p-1 border border-gray-300">
                  <button
                    onClick={() => setCardSide("front")}
                    className={`px-3 py-1 text-xs font-bold transition-all ${
                      cardSide === "front" ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Front
                  </button>
                  <button
                    onClick={() => setCardSide("back")}
                    className={`px-3 py-1 text-xs font-bold transition-all ${
                      cardSide === "back" ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Back
                  </button>
                </div>
              </div>

              {/* CARD CANVAS CONTAINER */}
              <div className="relative shadow-lg border border-gray-300 my-2">
                <div ref={cardRef} id="id-card-element" className="inline-block shadow-md">
                  {(() => {
                    const currentTpl = templatesCatalog.find((t) => t.id === config.templateId) || templatesCatalog[0];
                    const TemplateComponent = currentTpl.component;
                    return (
                      <TemplateComponent
                        data={{
                          name: holder.name,
                          designation: holder.designation,
                          idNumber: holder.idNumber,
                          department: holder.department || "ENGINEERING",
                          phone: holder.phone,
                          organization: holder.organization
                        }}
                        primaryColor={config.primaryColor}
                        logo={logoToUse}
                        photo={photoToUse}
                      />
                    );
                  })()}
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500 flex items-center gap-2">
                <i className="fas fa-info-circle text-primary"></i> Standard CR-80 ID Card dimensions (3.375" x 2.125")
              </div>
            </div>
          </div>

        </div>
        )}
      </main>

      <Footer />
    </div>
  );
}