import { createCourse } from "@/lib/actions/createCourse";

export default function NewCoursePage() {
  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="mb-10 text-4xl font-bold">
        Create New Course
      </h1>

      <form
        action={createCourse}
        className="space-y-6"
      >

        <input
          name="title"
          placeholder="Course Title"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
        />

        <input
          name="slug"
          placeholder="course-slug"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
        />

        <textarea
          name="description"
          placeholder="Course Description"
          rows={5}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
        />

        <input
          name="difficulty"
          placeholder="Beginner / Intermediate / Advanced"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
        />

        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
        />

        <input
          name="thumbnail"
          placeholder="/images/course.png"
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
        />

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700"
        >
          Create Course
        </button>

      </form>

    </div>
  );
}