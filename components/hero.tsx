'use client'

import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { useState } from 'react'

export function Hero() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* subtle arc background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-120px] h-[380px] rounded-b-[200px] bg-muted"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-6 px-4 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
        {/* hello tag */}
        <div className="col-span-full">
          <div className="group relative mx-auto w-fit">
            {/* Floating orbs */}
            <div className="absolute -left-2 -top-2 h-4 w-4 animate-float rounded-full bg-accent-2/80 blur-[1px] [animation-delay:0.2s]"></div>
            <div className="absolute -right-2 -top-2 h-3 w-3 animate-float rounded-full bg-accent-3/80 blur-[1px] [animation-delay:0.4s]"></div>
            <div className="absolute -bottom-1 -right-1 h-2 w-2 animate-float rounded-full bg-accent-2/60 [animation-delay:0.6s]"></div>

            <div className="relative z-10">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-accent-2/30 to-accent-3/30 opacity-0 blur transition-all duration-500 group-hover:opacity-70 group-hover:duration-300"></div>

              {/* Content */}
              <div className="relative flex items-center gap-3 rounded-full bg-background/80 px-6 py-2.5 backdrop-blur-sm ring-1 ring-accent-2/20 transition-all duration-300 group-hover:ring-accent-2/50">
                {/* Animated cursor */}
                <div className="h-2 w-2 rounded-full bg-accent-2">
                  <div className="h-full w-full animate-ping rounded-full bg-accent-2/80"></div>
                </div>

                {/* Text with typing effect */}
                <div className="relative">
                  <span className="relative z-10 font-mono text-base font-bold tracking-wider text-foreground">
                    <span className="relative after:absolute after:inset-y-0 after:left-full after:ml-1 after:block after:h-5 after:w-0.5 after:animate-blink after:bg-accent-3 after:content-['']">
                      hello!
                    </span>
                  </span>

                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent-2 to-accent-3 transition-all duration-500 group-hover:w-full"></span>
                </div>

                {/* Animated dots */}
                <div className="flex items-center space-x-1">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2 [animation-delay:0.2s]"></span>
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent-3 [animation-delay:0.4s]"></span>
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2 [animation-delay:0.6s]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Left: big name */}
        <div className="flex flex-col gap-4">
          <p className="text-accent-2 font-medium tracking-wide">MY NAME:</p>
          <h1 className="text-balance text-brand text-6xl font-extrabold leading-[0.95] sm:text-7xl md:text-8xl">
            AJINKYA
            <br />
            UDMALE
          </h1>
          <p className="max-w-prose text-muted-foreground leading-relaxed">
            I&apos;m a Web &amp; Blockchain Developer crafting modern, interactive experiences on the web.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href="/files/Ajinkya Udmale CV.docx"
              download
              className="rounded-xl border-2 border-accent-3 px-5 py-3 text-sm font-semibold hover:bg-accent-3 hover:text-background transition-colors"
            >
              DOWNLOAD CV ↗
            </a>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
              <a 
                href="mailto:ajinkyaudmale1774@gmail.com"
                className="hover:text-accent-2 transition-colors"
                title="Email me"
              >
                ajinkyaudmale1774@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/ajinkya-udmale-15b6482a6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent-3 transition-colors"
                title="LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/ajinkyaudmale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent-2 transition-colors"
                title="GitHub Profile"
              >
                GitHub
              </a>
              <a 
                href="https://wa.me/917387985222?text=Hi%20Ajinkya,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect." 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors flex items-center gap-1"
                title="Chat on WhatsApp"
              >
                <span>WhatsApp</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.498 14.382a.8.8 0 0 1-.87.363l-2.187-.5a.8.8 0 0 1-.54-.51l-.9-2.5a.8.8 0 0 1 .24-.85l1.5-1.3a.8.8 0 0 0 .23-.94l-1.06-2.4a.8.8 0 0 0-1.36-.19l-3.5 4a.8.8 0 0 0-.17.5v7a.8.8 0 0 0 .8.8h8a.8.8 0 0 0 .8-.8v-6.5a.8.8 0 0 0-.18-.5l-1.5-2z"/>
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.5a8.5 8.5 0 1 1 8.5-8.5 8.51 8.51 0 0 1-8.5 8.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: clipped photo card */}
        <div
          className="relative mx-auto w-full max-w-sm rounded-xl border border-foreground/10 bg-card p-4 shadow-sm"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="rounded-lg bg-[repeating-linear-gradient(0deg,transparent,transparent_6px,rgba(0,0,0,0.04)_7px,rgba(0,0,0,0.04)_7.5px)] p-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/profile.jpg"
                alt="Portrait"
                width={600}
                height={700}
                className={`block h-auto w-full transition-all duration-1000 ${isHovering ? 'grayscale-0' : 'grayscale'}`}
                style={{
                  transitionDelay: isHovering ? '0.2s' : '0.2s',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  maxHeight: '780px',
                  objectFit: 'cover'
                }}
                priority
              />
            </div>
          </div>
          {/* simple paperclip accent */}
          <div
            aria-hidden
            className="absolute right-[-8px] top-10 h-6 w-16 rounded-full border-2 border-foreground/30"
          />
          <div aria-hidden className="absolute right-3 top-10 h-6 w-16 rounded-full border-2 border-foreground/30" />
          <div className="absolute -left-4 bottom-8 h-8 w-8 border-l-2 border-t-2 border-accent-2" />
          <div className="absolute -right-4 top-8 h-8 w-8 border-r-2 border-t-2 border-accent-2" />
          <div className="absolute -left-4 bottom-0 h-8 w-8 border-b-2 border-l-2 border-accent-2" />
          <div className="absolute -right-4 bottom-0 h-8 w-8 border-b-2 border-r-2 border-accent-2" />
          <div className="mt-3 flex items-center justify-between px-1">
            <p className="text-sm font-bold">AJINKYA UDMALE</p>
            <span className="text-xs text-muted-foreground">2025</span>
          </div>
          <p className="px-1 text-xs text-muted-foreground">WEB &amp; BLOCKCHAIN DEVELOPER</p>
        </div>
      </div>
    </section>
  )
}
