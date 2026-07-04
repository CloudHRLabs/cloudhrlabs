import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import LessonHero from "@/components/lesson/LessonHero";
import LessonVideo from "@/components/lesson/LessonVideo";
import LessonNotes from "@/components/lesson/LessonNotes";
import LessonResources from "@/components/lesson/LessonResources";
import PracticeChallenge from "@/components/lesson/PracticeChallenge";
import LessonNavigation from "@/components/lesson/LessonNavigation";
import ProgressBar from "@/components/lesson/ProgressBar";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;

  const lessonTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <Section>
        <Container>
          <LessonHero title={lessonTitle} />
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
          <ProgressBar progress={0} />
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
          <LessonNavigation />
        </Container>
      </Section>

    </main>
  );
}