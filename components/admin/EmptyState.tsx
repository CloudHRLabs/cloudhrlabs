type Props = {
  title: string;
  description: string;
};

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 py-20 text-center">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-slate-400">
        {description}
      </p>

    </div>
  );
}