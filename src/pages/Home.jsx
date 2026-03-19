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
    <main ref={heroRef} className="h-screen flex flex-col relative overflow-hidden">

      {/* Gradijent pozadina — isti kao na ostalim stranicama */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#3D1278] via-[#1E0A4E] to-[#0E0630] -z-10" />
      <div className="fixed top-0 left-0 w-[700px] h-[550px] bg-gradient-to-br from-orange-400/40 via-rose-500/25 to-transparent rounded-full blur-[90px] -z-10 pointer-events-none" />
      <div className="fixed top-0 right-0 w-[650px] h-[650px] bg-violet-500/40 rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-600/30 rounded-full blur-[80px] -z-10 pointer-events-none" />

      {/* Hero section */}
      <section className="relative flex-1 flex items-center">

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-6 w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Lijevo — tekst */}
          <div>

            <h1 data-animate className="opacity-0 font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
              Anamaria <span className="italic font-normal text-white">Sverić</span>
            </h1>

            <p data-animate className="opacity-0 font-body text-lg text-white/50 leading-relaxed max-w-lg mb-10 text-center">
              {t.hero.title}{' '}
              <span className="text-white">{t.hero.title_accent}</span>{' '}
              {t.hero.title_end}
            </p>

            <div data-animate className="opacity-0 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center text-white font-body text-sm font-semibold px-10 py-4 rounded-full transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #7B6FFF 0%, #5B4FEF 100%)' }}
              >
                {t.nav.contact}
              </Link>
              <Link
                to="/projekti"
                className="inline-flex items-center justify-center text-white font-body text-sm font-semibold px-10 py-4 rounded-full transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #7B6FFF 0%, #5B4FEF 100%)' }}
              >
                {t.hero.cta_projects}
              </Link>
            </div>

          </div>

          {/* Desno — slika */}
          <div data-animate className="opacity-0 hidden md:flex justify-end">
            <div className="relative inline-block">
              <img
                src="/foto.jpg.jpg"
                alt="Anamaria Sverić"
                className="max-h-[55vh] w-auto rounded-[40px_0_40px_0] object-cover shadow-2xl"
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
