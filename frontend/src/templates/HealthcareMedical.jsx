import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function HealthcareMedical({ data, primaryColor = "#0284c7", logo, photo }) {
  const { name, designation, idNumber, department, phone, organization } = data;

  return (
    <div className="w-[320px] h-[500px] bg-white border border-gray-300 shadow-xl flex flex-col justify-between overflow-hidden text-gray-800 font-sans">
      {/* Hospital Header */}
      <div className="p-4 bg-sky-700 text-white text-center flex items-center justify-between border-b-4 border-emerald-400">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-sky-700 flex items-center justify-center font-black text-lg">
            <i className="fas fa-hospital text-sm"></i>
          </div>
          <div className="text-left leading-tight">
            <span className="font-extrabold text-sm block tracking-tight">
              {organization || "CITY CARE HOSPITAL"}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-sky-200 block">MEDICAL STAFF</span>
          </div>
        </div>
        <div className="w-6 h-6 bg-red-600 text-white flex items-center justify-center text-xs font-bold">
          <i className="fas fa-plus"></i>
        </div>
      </div>

      {/* Doctor/Nurse Photo */}
      <div className="px-6 pt-4 text-center">
        <div className="w-28 h-32 mx-auto bg-sky-50 border-2 border-sky-600 overflow-hidden shadow-sm flex items-center justify-center">
          {photo ? (
            <img src={photo} alt="Medical Staff" className="w-full h-full object-cover" />
          ) : (
            <i className="fas fa-user-doctor text-4xl text-sky-400"></i>
          )}
        </div>
        <h3 className="font-black text-lg text-gray-900 mt-3">{name || "DR. MARK BENNETT"}</h3>
        <span className="inline-block bg-sky-100 text-sky-800 text-[11px] font-black px-3 py-0.5 uppercase tracking-wider mt-1">
          {designation || "SURGEON / PHYSICIAN"}
        </span>
      </div>

      {/* Medical Info */}
      <div className="mx-5 p-3 bg-gray-50 border border-gray-200 text-xs space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-400 font-bold text-[10px]">MED LIC NO:</span>
          <span className="font-mono font-bold text-gray-900">{idNumber || "MED-88492"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 font-bold text-[10px]">CLINIC / DEPT:</span>
          <span className="font-bold text-gray-800">{department || "CARDIOLOGY"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 font-bold text-[10px]">EMERGENCY:</span>
          <span className="font-bold text-red-600">{phone || "+91 9999911111"}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-sky-50 border-t border-sky-100 flex items-center justify-between">
        <div className="text-[9px] text-sky-900 font-bold leading-tight">
          <p className="text-red-600">EMERGENCY ACCESS PASS</p>
          <p className="text-gray-500 font-normal">Valid for all ICUs & Wards</p>
        </div>
        <div className="p-1 bg-white border border-sky-200">
          <QRCodeSVG value={`STAFF:${idNumber || "MED-88492"}`} size={40} />
        </div>
      </div>
    </div>
  );
}
