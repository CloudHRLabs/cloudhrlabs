export default function WhyCloudHRLabs() {
  const features = [
    {
      title: "Real Production Scenarios",
      description:
        "Learn how Workday is implemented on real client projects, not just through theory.",
    },
    {
      title: "Learn From Real Mistakes",
      description:
        "Avoid years of trial and error by learning from real implementation challenges and lessons.",
    },
    {
      title: "One Structured Roadmap",
      description:
        "Stop jumping between documentation, community posts, YouTube, and random courses.",
    },
    {
      title: "Hands-on Practice",
      description:
        "Practice with assignments, real-world scenarios, and implementation exercises.",
    },
    {
      title: "Become Project Ready",
      description:
        "Gain the confidence to contribute to client projects and succeed in interviews.",
    },
    {
      title: "Everything In One Place",
      description:
        "Templates, checklists, debugging guides, interview preparation, and premium resources—all organized in one platform.",
    },
  ];

  return (
    <section className="bg-slate-900 py-32 px-6 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            WHY CLOUDHRLABS
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Stop Collecting Information.
            <br />
            Start Building Real Experience.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-400">
            CloudHRLabs is built for professionals who want practical skills,
            real implementation experience, and a structured roadmap—not endless searching.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-700 bg-slate-800/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <h3 className="text-2xl font-bold text-blue-400">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}