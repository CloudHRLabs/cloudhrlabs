import LearningPathCard from "@/components/LearningPathCard";
import { learningPaths } from "@/data/learningPaths";

export default function LearningPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-32">

        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            Learning Paths
          </p>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight">
            Choose Your
            <span className="text-blue-400"> Workday Journey</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-400">
            Learn through structured career paths built from real
            implementation projects, production support, debugging sessions,
            and consulting experience.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {learningPaths.map((path) => (
  <LearningPathCard
    key={path.stage}
    path={path}
  />
))}
        </div>

      </section>
    </main>
  );
}