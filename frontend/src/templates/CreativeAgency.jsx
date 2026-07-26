import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function CreativeAgency({ data, primaryColor = "#7c3aed", logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-950 text-white border border-purple-800 shadow-2xl flex flex-col justify-between overflow-hidden font-sans relative">
      {/* Decorative Accent Circle */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header */}
      <div className="p-5 text-center relative z-10">
        {logo ? (
          <img src={logo} alt="Agency Logo" className="h-9 mx-auto object-contain mb-1" />
        ) : (
          <div className="flex items-center justify-center gap-2 font-black text-lg tracking-wider">
            <i className="fas fa-palette text-amber-400"></i>
            <span className="text-white">{organization || "PIXEL LAB STUDIO"}</span>
          </div>
        )}
        <span className="text-[9px] uppercase font-bold tracking-widest text-purple-300 block">
          CREATIVE TEAM MEMBER
        </span>
      </div>

      {/* Designer Photo */}
      <div className="px-6 text-center relative z-10">
        <div className="w-28 h-28 mx-auto bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-500 p-1 shadow-xl">
          <div className="w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center">
            {photo ? (
              <img src={photo} alt="Designer" className="w-full h-full object-cover" />
            ) : (
              <i className="fas fa-paintbrush text-4xl text-purple-400"></i>
            )}
          </div>
        </div>
        <h3 className="font-black text-xl text-white mt-3 tracking-tight">{name || "LISA VANDER"}</h3>
        <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-black px-3 py-0.5 uppercase tracking-widest mt-1">
          {designation || "LEAD UI/UX DESIGNER"}
        </span>
      </div>

      {/* Details Box */}
      <div className="mx-6 p-3 bg-purple-950/60 border border-purple-800/50 text-xs space-y-1 relative z-10">
        <div className="flex justify-between">
          <span className="text-purple-300 font-bold text-[10px]">CREATIVE ID:</span>
          <span className="font-mono font-bold text-amber-400">{idNumber || "DES-9901"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-purple-300 font-bold text-[10px]">TEAM:</span>
          <span className="font-bold text-white">{department || "BRAND STRATEGY"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-purple-300 font-bold text-[10px]">PHONE:</span>
          <span className="font-bold text-white">{phone || "+91 9876543210"}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-slate-950/80 border-t border-purple-900/50 flex items-center justify-between relative z-10">
        <div>
          <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block">PORTFOLIO</span>
          <span className="text-xs text-white font-mono">proidstudio.com</span>
        </div>
        <div className="p-1 bg-white">
          <QRCodeSVG value={`CREATIVE:${idNumber || "DES-9901"}`} size={40} />
        </div>
      </div>
    </div>
  );
}
