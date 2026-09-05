"use client";

import React from "react";

import {
  RiMailLine,
  RiMapPinLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterXLine,
  RiSendPlaneLine,
  RiTimeLine,
} from "@remixicon/react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="w-full px-4 py-6 md:px-6 lg:px-8">

      {/* Header */}

      <section>
        <p className="font-mono text-xs uppercase tracking-wider text-[#007ACC]">
          05. Contact
        </p>

        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
          Let&apos;s Work Together
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Have a project in mind or just want to say hello?
          I&apos;d love to hear from you.
        </p>
      </section>

      {/* Main Content */}

      <section className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">

        {/* Contact Form */}

        <Card className="border-[#1A2A3A] bg-[#0A131E]/70">
          <CardContent className="p-5">

            <form className="space-y-5">

              {/* Name + Email */}

              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="
                      h-10
                      w-full
                      rounded-md
                      border
                      border-[#1A2A3A]
                      bg-[#020912]
                      px-3
                      text-sm
                      outline-none
                      transition-colors
                      placeholder:text-muted-foreground
                      focus:border-[#00D4FF]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="
                      h-10
                      w-full
                      rounded-md
                      border
                      border-[#1A2A3A]
                      bg-[#020912]
                      px-3
                      text-sm
                      outline-none
                      transition-colors
                      placeholder:text-muted-foreground
                      focus:border-[#00D4FF]
                    "
                  />
                </div>

              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="
                    h-10
                    w-full
                    rounded-md
                    border
                    border-[#1A2A3A]
                    bg-[#020912]
                    px-3
                    text-sm
                    outline-none
                    transition-colors
                    placeholder:text-muted-foreground
                    focus:border-[#00D4FF]
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={7}
                  placeholder="Tell me about your project..."
                  className="
                    w-full
                    resize-none
                    rounded-md
                    border
                    border-[#1A2A3A]
                    bg-[#020912]
                    p-3
                    text-sm
                    outline-none
                    transition-colors
                    placeholder:text-muted-foreground
                    focus:border-[#00D4FF]
                  "
                />
              </div>

              {/* Submit */}

              <Button
                type="submit"
                className="
                  w-full
                  bg-[#007ACC]
                  hover:bg-[#3B82F6]
                "
              >
                Send Message

                <RiSendPlaneLine className="ml-2 h-4 w-4" />
              </Button>

            </form>

          </CardContent>
        </Card>


        {/* Contact Details */}

        <Card className="h-fit border-[#1A2A3A] bg-[#0A131E]/70">
          <CardContent className="p-5">

            <h2 className="text-lg font-semibold">
              Get in Touch
            </h2>

            <p className="mt-2 text-sm leading-5 text-muted-foreground">
              Feel free to reach out through any of the following
              channels.
            </p>

            {/* Details */}

            <div className="mt-6 space-y-5">

              <a
                href="mailto:abhishek@example.com"
                className="flex items-start gap-3 group"
              >
                <RiMailLine className="mt-0.5 h-5 w-5 text-[#00D4FF]" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Email
                  </p>

                  <p className="mt-1 text-sm group-hover:text-[#00D4FF]">
                    abhishek@example.com
                  </p>
                </div>
              </a>


              <div className="flex items-start gap-3">
                <RiMapPinLine className="mt-0.5 h-5 w-5 text-[#00D4FF]" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Location
                  </p>

                  <p className="mt-1 text-sm">
                    India 🇮🇳
                  </p>
                </div>
              </div>


              <a
                href="#"
                className="flex items-start gap-3 group"
              >
                <RiLinkedinLine className="mt-0.5 h-5 w-5 text-[#00D4FF]" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm group-hover:text-[#00D4FF]">
                    linkedin.com/in/abhishek
                  </p>
                </div>
              </a>


              <a
                href="#"
                className="flex items-start gap-3 group"
              >
                <RiGithubLine className="mt-0.5 h-5 w-5 text-[#00D4FF]" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    GitHub
                  </p>

                  <p className="mt-1 text-sm group-hover:text-[#00D4FF]">
                    github.com/abhishek
                  </p>
                </div>
              </a>


              <a
                href="#"
                className="flex items-start gap-3 group"
              >
                <RiTwitterXLine className="mt-0.5 h-5 w-5 text-[#00D4FF]" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Twitter
                  </p>

                  <p className="mt-1 text-sm group-hover:text-[#00D4FF]">
                    twitter.com/abhishek
                  </p>
                </div>
              </a>

            </div>


            {/* Availability */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-2
                rounded-md
                border
                border-[#F59E0B]/30
                bg-[#F59E0B]/5
                p-3
                text-xs
                text-[#F59E0B]
              "
            >
              <RiTimeLine className="h-4 w-4" />

              Usually respond within 24 hours
            </div>

          </CardContent>
        </Card>

      </section>
    </main>
  );
}