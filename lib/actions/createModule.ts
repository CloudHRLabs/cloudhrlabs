"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

export async function createModule(formData: FormData) {
  const courseId = formData.get("courseId") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const order = Number(formData.get("order"));

  await prisma.module.create({
    data: {
      title,
      description,
      order,
      courseId,
    },
  });

  redirect(`/admin/courses/${courseId}/modules`);
}