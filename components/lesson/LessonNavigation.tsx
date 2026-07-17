import Button from "@/components/ui/Button";

type LessonLink = {
  title: string;
  slug: string;
};

type LessonNavigationProps = {
  previousLesson?: LessonLink;
  nextLesson?: LessonLink;
};

export default function LessonNavigation({
  previousLesson,
  nextLesson,
}: LessonNavigationProps) {
  return (
    <div className="flex flex-wrap justify-between gap-4">

      {previousLesson ? (
        <Button
          href={`/lesson/${previousLesson.slug}`}
          variant="secondary"
        >
          ← {previousLesson.title}
        </Button>
      ) : (
        <Button variant="secondary">
          ← First Lesson
        </Button>
      )}

      {nextLesson ? (
        <Button href={`/lesson/${nextLesson.slug}`}>
          {nextLesson.title} →
        </Button>
      ) : (
        <Button>
          Course Complete 🎉
        </Button>
      )}

    </div>
  );
}