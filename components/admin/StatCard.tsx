type Props = {
  title: string;
  value: string | number;
  icon?: string;
  subtitle?: string;
};

export default function StatCard({
  title,
  value,
  icon,
  subtitle,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-slate-500">
              {subtitle}
            </p>
          )}

        </div>

        {icon && (
          <div className="text-4xl">
            {icon}
          </div>
        )}

      </div>

    </div>
  );
}