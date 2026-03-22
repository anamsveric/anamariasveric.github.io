import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Početna' },
    { to: '/projekti', label: 'Projekti' },
    { to: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F3EE]/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Lijevo — logo/naziv */}
        <Link to="/" className="font-display text-lg font-bold text-ink hover:text-accent transition-colors duration-300">
          Dobrodošli
        </Link>

        {/* Desno — nav linkovi (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => {
            const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
            return (
              <Link
                key={to}
                to={to}
                className={`font-body text-sm font-medium transition-colors duration-300 relative ${
                  isActive
                    ? 'text-accent'
                    : 'text-ink/70 hover:text-ink'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Mobitel — hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#F7F3EE] border-t border-black/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-base font-medium ${location.pathname === to ? 'text-accent' : 'text-ink'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
