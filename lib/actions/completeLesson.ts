"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function completeLesson(lessonId: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  await prisma.progress.upsert({
    where: {
      userId_lessonId: {
        userId: user.id,
        lessonId,
      },
    },
    update: {
      completed: true,
      completedAt: new Date(),
    },
    create: {
      userId: user.id,
      lessonId,
      completed: true,
      completedAt: new Date(),
    },
  });

  return {
    success: true,
  };
}