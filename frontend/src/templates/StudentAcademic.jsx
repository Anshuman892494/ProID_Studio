import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function StudentAcademic({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-amber-50/40 border border-amber-200 shadow-2xl flex flex-col justify-between overflow-hidden text-gray-800 font-sans relative">
      {/* Gold Foil Top Border */}
      <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500"></div>

      {/* Crimson Academic Header */}
      <div className="bg-gradient-to-r from-rose-950 via-red-900 to-rose-900 text-white p-5 text-center relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 opacity-10 text-white text-7xl font-serif">
          <i className="fas fa-graduation-cap"></i>
        </div>

        {logo ? (
          <img src={logo} alt="School Logo" className="h-10 mx-auto object-contain mb-1" />
        ) : (
          <div className="flex items-center justify-center gap-2 font-black text-lg tracking-wider uppercase text-amber-300">
            <i className="fas fa-university"></i>
            <span>{organization || "OXFORD UNIVERSITY"}</span>
          </div>
        )}
        <span className="text-[9px] tracking-widest font-black uppercase text-amber-200 block mt-1">
          OFFICIAL STUDENT CAMPUS PASS 2026-2027
        </span>
      </div>

      {/* Student Photo */}
      <div className="px-6 pt-3 text-center">
        <div className="w-28 h-28 mx-auto bg-white p-1 shadow-lg border-2 border-amber-400 overflow-hidden">
          <div className="w-full h-full bg-gray-100 overflow-hidden">
            {photo ? (
              <img src={photo} alt="Student" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <i className="fas fa-user-graduate text-4xl"></i>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-extrabold text-lg text-slate-900 mt-2 uppercase tracking-tight">{name || "ALICE SMITH"}</h3>
        <span className="inline-block bg-rose-100 text-rose-900 text-[10px] font-black px-3 py-0.5 uppercase tracking-widest border border-rose-300">
          {designation || "UNDERGRADUATE STUDENT"}
        </span>
      </div>

      {/* Details List */}
      <div className="mx-5 p-3 bg-white border border-amber-200 text-xs space-y-1.5 shadow-sm">
        <div className="flex justify-between border-b border-gray-100 pb-1">
          <span className="text-gray-400 font-bold text-[10px]">ROLL NO:</span>
          <span className="font-mono font-extrabold text-slate-900">{idNumber || "STU-2026-089"}</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 pb-1">
          <span className="text-gray-400 font-bold text-[10px]">COURSE / DEPT:</span>
          <span className="font-bold text-slate-800">{department || "COMPUTER SCIENCE"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 font-bold text-[10px]">EMERGENCY:</span>
          <span className="font-bold text-slate-800">{phone || "+91 9876543210"}</span>
        </div>
      </div>

      {/* Footer & Signature */}
      <div className="px-5 py-3 bg-rose-950 text-white flex items-center justify-between border-t-2 border-amber-400">
        <div className="p-1 bg-white">
          <QRCodeSVG value={`STUDENT:${idNumber || "STU-2026-089"}`} size={42} />
        </div>
        <div className="text-right">
          <div className="text-[9px] font-bold text-amber-300 uppercase tracking-widest">REGISTRAR SEAL</div>
          <div className="font-serif italic font-bold text-xs text-amber-100">Dean of Academics</div>
        </div>
      </div>
    </div>
  );
}
