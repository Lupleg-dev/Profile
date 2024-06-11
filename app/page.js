/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6Bs3IIToitv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <img src="/mark sikaundi.jpg" alt="Mark Sikaundi" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">Mark Sikaundi</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">About Me</h3>
            <p className="text-gray-500 dark:text-gray-400">
              I am a passionate Software Engineer with over 5 years of
              experience in building web applications. I have a strong
              background in JavaScript, React, Node.js, and various databases. I
              am always eager to learn new technologies and tackle challenging
              projects.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Python</Badge>
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>MongoDB</Badge>
              <Badge>SQL</Badge>
              <Badge>Git</Badge>
              <Badge>Docker</Badge>
              <Badge>AWS</Badge>
              <Badge>GCP</Badge>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Reading</Badge>
              <Badge>Script Writing</Badge>
              <Badge>Photography</Badge>
              <Badge>Video Gaming</Badge>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Social</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="https://x.com/Alisikaundi"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <TwitterIcon className="h-5 w-5" />
                @Alisikaundi
              </Link>
              <Link
                href="https://linkedin.com/in/marksikaundi"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <LinkedinIcon className="h-5 w-5" />
                /MarkSikaundi
              </Link>
              <Link
                href="https://gitlab.com/marksikaundi"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <GitlabIcon className="h-5 w-5" />
                /MarkSikaundi
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Work Experience</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">Full-stack Developer</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    2019 - Present
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Developed and maintained a complex web application for a
                  leading e-commerce company. Utilized React, Node.js, MongoDB,
                  and various other technologies to deliver a seamless user
                  experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>REST API</Badge>
                  <Badge>Responsive Design</Badge>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">Front-end Developer</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    2016 - 2019
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Worked on the front-end development of a SaaS platform,
                  implementing responsive designs and integrating with various
                  APIs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Redux</Badge>
                  <Badge>CSS</Badge>
                  <Badge>Responsive Design</Badge>
                  <Badge>API Integration</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
