"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 py-4">
        <span className="text-2xl">🎉</span>
        <p className="text-gray-700 font-medium">You&apos;re subscribed! Tax tips coming your way.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-400 text-sm disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-5 py-3 rounded-xl text-sm font-semibold text-white whitespace-nowrap disabled:opacity-60"
        style={{ background: "#2a7a3b" }}
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-xs mt-1 absolute">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
