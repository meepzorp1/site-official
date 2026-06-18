"use client"

export default function SantaCruzPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-2000 to-white px-6 py-12 text-slate-900">
      <section className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-xl shadow-slate-200/40 backdrop-blur-sm">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Santa Cruz, California
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Discover Santa Cruz — surf, redwoods, and coastal living.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              A vibrant seaside city where Pacific waves meet iconic boardwalk memories, epic coastal hikes, and laid-back California energy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/santacruz#experiences"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Explore highlights
              </a>
              <a
                href="/santacruz#plan"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-50"
              >
                Plan your visit
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-[28px] bg-sky-50 p-6 shadow-inner shadow-slate-200/60">
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Local favorites</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">Beaches & Boardwalk</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                From Main Beach to natural tide pools, Santa Cruz delivers the perfect blend of sun, surf, and family-friendly fun.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Nature</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">Redwoods & Trails</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Wander through towering redwoods at Henry Cowell State Park, then take a cliffside stroll along West Cliff Drive.
              </p>
            </div>
          </div>
        </div>

        <section id="experiences" className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Boardwalk fun",
              description: "Classic rides, arcade games, and beachfront dining at the historic Santa Cruz Boardwalk.",
            },
            {
              title: "Surf culture",
              description: "Catch a wave at Steamer Lane or watch the pros ride the famous breaks.",
            },
            {
              title: "Farm-to-table",
              description: "Fresh coastal cuisine and farmers markets make every meal a local celebration.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </section>

        <section id="plan" className="mt-16 rounded-[28px] border border-slate-200 bg-slate-950 p-8 text-white">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">Plan your Santa Cruz day</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Start with breakfast in downtown, hit the beach before lunch, then explore scenic coastal trails and local shops as the sun dips over the water.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Morning</p>
                <p className="mt-2 text-base leading-6 text-slate-100">Coffee at a surf-side café, then stroll the wharf to see sea lions and shops.</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Afternoon</p>
                <p className="mt-2 text-base leading-6 text-slate-100">Ride the Boardwalk, visit Natural Bridges, or wander the Santa Cruz Harbor.</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
