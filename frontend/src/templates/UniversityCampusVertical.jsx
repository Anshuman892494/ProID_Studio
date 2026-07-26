import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function UniversityCampusVertical({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-emerald-950 text-white border-2 border-emerald-500 shadow-2xl flex flex-col justify-between overflow-hidden font-sans relative">
      {/* Top NFC Header */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 p-4 flex items-center justify-between border-b border-emerald-700">
        <div className="flex items-center gap-2">
          {logo ? (
            <img src={logo} alt="Logo" className="h-8 object-contain bg-white/20 p-1" />
          ) : (
            <div className="w-8 h-8 bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-sm">
              <i className="fas fa-graduation-cap"></i>
            </div>
          )}
          <span className="font-extrabold text-xs tracking-wider uppercase text-emerald-200 truncate max-w-[170px]">
            {organization || "STANFORD UNIVERSITY"}
          </span>
        </div>
        <i className="fas fa-wifi text-emerald-400 text-sm rotate-90"></i>
      </div>

      {/* Student Photo */}
      <div className="px-6 pt-3 text-center">
        <div className="w-28 h-32 mx-auto bg-emerald-900 border-2 border-emerald-400 p-1 shadow-xl">
          <div className="w-full h-full bg-slate-950 overflow-hidden">
            {photo ? (
              <img src={photo} alt="Campus Member" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-emerald-600">
                <i className="fas fa-user-graduate text-4xl"></i>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-black text-xl text-white mt-3 uppercase tracking-tight">{name || "KABIR MEHTA"}</h3>
        <span className="inline-block bg-emerald-500 text-slate-950 text-[10px] font-black px-3 py-0.5 uppercase tracking-widest mt-1">
          {designation || "POSTGRADUATE SCHOLAR"}
        </span>
      </div>

      {/* Details Box */}
      <div className="mx-5 p-3 bg-emerald-900/60 border border-emerald-700 text-xs space-y-1.5 font-mono">
        <div className="flex justify-between text-emerald-200">
          <span>ROLL / REG NO:</span>
          <span className="text-white font-black">{idNumber || "PG-2026-102"}</span>
        </div>
        <div className="flex justify-between text-emerald-200">
          <span>DEPARTMENT:</span>
          <span className="text-white font-bold">{department || "ARTIFICIAL INTELLIGENCE"}</span>
        </div>
        <div className="flex justify-between text-emerald-200">
          <span>EMERGENCY:</span>
          <span className="text-white font-bold">{phone || "+91 9876543210"}</span>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="p-4 bg-emerald-900 border-t border-emerald-700 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold text-emerald-300 uppercase tracking-widest block">NFC SMART PASS</span>
          <span className="text-xs text-white font-mono">ACCESS: ALL LABS</span>
        </div>
        <div className="p-1 bg-white">
          <QRCodeSVG value={`UNI:${idNumber || "PG-2026-102"}`} size={40} />
        </div>
      </div>
    </div>
  );
}
