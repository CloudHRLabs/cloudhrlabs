import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { lessons } from "@/data/lessons";
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

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const courseLessons =
    lessons[course.slug as keyof typeof lessons] ?? [];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Section>
        <Container>

          <Badge>{course.level}</Badge>

          <Heading
            title={course.title}
            subtitle={course.description}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <Card>
              <h3 className="text-xl font-semibold">📚 Lessons</h3>
              <p className="mt-3 text-3xl font-bold">
                {course.lessons}
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold">⏱ Duration</h3>
              <p className="mt-3 text-3xl font-bold">
                {course.duration}
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold">📈 Progress</h3>

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

      <Section>
        <Container>

          <Heading
            title="Course Lessons"
            subtitle="Follow each lesson in order."
          />

          <div className="mt-12 space-y-4">

            {courseLessons.map((lesson) => (

              <Card key={lesson.id}>

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-semibold">
                      {lesson.title}
                    </h3>

                    <p className="mt-2 text-slate-400">
                      Duration: {lesson.duration}
                    </p>

                  </div>

                  <Button
  href={`/lesson/${lesson.title
    .toLowerCase()
    .replace(/\s+/g, "-")}`}
>
  Start Lesson
</Button>

                </div>

              </Card>

            ))}

          </div>

        </Container>
      </Section>

    </main>
  );
}