import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function VIPEventPress({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-slate-950 text-white border border-amber-500/50 shadow-2xl flex flex-col justify-between overflow-hidden font-sans relative">
      {/* Top Lanyard Slot Graphic */}
      <div className="pt-3 text-center">
        <div className="w-10 h-3 bg-amber-400/30 border border-amber-400 mx-auto"></div>
      </div>

      {/* Header Banner */}
      <div className="p-4 text-center">
        <div className="inline-block bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 text-slate-950 font-black text-xs px-4 py-1 uppercase tracking-widest mb-2">
          ALL ACCESS - VIP
        </div>
        <h2 className="font-extrabold text-sm text-amber-200 tracking-wider uppercase">
          {organization || "GLOBAL TECH SUMMIT 2026"}
        </h2>
      </div>

      {/* Photo */}
      <div className="px-6 text-center">
        <div className="w-28 h-28 mx-auto bg-slate-900 border-2 border-amber-400 p-1 shadow-xl">
          <div className="w-full h-full bg-slate-800 overflow-hidden">
            {photo ? (
              <img src={photo} alt="VIP Guest" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                <i className="fas fa-star text-4xl text-amber-400"></i>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-black text-xl text-white mt-3 uppercase tracking-tight">{name || "MARCUS VANCE"}</h3>
        <span className="inline-block text-amber-400 font-extrabold text-xs uppercase tracking-widest mt-0.5">
          {designation || "KEYNOTE SPEAKER & VIP"}
        </span>
      </div>

      {/* Access Details */}
      <div className="mx-5 p-3 bg-amber-950/40 border border-amber-500/30 text-xs space-y-1">
        <div className="flex justify-between">
          <span className="text-amber-400/70 font-bold">PASS NO:</span>
          <span className="font-mono font-bold text-amber-300">{idNumber || "VIP-8809"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-amber-400/70 font-bold">ACCESS ZONE:</span>
          <span className="font-bold text-white">{department || "MAIN STAGE & LOUNGE"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-amber-400/70 font-bold">PHONE:</span>
          <span className="font-bold text-white">{phone || "+91 9876543210"}</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="p-4 bg-amber-500/10 border-t border-amber-500/30 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest block">SECURITY PASS</span>
          <span className="text-[10px] text-slate-300">VALID FOR ALL DATES</span>
        </div>
        <div className="p-1 bg-white">
          <QRCodeSVG value={`VIP:${idNumber || "VIP-8809"}`} size={40} />
        </div>
      </div>
    </div>
  );
}
