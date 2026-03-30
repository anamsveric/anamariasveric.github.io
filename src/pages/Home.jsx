import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/anamsveric',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anamaria-sveri%C4%87-488180159/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/anamaria.1058',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Threads',
    href: 'https://www.threads.net/@anamsveric',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.592 12c.024 3.086.715 5.496 2.053 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.689-2.044 1.177-1.248 1.832-3.132 1.906-5.604H12.68v-2.159h9.007c.086.76.116 1.385.116 2.002 0 3.625-.985 6.484-2.932 8.496-1.8 1.86-4.379 2.839-7.684 2.828z" />
      </svg>
    ),
  },
]

const heroImages = ['/foto.jpg', '/ja.jpg']

export default function Home() {
  const { t } = useLang()
  const roles = t.hero.roles || ['Web Developer', 'UI/UX Designer']

  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentImg, setCurrentImg] = useState(0)
  const [imgFade, setImgFade] = useState(true)

  // Slider – mijenja sliku svakih 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setImgFade(false)
      setTimeout(() => {
        setCurrentImg((prev) => (prev + 1) % heroImages.length)
        setImgFade(true)
      }, 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Typing efekt
  useEffect(() => {
    const fullText = roles[currentRole]
    let timeout

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    } else {
      const speed = isDeleting ? 70 : 110
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? displayText.slice(0, -1)
            : fullText.slice(0, displayText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, roles])

  return (
    <main className="relative z-10 min-h-screen">

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid md:grid-cols-2 gap-10 md:gap-12 items-center py-16 sm:py-20">

          {/* Lijevo */}
          <div>
            <p className="font-body text-xs font-bold tracking-[0.3em] text-accent uppercase mb-4">
              {t.hero.iam}
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight mb-1">
              Anamaria Sverić,
            </h1>

            <div className="flex items-center gap-1 mb-7 min-h-[3rem] sm:min-h-[3.5rem]">
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-8 sm:h-10 bg-accent ml-0.5 animate-pulse" />
            </div>

            <p className="font-body text-sm sm:text-base text-muted leading-relaxed max-w-md mb-8">
              {t.hero.subtitle}
            </p>

            {/* "Saznaj više" vodi na Projekte */}
            <Link
              to="/projekti"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white bg-accent px-7 sm:px-8 py-3.5 rounded-full hover:opacity-90 active:scale-95 transition-all duration-300 mb-10"
            >
              {t.hero.learn_more}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <div>
              <p className="font-body text-xs font-semibold tracking-widest text-muted uppercase mb-3">
                {t.hero.find_me_on}
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-ink/50 hover:text-accent hover:border-accent transition-colors duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Desno – foto slider */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative">
              <img
                src={heroImages[currentImg]}
                alt="Anamaria Sverić"
                className="w-full max-w-xs sm:max-w-sm h-auto rounded-2xl shadow-xl object-cover"
                style={{ opacity: imgFade ? 1 : 0, transition: 'opacity 0.4s ease' }}
              />
              {/* Slider točkice */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setImgFade(false)
                      setTimeout(() => { setCurrentImg(i); setImgFade(true) }, 400)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentImg ? 'bg-accent w-5' : 'bg-ink/20 w-2'}`}
                    aria-label={`Slika ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indikator – sredina dna */}
        <button
          onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted hover:text-accent transition-colors duration-300 group"
          aria-label="Scroll dolje"
        >
          <span className="font-body text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted/30 group-hover:border-accent flex items-start justify-center pt-1.5 transition-colors duration-300">
            <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
          </div>
        </button>

      </section>

      {/* ── CTA ── */}
      <section id="cta" className="border-t border-black/5 py-20 sm:py-24 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4">{t.cta.title}</h2>
          <p className="font-body text-sm sm:text-base text-muted mb-10">{t.cta.subtitle}</p>
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center font-body text-sm font-semibold text-white bg-accent px-10 py-4 rounded-full hover:opacity-90 active:scale-95 transition-all duration-300"
          >
            {t.cta.btn}
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-body text-sm text-muted">© {new Date().getFullYear()} Anamaria Sverić. {t.footer.rights}</p>
          <p className="font-body text-sm text-muted">{t.footer.made}</p>
          <Link to="/privacy" className="font-body text-sm text-muted hover:text-ink transition-colors duration-300">
            {t.footer.privacy}
          </Link>
        </div>
      </footer>

    </main>
  )
}
