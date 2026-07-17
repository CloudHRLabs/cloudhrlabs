import fs from "fs/promises";
import path from "path";

import MarkdownRenderer from "@/components/lesson/MarkdownRenderer";

export default async function TestMarkdownPage() {
  const filePath = path.join(
    process.cwd(),
    "content",
    "workday-core-hcm",
    "module-1",
    "lesson-1-introduction.md"
  );

  const content = await fs.readFile(filePath, "utf8");

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <div className="mx-auto max-w-4xl">
        <MarkdownRenderer content={content} />
      </div>
    </main>
  );
}