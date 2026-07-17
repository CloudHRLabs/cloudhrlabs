import { notFound } from "next/navigation";
import Link from "next/link";

import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const course = await prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      modules: {
        orderBy: {
          order: "asc",
        },
        include: {
          lessons: {
            orderBy: {
              order: "asc",
            },
          },
        },
      },
    },
  });

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-10">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            {course.title}
          </h1>

          <p className="mt-2 text-slate-400">
            {course.description}
          </p>
        </div>

        <Link
          href={`/academy/${course.slug}`}
          className="rounded-lg bg-blue-600 px-6 py-3"
        >
          View Course
        </Link>

      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Modules
        </h2>

        {course.modules.length === 0 ? (
          <p>No modules yet.</p>
        ) : (
          <div className="space-y-6">

            {course.modules.map((module) => (
              <div
                key={module.id}
                className="rounded-lg border border-slate-800 p-5"
              >

                <h3 className="text-xl font-semibold">
                  {module.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {module.lessons.length} Lessons
                </p>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}