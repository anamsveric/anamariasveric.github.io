import { Link } from 'react-router-dom'

const CV_UPDATED = '21.03.2026'

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/anamaria.1058',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/anamsveric',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anamaria-sveri%C4%87-488180159/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
  },
  {
    label: 'Threads',
    href: 'https://www.threads.net/@anamsveric',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.592 12c.024 3.086.715 5.496 2.053 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.689-2.044 1.177-1.248 1.832-3.132 1.906-5.604H12.68v-2.159h9.007c.086.76.116 1.385.116 2.002 0 3.625-.985 6.484-2.932 8.496-1.8 1.86-4.379 2.839-7.684 2.828z"/></svg>
    ),
  },
]

export default function Contact() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* ── HEADER ── */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">Kontakt</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            Povežimo se
          </h1>
          <p className="font-body text-base text-muted max-w-xl leading-relaxed">
            Imate projekt ili samo želite pozdraviti? Pišite mi i javit ću se što prije.
          </p>
        </div>
      </section>

      {/* ── SADRŽAJ ── */}
      <section className="border-t border-black/5 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Lijevo — usluge + email */}
            <div className="space-y-10">

              {/* Što mogu napraviti */}
              <div>
                <h2 className="font-display text-2xl font-bold text-ink mb-5">Što mogu napraviti za Vas?</h2>
                <ul className="space-y-3">
                  {[
                    'Web stranica (portfolio, tvrtka, obrt)',
                    'Landing page',
                    'Prilagodba i redesign postojeće stranice',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-base text-muted">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Email kartica */}
              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest text-muted uppercase mb-1">Email</p>
                    <a
                      href="mailto:anamaria.sveric@gmail.com"
                      className="font-body text-base text-ink hover:text-accent transition-colors duration-300"
                    >
                      anamaria.sveric@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Lokacija kartica */}
              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest text-muted uppercase mb-1">Lokacija</p>
                    <p className="font-body text-base text-ink">Pula — u blizini Bazilike M. Formoze i Foruma</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-black/5" style={{ height: '200px' }}>
                  <iframe
                    title="Lokacija"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=13.8396%2C44.8660%2C13.8476%2C44.8700&layer=mapnik&marker=44.8680%2C13.8436"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* Desno — društvene mreže + CV */}
            <div className="space-y-10">

              {/* Društvene mreže */}
              <div>
                <h2 className="font-display text-2xl font-bold text-ink mb-5">Pronađite me online</h2>
                <div className="space-y-3">
                  {socials.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                    >
                      <span className="text-muted group-hover:text-accent transition-colors duration-300">{icon}</span>
                      <span className="font-body text-sm font-medium text-ink group-hover:text-accent transition-colors duration-300">{label}</span>
                      <svg className="w-4 h-4 text-muted ml-auto group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* CV */}
              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                <p className="font-body text-base font-semibold text-ink mb-1">CV u PDF obliku</p>
                <p className="font-body text-sm text-muted mb-4">Za više informacija o drugom radnom iskustvu.</p>
                <div className="flex items-center gap-3">
                  <a
                    href="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-white bg-accent px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Preuzmi CV
                  </a>
                  <span className="font-body text-xs text-muted">ažurirano {CV_UPDATED}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted">
            © {new Date().getFullYear()} Anamaria Sverić. Sva prava pridržana.
          </p>
          <p className="font-body text-sm text-muted">Napravljeno s React + Tailwind</p>
          <Link to="/privacy" className="font-body text-sm text-muted hover:text-ink transition-colors duration-300">
            Politika privatnosti
          </Link>
        </div>
      </footer>

    </main>
  )
}
