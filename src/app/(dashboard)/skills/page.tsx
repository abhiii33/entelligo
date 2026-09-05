"use client";

import React from "react";
import Image from "next/image";

import {
  RiCodeBoxLine,
  RiServerLine,
  RiToolsLine,
  RiBookOpenLine,
  RiLightbulbLine,
} from "@remixicon/react";

import { Card, CardContent } from "@/components/ui/card";

const frontendSkills = [
  { name: "React", icon: "/images/reactjs.svg" },
  { name: "Next.js", icon: "/images/nextjs.svg" },
  { name: "TypeScript", icon: "/images/typescript.svg" },
  { name: "JavaScript", icon: "/images/javascript.svg" },
  { name: "Tailwind CSS", icon: "/images/tailwindcss.svg" },
  { name: "shadcn/ui", icon: "/images/shadcn.svg" },
];

const backendSkills = [
  { name: "Node.js", icon: "/images/nodejs.svg" },
  { name: "Express.js", icon: "/images/express.svg" },
  { name: "MongoDB", icon: "/images/mongodb.svg" },
  { name: "PostgreSQL", icon: "/images/postgresql.svg" },
  { name: "Prisma", icon: "/images/prisma.svg" },
  { name: "REST APIs", icon: "/images/api.svg" },
];

const tools = [
  { name: "Git", icon: "/images/git.svg" },
  { name: "GitHub", icon: "/images/github.svg" },
  { name: "Docker", icon: "/images/docker.svg" },
  { name: "VS Code", icon: "/images/vscode.svg" },
  { name: "Figma", icon: "/images/figma.svg" },
  { name: "Postman", icon: "/images/postman.svg" },
];

function SkillGrid({
  title,
  icon,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; icon: string }[];
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <span className="text-[#00D4FF]">
          {icon}
        </span>

        <h2 className="font-semibold">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="
              border-[#1A2A3A]
              bg-[#0A131E]/70
              transition-all
              hover:border-[#007ACC]/70
              hover:bg-[#0F1C2E]
            "
          >
            <CardContent className="flex flex-col items-center justify-center p-4">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />

              <p className="mt-3 text-xs font-medium">
                {skill.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function Skills() {
  return (
    <main className="w-full px-4 py-6 md:px-6 lg:px-8">

      {/* Header */}
      <section>
        <p className="font-mono text-xs uppercase tracking-wider text-[#007ACC]">
          03. Skills
        </p>

        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
          Skills & Tools
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Technologies and tools I work with to build modern,
          scalable and user-focused applications.
        </p>
      </section>

      {/* Frontend */}
      <div className="mt-8">
        <SkillGrid
          title="Frontend"
          icon={<RiCodeBoxLine className="h-5 w-5" />}
          skills={frontendSkills}
        />
      </div>

      {/* Backend */}
      <div className="mt-8">
        <SkillGrid
          title="Backend"
          icon={<RiServerLine className="h-5 w-5" />}
          skills={backendSkills}
        />
      </div>

      {/* Tools */}
      <div className="mt-8">
        <SkillGrid
          title="Tools & Others"
          icon={<RiToolsLine className="h-5 w-5" />}
          skills={tools}
        />
      </div>

      {/* Bottom Cards */}
      <section className="mt-8 grid gap-4 md:grid-cols-2">

        <Card className="border-[#1A2A3A] bg-[#0A131E]/70">
          <CardContent className="p-5">
            <div className="flex items-center gap-2">
              <RiBookOpenLine className="h-5 w-5 text-[#00D4FF]" />

              <h2 className="font-semibold">
                Currently Learning
              </h2>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>→ AI & LLM integrations</li>
              <li>→ System Design</li>
              <li>→ Cloud Deployment</li>
              <li>→ DevOps & CI/CD</li>
              <li>→ React Native</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-[#1A2A3A] bg-[#0A131E]/70">
          <CardContent className="p-5">
            <div className="flex items-center gap-2">
              <RiLightbulbLine className="h-5 w-5 text-[#00D4FF]" />

              <h2 className="font-semibold">
                What I Believe
              </h2>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              The best developers are lifelong learners. I&apos;m
              always exploring new technologies and improving my
              approach to building useful, maintainable products.
            </p>
          </CardContent>
        </Card>

      </section>
    </main>
  );
}