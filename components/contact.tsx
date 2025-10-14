export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-xl font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>
              <span className="font-medium">Email:</span> ajinkyaudmale1774@gmail.com
            </li>
            <li>
              <span className="font-medium">Phone:</span> +91 73879 85222
            </li>
            <li>
              <span className="font-medium">Location:</span> Karjat, Maharashtra, India
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold">Links</h3>
          <ul className="flex flex-wrap items-center gap-4 text-sm font-semibold">
            <li>
              <a 
                href="https://www.linkedin.com/in/ajinkya-udmale-15b6482a6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent-3 transition-colors flex items-center gap-1"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/ajinkyaudmale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent-2 transition-colors flex items-center gap-1"
              >
                GitHub
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/917387985222?text=Hi%20Ajinkya,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect." 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors flex items-center gap-1"
              >
                <span>WhatsApp</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="inline">
                  <path d="M17.498 14.382a.8.8 0 0 1-.87.363l-2.187-.5a.8.8 0 0 1-.54-.51l-.9-2.5a.8.8 0 0 1 .24-.85l1.5-1.3a.8.8 0 0 0 .23-.94l-1.06-2.4a.8.8 0 0 0-1.36-.19l-3.5 4a.8.8 0 0 0-.17.5v7a.8.8 0 0 0 .8.8h8a.8.8 0 0 0 .8-.8v-6.5a.8.8 0 0 0-.18-.5l-1.5-2z"/>
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.5a8.5 8.5 0 1 1 8.5-8.5 8.51 8.51 0 0 1-8.5 8.5z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer className="mt-12 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ajinkya Udmale — B.Sc Computer Science, Dada Patil Mahavidyalay, Karjat (3rd Year)
      </footer>
    </section>
  )
}
