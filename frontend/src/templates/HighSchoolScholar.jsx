import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function HighSchoolScholar({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-slate-900 text-white border-2 border-indigo-500 shadow-2xl flex flex-col justify-between overflow-hidden font-sans relative">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-950 p-5 text-center relative border-b border-indigo-700">
        {logo ? (
          <img src={logo} alt="Logo" className="h-9 mx-auto object-contain mb-1" />
        ) : (
          <div className="flex items-center justify-center gap-2 text-indigo-300 font-black text-base uppercase tracking-wider">
            <i className="fas fa-award text-amber-400"></i>
            <span>{organization || "CAMBRIDGE HIGH SCHOOL"}</span>
          </div>
        )}
        <span className="text-[9px] font-mono text-cyan-300 uppercase tracking-widest block mt-1">
          SENIOR HIGH SCHOLAR PASS
        </span>
      </div>

      {/* Student Photo */}
      <div className="px-6 pt-3 text-center">
        <div className="w-28 h-32 mx-auto bg-slate-800 border-2 border-cyan-400 p-1 shadow-xl">
          <div className="w-full h-full bg-slate-950 overflow-hidden">
            {photo ? (
              <img src={photo} alt="Scholar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                <i className="fas fa-user-graduate text-4xl text-indigo-400"></i>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-black text-xl text-white mt-3 uppercase tracking-tight">{name || "AARAV KAPOOR"}</h3>
        <span className="inline-block bg-indigo-500/20 border border-indigo-400/50 text-indigo-300 text-[10px] font-bold px-3 py-0.5 uppercase tracking-widest mt-1">
          {designation || "CLASS 12 - SCIENCE STREAM"}
        </span>
      </div>

      {/* Details Box */}
      <div className="mx-5 p-3 bg-slate-950 border border-indigo-900 text-xs space-y-1 font-mono">
        <div className="flex justify-between text-slate-400">
          <span>ROLL NO:</span>
          <span className="text-cyan-300 font-bold">{idNumber || "SCH-2026-90"}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>MAJOR / HOUSE:</span>
          <span className="text-white font-bold">{department || "PHYSICS & MATH / APOLLO"}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>GUARDIAN:</span>
          <span className="text-white font-bold">{phone || "+91 9876543210"}</span>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="p-4 bg-indigo-950 border-t border-indigo-800 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold text-indigo-300 uppercase tracking-widest block">LIBRARY CODE</span>
          <span className="text-xs font-mono text-cyan-400 font-bold">LIB-ENABLED ✓</span>
        </div>
        <div className="p-1 bg-white">
          <QRCodeSVG value={`HIGH_SCHOOL:${idNumber || "SCH-2026-90"}`} size={40} />
        </div>
      </div>
    </div>
  );
}
