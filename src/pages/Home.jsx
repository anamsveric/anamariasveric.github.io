import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Staggered animation on mount
    const elements = heroRef.current?.querySelectorAll('[data-animate]')
    elements?.forEach((el, i) => {
      el.style.animationDelay = `${i * 120}ms`
      el.classList.add('animate-fade-up')
    })
  }, [])

  return (
    <main className="min-h-screen bg-cream" ref={heroRef}>

      {/* Hero section */}
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-24">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          
          {/* Left: tekst */}
          <div>
            {/* Oznaka */}
            <div
              data-animate
              className="opacity-0 inline-flex items-center gap-2 mb-8"
            >
              <span className="block w-8 h-px bg-accent" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                dostupan za projekte
              </span>
            </div>

            {/* Ime */}
            <h1
              data-animate
              className="opacity-0 font-display text-5xl md:text-7xl font-bold text-ink leading-[1.05] mb-6"
            >
              Ime<br />
              <span className="italic font-normal text-muted">Prezime</span>
            </h1>

            {/* Opis */}
            <p
              data-animate
              className="opacity-0 font-body text-lg text-ink/70 leading-relaxed max-w-xl mb-10"
            >
              Web developer i dizajner s fokusom na čista, funkcionalna i lijepa 
              digitalna iskustva. Radim s modernim tehnologijama — React, Node.js, 
              i svime što stoji između ideje i gotovog produkta.
            </p>

            {/* CTA gumbi */}
            <div
              data-animate
              className="opacity-0 flex flex-wrap gap-4"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-ink text-cream font-body text-sm font-medium px-6 py-3 
                           hover:bg-accent transition-colors duration-300"
              >
                Kontaktiraj me
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/projekti"
                className="inline-flex items-center gap-2 border border-ink/30 text-ink font-body text-sm font-medium px-6 py-3 
                           hover:border-ink hover:bg-surface transition-all duration-300"
              >
                Pogledaj projekte
              </a>
            </div>
          </div>

          {/* Right: dekorativni element */}
          <div
            data-animate
            className="opacity-0 hidden md:block"
          >
            <div className="w-64 h-64 relative">
              {/* Placeholder za sliku — zamijeni src s pravom slikom */}
              <div className="w-full h-full bg-surface border border-ink/10 flex items-center justify-center">
                <span className="font-display text-6xl text-ink/20">IP</span>
              </div>
              {/* Dekorativni kvadrat */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/40 -z-10" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          data-animate
          className="opacity-0 mt-20 w-full h-px bg-ink/10"
        />

        {/* Kratke statistike / tagovi */}
        <div
          data-animate
          className="opacity-0 mt-10 flex flex-wrap gap-8"
        >
          {[
            { br: '3+', opis: 'Godine iskustva' },
            { br: '20+', opis: 'Završenih projekata' },
            { br: 'React', opis: 'Primarni stack' },
          ].map(({ br, opis }) => (
            <div key={opis}>
              <p className="font-display text-3xl font-bold text-ink">{br}</p>
              <p className="font-body text-sm text-muted mt-0.5">{opis}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O meni sekcija */}
      <section className="bg-surface border-t border-ink/10">
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              — o meni
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
              Gradim stvari koje<br />
              <span className="italic font-normal">zaista rade.</span>
            </h2>
          </div>

          <div className="space-y-4">
            <p className="font-body text-ink/70 leading-relaxed">
              Pasioniran sam oko web developmenta — od prvih wireframeova do deployanja 
              gotovog projekta. Volim kada tehnologija i dizajn rade zajedno bez kompromisa.
            </p>
            <p className="font-body text-ink/70 leading-relaxed">
              Trenutno sam fokusiran na React ekosustav, ali uvijek gledam širu sliku — 
              korisničko iskustvo, performanse i kod koji je lako čitati i nadograđivati.
            </p>

            {/* Tech stack tagovi */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-ink/60 border border-ink/20 px-3 py-1 
                             hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt sekcija */}
      <section id="kontakt" className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              — kontakt
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
              Imamo projekt?<br />
              <span className="italic font-normal text-muted">Pišimo se.</span>
            </h2>
          </div>

          <div className="space-y-4 md:text-right">
            {/* Mail */}
            <div>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-1">Email</p>
              <a
                href="mailto:ime@email.com"
                className="font-body text-lg text-ink hover:text-accent transition-colors duration-300 
                           underline underline-offset-4 decoration-ink/20 hover:decoration-accent"
              >
                ime@email.com
              </a>
            </div>

            {/* Telefon */}
            <div>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-1">Telefon</p>
              <a
                href="tel:+385911234567"
                className="font-body text-lg text-ink hover:text-accent transition-colors duration-300"
              >
                +385 91 123 4567
              </a>
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-20 pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Ime Prezime. Sva prava pridržana.
          </p>
          <p className="font-mono text-xs text-muted">
            Napravljeno s React + Tailwind
          </p>
        </div>
      </section>

    </main>
  )
}
