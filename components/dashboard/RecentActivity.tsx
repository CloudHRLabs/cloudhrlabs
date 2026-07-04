import Card from "@/components/ui/Card";

export default function RecentActivity() {
  const activities = [
    "Completed Introduction to Workday",
    "Started Workday Navigation",
    "Downloaded Lesson Notes",
  ];

  return (
    <Card>

      <h2 className="text-2xl font-bold">
        🔥 Recent Activity
      </h2>

      <ul className="mt-6 space-y-4">

        {activities.map((activity) => (
          <li
            key={activity}
            className="rounded-xl bg-slate-800 p-4"
          >
            {activity}
          </li>
        ))}

      </ul>

    </Card>
  );
}