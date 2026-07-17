"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { completeLesson } from "@/lib/actions/completeLesson";

type CompleteLessonButtonProps = {
  lessonId: string;
};

export default function CompleteLessonButton({
  lessonId,
}: CompleteLessonButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleComplete() {
    startTransition(async () => {
      await completeLesson(lessonId);
      router.refresh();
    });
  }

  return (
    <button
      onClick={handleComplete}
      disabled={isPending}
      className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
    >
      {isPending ? "Saving..." : "Mark Lesson Complete ✓"}
    </button>
  );
}