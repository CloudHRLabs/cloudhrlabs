import Card from "@/components/ui/Card";

type LessonVideoProps = {
  videoUrl?: string;
};

export default function LessonVideo({
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
}: LessonVideoProps) {
  return (
    <Card hover={false}>

      <div className="aspect-video overflow-hidden rounded-2xl">

        <iframe
          className="h-full w-full"
          src={videoUrl}
          title="Lesson Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>

    </Card>
  );
}