import {
  Sprout,
  Wrench,
  Cog,
  Rocket,
  Trophy,
  ArrowRight,
} from "lucide-react";

type JourneyItem = {
  level: string;
  title: string;
  icon: React.ReactNode;
  topics: string[];
  color: string;
};

const journey: JourneyItem[] = [
  {
    level: "LEVEL 01",
    title: "Beginner",
    icon: <Sprout size={28} />,
    color: "from-blue-500 to-cyan-500",
    topics: [
      "Workday Basics",
      "Navigation",
      "Business Processes",
      "Security",
    ],
  },
  {
    level: "LEVEL 02",
    title: "Junior Consultant",
    icon: <Wrench size={28} />,
    color: "from-cyan-500 to-emerald-500",
    topics: [
      "Reports",
      "Calculated Fields",
      "EIB",
      "Integrations",
    ],
  },
  {
    level: "LEVEL 03",
    title: "Project Consultant",
    icon: <Cog size={28} />,
    color: "from-violet-500 to-blue-500",
    topics: [
      "Studio",
      "PECI",
      "Core Connectors",
      "REST & SOAP APIs",
    ],
  },
  {
    level: "LEVEL 04",
    title: "Senior Consultant",
    icon: <Rocket size={28} />,
    color: "from-pink-500 to-violet-500",
    topics: [
      "Debugging",
      "Performance",
      "Client Communication",
      "Best Practices",
    ],
  },
  {
    level: "LEVEL 05",
    title: "Career Growth",
    icon: <Trophy size={28} />,
    color: "from-yellow-400 to-orange-500",
    topics: [
      "Interview Preparation",
      "Freelancing",
      "Leadership",
      "Personal Branding",
    ],
  },
];

function JourneyCard({
  item,
  last,
}: {
  item: JourneyItem;
  last: boolean;
}) {
  return (
    <div className="relative">
      {!last && (
        <div className="hidden lg:block absolute top-20 -right-4 w-8 h-[2px] bg-slate-700"></div>
      )}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">

        <div
          className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} p-4 text-white`}
        >
          {item.icon}
        </div>

        <p className="mt-6 text-xs font-semibold tracking-[0.25em] text-cyan-400">
          {item.level}
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          {item.title}
        </h3>

        <div className="mt-8 flex flex-wrap gap-3">
          {item.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CareerJourney() {
  return (
    <section className="bg-slate-950 py-32 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm">
            Career Roadmap
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Your Workday Career Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-400">
            Grow from beginner to senior consultant through structured,
            real-world learning built from production experience.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-5">
          {journey.map((item, index) => (
            <JourneyCard
              key={item.title}
              item={item}
              last={index === journey.length - 1}
            />
          ))}
        </div>

        <div className="mt-24 text-center">

          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            Built from
            <span className="font-semibold text-white">
              {" "}7+ years of real implementation experience
            </span>
            {" "}including production issues, debugging sessions,
            client projects, interviews and lessons learned the hard way.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-blue-500">
            Start My Career Journey
            <ArrowRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}