import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function PracticeChallenge() {
  return (
    <Card>

      <h2 className="text-2xl font-bold">
        🎯 Practice Challenge
      </h2>

      <p className="mt-5 leading-8 text-slate-400">
        Explain what Workday is and list three business
        processes commonly used in an implementation project.
      </p>

      <div className="mt-8">

        <Button>
          Submit Answer
        </Button>

      </div>

    </Card>
  );
}