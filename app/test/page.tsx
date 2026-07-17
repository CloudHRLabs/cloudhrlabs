import { prisma } from "@/lib/prisma";

export default async function TestPage() {
  const courses = await prisma.course.findMany();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Database Test</h1>

      <pre>
        {JSON.stringify(courses, null, 2)}
      </pre>
    </main>
  );
}