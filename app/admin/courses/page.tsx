import Link from "next/link";
import { prisma } from "@/lib/prisma";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminCard from "@/components/admin/AdminCard";
import EmptyState from "@/components/admin/EmptyState";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>

      <AdminPageHeader
        title="Course Management"
        description="Create, edit and publish your premium courses."
        actionLabel="+ New Course"
        actionHref="/admin/courses/new"
      />

      {courses.length === 0 ? (
        <EmptyState
          title="No courses yet"
          description="Create your first premium course."
        />
      ) : (
        <div className="space-y-6">

          {courses.map((course) => (
            <AdminCard key={course.id}>

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {course.title}
                  </h2>

                  <p className="mt-2 text-slate-400">
                    {course.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-5 text-slate-400">

                    <span>
                      📚 {course.duration} mins
                    </span>

                    <span>
                      🎯 {course.difficulty}
                    </span>

                    <span>
                      {course.published
                        ? "✅ Published"
                        : "📝 Draft"}
                    </span>

                  </div>

                </div>

                <div className="flex gap-3">

                  <Link
                    href={`/admin/courses/${course.id}`}
                    className="rounded-lg bg-slate-700 px-5 py-2 hover:bg-slate-600"
                  >
                    Manage
                  </Link>

                  <Link
                    href={`/admin/courses/${course.id}/edit`}
                    className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700"
                  >
                    Edit
                  </Link>

                </div>

              </div>

            </AdminCard>
          ))}

        </div>
      )}

    </div>
  );
}