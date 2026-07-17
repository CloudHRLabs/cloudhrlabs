import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { syncUser } from "@/lib/actions/syncUser";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import DashboardHero from "@/components/dashboard/DashboardHero";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Sync Clerk user with the database
  await syncUser();

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <Section>
        <Container>
          <DashboardHero />
        </Container>
      </Section>

      {/* Continue Learning */}
      <Section>
        <Container>
          <ContinueLearning />
        </Container>
      </Section>

      {/* Statistics */}
      <Section>
        <Container>
          <StatsGrid />
        </Container>
      </Section>

      {/* Recent Activity */}
      <Section className="pb-32">
        <Container>
          <RecentActivity />
        </Container>
      </Section>

    </main>
  );
}