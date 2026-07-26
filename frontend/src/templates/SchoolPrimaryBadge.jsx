import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function SchoolPrimaryBadge({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-sky-50 border-2 border-sky-400 shadow-2xl flex flex-col justify-between overflow-hidden text-gray-800 font-sans relative">
      {/* Top Colorful Header */}
      <div className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white p-4 text-center relative overflow-hidden shadow-md">
        <div className="flex items-center justify-center gap-2 mb-1">
          {logo ? (
            <img src={logo} alt="School Logo" className="h-8 object-contain bg-white/20 p-1" />
          ) : (
            <div className="w-8 h-8 bg-amber-400 text-slate-900 flex items-center justify-center font-black text-sm shadow">
              <i className="fas fa-school"></i>
            </div>
          )}
          <h2 className="font-black text-base uppercase tracking-tight text-amber-300">
            {organization || "ST. XAVIER PRIMARY SCHOOL"}
          </h2>
        </div>
        <span className="text-[10px] font-black tracking-widest uppercase bg-white/20 px-2 py-0.5 inline-block text-white">
          STUDENT IDENTITY CARD
        </span>
      </div>

      {/* Student Photo Badge */}
      <div className="px-6 pt-3 text-center">
        <div className="w-28 h-28 mx-auto bg-white p-1.5 shadow-lg border-4 border-amber-400 overflow-hidden">
          <div className="w-full h-full bg-gray-100 overflow-hidden">
            {photo ? (
              <img src={photo} alt="Student" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sky-400">
                <i className="fas fa-child text-4xl"></i>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-black text-xl text-slate-900 mt-2 uppercase tracking-tight">{name || "RUDRAKSH SHARMA"}</h3>
        <span className="inline-block bg-sky-600 text-white text-[10px] font-black px-3 py-0.5 uppercase tracking-wider mt-1">
          {designation || "GRADE 4 - SEC B"}
        </span>
      </div>

      {/* Primary Details Card */}
      <div className="mx-5 p-3 bg-white border border-sky-200 text-xs space-y-1.5 shadow-sm">
        <div className="flex justify-between border-b border-gray-100 pb-1">
          <span className="text-sky-700 font-extrabold text-[10px]">ADM NO:</span>
          <span className="font-mono font-black text-slate-900">{idNumber || "ADM-2026-441"}</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 pb-1">
          <span className="text-sky-700 font-extrabold text-[10px]">HOUSE / CLASS:</span>
          <span className="font-bold text-slate-800">{department || "RUBY HOUSE / GR 4"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sky-700 font-extrabold text-[10px]">PARENT CONTACT:</span>
          <span className="font-bold text-red-600">{phone || "+91 9876543210"}</span>
        </div>
      </div>

      {/* Footer & Stamp */}
      <div className="px-5 py-3 bg-sky-600 text-white flex items-center justify-between border-t-2 border-amber-400">
        <div className="p-1 bg-white">
          <QRCodeSVG value={`PRIMARY_STUDENT:${idNumber || "ADM-2026-441"}`} size={40} />
        </div>
        <div className="text-right">
          <div className="text-[9px] font-black text-amber-300 uppercase tracking-widest">PRINCIPAL STAMP</div>
          <div className="font-serif italic font-bold text-xs text-white">St. Xavier Admin</div>
        </div>
      </div>
    </div>
  );
}
