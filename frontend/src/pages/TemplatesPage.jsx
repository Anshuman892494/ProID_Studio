import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import templatesCatalog from "../templates";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const categories = ["all", "Corporate", "Education", "Executive", "Healthcare", "Creative", "Events", "Security", "Minimalist"];

  const filteredTemplates = selectedCategory === "all"
    ? templatesCatalog
    : templatesCatalog.filter((t) => t.category === selectedCategory);

  const handleUseTemplate = (templateId) => {
    navigate(`/generate?template=${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-sans">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-12 mb-10 border border-gray-300 shadow-md text-center">
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-3 inline-block">
            ProID Template Library
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Professional ID Card Templates
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            Choose from our pre-designed executive templates for corporate employees, university students, medical staff, and creative agencies.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 bg-white/10 p-2 border border-white/20 inline-flex">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${selectedCategory === cat
                    ? "bg-white text-primary shadow-sm"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTemplates.map((template) => {
            const TemplateComponent = template.component;

            return (
              <div
                key={template.id}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group p-6"
              >
                {/* Template Badge & Category */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                      {template.category}
                    </span>
                    <span className={`text-[10px] font-black px-2.5 py-1 uppercase tracking-widest ${template.badgeColor}`}>
                      {template.badge}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    {template.description}
                  </p>

                  {/* Live Rendered Template Card Preview */}
                  <div className="flex justify-center bg-gray-100 p-4 border border-gray-200 mb-6 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="transform scale-[0.85] origin-top -mb-16">
                      <TemplateComponent
                        data={template.sampleData}
                        primaryColor={template.defaultColor}
                      />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleUseTemplate(template.id)}
                    className="w-full py-3 bg-primary hover:bg-secondary text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-wand-magic-sparkles"></i>
                    Use This Template in Studio
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
