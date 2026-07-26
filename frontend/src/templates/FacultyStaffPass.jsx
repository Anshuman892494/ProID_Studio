import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function FacultyStaffPass({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-white border-2 border-rose-900 shadow-2xl flex flex-col justify-between overflow-hidden text-gray-800 font-sans relative">
      {/* Burgundy & Gold Top Header */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 text-white p-5 text-center relative border-b-2 border-amber-400">
        {logo ? (
          <img src={logo} alt="Logo" className="h-9 mx-auto object-contain mb-1" />
        ) : (
          <div className="flex items-center justify-center gap-2 text-amber-300 font-black text-base uppercase tracking-wider">
            <i className="fas fa-chalkboard-user"></i>
            <span>{organization || "HARVARD FACULTY"}</span>
          </div>
        )}
        <span className="text-[9px] font-black tracking-widest uppercase text-amber-200 block mt-1">
          OFFICIAL ACADEMIC FACULTY BADGE
        </span>
      </div>

      {/* Professor Photo */}
      <div className="px-6 pt-3 text-center">
        <div className="w-28 h-32 mx-auto bg-rose-50 p-1 shadow-lg border-2 border-rose-900 overflow-hidden">
          <div className="w-full h-full bg-gray-100 overflow-hidden">
            {photo ? (
              <img src={photo} alt="Faculty Member" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-rose-900">
                <i className="fas fa-user-tie text-4xl"></i>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-black text-lg text-rose-950 mt-3 uppercase tracking-tight">{name || "DR. ROBERT LANGDON"}</h3>
        <span className="inline-block bg-rose-900 text-amber-300 text-[10px] font-black px-3 py-0.5 uppercase tracking-widest mt-1">
          {designation || "PROFESSOR OF SYMBOLOGY"}
        </span>
      </div>

      {/* Details Card */}
      <div className="mx-5 p-3 bg-rose-50/50 border border-rose-200 text-xs space-y-1.5 shadow-sm">
        <div className="flex justify-between border-b border-rose-100 pb-1">
          <span className="text-rose-900 font-bold text-[10px]">FACULTY ID:</span>
          <span className="font-mono font-black text-slate-900">{idNumber || "FAC-9011"}</span>
        </div>
        <div className="flex justify-between border-b border-rose-100 pb-1">
          <span className="text-rose-900 font-bold text-[10px]">DEPARTMENT:</span>
          <span className="font-bold text-slate-800">{department || "HUMANITIES & HISTORY"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-rose-900 font-bold text-[10px]">PHONE:</span>
          <span className="font-bold text-slate-800">{phone || "+91 9876543210"}</span>
        </div>
      </div>

      {/* Footer & Dean Authorization */}
      <div className="px-5 py-3 bg-rose-950 text-white flex items-center justify-between border-t-2 border-amber-400">
        <div className="p-1 bg-white">
          <QRCodeSVG value={`FACULTY:${idNumber || "FAC-9011"}`} size={40} />
        </div>
        <div className="text-right">
          <div className="text-[9px] font-black text-amber-300 uppercase tracking-widest">DEAN OF FACULTY</div>
          <div className="font-serif italic font-bold text-xs text-rose-100">Academic Board</div>
        </div>
      </div>
    </div>
  );
}
