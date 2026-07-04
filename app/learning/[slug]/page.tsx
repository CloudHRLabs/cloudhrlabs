import { notFound } from "next/navigation";
import { learningPaths } from "@/data/learningPaths";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;

  const course = learningPaths.find(
    (item) => item.slug === slug
  );

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-32">

        <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
          {course.stage}
        </span>

        <h1 className="mt-8 text-6xl font-bold">
          {course.title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-400">
          {course.description}
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
            <p className="text-4xl">📚</p>
            <p className="mt-3 text-2xl font-bold">
              {course.lessons}
            </p>
            <p className="text-slate-400">
              Lessons
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
            <p className="text-4xl">🧪</p>
            <p className="mt-3 text-2xl font-bold">
              {course.labs}
            </p>
            <p className="text-slate-400">
              Labs
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
            <p className="text-4xl">⏱</p>
            <p className="mt-3 text-2xl font-bold">
              {course.duration}
            </p>
            <p className="text-slate-400">
              Duration
            </p>
          </div>

        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold">
            Skills You'll Learn
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {course.skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                ✅ {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Course Curriculum */}

<div className="mt-20">

  <h2 className="text-4xl font-bold">
    Course Curriculum
  </h2>

  <p className="mt-3 text-slate-400">
    Learn step by step through structured modules.
  </p>

  <div className="mt-10 space-y-8">

    {course.curriculum.length > 0 ? (

      course.curriculum.map((module) => (

        <div
          key={module.module}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
        >

          <h3 className="text-2xl font-bold text-blue-400">
            📂 {module.module}
          </h3>

          <div className="mt-6 space-y-4">

            {module.lessons.map((lesson) => (

              <div
                key={lesson}
                className="flex items-center gap-3 rounded-xl bg-slate-800/50 p-4"
              >
                <span className="text-green-400">▶</span>

                <span>{lesson}</span>

              </div>

            ))}

          </div>

        </div>

      ))

    ) : (

      <div className="rounded-2xl border border-dashed border-slate-700 p-8 text-center text-slate-400">
        Curriculum coming soon...
      </div>

    )}

  </div>

</div>

{/* Start Button */}

<button className="mt-16 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold transition hover:scale-105">
  Start Learning →
</button>

      </section>
    </main>
  );
}