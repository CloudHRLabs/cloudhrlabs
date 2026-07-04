import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center text-slate-400 md:flex-row">

        <div>

          <h3 className="text-xl font-bold text-white">
            Cloud<span className="text-blue-400">HRLabs</span>
          </h3>

          <p className="mt-2 text-sm">
            Learn. Build. Deliver.
          </p>

        </div>

        <div className="flex gap-6 text-sm">

          <Link href="/">Home</Link>

          <Link href="/academy">Academy</Link>

          <Link href="/roadmaps">Roadmaps</Link>

        </div>

        <p className="text-sm">
          © 2026 CloudHRLabs. All rights reserved.
        </p>

      </div>

    </footer>
  );
}