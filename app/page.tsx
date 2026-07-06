"use client";

import { useState } from "react";
import ProjectProposalForm from "@/components/ProjectProposalForm";

export default function home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mx-4 h-full sm:mx-6 lg:mx-8">
      <section className="h-full rounded-[32px] border border-slate-200 bg-slate-950 px-6 py-16 text-white shadow-xl shadow-slate-900/20 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sky-400">
              Santa Cruz Web Development
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Turn your idea into a website, widget, app, or game.
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Based near Santa Cruz, I help businesses, creators, and entrepreneurs bring their ideas online. From simple websites to interactive tools, custom widgets, dashboards, and browser-based games.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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

      {showForm && (
        <div className="mt-12">
          <ProjectProposalForm />
        </div>
      )}
    </div>
  );
}
