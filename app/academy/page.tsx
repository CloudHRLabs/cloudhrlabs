import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { academyCategories } from "@/data/academyCategories";

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-20">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            CloudHRLabs Academy
          </p>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight md:text-7xl">
            Learn Workday
            <br />
            Like a Real Consultant.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-400">
            Learn through structured roadmaps, practical projects,
            real implementation scenarios, debugging sessions,
            and interview preparation.
          </p>

          <div className="mt-12">
            <Button href="/roadmaps">
              Start Your Journey →
            </Button>
          </div>

        </div>

      </section>

      {/* Roadmap */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <Card hover={false}>

          <h2 className="text-4xl font-bold">
            🗺️ Workday Consultant Roadmap
          </h2>

          <p className="mt-4 text-slate-400">
            Follow this roadmap to become a project-ready Workday Consultant.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">

            <div className="rounded-xl bg-slate-800 px-6 py-4">
              🏢 Fundamentals
            </div>

            <span className="text-slate-500">→</span>

            <div className="rounded-xl bg-slate-800 px-6 py-4">
              📊 Reporting
            </div>

            <span className="text-slate-500">→</span>

            <div className="rounded-xl bg-slate-800 px-6 py-4">
              🔗 Integrations
            </div>

            <span className="text-slate-500">→</span>

            <div className="rounded-xl bg-slate-800 px-6 py-4">
              🚀 Advanced
            </div>

            <span className="text-slate-500">→</span>

            <div className="rounded-xl bg-slate-800 px-6 py-4">
              💼 Career
            </div>

          </div>

        </Card>

      </section>

      {/* Categories */}

      <section className="mx-auto max-w-7xl px-6 pb-32">

        <h2 className="text-center text-5xl font-bold">
          Browse by Category
        </h2>

        <p className="mt-5 text-center text-xl text-slate-400">
          Choose a category and master every Workday skill step by step.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {academyCategories.map((category) => (

            <Card key={category.id}>

              <h3 className="text-3xl font-bold">
                {category.title}
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                {category.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                  {category.courseCount} Courses
                </span>

                <Button href={`/academy/${category.slug}`} variant="secondary">
                  Explore →
                </Button>

              </div>

            </Card>

          ))}

        </div>

      </section>

    </main>
  );
}