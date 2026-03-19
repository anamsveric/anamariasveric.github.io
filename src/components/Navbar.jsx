import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('firefox')

const LANGUAGES = [
  { code: 'HR', flag: '🇭🇷' },
  { code: 'EN', flag: '🇬🇧' },
  { code: 'DE', flag: '🇩🇪' },
  { code: 'IT', flag: '🇮🇹' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLang()

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/projekti', label: t.nav.projects },
    { to: '/hobiji', label: t.nav.hobbies },
    { to: '/kontakt', label: t.nav.contact },
  ]

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 max-w-6xl mx-auto" style={{ left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 2rem)' }}>
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg px-5 py-2.5 flex items-center justify-between">

        {/* Lijevo — Dobrodošli */}
        <Link to="/" className="font-body font-bold text-base text-black tracking-wide hover:text-blue-600 transition-colors duration-300 shrink-0">
          {t.nav.welcome}
        </Link>

        {/* Sredina — nav linkovi (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 ${
                (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)) ? 'text-blue-600 font-bold' : 'text-black font-bold hover:text-blue-600'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desno — lang switcher */}
        <div className="hidden md:flex items-center gap-1 shrink-0">
          {LANGUAGES.map(({ code, flag }) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              title={code}
              className={`leading-none w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                isFirefox ? 'text-base' : 'text-[10px] font-bold text-gray-900'
              } ${
                lang === code
                  ? 'bg-accent/15 ring-1 ring-accent scale-110'
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              {isFirefox ? flag : code}
            </button>
          ))}
        </div>

        {/* Mobitel — hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {LANGUAGES.map(({ code, flag }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                title={code}
                className={`leading-none w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isFirefox ? 'text-base' : 'text-[10px] font-bold text-gray-900'
                } ${
                  lang === code
                    ? 'bg-accent/15 ring-1 ring-accent scale-110'
                    : 'opacity-40 hover:opacity-70'
                }`}
              >
                {isFirefox ? flag : code}
              </button>
            ))}
          </div>
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-base font-medium ${location.pathname === to ? 'text-blue-600' : 'text-black'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
