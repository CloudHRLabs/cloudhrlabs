import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <Section>
        <Container>

          <Badge>Lesson</Badge>

          <Heading
            title={slug
              .split("-")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
            subtitle="Welcome to your lesson. Watch the video, read the notes, complete the exercise, and continue to the next lesson."
          />

        </Container>
      </Section>

      {/* Video */}

      <Section>
        <Container>

          <Card hover={false}>

            <div className="flex aspect-video items-center justify-center rounded-2xl bg-slate-800 text-center">

              <div>

                <div className="text-7xl">🎥</div>

                <p className="mt-6 text-xl text-slate-400">
                  Video Player Coming Soon
                </p>

              </div>

            </div>

          </Card>

        </Container>
      </Section>

      {/* Notes & Resources */}

      <Section>
        <Container>

          <div className="grid gap-8 lg:grid-cols-2">

            <Card>

              <h2 className="text-3xl font-bold">
                📝 Lesson Notes
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                This section will contain detailed explanations,
                screenshots, diagrams, best practices,
                and implementation guidance for this lesson.
              </p>

            </Card>

            <Card>

              <h2 className="text-3xl font-bold">
                📥 Resources
              </h2>

              <ul className="mt-6 space-y-4 text-slate-400">

                <li>📄 Lesson PDF</li>

                <li>💻 Sample Code</li>

                <li>📊 Practice Exercise</li>

                <li>🧪 Assignment</li>

              </ul>

            </Card>

          </div>

        </Container>
      </Section>

      {/* Navigation */}

      <Section className="pb-32">
        <Container>

          <div className="flex flex-wrap justify-between gap-4">

            <Button variant="secondary">
              ← Previous Lesson
            </Button>

            <Button>
              Next Lesson →
            </Button>

          </div>

        </Container>
      </Section>

    </main>
  );
}