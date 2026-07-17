import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSection from "@/components/admin/AdminSection";
import AdminCard from "@/components/admin/AdminCard";
import AdminButton from "@/components/admin/AdminButton";

export default async function ModulesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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
          _count: {
            select: {
              lessons: true,
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
    <div className="space-y-8">

      <div className="flex items-start justify-between">

        <AdminPageHeader
          title={course.title}
          description="Manage all modules for this course."
        />

        <AdminButton
          href={`/admin/courses/${course.id}/modules/new`}
        >
          + Add Module
        </AdminButton>

      </div>

      <AdminSection
        title="Modules"
        description={`${course.modules.length} module(s) in this course`}
      >

        {course.modules.length === 0 ? (

          <p className="text-slate-400">
            No modules found.
          </p>

        ) : (

          <div className="space-y-4">

            {course.modules.map((module) => (

              <AdminCard key={module.id}>

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-semibold">
                      {module.title}
                    </h3>

                    <p className="mt-2 text-slate-400">
                      {module.description}
                    </p>

                    <p className="mt-3 text-sm text-slate-500">
                      Lessons: {module._count.lessons}
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <AdminButton
                      href={`/admin/modules/${module.id}/lessons`}
                    >
                      Lessons
                    </AdminButton>

                    <AdminButton
                      href={`/admin/modules/${module.id}/edit`}
                    >
                      Edit
                    </AdminButton>

                  </div>

                </div>

              </AdminCard>

            ))}

          </div>

        )}

      </AdminSection>

    </div>
  );
}