type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function AdminSection({
  title,
  description,
  children,
}: Props) {
  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-slate-400">
            {description}
          </p>
        )}

      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        {children}
      </div>

    </section>
  );
}