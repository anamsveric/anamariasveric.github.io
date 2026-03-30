import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const LANGUAGES = [
  { code: 'HR', label: 'Hrvatski' },
  { code: 'EN', label: 'English' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'IT', label: 'Italiano' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLang()
  const langRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
      if (projectsRef.current && !projectsRef.current.contains(e.target)) setProjectsOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setProjectsOpen(false)
    setLangOpen(false)
  }, [location])

  const isProjectsActive = location.pathname.startsWith('/projekti')
  const isAboutActive = location.pathname.startsWith('/o-meni')

  // Klase za nav linkove
  const navCls = (active) =>
    `font-body text-sm font-medium transition-colors duration-200 relative whitespace-nowrap ${
      active
        ? 'text-accent'
        : 'text-ink/70 hover:text-accent'
    }`

  const activeLine = (
    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-display text-base sm:text-lg font-bold text-ink hover:text-accent transition-colors duration-200 shrink-0">
          Anamaria Sverić
        </Link>

        {/* Desktop nav – apsolutno centriran */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8">

          {/* Home */}
          <Link to="/" className={navCls(location.pathname === '/')}>
            {t.nav.home}
            {location.pathname === '/' && activeLine}
          </Link>

          {/* About */}
          <Link to="/o-meni" className={navCls(isAboutActive)}>
            {t.nav.about}
            {isAboutActive && activeLine}
          </Link>

          {/* Projects – tekst vodi na /projekti, strelica otvara dropdown */}
          <div className="relative flex items-center" ref={projectsRef}>
            <Link to="/projekti" className={navCls(isProjectsActive)}>
              {t.nav.projects}
              {isProjectsActive && activeLine}
            </Link>
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="ml-1 text-ink/40 hover:text-accent transition-colors duration-200 focus:outline-none"
              aria-label="Otvori podizbornik projekti"
            >
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${projectsOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {projectsOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white border border-black/5 rounded-xl shadow-lg py-1 min-w-[160px]">
                <Link
                  to="/projekti?cat=websites"
                  className="block px-4 py-2.5 font-body text-sm text-ink/70 hover:text-accent hover:bg-pink-50 transition-colors duration-200"
                >
                  {t.nav.web_pages}
                </Link>
                <Link
                  to="/projekti?cat=webapps"
                  className="block px-4 py-2.5 font-body text-sm text-ink/70 hover:text-accent hover:bg-pink-50 transition-colors duration-200"
                >
                  {t.nav.web_apps}
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link to="/kontakt" className={navCls(location.pathname === '/kontakt')}>
            {t.nav.contact}
            {location.pathname === '/kontakt' && activeLine}
          </Link>

        </div>

        {/* Desna strana: language + hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Language dropdown – desktop */}
          <div className="hidden md:block relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 font-body text-sm font-medium text-ink/60 hover:text-accent transition-colors duration-200"
            >
              {lang}
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-black/5 rounded-xl shadow-lg py-1 min-w-[130px]">
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setLangOpen(false) }}
                    className={`w-full text-left px-4 py-2 font-body text-sm transition-colors duration-200 ${
                      lang === code ? 'text-accent font-semibold bg-pink-50' : 'text-ink/70 hover:text-accent hover:bg-pink-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobilni: language + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="font-body text-xs font-semibold text-ink/60 hover:text-accent transition-colors"
              >
                {lang}
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-black/5 rounded-xl shadow-lg py-1 min-w-[130px]">
                  {LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => { setLang(code); setLangOpen(false) }}
                      className={`w-full text-left px-4 py-2 font-body text-sm transition-colors duration-200 ${
                        lang === code ? 'text-accent font-semibold bg-pink-50' : 'text-ink/70 hover:text-accent'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="flex flex-col gap-1.5 p-1 group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-ink group-hover:bg-accent transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-ink group-hover:bg-accent transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-ink group-hover:bg-accent transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-black/5 px-4 sm:px-6 py-4 flex flex-col gap-1">
          <Link to="/" className={`font-body text-base font-medium py-2 transition-colors ${location.pathname === '/' ? 'text-accent' : 'text-ink hover:text-accent'}`}>
            {t.nav.home}
          </Link>
          <Link to="/o-meni" className={`font-body text-base font-medium py-2 transition-colors ${isAboutActive ? 'text-accent' : 'text-ink hover:text-accent'}`}>
            {t.nav.about}
          </Link>
          <div>
            <Link to="/projekti" className={`font-body text-base font-medium py-2 block transition-colors ${isProjectsActive ? 'text-accent' : 'text-ink hover:text-accent'}`}>
              {t.nav.projects}
            </Link>
            <div className="pl-4 flex flex-col gap-1 pb-1">
              <Link to="/projekti?cat=websites" className="font-body text-sm text-ink/60 py-1 hover:text-accent transition-colors">
                {t.nav.web_pages}
              </Link>
              <Link to="/projekti?cat=webapps" className="font-body text-sm text-ink/60 py-1 hover:text-accent transition-colors">
                {t.nav.web_apps}
              </Link>
            </div>
          </div>
          <Link to="/kontakt" className={`font-body text-base font-medium py-2 transition-colors ${location.pathname === '/kontakt' ? 'text-accent' : 'text-ink hover:text-accent'}`}>
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </nav>
  )
}
