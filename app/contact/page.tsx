"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

                const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            
            if (response.ok) {
                setSuccess("Message sent successfully!");
                form.reset();
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }

        // 8668610450

        setLoading(false);
    }


        return (
            <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
                    <h1 className="text-4xl font-bold mb-2">Contact Me</h1>

                    <p className="text-slate-400 mb-8">
                        Have a project, question, or just want to say hello? Fill out the
                        form below and I'll get back to you as soon as possible.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium mb-2"
                            >
                                Subject
                            </label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Website Project"
                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Tell me about your project..."
                                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 active:scale-[0.99]"
                        >
                            Send Message
                        </button>
                        {success && (
                            <p className="text-center text-green-400">
                                {success}
                            </p>
                        )}
                    </form>

                    <div className="mt-8 border-t border-slate-800 pt-6 text-center text-slate-400">
                        Prefer email?{" "}
                        <a
                            href="adambeaudiaz@gmail.com"
                            className="text-blue-400 hover:text-blue-300"
                        >
                            Contact me
                        </a>
                    </div>
                </div>
            </main>
        );
    }