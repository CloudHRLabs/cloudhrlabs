import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";

type LessonHeroProps = {
  title: string;
};

export default function LessonHero({
  title,
}: LessonHeroProps) {
  return (
    <div>

      <Badge>Beginner Lesson</Badge>

      <div className="mt-6">

        <Heading
          title={title}
          subtitle="Master this lesson before moving forward. Watch the video, read the notes, complete the challenge, and continue your journey."
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
          📚 15 Minutes
        </span>

        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
          🎥 Video
        </span>

        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
          🧪 Practice Lab
        </span>

      </div>

    </div>
  );
}