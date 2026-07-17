import { auth } from "@clerk/nextjs/server";

import Card from "@/components/ui/Card";
import { prisma } from "@/lib/prisma";

export default async function StatsGrid() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!user) {
    return null;
  }

  const enrolledCourses = await prisma.enrollment.count({
    where: {
      userId: user.id,
    },
  });

  const completedLessons = await prisma.progress.count({
    where: {
      userId: user.id,
      completed: true,
    },
  });

  const totalLessons = await prisma.lesson.count();

  const progress =
    totalLessons === 0
      ? 0
      : Math.round((completedLessons / totalLessons) * 100);

  const learningMinutes = await prisma.lesson.aggregate({
    _sum: {
      duration: true,
    },
    where: {
      progress: {
        some: {
          userId: user.id,
          completed: true,
        },
      },
    },
  });

  const stats = [
    {
      title: "Enrolled Courses",
      value: enrolledCourses,
    },
    {
      title: "Completed Lessons",
      value: completedLessons,
    },
    {
      title: "Overall Progress",
      value: `${progress}%`,
    },
    {
      title: "Learning Time",
      value: `${learningMinutes._sum.duration ?? 0} mins`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <p className="text-slate-400">
            {stat.title}
          </p>

          <h3 className="mt-4 text-4xl font-bold">
            {stat.value}
          </h3>
        </Card>
      ))}
    </div>
  );
}