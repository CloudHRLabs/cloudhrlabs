import Link from "next/link";

export default function RoadmapsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-20 text-center">

        <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
          CloudHRLabs Roadmaps
        </p>

        <h1 className="mt-6 text-6xl font-extrabold leading-tight">
          Choose Your
          <span className="text-blue-400"> Career Path</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-400">
          Don't wonder what to learn next.
          Follow a structured roadmap designed from real consulting experience.
        </p>

      </section>

      {/* Roadmaps */}

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-32 md:grid-cols-2 xl:grid-cols-3">

        {/* Integration */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500">

          <div className="text-5xl">🔗</div>

          <h2 className="mt-6 text-3xl font-bold">
            Workday Integration Consultant
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Become an expert in EIB, Core Connectors,
            Studio, REST APIs, SOAP APIs,
            debugging, and real client implementations.
          </p>

          <div className="mt-8 space-y-3">

            <div>✅ 10 Courses</div>

            <div>🧪 Real Projects</div>

            <div>🎤 Interview Preparation</div>

            <div>⏱ 6-8 Months</div>

          </div>

          <Link
            href="/academy"
            className="mt-10 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold"
          >
            Start Roadmap →
          </Link>

        </div>

        {/* HCM */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500">

          <div className="text-5xl">👨‍💼</div>

          <h2 className="mt-6 text-3xl font-bold">
            Workday HCM Consultant
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Learn Core HCM, Security,
            Business Processes,
            Recruiting,
            Compensation,
            Absence and more.
          </p>

          <div className="mt-8 space-y-3">

            <div>✅ 12 Courses</div>

            <div>🏢 Real Scenarios</div>

            <div>📚 Assignments</div>

            <div>⏱ 7-9 Months</div>

          </div>

          <button className="mt-10 rounded-xl bg-slate-800 px-6 py-3 font-semibold">
            Coming Soon
          </button>

        </div>

        {/* Reporting */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500">

          <div className="text-5xl">📊</div>

          <h2 className="mt-6 text-3xl font-bold">
            Reporting Specialist
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Master Reports,
            Advanced Reports,
            Calculated Fields,
            Dashboards,
            and Analytics.
          </p>

          <div className="mt-8 space-y-3">

            <div>✅ 8 Courses</div>

            <div>📈 Practical Exercises</div>

            <div>📄 Templates</div>

            <div>⏱ 4-5 Months</div>

          </div>

          <button className="mt-10 rounded-xl bg-slate-800 px-6 py-3 font-semibold">
            Coming Soon
          </button>

        </div>

      </section>

    </main>
  );
}