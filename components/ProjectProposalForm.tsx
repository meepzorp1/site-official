"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type ProjectProposalFormProps = {
    onClose: () => void;
};

export default function ProjectProposalForm({
    onClose,
}: ProjectProposalFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
        <section
            className="mx-auto max-w-3xl rounded-[33px] border border-amber-200/20 p-8 bg-[rgba(72,45,22)]/97 text-amber-50 shadow-xl shadow-black/40 backdrop-blur-sm"
        >
        <div className="flex justify-center bg-[rgba(72,45,22)]/97 ">
            <button
                type="button"
                onClick={onClose}
                className="-mt-14 flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/30 bg-[#f8ead2] text-2xl text-[#482d16] shadow-lg transition hover:-translate-y-1 hover:bg-amber-100"
            >
                ⌄
            </button>
        </div>

        <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
                Start Project
            </p>

            <h2 className="mt-4 text-3xl font-bold text-amber-50">
                Share your project idea, and I’ll help build it.
            </h2>

            <p className="mt-3 text-amber-100/75">
                Describe your proposed project and what you want it to do. I’ll follow up with a custom plan and next steps.
            </p>
        </div>

        {submitted ? (
            <div className="rounded-3xl border border-emerald-300/30 bg-emerald-950/40 p-6 text-emerald-100">
                <h3 className="text-xl font-semibold">
                    Thanks — request received!
                </h3>

                <p className="mt-2 text-sm leading-6 text-emerald-100/80">
                    I got your project idea. I’ll review the details and send next steps to your email.
                </p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                        <span className="text-sm font-medium text-amber-100">
                            Name
                        </span>

                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            className="mt-2 w-full rounded-2xl border border-amber-200/20 bg-white/90 px-4 py-3 text-[#482d16] outline-none transition placeholder:text-stone-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/20"
                            placeholder="Your name"
                        />
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium text-amber-100">
                            Email
                        </span>

                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            className="mt-2 w-full rounded-2xl border border-amber-200/20 bg-white/90 px-4 py-3 text-[#482d16] outline-none transition placeholder:text-stone-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/20"
                            placeholder="you@example.com"
                        />
                    </label>
                </div>

                <label className="block">
                    <span className="text-sm font-medium text-amber-100">
                        Project description
                    </span>

                    <textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required
                        rows={6}
                        className="mt-2 w-full rounded-3xl border border-amber-200/20 bg-white/90 px-4 py-4 text-[#482d16] outline-none transition placeholder:text-stone-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/20"
                        placeholder="Describe what you want to build, who it’s for, and any key features."
                    />
                </label>

                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-[#482d16] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-amber-200"
                >
                    Submit project idea
                </button>
            </form>
        )}
    </section>
);
}