import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
  },
  {
    title: "Courses",
    href: "/admin/courses",
  },
  {
    title: "New Course",
    href: "/admin/courses/new",
  },
];

export default function AdminLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}

      <aside className="w-72 border-r border-slate-800 bg-slate-900 p-8">

        <h1 className="mb-10 text-2xl font-bold">
          CloudHRLabs Admin
        </h1>

        <nav className="space-y-3">

          {menu.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl bg-slate-800 px-5 py-4 transition hover:bg-blue-600"
            >
              {item.title}
            </Link>

          ))}

        </nav>

      </aside>

      {/* Content */}

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}