"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Roadmaps", href: "/roadmaps" },
    { label: "Academy", href: "/academy" },
    { label: "Resources", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Career", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-lg">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold"
        >
          <GraduationCap className="h-8 w-8 text-blue-400" />

          <span>
            Cloud<span className="text-blue-400">HRLabs</span>
          </span>

        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition ${
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

        </nav>

        <Button>
          Get Started
        </Button>

      </div>

    </header>
  );
}