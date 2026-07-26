import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BulkGenerate() {
  const [csvData, setCsvData] = useState([]);
  const [fileName, setFileName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sampleCSV = `Name,Designation,IDNumber,Organization,Email,Phone
John Doe,Software Engineer,EMP-101,ProID Corp,john@proid.com,+1 555-0101
Sarah Smith,Product Manager,EMP-102,ProID Corp,sarah@proid.com,+1 555-0102
Michael Brown,UX Designer,EMP-103,ProID Corp,michael@proid.com,+1 555-0103`;

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target.result;
      parseCSV(text);
    };

    reader.readAsText(file);
  };

  const parseCSV = (text) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    if (lines.length < 2) {
      setStatusMessage("Error: CSV file must contain a header row and at least one data row.");
      return;
    }

    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
    const data = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",").map((v) => v.trim());
      if (values.length === headers.length) {
        const row = {};
        headers.forEach((h, index) => {
          row[h] = values[index];
        });
        data.push(row);
      }
    }

    setCsvData(data);
    setStatusMessage(`Successfully loaded ${data.length} records from CSV.`);
  };

  const downloadSampleCSV = () => {
    const blob = new Blob([sampleCSV], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sample_id_cards.csv";
    a.click();
  };

  const handleBatchSave = async () => {
    if (csvData.length === 0) return;
    const token = localStorage.getItem("token");

    if (!token) {
      setStatusMessage("Please log in to save bulk cards.");
      return;
    }

    try {
      setIsProcessing(true);
      setStatusMessage("Saving bulk cards to server...");

      const formattedCards = csvData.map((row) => ({
        title: `${row.name || "Bulk"}'s Card`,
        holderDetails: {
          name: row.name || "",
          designation: row.designation || "",
          idNumber: row.idnumber || row.id || "",
          organization: row.organization || "",
          email: row.email || "",
          phone: row.phone || ""
        },
        designConfig: {
          templateId: "corporate",
          primaryColor: "#04675b",
          secondaryColor: "#09758a"
        }
      }));

      const res = await fetch("http://localhost:5050/api/cards/bulk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ cardsData: formattedCards })
      });

      const result = await res.json();
      if (result.success) {
        setStatusMessage(`🎉 ${result.count} ID Cards generated and saved successfully!`);
      } else {
        setStatusMessage(`Error: ${result.message}`);
      }
    } catch (err) {
      console.error("Bulk save error:", err);
      setStatusMessage("Failed to save bulk cards.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-6 border border-gray-200 shadow-md">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <i className="fas fa-layer-group text-primary"></i> Bulk ID Generator
            </h1>
            <p className="text-gray-600 text-sm mt-1">Upload CSV data to automatically generate hundreds of ID cards at once.</p>
          </div>

          <button
            onClick={downloadSampleCSV}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold text-xs shadow-sm flex items-center gap-2"
          >
            <i className="fas fa-file-download text-teal-400"></i> Download Sample CSV
          </button>
        </div>

        {/* Upload Zone */}
        <div className="bg-white border border-gray-200 p-8 shadow-md mb-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl border border-primary/20">
              <i className="fas fa-file-csv"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Upload your CSV Data File</h3>
            <p className="text-gray-500 text-xs mb-6">File should contain headers: Name, Designation, IDNumber, Organization, Email, Phone</p>

            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
              id="csv-file-input"
            />
            <label
              htmlFor="csv-file-input"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-secondary text-white font-semibold text-sm cursor-pointer shadow-md transition-all"
            >
              <i className="fas fa-upload"></i> {fileName ? fileName : "Select CSV File"}
            </label>
          </div>

          {statusMessage && (
            <div className="mt-6 p-3 bg-gray-50 border border-gray-200 text-primary text-xs font-medium max-w-xl mx-auto">
              {statusMessage}
            </div>
          )}
        </div>

        {/* CSV Data Table Preview */}
        {csvData.length > 0 && (
          <div className="bg-white border border-gray-200 p-6 shadow-md">
            <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-3">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <i className="fas fa-table text-primary"></i> Parsed Records ({csvData.length})
              </h3>

              <button
                onClick={handleBatchSave}
                disabled={isProcessing}
                className="px-4 py-2 bg-primary hover:bg-secondary text-white font-semibold text-xs shadow-sm flex items-center gap-2"
              >
                <i className="fas fa-save"></i> {isProcessing ? "Processing..." : "Generate All Cards"}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-700 border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 uppercase border-b border-gray-200">
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3">Designation</th>
                    <th className="py-2.5 px-3">ID Number</th>
                    <th className="py-2.5 px-3">Organization</th>
                    <th className="py-2.5 px-3">Email</th>
                    <th className="py-2.5 px-3">Phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {csvData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-2.5 px-3 font-mono text-gray-400">{index + 1}</td>
                      <td className="py-2.5 px-3 font-bold text-gray-900">{row.name || row.Name}</td>
                      <td className="py-2.5 px-3 text-primary font-medium">{row.designation || row.Designation}</td>
                      <td className="py-2.5 px-3 font-mono">{row.idnumber || row.id || row.IDNumber}</td>
                      <td className="py-2.5 px-3">{row.organization || row.Organization}</td>
                      <td className="py-2.5 px-3 text-gray-500">{row.email || row.Email}</td>
                      <td className="py-2.5 px-3 text-gray-500">{row.phone || row.Phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
