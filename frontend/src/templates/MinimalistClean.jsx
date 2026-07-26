import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function MinimalistClean({ data, logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-white text-slate-900 border-2 border-slate-900 shadow-2xl flex flex-col justify-between overflow-hidden font-sans p-6 relative">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3 mb-4">
          <span className="font-black text-sm uppercase tracking-widest text-slate-900">
            {organization || "STUDIO MONOCHROME"}
          </span>
          <span className="text-[9px] font-mono font-bold bg-slate-900 text-white px-2 py-0.5 uppercase">
            PASS
          </span>
        </div>

        {/* Photo */}
        <div className="w-28 h-28 bg-slate-100 border border-slate-900 overflow-hidden mb-4">
          {photo ? (
            <img src={photo} alt="Member" className="w-full h-full object-cover grayscale" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              <i className="fas fa-user text-4xl"></i>
            </div>
          )}
        </div>

        {/* Name & Title */}
        <h3 className="font-black text-2xl text-slate-900 uppercase tracking-tighter leading-tight mb-1">
          {name || "CHRISTIAN BALE"}
        </h3>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
          {designation || "CREATIVE DIRECTOR"}
        </p>

        {/* Details */}
        <div className="space-y-1.5 text-xs font-mono border-t border-slate-200 pt-3">
          <div className="flex justify-between">
            <span className="text-slate-400 font-bold">ID NO.</span>
            <span className="font-bold text-slate-900">{idNumber || "SWISS-091"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400 font-bold">STUDIO</span>
            <span className="font-bold text-slate-900">{department || "VISUAL ARTS"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400 font-bold">TEL.</span>
            <span className="font-bold text-slate-900">{phone || "+91 9876543210"}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-slate-900 pt-3 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-mono font-bold uppercase block text-slate-400">STATUS</span>
          <span className="text-xs font-bold text-slate-900 uppercase">AUTHORIZED</span>
        </div>
        <div className="p-1 border border-slate-900 bg-white">
          <QRCodeSVG value={`SWISS:${idNumber || "SWISS-091"}`} size={36} />
        </div>
      </div>
    </div>
  );
}
