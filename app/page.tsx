"use client";

import { useState } from "react";
import ProjectProposalForm from "@/components/ProjectProposalForm";

export default function home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mx-4 h-full sm:mx-6 lg:mx-8">
      <section className="h-full rounded-[32px] border border-slate-200 bg-slate-950 px-6 py-4 text-white shadow-xl shadow-slate-900/20 sm:px-10 sm:py-20">
        <div className="h-full mx-auto max-w-6xl">
          <div className="h-full flex flex-col max-w-3xl justify-between md:justify-start">
            <p className="self-right text-right text-sm font-semibold uppercase tracking-[0.28em] lg:py-4 text-sky-300">
              Santa Cruz Web Development
            </p>
<div className="flex flex-col gap-4 lg:gap-8">
            <h1 className="tracking-wide font-bold text-shadow-amber-100lg:my-8 max-w-2xl text-lg lg:text-center text-white sm:text-xl">
              Turn your idea into a....
            </h1>
            
            <p className="align-items-right text-4xl font-bold leading-tighter text-shadow-white text-yellow-200 sm:text-5xl text-right">

              <span>Website,</span> <span className="block">
              Widget,</span> <span className="block">
              App,</span> <span>
              or Game.</span>
                          </p>

</div>
            <p className="lg:py-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
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
