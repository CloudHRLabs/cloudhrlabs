import Button from "@/components/ui/Button";

export default function LessonNavigation() {
  return (
    <div className="flex flex-wrap justify-between gap-4">

      <Button variant="secondary">
        ← Previous Lesson
      </Button>

      <Button>
        Next Lesson →
      </Button>

    </div>
  );
}