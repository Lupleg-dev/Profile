/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cb3HGERj8O3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">John Doe</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Experience
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                John Doe - Full-Stack Developer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Passionate about building innovative web applications and solving complex problems.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="flex justify-end">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Projects</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of my recent projects and the technologies I used to build them.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="200"
                  alt="Project 1"
                  className="aspect-[2/1] overflow-hidden rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Project 1</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A web application built with React, Node.js, and MongoDB.
                </p>
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="200"
                  alt="Project 2"
                  className="aspect-[2/1] overflow-hidden rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Project 2</h3>
                <p className="text-gray-500 dark:text-gray-400">A mobile app built with React Native and Firebase.</p>
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="200"
                  alt="Project 3"
                  className="aspect-[2/1] overflow-hidden rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Project 3</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A data visualization dashboard built with React and D3.js.
                </p>
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">Skills</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Technical Skills</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I have expertise in a wide range of technologies and frameworks.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <CodepenIcon className="w-12 h-12" />
              <p className="text-sm font-medium">React</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <CodepenIcon className="w-12 h-12" />
              <p className="text-sm font-medium">Node.js</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <DatabaseIcon className="w-12 h-12" />
              <p className="text-sm font-medium">MongoDB</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <EclipseIcon className="w-12 h-12" />
              <p className="text-sm font-medium">JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <TypeIcon className="w-12 h-12" />
              <p className="text-sm font-medium">TypeScript</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <WindIcon className="w-12 h-12" />
              <p className="text-sm font-medium">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Experience</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I have worked with various companies and gained valuable experience in the industry.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="100"
                  height="100"
                  alt="Company 1"
                  className="aspect-square overflow-hidden rounded-full object-contain object-center"
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Acme Inc.</h3>
                <p className="text-gray-500 dark:text-gray-400">Full-Stack Developer</p>
                <p className="text-gray-500 dark:text-gray-400">June 2021 - Present</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Developed and maintained web applications using React, Node.js, and MongoDB.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="100"
                  height="100"
                  alt="Company 2"
                  className="aspect-square overflow-hidden rounded-full object-contain object-center"
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Globex Corp.</h3>
                <p className="text-gray-500 dark:text-gray-400">Front-End Developer</p>
                <p className="text-gray-500 dark:text-gray-400">January 2020 - May 2021</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Designed and implemented user interfaces using React and Tailwind CSS.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="100"
                  height="100"
                  alt="Company 3"
                  className="aspect-square overflow-hidden rounded-full object-contain object-center"
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Stark Industries</h3>
                <p className="text-gray-500 dark:text-gray-400">Intern - Web Development</p>
                <p className="text-gray-500 dark:text-gray-400">June 2019 - December 2019</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Assisted in the development and maintenance of various web applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="" />
          </div>
        </div>
      </section>
    </div>
  )
}

function CodepenIcon(props) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function EclipseIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TypeIcon(props) {
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
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function WindIcon(props) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}