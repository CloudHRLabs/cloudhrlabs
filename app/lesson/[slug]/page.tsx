import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import LessonHero from "@/components/lesson/LessonHero";
import LessonVideo from "@/components/lesson/LessonVideo";
import LessonNotes from "@/components/lesson/LessonNotes";
import LessonResources from "@/components/lesson/LessonResources";
import PracticeChallenge from "@/components/lesson/PracticeChallenge";
import LessonNavigation from "@/components/lesson/LessonNavigation";
import ProgressBar from "@/components/lesson/ProgressBar";
import CompleteLessonButton from "@/components/lesson/CompleteLessonButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;

  const lesson = await prisma.lesson.findUnique({
    where: {
      slug,
    },
    include: {
      module: {
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

  if (!lesson) {
    notFound();
  }

  const { userId } = await auth();

  let progress = 0;

  if (userId) {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (user) {
      const completedLessons = await prisma.progress.count({
        where: {
          userId: user.id,
          completed: true,
        },
      });

      const totalLessons = await prisma.lesson.count();

      progress = Math.round(
        (completedLessons / totalLessons) * 100
      );
    }
  }

  const lessons = lesson.module.lessons;

  const currentIndex = lessons.findIndex(
    (item) => item.id === lesson.id
  );

  const previousLesson =
    currentIndex > 0 ? lessons[currentIndex - 1] : null;

  const nextLesson =
    currentIndex < lessons.length - 1
      ? lessons[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <Section>
        <Container>
          <LessonHero title={lesson.title} />
        </Container>
      </Section>

      {/* Video */}
      <Section>
        <Container>
          <LessonVideo />
        </Container>
      </Section>

      {/* Progress */}
      <Section>
        <Container>

          <ProgressBar progress={progress} />

          <div className="mt-6 flex justify-center">
            <CompleteLessonButton lessonId={lesson.id} />
          </div>

        </Container>
      </Section>

      {/* Notes + Resources */}
      <Section>
        <Container>

          <div className="grid gap-8 lg:grid-cols-2">

            <LessonNotes />

            <LessonResources />

          </div>

        </Container>
      </Section>

      {/* Practice */}
      <Section>
        <Container>
          <PracticeChallenge />
        </Container>
      </Section>

      {/* Navigation */}
      <Section className="pb-32">
        <Container>

          <LessonNavigation
            previousLesson={
              previousLesson
                ? {
                    title: previousLesson.title,
                    slug: previousLesson.slug,
                  }
                : undefined
            }
            nextLesson={
              nextLesson
                ? {
                    title: nextLesson.title,
                    slug: nextLesson.slug,
                  }
                : undefined
            }
          />

        </Container>
      </Section>

    </main>
  );
}