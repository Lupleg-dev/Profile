"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ModeToggle from "./ModeToggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-900 bg-clip-text text-transparent">
              Mark Sikaundi
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-orange-600 transition-colors">
            About
          </Link>
          <Link href="#experience" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Experience
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Contact
          </Link>
          <ModeToggle />
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Link href="/resume.pdf" target="_blank">
              Resume
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 grid gap-4">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-orange-600 hover:bg-orange-700 w-full">
              <Link href="/resume.pdf" target="_blank">
                Resume
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

