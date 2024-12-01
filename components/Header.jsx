'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              <Image src="https://www.lupleg.org/xlogo.svg" alt="Logo" width={400} height={400} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Projects
            </Link>
            <Link href="/skills" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Skills
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="/hire-me"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-white hover:bg-white"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 inset-x-0 p-2 transition transform origin-top-right`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  href="/about"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">About</span>
                </Link>
                <Link
                  href="/projects"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">Projects</span>
                </Link>
                <Link
                  href="/skills"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">Skills</span>
                </Link>
                <Link
                  href="/contact"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">Contact</span>
                </Link>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <Link
              href="/hire-me"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              onClick={toggleMenu}
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

