import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code,
  CheckCircle,
  Briefcase,
  Lightbulb,
  User,
  FileText,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Mark Sikaundi</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#research" className="text-sm font-medium hover:text-primary transition-colors">
              Research
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button>Contact Me</Button>
            </Link>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <Link href="https://github.com/marksikaundi" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <Link href="https://linkedin.com/in/marksikaundi" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Mark Sikaundi</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Software Engineer • Quality Assurance • Indie Hacker
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="w-full min-[400px]:w-auto">Get in Touch</Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline" className="w-full min-[400px]:w-auto">
                      View Projects
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="Mark Sikaundi"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* About/Summary Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <User className="mr-1 h-4 w-4" />
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Professional Summary</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  I'm a dedicated Software Engineer specializing in Quality Assurance with a passion for building
                  innovative solutions. As an Indie Hacker, I create products that solve real-world problems while
                  maintaining the highest standards of quality.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Quality-Driven Development</h3>
                        <p className="text-sm text-muted-foreground">
                          I believe in building software right the first time, with quality embedded throughout the
                          development process.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Entrepreneurial Mindset</h3>
                        <p className="text-sm text-muted-foreground">
                          As an Indie Hacker, I approach problems with a business perspective, creating solutions that
                          deliver real value.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Continuous Learning</h3>
                        <p className="text-sm text-muted-foreground">
                          I'm committed to staying at the forefront of technology through research and continuous
                          improvement.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="About Mark Sikaundi"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Code className="mr-1 h-4 w-4" />
                  Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Core Skills</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  My technical expertise and professional capabilities that drive successful outcomes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 transition-all hover:shadow-md">
                <h3 className="text-lg font-bold">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Test automation, manual testing, QA strategy, test planning, and defect management.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Selenium</Badge>
                  <Badge>Cypress</Badge>
                  <Badge>Jest</Badge>
                  <Badge>Playwright</Badge>
                  <Badge>JIRA</Badge>
                </div>
              </Card>
              <Card className="p-6 transition-all hover:shadow-md">
                <h3 className="text-lg font-bold">Software Development</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Full-stack development with focus on clean, maintainable, and efficient code.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Python</Badge>
                </div>
              </Card>
              <Card className="p-6 transition-all hover:shadow-md">
                <h3 className="text-lg font-bold">DevOps</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  CI/CD pipelines, infrastructure as code, and automated deployment processes.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>GitHub Actions</Badge>
                  <Badge>Docker</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Terraform</Badge>
                  <Badge>Jenkins</Badge>
                </div>
              </Card>
              <Card className="p-6 transition-all hover:shadow-md">
                <h3 className="text-lg font-bold">Product Development</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  End-to-end product development from ideation to launch and iteration.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Product Strategy</Badge>
                  <Badge>User Research</Badge>
                  <Badge>MVP Development</Badge>
                  <Badge>Analytics</Badge>
                </div>
              </Card>
              <Card className="p-6 transition-all hover:shadow-md">
                <h3 className="text-lg font-bold">Project Management</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Agile methodologies, team leadership, and stakeholder management.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Scrum</Badge>
                  <Badge>Kanban</Badge>
                  <Badge>Agile</Badge>
                  <Badge>Risk Management</Badge>
                </div>
              </Card>
              <Card className="p-6 transition-all hover:shadow-md">
                <h3 className="text-lg font-bold">Entrepreneurship</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Building and scaling indie products with a focus on user value and sustainability.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Business Strategy</Badge>
                  <Badge>Marketing</Badge>
                  <Badge>Growth Hacking</Badge>
                  <Badge>Customer Development</Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Briefcase className="mr-1 h-4 w-4" />
                  Career
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Professional Experience</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  My journey through the tech industry and the valuable experience I've gained along the way.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-muted-foreground/30 after:absolute after:left-[-5px] after:top-0 after:h-3 after:w-3 after:rounded-full after:bg-primary">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Senior QA Engineer</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>TechCorp Inc.</span>
                    <span>•</span>
                    <span>2020 - Present</span>
                  </div>
                  <p className="text-muted-foreground">
                    Leading quality assurance initiatives for enterprise software products. Implementing automated
                    testing frameworks and CI/CD pipelines to ensure product reliability and performance.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline">Test Automation</Badge>
                    <Badge variant="outline">CI/CD</Badge>
                    <Badge variant="outline">Team Leadership</Badge>
                  </div>
                </div>
              </div>
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-muted-foreground/30 after:absolute after:left-[-5px] after:top-0 after:h-3 after:w-3 after:rounded-full after:bg-primary">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Software Developer</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>InnovateTech</span>
                    <span>•</span>
                    <span>2017 - 2020</span>
                  </div>
                  <p className="text-muted-foreground">
                    Developed and maintained web applications using React, Node.js, and AWS. Collaborated with
                    cross-functional teams to deliver high-quality software solutions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline">Full-Stack Development</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                  </div>
                </div>
              </div>
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-muted-foreground/30 after:absolute after:left-[-5px] after:top-0 after:h-3 after:w-3 after:rounded-full after:bg-primary">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">QA Analyst</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>WebSolutions Ltd</span>
                    <span>•</span>
                    <span>2015 - 2017</span>
                  </div>
                  <p className="text-muted-foreground">
                    Conducted manual and automated testing for web and mobile applications. Created comprehensive test
                    plans and executed test cases to ensure software quality.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline">Manual Testing</Badge>
                    <Badge variant="outline">Test Planning</Badge>
                    <Badge variant="outline">Selenium</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Code className="mr-1 h-4 w-4" />
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Current Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Innovative solutions I'm currently building as an Indie Hacker and software professional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Project 1"
                  className="aspect-video object-cover w-full"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold">TestFlow</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    An automated testing platform that simplifies QA workflows for development teams.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>AWS</Badge>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://testflow.example.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Visit
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/marksikaundi/testflow" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Project 2"
                  className="aspect-video object-cover w-full"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold">DevMetrics</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    A dashboard for tracking development metrics and improving team productivity.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>TypeScript</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>MongoDB</Badge>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://devmetrics.example.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Visit
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/marksikaundi/devmetrics" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Project 3"
                  className="aspect-video object-cover w-full"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold">CodeReviewer</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    An AI-powered code review assistant that helps identify bugs and improve code quality.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>Machine Learning</Badge>
                    <Badge>API</Badge>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://codereviewer.example.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Visit
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://github.com/marksikaundi/codereviewer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="https://github.com/marksikaundi" target="_blank" rel="noopener noreferrer">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Lightbulb className="mr-1 h-4 w-4" />
                  Innovation
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Research & Publications</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  My contributions to the tech community through research, articles, and thought leadership.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl space-y-8 py-12">
              <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-4 md:items-start">
                  <div className="md:w-1/4">
                    <Badge className="mb-2">Research Paper</Badge>
                    <p className="text-sm text-muted-foreground">Published: June 2023</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Improving Test Automation Efficiency in CI/CD Pipelines</h3>
                    <p className="mt-2 text-muted-foreground">
                      A comprehensive study on optimizing test automation strategies to reduce build times and improve
                      feedback loops in continuous integration environments.
                    </p>
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link href="#" className="flex items-center">
                        Read Paper
                        <FileText className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-4 md:items-start">
                  <div className="md:w-1/4">
                    <Badge className="mb-2">Article</Badge>
                    <p className="text-sm text-muted-foreground">Published: March 2023</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">The Future of Quality Assurance in AI-Driven Applications</h3>
                    <p className="mt-2 text-muted-foreground">
                      Exploring the challenges and solutions for testing applications that leverage artificial
                      intelligence and machine learning components.
                    </p>
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link href="#" className="flex items-center">
                        Read Article
                        <FileText className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-4 md:items-start">
                  <div className="md:w-1/4">
                    <Badge className="mb-2">Case Study</Badge>
                    <p className="text-sm text-muted-foreground">Published: November 2022</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Bootstrapping a SaaS Product as an Indie Hacker</h3>
                    <p className="mt-2 text-muted-foreground">
                      A detailed case study on building and launching a successful SaaS product with limited resources
                      and a focus on quality and user experience.
                    </p>
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link href="#" className="flex items-center">
                        Read Case Study
                        <FileText className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Mail className="mr-1 h-4 w-4" />
                  Connect
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <Link href="mailto:mark@example.com" className="hover:text-primary transition-colors">
                      mark@example.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <Link href="https://linkedin.com/in/marksikaundi" className="hover:text-primary transition-colors">
                      linkedin.com/in/marksikaundi
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Twitter className="h-5 w-5 text-muted-foreground" />
                    <Link href="https://twitter.com/marksikaundi" className="hover:text-primary transition-colors">
                      @marksikaundi
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <Link href="https://github.com/marksikaundi" className="hover:text-primary transition-colors">
                      github.com/marksikaundi
                    </Link>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Message subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Mark Sikaundi. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/marksikaundi" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/marksikaundi" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com/marksikaundi" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:mark@example.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

