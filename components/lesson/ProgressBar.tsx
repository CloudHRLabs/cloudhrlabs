type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="font-semibold text-lg">
          Course Progress
        </h3>

        <span className="font-bold text-blue-400">
          {progress}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />

      </div>

      <p className="mt-4 text-sm text-slate-400">
        Complete each lesson to unlock the next one.
      </p>

    </div>
  );
}