import Card from "@/components/ui/Card";

export default function StatsGrid() {
  const stats = [
    { title: "Courses", value: "1" },
    { title: "Lessons", value: "8" },
    { title: "Hours", value: "12" },
    { title: "Certificates", value: "0" },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => (
        <Card key={stat.title}>

          <p className="text-slate-400">
            {stat.title}
          </p>

          <h3 className="mt-4 text-4xl font-bold">
            {stat.value}
          </h3>

        </Card>
      ))}

    </div>
  );
}