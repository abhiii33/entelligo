"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  RiArrowRightUpLine,
  RiGithubLine,
  RiSearchLine,
  RiFolderCodeLine,
} from "@remixicon/react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ZeeCare Hospital Management",
    description:
      "A complete hospital management platform with appointment scheduling, patient records, billing and administrative workflows.",
    image: "/images/projects/zeecare.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web Apps",
    demo: "#",
    github: "#",
  },
  {
    title: "AI Content Studio",
    description:
      "AI-powered content generation platform with reusable templates, content history and export functionality.",
    image: "/images/projects/ai-content.png",
    technologies: ["Next.js", "OpenAI API", "Prisma"],
    category: "AI & Tools",
    demo: "#",
    github: "#",
  },
];

const categories = [
  "All",
  "Web Apps",
  "AI & Tools",
  "Open Source",
  "UI/UX",
];

export default function Projects() {

const [searchQuery, setSearchQuery] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

const filteredProjects = projects.filter((project) => {
  const matchesSearchQuery =
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase());

  const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;

  return matchesSearchQuery && matchesCategory;
});

return (
  <main className="w-full px-4 py-6 md:px-6 lg:px-8">

      {/* Header */}
      <section>
        <p className="font-mono text-xs uppercase tracking-wider text-[#007ACC]">
          02. Projects
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              My Projects
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              A collection of projects I&apos;ve built, ranging from
              production web applications to experiments with AI and
              modern web technologies.
            </p>
          </div>

          {/* Search */}
          <div className="flex h-10 w-full items-center gap-2 rounded-md border border-[#1A2A3A] bg-[#0A131E] px-3 md:w-[240px]">
            <RiSearchLine className="h-4 w-4 text-muted-foreground" />

            <input
              placeholder="Search projects..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              onChange={(e) => {
                // Handle search input change
                console.log("Search query:", e.target.value);
                setSearchQuery(e.target.value);
              } }
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="mt-7 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            className={
              selectedCategory === category
                ? "bg-[#007ACC] hover:bg-[#3B82F6]"
                : "border-[#1A2A3A] hover:border-[#007ACC]"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects */}
      <section className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Card
              key={project.title}
              className="
                overflow-hidden
                border-[#1A2A3A]
              bg-[#0A131E]/70
              transition-all
              duration-200
              hover:-translate-y-1
              hover:border-[#007ACC]/70
            "
          >
            {/* Project Image */}
            <div className="relative h-44 w-full overflow-hidden border-b border-[#1A2A3A] bg-[#050D16]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-semibold">
                  {project.title}
                </h2>

                <RiArrowRightUpLine className="h-5 w-5 shrink-0 text-[#00D4FF]" />
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="contact"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={project.demo}
                  className="flex items-center gap-1 text-sm text-[#00D4FF] hover:underline"
                >
                  Live Demo
                  <RiArrowRightUpLine className="h-4 w-4" />
                </a>

                <a
                  href={project.github}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  View Code
                  <RiGithubLine className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))): (
          <p className="col-span-full text-center text-sm text-muted-foreground">
            No projects found.
          </p>
        )}
      </section>

    </main>
  );
}