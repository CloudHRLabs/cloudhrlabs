import Card from "@/components/ui/Card";

export default function LessonResources() {
  return (
    <Card>

      <h2 className="text-2xl font-bold">
        📥 Resources
      </h2>

      <ul className="mt-6 space-y-4 text-slate-400">

        <li>📄 Lesson Notes (PDF)</li>

        <li>💻 Sample Code</li>

        <li>📂 Practice Files</li>

        <li>🧪 Assignment</li>

      </ul>

    </Card>
  );
}