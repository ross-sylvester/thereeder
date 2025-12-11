"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export function BookCallButton() {
  return (
    <Link
      href="/start"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-[var(--reed-green)] text-black font-bold rounded-full shadow-lg hover:bg-[var(--reed-green-light)] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,80,0.4)]"
      aria-label="Book a call"
    >
      <Calendar className="h-5 w-5" />
      <span className="hidden sm:inline">Book a Call</span>
      <ArrowRight className="h-4 w-4 hidden sm:inline" />
    </Link>
  );
}
