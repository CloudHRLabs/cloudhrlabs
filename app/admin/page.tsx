import { prisma } from "@/lib/prisma";

import AdminPageHeader from "@/components/admin/AdminPageHeader";
import StatCard from "@/components/admin/StatCard";
import AdminSection from "@/components/admin/AdminSection";
import AdminCard from "@/components/admin/AdminCard";

export default async function AdminDashboard() {
  const [
    totalCourses,
    totalModules,
    totalLessons,
    totalStudents,
    recentCourses,
  ] = await Promise.all([
    prisma.course.count(),
    prisma.module.count(),
    prisma.lesson.count(),
    prisma.user.count(),
    prisma.course.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    }),
  ]);

  return (
    <div className="space-y-10">

      <AdminPageHeader
        title="Admin Dashboard"
        description="Welcome back! Here's what's happening in CloudHRLabs."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Courses"
          value={totalCourses}
          icon="📚"
        />

        <StatCard
          title="Modules"
          value={totalModules}
          icon="📂"
        />

        <StatCard
          title="Lessons"
          value={totalLessons}
          icon="📄"
        />

        <StatCard
          title="Students"
          value={totalStudents}
          icon="👨‍🎓"
        />

      </div>

      <AdminSection
        title="Recent Courses"
        description="Your latest premium courses."
      >

        {recentCourses.length === 0 ? (

          <p className="text-slate-400">
            No courses yet.
          </p>

        ) : (

          <div className="space-y-4">

            {recentCourses.map((course) => (

              <AdminCard key={course.id}>

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-semibold">
                      {course.title}
                    </h3>

                    <p className="mt-2 text-slate-400">
                      {course.description}
                    </p>

                  </div>

                  <div className="text-sm text-slate-500">
                    {course.published ? "✅ Published" : "📝 Draft"}
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