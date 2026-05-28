"use client";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { httpsCallable } from "firebase/functions";
import { functions, db, auth } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

type Status = "idle" | "processing" | "done" | "error";

export default function UploadPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<Record<string, string> | null>(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  function handleFile(f: File) {
    setFile(f);
    setResult(null);
    setError("");
    setStatus("idle");
    if (f.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = e => setPreview(e.target?.result as string);
      reader.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  }

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, []);

  async function processFile() {
    if (!file || !auth.currentUser) return;
    setStatus("processing");
    setError("");
    try {
      const uid = auth.currentUser.uid;

      // Get first business ID
      const bizSnap = await getDocs(collection(db, "users", uid, "businesses"));
      const businessId = bizSnap.docs[0]?.id ?? "personal";

      // Convert file to base64
      const buffer = await file.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let binary = "";
      bytes.forEach(b => binary += String.fromCharCode(b));
      const base64 = btoa(binary);

      const isPdf = file.type === "application/pdf";
      const mimeType = isPdf ? "application/pdf" : file.type;

      const analyzeReceipt = httpsCallable(functions, "analyzeReceipt");
      const response = await analyzeReceipt({
        fileBase64: base64,
        mimeType,
        businessId,
        prompt: isPdf
          ? "This is a PDF receipt. Extract vendor name, total amount, date, and tax category."
          : "Extract vendor name, total amount, date, and tax category from this receipt image.",
      });

      const data = response.data as Record<string, string>;
      setResult(data);
      setStatus("done");
    } catch (e) {
      console.error(e);
      setError("Could not process receipt. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Upload Receipt</h1>
      <p className="text-sm text-gray-500 mb-6">Upload an image or PDF receipt — AI will extract and categorize it automatically.</p>

      {/* Drop zone */}
      <div
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
        className={`relative border-2 border-dashed rounded-2xl p-10 cursor-pointer transition-all text-center ${
          dragging ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-teal-400 hover:bg-gray-50"
        }`}
      >
        <input
          id="fileInput"
          type="file"
          accept="image/*,application/pdf"
          className="hidden"
          onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
        />
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-xl object-contain" />
        ) : file ? (
          <div className="flex flex-col items-center gap-3">
            <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <p className="font-medium text-gray-700">{file.name}</p>
            <p className="text-xs text-gray-400">PDF ready to process</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 text-gray-400">
            <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <div>
              <p className="font-medium text-gray-600">Drop your receipt here or click to browse</p>
              <p className="text-sm mt-1">Supports JPG, PNG, and PDF</p>
            </div>
          </div>
        )}
      </div>

      {file && status !== "done" && (
        <button
          onClick={processFile}
          disabled={status === "processing"}
          className="mt-4 w-full py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ background: "#00897B" }}
        >
          {status === "processing" ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processing with AI…
            </span>
          ) : "Process Receipt"}
        </button>
      )}

      {error && <p className="mt-3 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{error}</p>}

      {/* Result card */}
      {status === "done" && result && (
        <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-semibold text-gray-900">Receipt processed successfully</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(result).filter(([k]) => !["sessionId","businessId","docId"].includes(k)).map(([key, val]) => (
              <div key={key} className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{key.replace(/_/g, " ")}</p>
                <p className="font-medium text-gray-800 text-sm">{String(val)}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-5">
            <button
              onClick={() => { setFile(null); setPreview(null); setResult(null); setStatus("idle"); }}
              className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Upload Another
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "#00897B" }}
            >
              View Expenses
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
