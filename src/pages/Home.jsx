import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

export default function Home() {
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
    <main ref={heroRef} className="h-screen flex flex-col">

      {/* Hero section — tamna pozadina */}
      <section className="relative bg-dark overflow-hidden flex-1 flex items-center">
        {/* Gradient — živahna ljubičasta + topla narančasta kao na referenci */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D1278] via-[#1E0A4E] to-[#0E0630] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[700px] h-[550px] bg-gradient-to-br from-orange-400/40 via-rose-500/25 to-transparent rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-violet-500/40 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-600/30 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-6 w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Lijevo — tekst */}
          <div>
            <div data-animate className="opacity-0 inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="block w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-white/60 tracking-widest uppercase">
                {t.hero.available}
              </span>
            </div>

            <h1 data-animate className="opacity-0 font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
              {t.hero.title}{' '}
              <span className="italic font-normal text-accent">{t.hero.title_accent}</span>{' '}
              {t.hero.title_end}
            </h1>

            <p data-animate className="opacity-0 font-body text-lg text-white/50 leading-relaxed max-w-lg mb-10">
              {t.about.p1}
            </p>

            <div data-animate className="opacity-0 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-accent text-white font-body text-sm font-medium px-8 py-4 rounded-full hover:bg-accent/85 transition-colors duration-300"
              >
                {t.nav.contact}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/projekti"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-body text-sm font-medium px-8 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                {t.hero.cta_projects}
              </Link>
            </div>

          </div>

          {/* Desno — slika */}
          <div data-animate className="opacity-0 hidden md:flex justify-end">
            <div className="relative inline-block">
              <img
                src="/foto.jpg"
                alt="Anamaria Sverić"
                className="max-h-[70vh] w-auto rounded-[40px_0_40px_0] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 inset-0 border border-accent/30 rounded-[40px_0_40px_0] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-white/10 max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Anamaria Sverić. {t.contact.footer_rights}
        </p>
        <p className="font-mono text-xs text-muted">{t.contact.footer_made}</p>
      </div>

    </main>
  )
}
