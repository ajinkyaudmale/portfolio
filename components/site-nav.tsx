"use client"

import Link from "next/link"

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="#" className="font-semibold tracking-tight">
          {"<"}Ajinkya / Portfolio{">"}
        </Link>
        <ul className="hidden gap-8 text-sm font-medium md:flex">
          <li>
            <a href="#home" className="hover:opacity-70">
              Home
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:opacity-70">
              Experience
            </a>
          </li>
          <li>
            <a href="#work" className="hover:opacity-70">
              My Work
            </a>
          </li>
          <li>
            <a href="#playground" className="hover:opacity-70">
              Playground
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
