"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCourse(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const difficulty = formData.get("difficulty") as string;
  const duration = Number(formData.get("duration"));
  const thumbnail = formData.get("thumbnail") as string;

  await prisma.course.create({
    data: {
      title,
      slug,
      description,
      difficulty,
      duration,
      thumbnail,
      published: false,
    },
  });

  revalidatePath("/admin/courses");

  redirect("/admin/courses");
}