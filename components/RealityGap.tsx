export default function RealityGap() {
  const oldWay = [
    "Searching Google for answers",
    "Reading Workday documentation",
    "Browsing Community posts",
    "Watching random YouTube videos",
    "Buying multiple courses",
    "Learning disconnected topics",
    "Feeling unprepared for client projects",
  ];

  const cloudHRLabs = [
    "One structured learning roadmap",
    "Real client implementation scenarios",
    "Production debugging walkthroughs",
    "Hands-on assignments",
    "Interview & project preparation",
    "Learn how consultants think",
    "Become project-ready with confidence",
  ];

  return (
    <section className="bg-slate-950 py-32 px-6 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            THE REALITY GAP
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Why Most Workday Professionals Stay Stuck
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-400">
            It's not because they don't work hard.
            It's because they're forced to learn from disconnected resources
            instead of following one structured roadmap.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Left */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-slate-200">
              Traditional Learning
            </h3>

            <p className="mt-2 text-slate-400">
              Information is everywhere, but confidence is still missing.
            </p>

            <div className="mt-8 space-y-4">
              {oldWay.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 p-4"
                >
                  <span className="text-red-400 text-xl">✕</span>
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-blue-500/30 bg-slate-900/60 p-10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-blue-400">
              The CloudHRLabs Way
            </h3>

            <p className="mt-2 text-slate-400">
              Everything connected into one practical learning journey.
            </p>

            <div className="mt-8 space-y-4">
              {cloudHRLabs.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 p-4"
                >
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 p-10 text-center">

          <h3 className="text-4xl font-bold">
            Stop Memorizing Workday.
          </h3>

          <p className="mt-3 text-2xl text-blue-300">
            Start Thinking Like a Consultant.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            CloudHRLabs helps you understand not just what to do,
            but why experienced consultants make those decisions.
          </p>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500">
            Start My Journey →
          </button>

        </div>
      </div>
    </section>
  );
}