import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardHero() {
  const user = await currentUser();

  const firstName = user?.firstName || "Learner";

  return (
    <section>

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        Student Dashboard
      </p>

      <h1 className="mt-4 text-5xl font-bold">
        👋 Welcome back, {firstName}!
      </h1>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-400">
        Continue your Workday learning journey, track your progress,
        complete lessons, and become a production-ready Workday Consultant.
      </p>

    </section>
  );
}