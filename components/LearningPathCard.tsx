import Link from "next/link";

type LearningPath = {
  id: number;
  slug: string;
  stage: string;
  title: string;
  description: string;
  lessons: string;
  labs: string;
  duration: string;
  difficulty: string;
  skills: string[];
};

type LearningPathCardProps = {
  path: LearningPath;
};

export default function LearningPathCard({
  path,
}: LearningPathCardProps) {
  return (
    <Link href={`/learning/${path.slug}`} className="block h-full">
      <div className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">

        {/* Stage */}
        <div className="flex items-center justify-between">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            {path.stage}
          </span>

          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            {path.difficulty}
          </span>

        </div>

        {/* Title */}
        <h3 className="mt-8 text-3xl font-bold">
          {path.title}
        </h3>

        {/* Description */}
        <p className="mt-5 leading-8 text-slate-400">
          {path.description}
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-slate-800/50 p-4 text-center">

          <div>
            <p className="text-2xl">📚</p>
            <p className="mt-2 text-lg font-bold">{path.lessons}</p>
            <p className="text-xs text-slate-400">Lessons</p>
          </div>

          <div>
            <p className="text-2xl">🧪</p>
            <p className="mt-2 text-lg font-bold">{path.labs}</p>
            <p className="text-xs text-slate-400">Labs</p>
          </div>

          <div>
            <p className="text-2xl">⏱</p>
            <p className="mt-2 text-lg font-bold">{path.duration}</p>
            <p className="text-xs text-slate-400">Duration</p>
          </div>

        </div>

        {/* Skills */}
        <div className="mt-8">

          <h4 className="mb-4 font-semibold text-white">
            Skills You'll Learn
          </h4>

          <div className="space-y-2">
            {path.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 text-slate-300"
              >
                <span className="text-green-400">✓</span>
                {skill}
              </div>
            ))}
          </div>

        </div>

        {/* Button */}
        <button className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white transition group-hover:scale-105">
          Start Journey →
        </button>

      </div>
    </Link>
  );
}