export default function WhyDifferent() {
  const problems = [
    "Watching random YouTube videos",
    "Reading hundreds of Community posts",
    "Searching through Workday documentation",
    "Buying multiple courses",
    "Different opinions from different trainers",
    "No structured roadmap",
    "No real project experience",
    "Still not confident in interviews",
  ];

  const solutions = [
    "One structured learning roadmap",
    "Real implementation scenarios",
    "Production debugging sessions",
    "Lessons from real mistakes",
    "Industry templates & checklists",
    "Hands-on assignments",
    "Interview & career preparation",
    "Built from 7+ years of consulting experience",
  ];

  return (
    <section className="bg-slate-900 py-32 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm">
            WHY CLOUDHRLABS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Stop Collecting Information.
            <br />
            Start Building Real Experience.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-400">
            Today, most professionals spend months jumping between
            YouTube, Workday Community, documentation, LinkedIn,
            blogs and paid courses...
            yet still don't feel confident when working on a real project.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <div className="rounded-3xl border border-red-500/20 bg-slate-950 p-10">

            <h3 className="text-3xl font-bold text-red-400">
              Learning The Hard Way
            </h3>

            <p className="mt-3 text-slate-400">
              This is how most people learn today.
            </p>

            <div className="mt-10 space-y-5">

              {problems.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-slate-800 p-4"
                >
                  <span className="text-red-500 text-xl">✕</span>

                  <span className="text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-blue-500/20 bg-slate-950 p-10">

            <h3 className="text-3xl font-bold text-cyan-400">
              The CloudHRLabs Way
            </h3>

            <p className="mt-3 text-slate-400">
              Everything connected into one roadmap.
            </p>

            <div className="mt-10 space-y-5">

              {solutions.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-slate-800 p-4"
                >
                  <span className="text-green-400 text-xl">✓</span>

                  <span className="text-slate-200">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center">

          <h3 className="text-4xl font-bold text-white">
            Don't spend hundreds of hours searching.
          </h3>

          <p className="mt-5 text-xl text-blue-100">
            Spend your time learning the right things in the right order,
            built from real consulting experience.
          </p>

          <button className="mt-10 rounded-2xl bg-white px-10 py-4 text-lg font-semibold text-slate-900 transition hover:scale-105">
            Start Learning Smarter →
          </button>

        </div>

      </div>
    </section>
  );
}