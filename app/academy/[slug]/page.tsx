import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;

  const course = await prisma.course.findUnique({
    where: {
      slug,
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

  const lessonCount = course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );

  const moduleCount = course.modules.length;

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <Section>

        <Container>

          <Badge>{course.difficulty ?? "Course"}</Badge>

          <Heading
            title={course.title}
            subtitle={course.description ?? ""}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-4">

            <Card>

              <h3 className="text-xl font-semibold">
                📚 Lessons
              </h3>

              <p className="mt-3 text-3xl font-bold">
                {lessonCount}
              </p>

            </Card>

            <Card>

              <h3 className="text-xl font-semibold">
                📦 Modules
              </h3>

              <p className="mt-3 text-3xl font-bold">
                {moduleCount}
              </p>

            </Card>

            <Card>

              <h3 className="text-xl font-semibold">
                ⏱ Duration
              </h3>

              <p className="mt-3 text-3xl font-bold">
                {course.duration ?? 0} mins
              </p>

            </Card>

            <Card>

              <h3 className="text-xl font-semibold">
                📈 Progress
              </h3>

              <div className="mt-4 h-3 rounded-full bg-slate-800">

                <div className="h-3 w-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

              </div>

              <p className="mt-3 text-slate-400">
                0% Complete
              </p>

            </Card>

          </div>

        </Container>

      </Section>

      {/* Modules */}

      <Section>

        <Container>

          <Heading
            title="Course Curriculum"
            subtitle={`${moduleCount} Modules • ${lessonCount} Lessons`}
          />

          <div className="mt-12 space-y-10">

            {course.modules.map((module, moduleIndex) => (

              <Card key={module.id}>

                <div className="mb-8">

                  <p className="text-sm uppercase tracking-widest text-blue-400">

                    Module {moduleIndex + 1}

                  </p>

                  <h2 className="mt-2 text-3xl font-bold">

                    {module.title}

                  </h2>

                  <p className="mt-3 text-slate-400">

                    {module.description}

                  </p>

                </div>

                <div className="space-y-4">

                  {module.lessons.map((lesson, lessonIndex) => (

                    <div
                      key={lesson.id}
                      className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-6"
                    >

                      <div>

                        <p className="text-sm text-blue-400">

                          Lesson {lessonIndex + 1}

                        </p>

                        <h3 className="mt-2 text-xl font-semibold">

                          {lesson.title}

                        </h3>

                        <p className="mt-2 text-slate-400">

                          Duration: {lesson.duration ?? 0} mins

                        </p>

                      </div>

                      <Button href={`/lesson/${lesson.slug}`}>

                        Start Lesson →

                      </Button>

                    </div>

                  ))}

                </div>

              </Card>

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}