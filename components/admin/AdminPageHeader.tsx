import AdminButton from "./AdminButton";

type Props = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function AdminPageHeader({
  title,
  description,
  actionLabel,
  actionHref,
}: Props) {
  return (
    <div className="mb-10 flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-2 text-slate-400">
          {description}
        </p>

      </div>

      {actionLabel && actionHref && (
        <AdminButton href={actionHref}>
          {actionLabel}
        </AdminButton>
      )}

    </div>
  );
}