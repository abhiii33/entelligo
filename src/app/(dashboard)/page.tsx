
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar"
import { MoveRight } from 'lucide-react';
import { FolderOpenDot } from 'lucide-react';
import Link from "next/link";
export default function Page() {
  const {open} = useSidebar()
 
  return (
    <main className="w-full px-4 py-6 md:px-6 lg:px-5">
      <section
        className="
          grid
          w-full
          grid-cols-1
          gap-8
          lg:grid-cols-[minmax(0,1fr)_minmax(450px,520px)]
          lg:gap-10
        "
      >

        <div className="min-w-0 pt-2">
          {/* Introduction */}

          <p className="text-lg text-muted-foreground">
            Hi, I&apos;m
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
            Abhishek{" "}
            <span className="text-[#007ACC]">
              Tiwari
            </span>
          </h1>

          <p className="mt-3 text-xl font-medium text-[#00D4FF] md:text-2xl">
            Full Stack Developer
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            I build fast, responsive and accessible web applications
            using modern technologies like React, Next.js and
            TypeScript. Passionate about clean code, performance and
            intuitive user experiences.
          </p>

          {/* CTA */}

          <div className="mt-7 flex flex-wrap gap-4">
            <Button
              variant="default"
              size="lg"
              className="
                h-10
                bg-[#007ACC]
                px-6
                hover:bg-[#3B82F6]
              "
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="
                h-10 border-[#1A2A3A] px-6 hover:border-[#00D4FF] hover:bg-[#0F1C2E] "
              onClick={() => {
                      window.open("/files/Abhishek_Tiwari_Full_Stack_Developer_Resume.pdf", "_blank")
              }}
            >
              Download Resume
            </Button>
          </div>

          <div className="mt-9">
            <h2 className="mb-4 text-xl font-semibold">
              Connect With Me
            </h2>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#1A2A3A]
                    bg-[#0A131E]
                    transition-all
                    duration-200
                    hover:border-[#00D4FF]
                    hover:bg-[#0F1C2E]
                    hover:shadow-[0_0_15px_rgba(0,212,255,0.12)]
                  "
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col gap-6">
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              <Image
                src="/images/kid1.jpg"
                alt="Abhishek Tiwari"
                width={500}
                height={300}
                priority
                className="
                  h-[260px]
                  w-full
                  rounded-xl
                  border
                  border-[#1A2A3A]
                  object-cover
                  object-center
                  shadow-xl
                  shadow-black/20
                  md:h-[300px]
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#22C55E]/40
                  bg-[#020912]/90
                  px-4
                  py-2
                  text-sm
                  backdrop-blur
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#22C55E]" />

                <span className="text-[#F1F5F9]">
                  Open to work
                </span>
              </div>
            </div>
          </div>


      <Card
  className={`w-full
    border-[#1A2A3A]
    bg-[#0A131E]/80
    p-4
    shadow-lg
    shadow-black/20
    ${open ? "" : "lg:w-[calc(100%+160px)] lg:-ml-[160px]"}
  `}
>
            <CardContent className="p-0">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  developer.ts
                </span>

                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#F43F5E]" />
                  <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                  <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                </div>
              </div>

              <pre className="overflow-x-auto font-mono text-xs leading-6 sm:text-sm">
                <code>
                  {/* Line 01 */}

                  <span className="text-slate-500">
                    01
                  </span>{"  "}

                  <span className="text-blue-400">
                    const
                  </span>{" "}

                  <span className="text-cyan-400">
                    developer
                  </span>{" "}

                  <span className="text-slate-400">
                    =
                  </span>{" "}

                  <span className="text-slate-300">
                    {"{"}
                  </span>

                  {"\n"}

                  {/* Line 02 */}

                  <span className="text-slate-500">
                    02
                  </span>{"  "}

                  <span className="text-blue-300">
                    name
                  </span>

                  <span className="text-slate-400">
                    :
                  </span>{" "}

                  <span className="text-green-400">
                    &quot;Abhishek Tiwari&quot;
                  </span>

                  <span className="text-slate-400">
                    ,
                  </span>

                  {"\n"}

                  {/* Line 03 */}

                  <span className="text-slate-500">
                    03
                  </span>{"  "}

                  <span className="text-blue-300">
                    role
                  </span>

                  <span className="text-slate-400">
                    :
                  </span>{" "}

                  <span className="text-green-400">
                    &quot;Full Stack Developer&quot;
                  </span>

                  <span className="text-slate-400">
                    ,
                  </span>

                  {"\n"}

                  {/* Line 04 */}

                  <span className="text-slate-500">
                    04
                  </span>{"  "}

                  <span className="text-blue-300">
                    stack
                  </span>

                  <span className="text-slate-400">
                    :
                  </span>{" "}

                  <span className="text-yellow-400">
                    [&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;]
                  </span>

                  <span className="text-slate-400">
                    ,
                  </span>

                  {"\n"}

                  {/* Line 05 */}

                  <span className="text-slate-500">
                    05
                  </span>{"  "}

                  <span className="text-blue-300">
                    location
                  </span>

                  <span className="text-slate-400">
                    :
                  </span>{" "}

                  <span className="text-green-400">
                    &quot;India 🇮🇳&quot;
                  </span>

                  <span className="text-slate-400">
                    ,
                  </span>

                  {"\n"}

                  {/* Line 06 */}

                  <span className="text-slate-500">
                    06
                  </span>{"  "}

                  <span className="text-blue-300">
                    passion
                  </span>

                  <span className="text-slate-400">
                    :
                  </span>{" "}

                  <span className="text-green-400">
                    &quot;Building for the web&quot;
                  </span>

                  <span className="text-slate-400">
                    ,
                  </span>

                  {"\n"}

                  {/* Line 07 */}

                  <span className="text-slate-500">
                    07
                  </span>{"  "}

                  <span className="text-blue-300">
                    availableFor
                  </span>

                  <span className="text-slate-400">
                    :
                  </span>{" "}

                  <span className="text-green-400">
                    &quot;Opportunities&quot;
                  </span>

                  <span className="text-slate-400">
                    ,
                  </span>

                  {"\n"}

                  {/* Line 08 */}

                  <span className="text-slate-500">
                    08
                  </span>{"  "}

                  <span className="text-slate-300">
                    {"};"}
                  </span>
                </code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>
<section className="mt-12 w-full">
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-semibold">My Tech Stack</h2>
  </div>

  <div className="mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
    <div className="marquee-track flex w-max gap-3">
      {[...techStack, ...techStack].map((tech, i) => (
        <Badge
          key={`${tech.name}-${i}`}
          variant="contact"
          className="
            cursor-default
            shrink-0
            px-3
            py-2
            transition-all
            hover:border-[#00D4FF]
            hover:bg-[#0F1C2E]
          "
        >
          <Image
            src={tech.icon}
            alt={tech.name}
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="ml-2">{tech.name}</span>
        </Badge>
      ))}
    </div>
  </div>
</section>

<section className="mt-12 w-full">
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-semibold">
      <FolderOpenDot className="inline-block w-5 h-5 mr-2 "  color="#F59E0B"/>
      Featured Projects
      </h2>
    <Link href="/projects" className="text-sm text-[#007ACC]"> 
       View all projects
      <MoveRight className="inline-block w-4 h-4 ml-1" />
    </Link>
  </div>

  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {/* Project cards will go here */}
    {projects.map((project, index) => (
      <Card
        key={index}
        className="
          border-[#1A2A3A]
          bg-[#0A131E]/80
          p-4
          shadow-lg
          shadow-black/20
        "
      >
        <CardContent className="p-0">
          {/* <Image
            src={project.image}
            alt={project.name}
            width={400}
            height={200}
            className="
              h-[200px]
              w-full
              rounded-t-lg
              object-cover
              object-center
            "
          /> */}
          <div className="">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="contact"
                  className="
                    cursor-default
                    shrink-0
                    px-3
                    py-2
                    transition-all
                    hover:border-[#00D4FF]
                    hover:bg-[#0F1C2E]
                  "
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>



    </main>
  );
}

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: "/images/Github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "/images/Linkedin.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: "/images/x.svg",
  },
];

const techStack = [
  {
    name: "React",
    icon: "/images/reactjs.svg",
  },
  {
    name: "Next.js",
    icon: "/images/nextjs.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tailwindcss.svg",
  },
    {
    name: "React",
    icon: "/images/reactjs.svg",
  },
  {
    name: "Next.js",
    icon: "/images/nextjs.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tailwindcss.svg",
  },
    {
    name: "React",
    icon: "/images/reactjs.svg",
  },
  {
    name: "Next.js",
    icon: "/images/nextjs.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tailwindcss.svg",
  },
    {
    name: "React",
    icon: "/images/reactjs.svg",
  },
  {
    name: "Next.js",
    icon: "/images/nextjs.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tailwindcss.svg",
  },
];

const projects = [
  {
    name: "Project 1",
    description: "Description of Project 1",
    image: "/images/project1.jpg",
    techStack: ["React", "Next.js", "TypeScript"],
  },
  {
    name: "Project 2",
    description: "Description of Project 2",
    image: "/images/project2.jpg",
     techStack: ["React", "Next.js", "TypeScript"],
  },
  {
    name: "Project 3",
    description: "Description of Project 3",
    image: "/images/project3.jpg",
     techStack: ["React", "Next.js", "TypeScript"],
  },
];