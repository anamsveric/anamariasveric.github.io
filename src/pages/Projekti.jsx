import { useLang } from '../context/LanguageContext'

export default function Projekti() {
  const { t } = useLang()

  const projekti = [
    {
      id: 1,
      naziv: 'Projekt Jedan',
      opis: 'Kratki opis prvog projekta. Zamijeni s pravim opisom.',
      url: 'https://github.com',
      tag: 'Web App',
    },
    {
      id: 2,
      naziv: 'Projekt Dva',
      opis: 'Kratki opis drugog projekta. Zamijeni s pravim opisom.',
      url: 'https://github.com',
      tag: 'React',
    },
    {
      id: 3,
      naziv: 'Projekt Tri',
      opis: 'Kratki opis trećeg projekta. Zamijeni s pravim opisom.',
      url: 'https://github.com',
      tag: 'Node.js',
    },
  ]

  return (
    <main className="min-h-screen">

      {/* Tamni header */}
      <section className="relative bg-dark overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D1278] via-[#1E0A4E] to-[#0E0630] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-gradient-to-br from-orange-400/35 via-rose-500/20 to-transparent rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/35 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{t.projects.label}</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
            {t.projects.title}
          </h1>
        </div>
      </section>

      {/* O meni — uvod */}
      <section className="bg-surface border-b border-ink/10">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              {t.about.label}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
              {t.about.title}<br />
              <span className="italic font-normal">{t.about.title_italic}</span>
            </h2>
          </div>
          <div className="space-y-4">
            <p className="font-body text-ink/70 leading-relaxed">{t.about.p1}</p>
            <p className="font-body text-ink/70 leading-relaxed">{t.about.p2}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-ink/60 border border-ink/20 px-3 py-1 hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projekti grid */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projekti.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-surface border border-ink/10 p-6 hover:border-accent hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-mono text-xs text-accent tracking-widest uppercase">{p.tag}</span>
                <h2 className="font-display text-xl font-bold text-ink mt-3 mb-2 group-hover:text-accent transition-colors duration-300">
                  {p.naziv}
                </h2>
                <p className="font-body text-sm text-ink/60 leading-relaxed">{p.opis}</p>
                <div className="mt-6 flex items-center gap-2 text-ink/40 group-hover:text-accent transition-colors duration-300">
                  <span className="font-mono text-xs">{t.projects.open}</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Psi sekcija */}
      <section className="bg-surface border-t border-ink/10">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{t.projects.dogs_label}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
              {t.projects.dogs_title}
            </h2>
          </div>
          <div>
            <p className="font-body text-ink/50 leading-relaxed">{t.projects.dogs_soon}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Anamaria Sverić. {t.contact.footer_rights}
          </p>
          <p className="font-mono text-xs text-muted">{t.contact.footer_made}</p>
        </div>
      </div>

    </main>
  )
}
