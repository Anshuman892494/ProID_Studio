import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function CanvaBuilderCanvas({ cardRef, initialData = {} }) {
  // Array of draggable layers
  const [elements, setElements] = useState([
    {
      id: "header-bg",
      type: "shape",
      bg: "#1e3a8a",
      x: 0,
      y: 0,
      width: 320,
      height: 120,
      zIndex: 1
    },
    {
      id: "org-name",
      type: "text",
      text: initialData.organization || "ORGANIZATION NAME",
      x: 20,
      y: 20,
      fontSize: 16,
      fontFamily: "Inter",
      color: "#ffffff",
      fontWeight: "800",
      zIndex: 2
    },
    {
      id: "badge-title",
      type: "text",
      text: "OFFICIAL IDENTITY BADGE",
      x: 20,
      y: 50,
      fontSize: 10,
      fontFamily: "Inter",
      color: "#93c5fd",
      fontWeight: "700",
      zIndex: 2
    },
    {
      id: "photo-box",
      type: "photo",
      src: initialData.photoUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      x: 105,
      y: 80,
      width: 110,
      height: 120,
      borderColor: "#1e3a8a",
      borderWidth: 3,
      zIndex: 3
    },
    {
      id: "holder-name",
      type: "text",
      text: initialData.name || "JOHN DOE",
      x: 40,
      y: 220,
      fontSize: 18,
      fontFamily: "Inter",
      color: "#0f172a",
      fontWeight: "900",
      zIndex: 4
    },
    {
      id: "holder-role",
      type: "text",
      text: initialData.designation || "SENIOR SOFTWARE ENGINEER",
      x: 35,
      y: 250,
      fontSize: 11,
      fontFamily: "Inter",
      color: "#1d4ed8",
      fontWeight: "700",
      zIndex: 4
    },
    {
      id: "holder-id",
      type: "text",
      text: `ID NO: ${initialData.idNumber || "EMP-98241"}`,
      x: 40,
      y: 290,
      fontSize: 12,
      fontFamily: "monospace",
      color: "#334155",
      fontWeight: "700",
      zIndex: 4
    },
    {
      id: "holder-dept",
      type: "text",
      text: `DEPT: ${initialData.department || "ENGINEERING & IT"}`,
      x: 40,
      y: 315,
      fontSize: 11,
      fontFamily: "Inter",
      color: "#475569",
      fontWeight: "600",
      zIndex: 4
    },
    {
      id: "holder-phone",
      type: "text",
      text: `TEL: ${initialData.phone || "+91 9876543210"}`,
      x: 40,
      y: 340,
      fontSize: 11,
      fontFamily: "Inter",
      color: "#475569",
      fontWeight: "600",
      zIndex: 4
    },
    {
      id: "qr-element",
      type: "qr",
      value: `ID:${initialData.idNumber || "EMP-98241"}`,
      x: 235,
      y: 410,
      size: 55,
      zIndex: 5
    },
    {
      id: "footer-bg",
      type: "shape",
      bg: "#0f172a",
      x: 0,
      y: 440,
      width: 320,
      height: 60,
      zIndex: 1
    },
    {
      id: "footer-text",
      type: "text",
      text: "SECURITY VERIFIED • HQ ACCESS",
      x: 20,
      y: 460,
      fontSize: 10,
      fontFamily: "Inter",
      color: "#38bdf8",
      fontWeight: "800",
      zIndex: 2
    }
  ]);

  const [selectedId, setSelectedId] = useState("holder-name");
  const [draggingId, setDraggingId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [canvasBg, setCanvasBg] = useState("#ffffff");

  const fontOptions = ["Inter", "Roboto", "Montserrat", "Outfit", "Playfair Display", "Space Grotesk", "monospace", "sans-serif"];

  const selectedElement = elements.find((el) => el.id === selectedId);

  // Mouse / Touch Down Start Drag
  const handleStartDrag = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedId(id);
    setDraggingId(id);

    const element = elements.find((el) => el.id === id);
    const canvas = cardRef.current;
    if (element && canvas) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      setDragOffset({
        x: clientX - rect.left - element.x,
        y: clientY - rect.top - element.y
      });
    }
  };

  // Global Window Drag Listener
  useEffect(() => {
    if (!draggingId) return;

    const handleGlobalMove = (e) => {
      const canvas = cardRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      let newX = clientX - rect.left - dragOffset.x;
      let newY = clientY - rect.top - dragOffset.y;

      // Clamp inside 320x500 canvas bounds
      newX = Math.max(-20, Math.min(newX, 300));
      newY = Math.max(-20, Math.min(newY, 480));

      setElements((prev) =>
        prev.map((el) => (el.id === draggingId ? { ...el, x: Math.round(newX), y: Math.round(newY) } : el))
      );
    };

    const handleGlobalUp = () => {
      setDraggingId(null);
    };

    window.addEventListener("mousemove", handleGlobalMove);
    window.addEventListener("mouseup", handleGlobalUp);
    window.addEventListener("touchmove", handleGlobalMove);
    window.addEventListener("touchend", handleGlobalUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalUp);
      window.removeEventListener("touchmove", handleGlobalMove);
      window.removeEventListener("touchend", handleGlobalUp);
    };
  }, [draggingId, dragOffset, cardRef]);

  // Add New Elements
  const addTextElement = () => {
    const newId = `text-${Date.now()}`;
    setElements((prev) => [
      ...prev,
      {
        id: newId,
        type: "text",
        text: "New Custom Text",
        x: 60,
        y: 200,
        fontSize: 14,
        fontFamily: "Inter",
        color: "#0f172a",
        fontWeight: "700",
        zIndex: prev.length + 1
      }
    ]);
    setSelectedId(newId);
  };

  const addShapeElement = () => {
    const newId = `shape-${Date.now()}`;
    setElements((prev) => [
      ...prev,
      {
        id: newId,
        type: "shape",
        bg: "#0284c7",
        x: 20,
        y: 180,
        width: 280,
        height: 35,
        zIndex: 2
      }
    ]);
    setSelectedId(newId);
  };

  const deleteSelectedElement = () => {
    if (!selectedId) return;
    setElements((prev) => prev.filter((el) => el.id !== selectedId));
    setSelectedId(null);
  };

  const updateSelectedProperty = (key, value) => {
    setElements((prev) =>
      prev.map((el) => (el.id === selectedId ? { ...el, [key]: value } : el))
    );
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newId = `image-${Date.now()}`;
        setElements((prev) => [
          ...prev,
          {
            id: newId,
            type: "photo",
            src: reader.result,
            x: 100,
            y: 150,
            width: 90,
            height: 90,
            zIndex: prev.length + 1
          }
        ]);
        setSelectedId(newId);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* CANVA TOP TOOLBAR & CONTROLS */}
      <div className="bg-white border border-gray-200 p-4 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="bg-purple-600 text-white font-extrabold text-xs px-2.5 py-1 uppercase tracking-wider">
              Canva Visual Drag & Drop
            </span>
            <span className="text-xs text-gray-500 font-semibold">Click & drag items on card below</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-gray-100 border border-gray-300 px-2 py-1">
              <span className="text-[10px] font-bold text-gray-600 uppercase">Card BG:</span>
              <input
                type="color"
                value={canvasBg}
                onChange={(e) => setCanvasBg(e.target.value)}
                className="w-6 h-6 p-0 border border-gray-300 cursor-pointer"
              />
            </div>
            <button
              onClick={addTextElement}
              className="px-3 py-1.5 bg-primary hover:bg-secondary text-white text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <i className="fas fa-font"></i> + Add Text
            </button>
            <button
              onClick={addShapeElement}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <i className="fas fa-shapes"></i> + Add Banner Strip
            </button>
            <label className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
              <i className="fas fa-image"></i> + Add Image/Logo
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* SELECTED ITEM PROPERTY BAR */}
        {selectedElement ? (
          <div className="bg-purple-50 border border-purple-200 p-3 text-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-bold text-purple-900">
              <i className="fas fa-sliders text-purple-600"></i> Active Item: <span className="uppercase font-mono text-purple-700">{selectedElement.id}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Text editing fields */}
              {selectedElement.type === "text" && (
                <>
                  <input
                    type="text"
                    value={selectedElement.text}
                    onChange={(e) => updateSelectedProperty("text", e.target.value)}
                    className="px-2.5 py-1 bg-white border border-gray-300 font-medium text-xs w-44 focus:outline-none focus:border-purple-600"
                    placeholder="Text content..."
                  />

                  <select
                    value={selectedElement.fontFamily || "Inter"}
                    onChange={(e) => updateSelectedProperty("fontFamily", e.target.value)}
                    className="px-2 py-1 bg-white border border-gray-300 font-semibold text-xs"
                  >
                    {fontOptions.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>

                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-gray-500 font-bold">SIZE:</span>
                    <input
                      type="number"
                      value={selectedElement.fontSize || 14}
                      onChange={(e) => updateSelectedProperty("fontSize", parseInt(e.target.value) || 12)}
                      className="w-14 px-2 py-1 bg-white border border-gray-300 font-bold text-xs"
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-gray-500 font-bold">COLOR:</span>
                    <input
                      type="color"
                      value={selectedElement.color || "#0f172a"}
                      onChange={(e) => updateSelectedProperty("color", e.target.value)}
                      className="w-8 h-7 p-0.5 border border-gray-300 cursor-pointer"
                    />
                  </div>
                </>
              )}

              {/* Shape bg editing */}
              {selectedElement.type === "shape" && (
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-700">BANNER COLOR:</span>
                  <input
                    type="color"
                    value={selectedElement.bg || "#1e3a8a"}
                    onChange={(e) => updateSelectedProperty("bg", e.target.value)}
                    className="w-8 h-7 p-0.5 border border-gray-300 cursor-pointer"
                  />
                  <span className="text-[10px] text-gray-500 font-bold">HEIGHT:</span>
                  <input
                    type="number"
                    value={selectedElement.height || 40}
                    onChange={(e) => updateSelectedProperty("height", parseInt(e.target.value) || 20)}
                    className="w-14 px-2 py-1 bg-white border border-gray-300 font-bold text-xs"
                  />
                </div>
              )}

              <button
                onClick={deleteSelectedElement}
                className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1 ml-2"
              >
                <i className="fas fa-trash-alt"></i> Delete Item
              </button>
            </div>
          </div>
        ) : (
          <div className="text-xs text-gray-500 italic">Click any text, image, or banner strip on the card to edit properties.</div>
        )}
      </div>

      {/* DRAG & DROP CARD CANVAS CONTAINER */}
      <div className="flex justify-center">
        <div
          ref={cardRef}
          id="id-card-element"
          className="w-[320px] h-[500px] relative border-2 border-gray-400 shadow-2xl overflow-hidden select-none"
          style={{ backgroundColor: canvasBg }}
        >
          {elements.map((el) => {
            const isSelected = el.id === selectedId;

            if (el.type === "shape") {
              return (
                <div
                  key={el.id}
                  onMouseDown={(e) => handleStartDrag(e, el.id)}
                  onTouchStart={(e) => handleStartDrag(e, el.id)}
                  style={{
                    position: "absolute",
                    left: `${el.x}px`,
                    top: `${el.y}px`,
                    width: `${el.width || 320}px`,
                    height: `${el.height || 50}px`,
                    backgroundColor: el.bg || "#1e3a8a",
                    zIndex: el.zIndex || 1,
                    outline: isSelected ? "2px dashed #a855f7" : "none",
                    cursor: "move"
                  }}
                />
              );
            }

            if (el.type === "text") {
              return (
                <div
                  key={el.id}
                  onMouseDown={(e) => handleStartDrag(e, el.id)}
                  onTouchStart={(e) => handleStartDrag(e, el.id)}
                  style={{
                    position: "absolute",
                    left: `${el.x}px`,
                    top: `${el.y}px`,
                    fontSize: `${el.fontSize || 14}px`,
                    fontFamily: el.fontFamily || "Inter, sans-serif",
                    color: el.color || "#0f172a",
                    fontWeight: el.fontWeight || "700",
                    zIndex: el.zIndex || 2,
                    outline: isSelected ? "2px solid #a855f7" : "none",
                    padding: "2px 4px",
                    lineHeight: "1.2",
                    cursor: "move",
                    userSelect: "none"
                  }}
                  className="whitespace-nowrap"
                >
                  {el.text}
                </div>
              );
            }

            if (el.type === "photo") {
              return (
                <div
                  key={el.id}
                  onMouseDown={(e) => handleStartDrag(e, el.id)}
                  onTouchStart={(e) => handleStartDrag(e, el.id)}
                  style={{
                    position: "absolute",
                    left: `${el.x}px`,
                    top: `${el.y}px`,
                    width: `${el.width || 100}px`,
                    height: `${el.height || 110}px`,
                    border: `${el.borderWidth || 2}px solid ${el.borderColor || "#ffffff"}`,
                    zIndex: el.zIndex || 3,
                    outline: isSelected ? "2px solid #a855f7" : "none",
                    cursor: "move"
                  }}
                  className="overflow-hidden bg-white shadow-md"
                >
                  <img src={el.src} alt="Uploaded" className="w-full h-full object-cover pointer-events-none" />
                </div>
              );
            }

            if (el.type === "qr") {
              return (
                <div
                  key={el.id}
                  onMouseDown={(e) => handleStartDrag(e, el.id)}
                  onTouchStart={(e) => handleStartDrag(e, el.id)}
                  style={{
                    position: "absolute",
                    left: `${el.x}px`,
                    top: `${el.y}px`,
                    zIndex: el.zIndex || 5,
                    outline: isSelected ? "2px solid #a855f7" : "none",
                    padding: "3px",
                    backgroundColor: "#ffffff",
                    cursor: "move"
                  }}
                  className="border border-gray-300 shadow-sm"
                >
                  <QRCodeSVG value={el.value || "CANVA_QR"} size={el.size || 50} />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
}
