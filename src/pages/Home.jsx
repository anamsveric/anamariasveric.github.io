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

      {/* Gradijent pozadina */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#5C0FCC] via-[#2E0A85] to-[#080320] -z-10" />
      {/* Val 1 — fuchsia/pink lijevo */}
      <div className="blob-drift-1 fixed top-[-60px] left-[-120px] w-[750px] h-[550px] bg-fuchsia-500/40 rounded-full blur-[95px] -z-10 pointer-events-none" />
      {/* Val 2 — orange/warm centar */}
      <div className="blob-drift-4 fixed top-[80px] left-[180px] w-[550px] h-[380px] bg-orange-400/50 rounded-full blur-[75px] -z-10 pointer-events-none" style={{borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%'}} />
      {/* Val 3 — indigo/plavi desno gore */}
      <div className="blob-drift-2 fixed top-[-80px] right-[-60px] w-[700px] h-[600px] bg-indigo-500/60 rounded-full blur-[100px] -z-10 pointer-events-none" />
      {/* Val 4 — violet dno sredina */}
      <div className="blob-drift-3 fixed bottom-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/45 rounded-full blur-[90px] -z-10 pointer-events-none" />
      {/* Val 5 — rose tanki val dijagonalno */}
      <div className="blob-drift-5 fixed top-1/2 left-[-200px] w-[900px] h-[200px] bg-rose-500/25 rounded-full blur-[70px] -z-10 pointer-events-none" style={{transform: 'rotate(-15deg)'}} />

      {/* Hero section */}
      <section className="relative flex-1 flex items-center">

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-6 w-full grid md:grid-cols-2 gap-8 items-center">

          {/* Slika — na mobilnom gore, na desktopu desno */}
          <div data-animate className="opacity-0 flex justify-center md:hidden">
            <img
              src="/foto.jpg"
              alt="Anamaria Sverić"
              className="h-48 w-auto rounded-[30px_0_30px_0] object-cover shadow-2xl"
            />
          </div>

          {/* Lijevo — tekst */}
          <div>

            <h1 data-animate className="opacity-0 font-display text-4xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
              Anamaria <span className="text-white">Sverić</span>
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

          {/* Desno — slika (samo desktop) */}
          <div data-animate className="opacity-0 hidden md:flex justify-end">
            <div className="relative inline-block">
              <img
                src="/foto.jpg"
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
        <Link to="/privacy" className="font-mono text-xs text-muted hover:text-white/60 transition-colors">
          Politika privatnosti
        </Link>
      </div>

    </main>
  )
}
