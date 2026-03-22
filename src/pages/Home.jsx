import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">

          {/* Lijevo — tekst */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-ink/15 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-body text-sm text-ink/60">Dostupna za suradnju</span>
            </div>

            {/* Naslov */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[1.05] mb-6">
              Web<br />
              <span className="bg-gradient-to-r from-accent via-violet-500 to-orange-400 bg-clip-text text-transparent">Razvoj</span><br />
              &amp; Dizajn
            </h1>

            {/* Opis */}
            <p className="font-body text-base text-muted leading-relaxed max-w-md mb-10">
              Stvaram digitalna iskustva koja spajaju lijep dizajn s čistim kodom. Pretvaranje ideja u stvarnost, piksel po piksel.
            </p>

            {/* Gumbi */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projekti"
                className="inline-flex items-center justify-center font-body text-sm font-semibold text-white bg-accent px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Pogledaj projekte
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center font-body text-sm font-semibold text-ink border border-ink/20 px-8 py-3.5 rounded-full hover:border-ink/50 hover:bg-ink/5 transition-all duration-300"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Desno — slika s dekorativnim točkama */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Plava točka gore desno */}
              <div className="absolute -top-4 -right-4 w-5 h-5 rounded-full bg-accent z-10" />
              {/* Narančasta točka dolje lijevo */}
              <div className="absolute -bottom-4 -left-4 w-5 h-5 rounded-full bg-orange-400 z-10" />
              <img
                src="/foto.jpg"
                alt="Anamaria Sverić"
                className="w-72 md:w-80 h-80 md:h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── O MENI ── */}
      <section className="border-t border-black/5 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">O meni</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">Malo o meni</h2>
          <p className="font-body text-base text-muted max-w-xl leading-relaxed mb-12">
            Fokusirana sam na moderan web razvoj — korisničko iskustvo, performanse i kod koji je lako čitati i nadograđivati.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <p className="font-body text-ink/70 leading-relaxed">
                Vjerujem da se odličan softver rađa na sjecištu dizajna i inženjeringa. Svaki projekt dobiva isti fokus na detalje — bilo da se radi o portfoliju ili kompleksnijoj web aplikaciji.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <p className="font-body text-ink/70 leading-relaxed">
                Kad ne kodiram, istražujem nove design trendove i tehnologije. Uvijek otvorena za zanimljive projekte i suradnje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VJEŠTINE ── */}
      <section className="border-t border-black/5 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">Vještine</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-12">Što radim najbolje</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Web razvoj */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-body text-lg font-semibold text-ink mb-2">Web razvoj</h3>
              <p className="font-body text-sm text-muted">React, JavaScript, Tailwind CSS, Git</p>
            </div>

            {/* UI/UX Dizajn */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-body text-lg font-semibold text-ink mb-2">UI/UX Dizajn</h3>
              <p className="font-body text-sm text-muted">Figma, Responzivni dizajn, Korisničko iskustvo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-black/5 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">Radimo zajedno</h2>
          <p className="font-body text-base text-muted mb-10">Imate projekt na umu? Rado ću čuti o tome.</p>
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center font-body text-sm font-semibold text-white bg-accent px-10 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Pošalji poruku
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-black/5 bg-[#F7F3EE]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted">
            © {new Date().getFullYear()} Anamaria Sverić. Sva prava pridržana.
          </p>

          {/* Društvene mreže */}
          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com/anamaria.1058" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="text-muted hover:text-ink transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/anamsveric" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-muted hover:text-ink transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/anamaria-sveri%C4%87-488180159/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-muted hover:text-ink transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.threads.net/@anamsveric" target="_blank" rel="noopener noreferrer" aria-label="Threads"
              className="text-muted hover:text-ink transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.592 12c.024 3.086.715 5.496 2.053 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.689-2.044 1.177-1.248 1.832-3.132 1.906-5.604H12.68v-2.159h9.007c.086.76.116 1.385.116 2.002 0 3.625-.985 6.484-2.932 8.496-1.8 1.86-4.379 2.839-7.684 2.828z"/>
              </svg>
            </a>
            <a href="mailto:anamaria.sveric@gmail.com" aria-label="Email"
              className="text-muted hover:text-ink transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <Link to="/privacy" className="font-body text-sm text-muted hover:text-ink transition-colors duration-300">
            Politika privatnosti
          </Link>
        </div>
      </footer>

    </main>
  )
}
