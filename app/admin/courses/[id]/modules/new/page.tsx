import { createModule } from "@/lib/actions/createModule";

export default async function NewModulePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: courseId } = await params;

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="mb-10 text-4xl font-bold">
        Create New Module
      </h1>

      <form
        action={createModule}
        className="space-y-6"
      >

        <input
          type="hidden"
          name="courseId"
          value={courseId}
        />

        <input
          name="title"
          placeholder="Module Title"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
        />

        <textarea
          name="description"
          placeholder="Module Description"
          rows={5}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
        />

        <input
          type="number"
          name="order"
          placeholder="Module Order (1, 2, 3...)"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
        />

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
        >
          Create Module
        </button>

      </form>

    </div>
  );
}