import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // =========================
  // COURSE
  // =========================

  const course = await prisma.course.upsert({
    where: {
      slug: "workday-integration",
    },
    update: {},
    create: {
      title: "Workday Integration",
      slug: "workday-integration",
      description: "Master Workday Integration from beginner to advanced.",
      thumbnail: "/images/workday-integration.png",
      difficulty: "Intermediate",
      duration: 600,
      published: true,
    },
  });

  console.log("✅ Course:", course.title);

  // =========================
  // MODULES
  // =========================

  const moduleData = [
    {
      title: "Integration Fundamentals",
      description: "Learn the basics of Workday Integrations.",
      order: 1,
    },
    {
      title: "Core Connectors",
      description: "Learn Core Connectors and EIB.",
      order: 2,
    },
    {
      title: "Workday Studio",
      description: "Build enterprise integrations using Studio.",
      order: 3,
    },
  ];

  const modules = [];

  for (const module of moduleData) {
    const createdModule = await prisma.module.upsert({
      where: {
        courseId_order: {
          courseId: course.id,
          order: module.order,
        },
      },
      update: {},
      create: {
        ...module,
        courseId: course.id,
      },
    });

    modules.push(createdModule);
  }

  console.log("✅ Modules created");

  // =========================
  // LESSONS
  // =========================

  const lessons = [
    // Module 1
    {
      module: 0,
      title: "Introduction to Workday Integrations",
      slug: "introduction-to-workday-integrations",
      order: 1,
      duration: 15,
    },
    {
      module: 0,
      title: "Integration System Users",
      slug: "integration-system-users",
      order: 2,
      duration: 20,
    },
    {
      module: 0,
      title: "Security Fundamentals",
      slug: "security-fundamentals",
      order: 3,
      duration: 18,
    },

    // Module 2

    {
      module: 1,
      title: "Enterprise Interface Builder",
      slug: "enterprise-interface-builder",
      order: 1,
      duration: 25,
    },
    {
      module: 1,
      title: "Core Connector Worker",
      slug: "core-connector-worker",
      order: 2,
      duration: 22,
    },
    {
      module: 1,
      title: "PECI Integration",
      slug: "peci-integration",
      order: 3,
      duration: 28,
    },

    // Module 3

    {
      module: 2,
      title: "Studio Introduction",
      slug: "studio-introduction",
      order: 1,
      duration: 30,
    },
    {
      module: 2,
      title: "Building Studio Assembly",
      slug: "building-studio-assembly",
      order: 2,
      duration: 40,
    },
    {
      module: 2,
      title: "Deploying Studio Integration",
      slug: "deploying-studio-integration",
      order: 3,
      duration: 35,
    },
  ];

  for (const lesson of lessons) {
    await prisma.lesson.upsert({
      where: {
        moduleId_order: {
          moduleId: modules[lesson.module].id,
          order: lesson.order,
        },
      },
      update: {},
      create: {
        title: lesson.title,
        slug: lesson.slug,
        duration: lesson.duration,
        description: lesson.title,
        moduleId: modules[lesson.module].id,
        order: lesson.order,
      },
    });
  }

  console.log("✅ Lessons created");
  console.log("🎉 Database seeding completed!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });