import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from '@/components/about';
import { AboutMe } from '@/components/about-me';
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import ParticlesBackground from '@/components/ui/particles-background';

export default function Page() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <div className="relative">
        <SiteNav />
        <Hero />
        <AboutMe />
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="group">
            <div className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6 mb-8">
              <About />
            </div>
          </div>
          <Skills />
        </div>
        <Contact />
      </div>
    </main>
  )
}
