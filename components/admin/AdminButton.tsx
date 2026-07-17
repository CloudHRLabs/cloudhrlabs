import Link from "next/link";

type AdminButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function AdminButton({
  href,
  children,
}: AdminButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}