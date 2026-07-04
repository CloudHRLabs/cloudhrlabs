import Card from "@/components/ui/Card";

export default function LessonNotes() {
  return (
    <Card>

      <h2 className="text-2xl font-bold">
        📝 Lesson Notes
      </h2>

      <div className="mt-6 space-y-5 text-slate-400 leading-8">

        <p>
          In this lesson you'll understand the core concepts before
          starting your Workday journey.
        </p>

        <p>
          We'll cover navigation, terminology, business processes,
          organizations, and how Workday is used in real
          implementation projects.
        </p>

        <p>
          Take notes while watching the lesson and complete the
          practice exercise before moving to the next lesson.
        </p>

      </div>

    </Card>
  );
}