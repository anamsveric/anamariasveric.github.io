import { useEffect, useRef } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const heroRef = useRef(null)
  const { t } = useLang()

  useEffect(() => {
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
          
          <div>
            <div data-animate className="opacity-0 inline-flex items-center gap-2 mb-8">
              <span className="block w-8 h-px bg-accent" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                {t.hero.available}
              </span>
            </div>

            <h1 data-animate className="opacity-0 font-display text-5xl md:text-7xl font-bold text-ink leading-[1.05] mb-6">
              Anamaria <span className="italic font-normal text-muted">Sverić</span>
            </h1>

            <p data-animate className="opacity-0 font-body text-lg text-ink/70 leading-relaxed max-w-xl mb-10">
              {t.about.p1}
            </p>

            <div data-animate className="opacity-0 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-ink text-cream font-body text-sm font-medium px-6 py-3 hover:bg-accent transition-colors duration-300"
              >
                {t.hero.cta_contact}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/projekti"
                className="inline-flex items-center gap-2 border border-ink/30 text-ink font-body text-sm font-medium px-6 py-3 hover:border-ink hover:bg-surface transition-all duration-300"
              >
                {t.hero.cta_projects}
              </a>
            </div>
          </div>

          <div data-animate className="opacity-0 hidden md:block">
            <div className="w-64 h-64 relative">
              <div className="w-full h-full bg-surface border border-ink/10 flex items-center justify-center">
                <span className="font-display text-6xl text-ink/20">test</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/40 -z-10" />
            </div>
          </div>
        </div>

        <div data-animate className="opacity-0 mt-20 w-full h-px bg-ink/10" />

        <div data-animate className="opacity-0 mt-10 flex flex-wrap items-center gap-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/40 hover:text-accent transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/40 hover:text-accent transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>

          {/* Divider */}
          <span className="w-px h-5 bg-ink/20" />

          {/* CV link */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-ink/50 hover:text-accent transition-colors duration-300 border border-ink/20 hover:border-accent px-3 py-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            CV.pdf
          </a>
        </div>
      </section>

      {/* O meni sekcija */}
      <section className="bg-surface border-t border-ink/10">
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              {t.about.label}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
              {t.about.title}<br />
              <span className="italic font-normal">{t.about.title_italic}</span>
            </h2>
          </div>

          <div className="space-y-4">
            <p className="font-body text-ink/70 leading-relaxed">TestTestTestTestTest.</p>
            <p className="font-body text-ink/70 leading-relaxed">{t.about.p2}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-ink/60 border border-ink/20 px-3 py-1 hover:border-accent hover:text-accent transition-colors duration-200"
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
              {t.contact.label}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
              {t.contact.title}<br />
              <span className="italic font-normal text-muted">{t.contact.title_italic}</span>
            </h2>
          </div>

          <div className="space-y-4 md:text-right">
            <div>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-1">Email</p>
              <a
                href="mailto:anamaria.sveric@gmail.com"
                className="font-body text-lg text-ink hover:text-accent transition-colors duration-300 underline underline-offset-4 decoration-ink/20 hover:decoration-accent"
              >
                anamaria.sveric@gmail.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-1">{t.contact.phone_label}</p>
              <a
                href="tel:+385911234567"
                className="font-body text-lg text-ink hover:text-accent transition-colors duration-300"
              >
                +385 
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Ime Prezime. {t.contact.footer_rights}
          </p>
          <p className="font-mono text-xs text-muted">{t.contact.footer_made}</p>
        </div>
      </section>

    </main>
  )
}
