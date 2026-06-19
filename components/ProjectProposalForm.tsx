"use client";

import { useState } from "react";

export default function ProjectProposalForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-sm">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
          Start Project
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Share your project idea, and I’ll help build it.
        </h2>
        <p className="mt-3 text-slate-600">
          Describe your proposed project and what you want it to do. I’ll follow up with a custom plan and next steps.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-800">
          <h3 className="text-xl font-semibold">Thanks — request received!</h3>
          <p className="mt-2 text-sm leading-6">
            I got your project idea. I’ll review the details and send next steps to your email.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Name</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Project description</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              rows={6}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              placeholder="Describe what you want to build, who it’s for, and any key features."
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Submit project idea
          </button>
        </form>
      )}
    </section>
  );
}
