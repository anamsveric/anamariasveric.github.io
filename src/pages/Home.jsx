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
          <p className="font-body text-sm text-muted">Napravljeno s React + Tailwind</p>

          <Link to="/privacy" className="font-body text-sm text-muted hover:text-ink transition-colors duration-300">
            Politika privatnosti
          </Link>
        </div>
      </footer>

    </main>
  )
}
