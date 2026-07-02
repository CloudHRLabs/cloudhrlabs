export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 text-white">
        {/* Background Glow */}
<div className="absolute inset-0 -z-10">
  <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
</div>
      <div className="mx-auto max-w-6xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Real Industry Experience
          </p>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Learn Workday
          <br />
          <span className="text-blue-400">
            Like You're Working
          </span>
          <br />
          In A Real Company.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
          Stop jumping between YouTube, documentation, community posts and
          random courses.

          <br />
          <br />

          Learn through real client projects, production debugging,
          implementation scenarios and practical exercises built from
          <span className="font-semibold text-white">
            {" "}7+ years of industry experience.
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="group inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30">
            <>
  Start My Journey
  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</>
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 text-lg font-medium text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-white">
            Explore Learning Paths
          </button>

        </div>

      </div>
    </section>
  );
}