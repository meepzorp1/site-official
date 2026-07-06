"use client";

import { useState } from "react";
import ProjectProposalForm from "@/components/ProjectProposalForm";
import { Space_Grotesk, Orbitron, Oxanium, Outfit } from "next/font/google";

const space = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export default function home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div 
    style={{ backgroundImage: "url('/redwood.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "lighten"  }}
    className="mx-4 h-full sm:mx-6 lg:mx-8 rounded-[32px]"
    >
      <section   
    style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
    className="h-full rounded-[32px] border border-slate-200 bg-slate-100 px-6 py-4 text-white shadow-xl shadow-slate-900/20 sm:px-10 sm:py-20">
        <div className="h-full mx-auto max-w-6xl">
          <div className="h-full flex flex-col max-w-3xl justify-between md:justify-start">
            <p className="self-right text-right text-sm font-semibold uppercase tracking-[0.28em] lg:py-4 text-sky-800 border-b-2 border-blue-500">
              Santa Cruz Web Development
            </p>
<div className="flex flex-col gap-4 lg:gap-8">
            <h1 className={`tracking-wide ${outfit.className} text-shadow-amber-100 lg:my-8 max-w-2xl text-xl lg:text-center text-sky-400 sm:text-xl`}>
              Turn your idea into a....
            </h1>
            
            <p className={`${oxanium.className} align-items-right text-4xl font-bold leading-tighter text-[#ffd659] underline sm:text-5xl text-right text-shadow-black`}>

              <span>Website,</span> <span className="block">
              Widget,</span> <span className="block">
              App,</span> <span>
              or Game.</span>
                          </p>

</div>
            <p className="lg:py-4 max-w-2xl text-lg text-slate-400 sm:text-xl">
              Based near Santa Cruz, I help businesses, creators, and entrepreneurs bring their ideas online. From simple websites to interactive tools, custom widgets, dashboards, and browser-based games.
            </p>

            <div className="lg:my-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setShowForm((current) => !current)}
                className="rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                {showForm ? "Hide form" : "Start a Project"}
              </button>

              <button className="rounded-full border border-slate-700 bg-slate-900 px-8 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800">
                View Examples
              </button> 
            </div>
          </div>
        </div>
      </section>
{/* 260706-003942 */}
      {showForm && (
        <div className="mt-12">
          <ProjectProposalForm />
        </div>
      )}
    </div>
  );
}
