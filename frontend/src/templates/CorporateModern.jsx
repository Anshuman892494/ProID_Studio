import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function CorporateModern({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-white border border-gray-300 shadow-2xl flex flex-col justify-between overflow-hidden text-gray-800 font-sans relative">
      {/* Top Gradient Geometric Header */}
      <div className="relative h-44 bg-gradient-to-tr from-blue-900 via-indigo-800 to-blue-600 text-white p-5 flex flex-col justify-between overflow-hidden">
        {/* Abstract Background Waves */}
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute top-12 -left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-lg pointer-events-none"></div>

        {/* Top Header Row */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            {logo ? (
              <img src={logo} alt="Logo" className="h-8 object-contain bg-white/20 p-1" />
            ) : (
              <div className="w-8 h-8 bg-white/20 backdrop-blur-md text-white flex items-center justify-center font-black text-sm border border-white/30">
                <i className="fas fa-building"></i>
              </div>
            )}
            <span className="font-extrabold text-xs tracking-wider uppercase text-white truncate max-w-[160px]">
              {organization || "CORPORATE INC"}
            </span>
          </div>
          <span className="bg-emerald-400/90 text-slate-950 font-black text-[9px] px-2 py-0.5 uppercase tracking-widest">
            VERIFIED
          </span>
        </div>

        {/* Header Title */}
        <div className="z-10 pb-4">
          <span className="text-[10px] font-extrabold tracking-widest text-cyan-200 uppercase block">
            OFFICIAL EMPLOYEE BADGE
          </span>
        </div>
      </div>

      {/* Overlapping Avatar Photo */}
      <div className="relative -mt-16 text-center z-20 px-6">
        <div className="w-28 h-28 mx-auto bg-white p-1.5 shadow-xl border-2 border-indigo-600 overflow-hidden">
          <div className="w-full h-full bg-gray-100 overflow-hidden">
            {photo ? (
              <img src={photo} alt="Holder" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                <i className="fas fa-user text-4xl"></i>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-black text-lg text-slate-900 mt-2 tracking-tight leading-tight uppercase">
          {name || "JOHNathan DOE"}
        </h3>
        <p className="text-[11px] font-extrabold text-blue-700 uppercase tracking-wider mt-0.5">
          {designation || "SENIOR SOFTWARE ENGINEER"}
        </p>
      </div>

      {/* Structured Details Box */}
      <div className="mx-5 my-2 p-3 bg-slate-50 border border-slate-200 text-xs space-y-1.5 shadow-inner">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase">EMPLOYEE ID</span>
          <span className="font-mono font-bold text-slate-900 text-xs bg-white px-2 py-0.5 border border-slate-200">
            {idNumber || "EMP-98241"}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase">DEPARTMENT</span>
          <span className="font-bold text-slate-800 text-xs">{department || "ENGINEERING & IT"}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase">CONTACT</span>
          <span className="font-bold text-slate-800 text-xs">{phone || "+91 9876543210"}</span>
        </div>
      </div>

      {/* Footer & Hologram QR */}
      <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-t-2 border-indigo-500">
        <div>
          <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest block">SECURITY LEVEL 1</span>
          <span className="text-[10px] text-slate-400">HQ Access Authorized</span>
        </div>
        <div className="p-1 bg-white">
          <QRCodeSVG value={`CORP:${idNumber || "EMP-98241"}`} size={42} />
        </div>
      </div>
    </div>
  );
}
