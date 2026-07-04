import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ContinueLearning() {
  return (
    <Card>

      <h2 className="text-2xl font-bold">
        📚 Continue Learning
      </h2>

      <p className="mt-4 text-slate-400">
        Workday Fundamentals
      </p>

      <div className="mt-6 h-3 rounded-full bg-slate-800">
        <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
      </div>

      <p className="mt-3 text-sm text-slate-400">
        Progress: 75%
      </p>

      <div className="mt-8">
        <Button href="/lesson/introduction-to-workday">
          Resume Learning →
        </Button>
      </div>

    </Card>
  );
}