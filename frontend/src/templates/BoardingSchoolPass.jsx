import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function BoardingSchoolPass({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-slate-950 text-white border-2 border-amber-400 shadow-2xl flex flex-col justify-between overflow-hidden font-sans relative">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 p-5 text-center relative border-b border-amber-400/50">
        {logo ? (
          <img src={logo} alt="Logo" className="h-9 mx-auto object-contain mb-1" />
        ) : (
          <div className="flex items-center justify-center gap-2 text-amber-400 font-black text-base uppercase tracking-wider">
            <i className="fas fa-shield-cat text-amber-400"></i>
            <span>{organization || "ROYAL BOARDING ACADEMY"}</span>
          </div>
        )}
        <span className="text-[9px] font-mono text-amber-300 uppercase tracking-widest block mt-1">
          RESIDENT BOARDER PASS
        </span>
      </div>

      {/* Student Photo */}
      <div className="px-6 pt-3 text-center">
        <div className="w-28 h-32 mx-auto bg-slate-900 border-2 border-amber-400 p-1 shadow-xl">
          <div className="w-full h-full bg-slate-950 overflow-hidden">
            {photo ? (
              <img src={photo} alt="Boarder" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-amber-400/50">
                <i className="fas fa-user-shield text-4xl"></i>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-black text-xl text-white mt-3 uppercase tracking-tight">{name || "ETHAN HUNT"}</h3>
        <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-black px-3 py-0.5 uppercase tracking-widest mt-1">
          {designation || "RESIDENT STUDENT"}
        </span>
      </div>

      {/* Details Box */}
      <div className="mx-5 p-3 bg-slate-900 border border-amber-500/30 text-xs space-y-1 font-mono">
        <div className="flex justify-between text-slate-400">
          <span>BOARDER ID:</span>
          <span className="text-amber-400 font-bold">{idNumber || "BRD-2026-08"}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>DORM / HOUSE:</span>
          <span className="text-white font-bold">{department || "WINDSOR DORM / GR 11"}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>WARDEN TEL:</span>
          <span className="text-white font-bold">{phone || "+91 9876543210"}</span>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="p-4 bg-slate-900 border-t border-amber-400/40 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest block">GATE CLEARANCE</span>
          <span className="text-xs font-mono text-slate-300">CAMPUS PERMIT ✓</span>
        </div>
        <div className="p-1 bg-white">
          <QRCodeSVG value={`BOARDING:${idNumber || "BRD-2026-08"}`} size={40} />
        </div>
      </div>
    </div>
  );
}
