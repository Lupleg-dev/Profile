import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Mark Sikaundi</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="ml-auto hidden h-8 md:flex">
                <Mail className="mr-2 h-3.5 w-3.5" />
                <span>Contact Me</span>
              </Button>
            </div>
            <nav className="flex items-center">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background p-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background p-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile picture" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <Link href="#" className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium" target="_blank">
                Available for hire
              </Link>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Mark Sikaundi</h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Software Engineer with 4+ years of experience building robust and scalable applications. Specialized in
              full-stack development with React, Node.js, and cloud technologies.
            </p>
            <div className="space-x-4">
              <Button className="h-11 px-8" asChild>
                <Link href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="h-11 px-8" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="about" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I'm a passionate software engineer with a focus on creating elegant solutions to complex problems. With
              over 4 years of professional experience, I've worked across various domains including fintech, e-commerce,
              and SaaS platforms.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card className="flex h-full flex-col justify-between">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>My core technical competencies</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>Next.js</Badge>
                <Badge>Express</Badge>
                <Badge>MongoDB</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>AWS</Badge>
                <Badge>Docker</Badge>
                <Badge>CI/CD</Badge>
                <Badge>RESTful APIs</Badge>
              </CardContent>
            </Card>
            <Card className="flex h-full flex-col justify-between">
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>My academic background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">BSc in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">University of Technology, 2015-2019</p>
                </div>
                <div>
                  <h3 className="font-medium">Full-Stack Web Development</h3>
                  <p className="text-sm text-muted-foreground">Tech Bootcamp, 2019</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex h-full flex-col justify-between">
              <CardHeader>
                <CardTitle>Interests</CardTitle>
                <CardDescription>Beyond coding</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Open Source Contribution</h3>
                  <p className="text-sm text-muted-foreground">Active contributor to several open-source projects</p>
                </div>
                <div>
                  <h3 className="font-medium">Tech Blogging</h3>
                  <p className="text-sm text-muted-foreground">
                    Writing about web development and software engineering
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Mentoring</h3>
                  <p className="text-sm text-muted-foreground">Helping junior developers grow their skills</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="experience" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Experience</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              My professional journey in software engineering
            </p>
          </div>
          <div className="mx-auto grid max-w-[64rem] gap-6">
            <ExperienceCard
              title="Senior Frontend Developer"
              company="Tech Innovations Inc."
              period="2022 - Present"
              description="Leading the frontend development team in building a scalable SaaS platform. Implementing modern React patterns and optimizing performance."
              technologies={["React", "TypeScript", "Next.js", "Redux", "GraphQL"]}
            />
            <ExperienceCard
              title="Full Stack Developer"
              company="Digital Solutions Ltd."
              period="2020 - 2022"
              description="Developed and maintained multiple client projects. Worked on both frontend and backend systems, implementing new features and improving existing ones."
              technologies={["JavaScript", "Node.js", "Express", "MongoDB", "React", "AWS"]}
            />
            <ExperienceCard
              title="Junior Web Developer"
              company="WebCraft Agency"
              period="2019 - 2020"
              description="Started as a junior developer working on client websites. Gained experience in responsive design and frontend frameworks."
              technologies={["HTML/CSS", "JavaScript", "jQuery", "PHP", "WordPress"]}
            />
          </div>
        </section>
        <section id="projects" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Showcase of my recent work and personal projects
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
              image="/placeholder.svg?height=300&width=400"
              technologies={["Next.js", "Stripe", "MongoDB", "Tailwind CSS"]}
              demoLink="https://example.com"
              codeLink="https://github.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates and team functionality."
              image="/placeholder.svg?height=300&width=400"
              technologies={["React", "Firebase", "Material UI", "Redux"]}
              demoLink="https://example.com"
              codeLink="https://github.com"
            />
            <ProjectCard
              title="Finance Dashboard"
              description="An interactive dashboard for tracking personal finances with data visualization and budgeting tools."
              image="/placeholder.svg?height=300&width=400"
              technologies={["Vue.js", "D3.js", "Express", "PostgreSQL"]}
              demoLink="https://example.com"
              codeLink="https://github.com"
            />
            <ProjectCard
              title="Weather Application"
              description="A weather forecast application with location detection and detailed meteorological data."
              image="/placeholder.svg?height=300&width=400"
              technologies={["React Native", "Weather API", "Geolocation"]}
              demoLink="https://example.com"
              codeLink="https://github.com"
            />
            <ProjectCard
              title="Blog Platform"
              description="A content management system for bloggers with markdown support and SEO optimization."
              image="/placeholder.svg?height=300&width=400"
              technologies={["Gatsby", "GraphQL", "Netlify CMS", "Styled Components"]}
              demoLink="https://example.com"
              codeLink="https://github.com"
            />
            <ProjectCard
              title="Fitness Tracker"
              description="A mobile application for tracking workouts, nutrition, and fitness progress."
              image="/placeholder.svg?height=300&width=400"
              technologies={["Flutter", "Firebase", "Charts", "Authentication"]}
              demoLink="https://example.com"
              codeLink="https://github.com"
            />
          </div>
        </section>
        <section id="contact" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Get In Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Interested in working together? Feel free to reach out!
            </p>
          </div>
          <div className="mx-auto grid max-w-[64rem] gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Ways to reach me directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5" />
                  <p>john.doe@example.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-5 w-5" />
                  <Link href="https://linkedin.com/in/johndoe" className="hover:underline">
                    linkedin.com/in/johndoe
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="h-5 w-5" />
                  <Link href="https://github.com/johndoe" className="hover:underline">
                    github.com/johndoe
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 John Doe. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background p-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background p-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExperienceCard({ title, company, period, description, technologies }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{company}</CardDescription>
          </div>
          <Badge variant="outline">{period}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ title, description, image, technologies, demoLink, codeLink }) {
  return (
    <Card className="overflow-hidden">
      <img src={image || "/placeholder.svg"} alt={title} className="h-48 w-full object-cover" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={demoLink} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={codeLink} target="_blank" rel="noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

