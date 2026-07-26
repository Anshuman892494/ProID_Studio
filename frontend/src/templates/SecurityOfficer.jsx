import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function SecurityOfficer({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-slate-900 text-slate-100 border-2 border-slate-700 shadow-2xl flex flex-col justify-between overflow-hidden font-sans relative">
      {/* Tactical Stripe */}
      <div className="h-3 w-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600"></div>

      {/* Header */}
      <div className="p-4 bg-slate-950 text-center border-b border-slate-800">
        <div className="flex items-center justify-center gap-2 text-red-500 font-black text-sm uppercase tracking-wider">
          <i className="fas fa-shield-halved text-base"></i>
          <span>{organization || "APEX SECURITY DIVISION"}</span>
        </div>
        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mt-0.5">
          TACTICAL OFFICER IDENTIFICATION
        </span>
      </div>

      {/* Photo */}
      <div className="px-6 text-center">
        <div className="w-28 h-32 mx-auto bg-slate-950 border-2 border-slate-600 p-1 shadow-lg">
          <div className="w-full h-full bg-slate-800 overflow-hidden">
            {photo ? (
              <img src={photo} alt="Officer" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                <i className="fas fa-user-shield text-4xl"></i>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-black text-lg text-white mt-3 uppercase tracking-tight">{name || "OFFICER RYAN CROSS"}</h3>
        <span className="inline-block bg-red-950 text-red-400 border border-red-800 text-[10px] font-black px-3 py-0.5 uppercase tracking-widest mt-1">
          {designation || "CHIEF SECURITY OFFICER"}
        </span>
      </div>

      {/* Details Box */}
      <div className="mx-5 p-3 bg-slate-950 border border-slate-800 text-xs space-y-1 font-mono">
        <div className="flex justify-between">
          <span className="text-slate-500 font-bold">BADGE NO:</span>
          <span className="font-bold text-red-400">{idNumber || "SEC-9041"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 font-bold">UNIT:</span>
          <span className="font-bold text-slate-200">{department || "ARMED RESPONSE"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 font-bold">DISPATCH:</span>
          <span className="font-bold text-slate-200">{phone || "+91 9876543210"}</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest block">ARMED CLEARANCE</span>
          <span className="text-[10px] text-slate-400 font-mono">CODE: ALPHA-RED</span>
        </div>
        <div className="p-1 bg-white">
          <QRCodeSVG value={`TACTICAL:${idNumber || "SEC-9041"}`} size={40} />
        </div>
      </div>
    </div>
  );
}
