import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function MinimalistExecutive({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-slate-950 text-white border border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden font-sans relative">
      {/* Top Cyber Stripe */}
      <div className="h-2 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>

      {/* Header */}
      <div className="p-5 text-center relative z-10">
        {logo ? (
          <img src={logo} alt="Logo" className="h-8 mx-auto object-contain mb-1" />
        ) : (
          <div className="flex items-center justify-center gap-2">
            <i className="fas fa-atom text-cyan-400 text-lg animate-pulse"></i>
            <h2 className="font-black tracking-widest text-base uppercase text-cyan-400">
              {organization || "NEXUS LABS"}
            </h2>
          </div>
        )}
        <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block mt-0.5">
          EXECUTIVE CLEARANCE BADGE
        </span>
      </div>

      {/* Photo */}
      <div className="px-6 text-center relative z-10">
        <div className="w-28 h-32 mx-auto bg-slate-900 border-2 border-cyan-500/50 p-1 shadow-lg shadow-cyan-500/10">
          <div className="w-full h-full bg-slate-800 overflow-hidden">
            {photo ? (
              <img src={photo} alt="Executive" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                <i className="fas fa-user-astronaut text-4xl"></i>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-black text-xl text-white mt-3 tracking-tight uppercase">{name || "SARAH CONNOR"}</h3>
        <span className="inline-block bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-[10px] font-bold px-3 py-0.5 uppercase tracking-widest mt-1">
          {designation || "CHIEF TECHNOLOGY OFFICER"}
        </span>
      </div>

      {/* Terminal Details Box */}
      <div className="mx-5 p-3 bg-slate-900 border border-slate-800 text-xs space-y-1 font-mono">
        <div className="flex justify-between text-slate-400">
          <span>ID_KEY:</span>
          <span className="text-cyan-300 font-bold">{idNumber || "CTO-001"}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>DIVISION:</span>
          <span className="text-slate-200 font-bold">{department || "CYBERSECURITY"}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>PHONE:</span>
          <span className="text-slate-200 font-bold">{phone || "+91 9876543210"}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>SEC_LEVEL:</span>
          <span className="text-emerald-400 font-bold">LEVEL-5 ALPHA</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">AUTHENTICATION</span>
          <span className="text-xs font-mono font-bold text-cyan-400">SEC-VERIFIED ✓</span>
        </div>
        <div className="p-1 bg-white">
          <QRCodeSVG value={`EXEC:${idNumber || "CTO-001"}`} size={40} />
        </div>
      </div>
    </div>
  );
}
