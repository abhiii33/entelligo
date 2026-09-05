"use client";

import React from "react";
import Image from "next/image";

import {
  RiArrowRightLine,
  RiSearchLine,
  RiArticleLine,
} from "@remixicon/react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Getting Started with Next.js 14",
    description:
      "A beginner's guide to the latest features in Next.js and how to build modern web applications.",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Next.js",
    image: "/images/blog/nextjs.jpg",
  },
  {
    title: "How I Improved My Website Performance by 40%",
    description:
      "Key strategies and techniques I used to improve Core Web Vitals and overall frontend performance.",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    category: "Performance",
    image: "/images/blog/performance.jpg",
  },
  {
    title: "Building AI-Powered Apps with OpenAI",
    description:
      "A practical guide to integrating AI APIs into modern web applications.",
    date: "Feb 10, 2024",
    readTime: "6 min read",
    category: "AI",
    image: "/images/blog/ai.jpg",
  },
  {
    title: "Why I Love TypeScript",
    description:
      "How TypeScript makes applications easier to maintain and helps teams build scalable products.",
    date: "Jan 25, 2024",
    readTime: "4 min read",
    category: "TypeScript",
    image: "/images/blog/typescript.jpg",
  },
];

export default function Blogs() {
  return (
    <main className="w-full px-4 py-6 md:px-6 lg:px-8">

      {/* Header */}
      <section>
        <p className="font-mono text-xs uppercase tracking-wider text-[#007ACC]">
          04. Blog
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              Latest Articles
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Thoughts, tutorials and insights about web development,
              technology and more.
            </p>
          </div>

          <div className="flex h-10 w-full items-center gap-2 rounded-md border border-[#1A2A3A] bg-[#0A131E] px-3 md:w-[240px]">
            <RiSearchLine className="h-4 w-4 text-muted-foreground" />

            <input
              placeholder="Search articles..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mt-7">
        <Card className="border-[#1A2A3A] bg-[#0A131E]/60">
          <CardContent className="divide-y divide-[#1A2A3A] p-0">

            {articles.map((article) => (
              <article
                key={article.title}
                className="
                  group
                  flex
                  flex-col
                  gap-4
                  p-4
                  transition-colors
                  hover:bg-[#0F1C2E]/60
                  sm:flex-row
                "
              >
                {/* Image */}

                <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-md border border-[#1A2A3A] sm:w-44">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <h2 className="font-semibold group-hover:text-[#00D4FF]">
                      {article.title}
                    </h2>

                    <Badge
                      variant="contact"
                      className="w-fit shrink-0 text-xs"
                    >
                      {article.category}
                    </Badge>
                  </div>

                  <p className="mt-2 text-sm leading-5 text-muted-foreground">
                    {article.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Arrow */}

                <div className="hidden items-center sm:flex">
                  <RiArrowRightLine className="h-5 w-5 text-[#007ACC] transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}

          </CardContent>
        </Card>
      </section>

      {/* Footer CTA */}

      <Card className="mt-6 border-[#1A2A3A] bg-[#0A131E]/60">
        <CardContent className="flex items-center gap-3 p-5">
          <RiArticleLine className="h-5 w-5 text-[#00D4FF]" />

          <p className="text-sm text-muted-foreground">
            More articles and technical deep-dives coming soon.
          </p>
        </CardContent>
      </Card>

    </main>
  );
}