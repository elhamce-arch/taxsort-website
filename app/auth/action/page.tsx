"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { applyActionCode } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";

function AuthActionContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const mode = searchParams.get("mode");
    const oobCode = searchParams.get("oobCode");

    if (!oobCode) {
      setStatus("error");
      setMessage("Invalid link. Please request a new verification email from the sign-in page.");
      return;
    }

    if (mode === "verifyEmail") {
      applyActionCode(auth, oobCode)
        .then(() => {
          setStatus("success");
          setMessage("Your email is verified. Redirecting you to sign in…");
          setTimeout(() => router.replace("/login"), 2500);
        })
        .catch(() => {
          setStatus("error");
          setMessage("This link has expired or has already been used. Go back and sign in — we'll send a fresh link.");
        });
    } else {
      setStatus("error");
      setMessage("Unrecognised action. Please try again.");
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#F0F6F5" }}>
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm flex flex-col items-center gap-5 text-center">
        <Image src="/logo.png" alt="TaxSort" width={56} height={56} className="rounded-xl" />

        {status === "loading" && (
          <>
            <div className="w-10 h-10 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-gray-500">Verifying your email…</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#e8f5e9" }}>
              <svg className="w-8 h-8" fill="none" stroke="#00897B" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Email verified!</h1>
            <p className="text-sm text-gray-500">{message}</p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#fef2f2" }}>
              <svg className="w-8 h-8" fill="none" stroke="#ef4444" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Link expired</h1>
            <p className="text-sm text-gray-500 leading-relaxed">{message}</p>
            <Link
              href="/login"
              className="w-full py-3 rounded-xl font-semibold text-white text-sm text-center transition-opacity hover:opacity-90"
              style={{ background: "#00897B" }}
            >
              Back to sign in
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default function AuthActionPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F0F6F5" }}>
        <div className="w-8 h-8 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <AuthActionContent />
    </Suspense>
  );
}
