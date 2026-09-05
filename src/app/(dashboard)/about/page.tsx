"use client";

import React from "react";
import {
  RiCodeBoxLine,
  RiBriefcaseLine,
  RiFolderCheckLine,
  RiHeart3Line,
  RiCupLine,
  RiOpenSourceLine,
  RiPaletteLine,
  RiRobotLine,
  RiBookOpenLine,
  RiCameraLine,
  RiGamepadLine,
} from "@remixicon/react";

import { Card, CardContent } from "@/components/ui/card";

type Stat = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

type JourneyItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

type Interest = {
  title: string;
  icon: React.ReactNode;
};

const stats: Stat[] = [
  {
    value: "2+",
    label: "Years of Experience",
    icon: <RiBriefcaseLine />,
  },
  {
    value: "20+",
    label: "Projects Completed",
    icon: <RiFolderCheckLine />,
  },
  {
    value: "10+",
    label: "Happy Clients",
    icon: <RiHeart3Line />,
  },
  // {
  //   value: "500+",
  //   label: "Cups of Coffee ☕",
  //   icon: <RiCupLine />,
  // },
];

const journey: JourneyItem[] = [
  {
    period: "2024 - Present",
    role: " Frontend Developer",
    company: "Ballistic Learning Systems",
    description:
      "Working on scalable web applications using React, Next.js and modern UI tools.",
  },
  {
    period: "2023 - 2024",
    role: "Frontend Developer Intern",
    company: "Digitally Fueled ",
    description:
      "Built multiple client projects and improved application performance by 40%.",
  },
  // {
  //   period: "2022 - 2023",
  //   role: "Junior Developer",
  //   company: "StartUpX",
  //   description:
  //     "Started my professional journey, learned rapidly and worked on real-world projects.",
  // },
];

const interests: Interest[] = [
  {
    title: "Open Source",
    icon: <RiOpenSourceLine />,
  },
  {
    title: "UI/UX Design",
    icon: <RiPaletteLine />,
  },
  {
    title: "AI & LLMs",
    icon: <RiRobotLine />,
  },
  {
    title: "Tech Blogging",
    icon: <RiBookOpenLine />,
  },
  {
    title: "Photography",
    icon: <RiCameraLine />,
  },
  {
    title: "Gaming",
    icon: <RiGamepadLine />,
  },
];

const About = () => {
  return (
    <main className="w-full px-4 py-6 md:px-6 lg:px-8">
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="w-full">
        <div className="mb-6 flex items-start justify-between gap-6">
          {/* Heading */}

          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-[#007ACC]">
              01. About Me
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              More about me
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
              I&apos;m a passionate frontend developer with 2+ years of
              experience building modern web applications. I love turning
              ideas into beautiful, functional and accessible products.
              My focus is on performance, clean code and intuitive user
              experiences.
            </p>
          </div>

          {/* Quote */}

          <Card className="hidden w-[260px] shrink-0 border-[#1A2A3A] bg-[#0A131E]/80 lg:block">
            <CardContent className="p-5">
              <p className="text-sm leading-6 text-muted-foreground">
                <span className="text-[#00D4FF]">&quot;</span>
                Clean code
                <br />
                better experiences.
                <span className="text-[#00D4FF]">&quot;</span>
              </p>

              <p className="mt-2 text-xs text-muted-foreground">
                — Abhishek Tiwari
              </p>
            </CardContent>
          </Card>
        </div>

        {/* ===================================================
            STATS
        =================================================== */}

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="
                border-[#1A2A3A]
                bg-[#0A131E]/70
                transition-all
                duration-200
                hover:border-[#007ACC]/60
                hover:bg-[#0F1C2E]
              "
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      border
                      border-[#007ACC]/30
                      bg-[#007ACC]/10
                      text-[#00D4FF]
                    "
                  >
                    {stat.icon}
                  </div>

                  <div>
                    <p className="text-xl font-bold">
                      {stat.value}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* =====================================================
          MY JOURNEY
      ===================================================== */}

      <section className="mt-10">
        <div className="mb-5 flex items-center gap-2">
          <RiCodeBoxLine className="h-5 w-5 text-[#00D4FF]" />

          <h2 className="text-xl font-semibold">
            My Journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}

          <div
            className="
              absolute
              bottom-4
              left-[5px]
              top-4
              w-px
              bg-[#1A2A3A]
            "
          />

          <div className="space-y-7">
            {journey.map((item, index) => (
              <div
                key={`${item.period}-${item.role}`}
                className="relative grid grid-cols-1 gap-2 pl-6 md:grid-cols-[140px_220px_minmax(0,1fr)] md:gap-6"
              >
                {/* Timeline Dot */}

                <span
                  className="
                    absolute
                    left-0
                    top-1.5
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-[#020912]
                    bg-[#007ACC]
                    shadow-[0_0_8px_rgba(0,122,204,0.5)]
                  "
                />

                {/* Period */}

                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    {item.period}
                  </p>
                </div>

                {/* Role */}

                <div>
                  <p className="text-sm font-semibold">
                    {item.role}
                  </p>

                  <p className="mt-1 text-xs text-[#00D4FF]">
                    {item.company}
                  </p>
                </div>

                {/* Description */}

                <p className="max-w-xl text-xs leading-5 text-muted-foreground md:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERESTS
      ===================================================== */}

      <section className="mt-10">
        <h2 className="mb-5 text-xl font-semibold">
          Interests
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {interests.map((interest) => (
            <Card
              key={interest.title}
              className="
                group
                border-[#1A2A3A]
                bg-[#0A131E]/70
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[#007ACC]/70
                hover:bg-[#0F1C2E]
              "
            >
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-[#007ACC]/30
                    bg-[#007ACC]/10
                    text-[#00D4FF]
                    transition-colors
                    group-hover:border-[#00D4FF]/50
                  "
                >
                  {interest.icon}
                </div>

                <p className="mt-3 text-xs font-medium">
                  {interest.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* =====================================================
          CURRENT FOCUS
      ===================================================== */}

      {/* <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Card className="border-[#1A2A3A] bg-[#0A131E]/70">
          <CardContent className="p-5">
            <div className="flex items-center gap-2">
              <RiRobotLine className="h-5 w-5 text-[#00D4FF]" />

              <h3 className="font-semibold">
                Currently Exploring
              </h3>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>→ AI & LLM integrations</li>
              <li>→ Cloud deployment & DevOps</li>
              <li>→ System design</li>
              <li>→ Advanced Next.js architecture</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-[#1A2A3A] bg-[#0A131E]/70">
          <CardContent className="p-5">
            <div className="flex items-center gap-2">
              <RiCodeBoxLine className="h-5 w-5 text-[#00D4FF]" />

              <h3 className="font-semibold">
                What I Believe
              </h3>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              The best developers are lifelong learners. I&apos;m
              always exploring new technologies, improving my skills
              and looking for better ways to build useful products.
            </p>
          </CardContent>
        </Card>
      </section> */}
    </main>
  );
};

export default About;