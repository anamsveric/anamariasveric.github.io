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
    <main className="min-h-screen relative overflow-hidden">

      {/* Gradijent pozadina — ista kao Početna */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#3D1278] via-[#1E0A4E] to-[#0E0630] -z-10" />
      <div className="fixed top-0 left-0 w-[700px] h-[550px] bg-gradient-to-br from-orange-400/40 via-rose-500/25 to-transparent rounded-full blur-[90px] -z-10 pointer-events-none" />
      <div className="fixed top-0 right-0 w-[650px] h-[650px] bg-violet-500/40 rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-600/30 rounded-full blur-[80px] -z-10 pointer-events-none" />

      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-white/50 tracking-widest uppercase mb-4">{t.projects.label}</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
            {t.projects.title}
          </h1>
        </div>
      </section>

      {/* O meni — uvod */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-xs text-white/50 tracking-widest uppercase mb-4">{t.about.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {t.about.title}<br />
            <span className="italic font-normal text-white/60">{t.about.title_italic}</span>
          </h2>
          <div className="space-y-4 max-w-3xl">
            <p className="font-body text-white/60 leading-relaxed">{t.about.p1}</p>
            <p className="font-body text-white/60 leading-relaxed">{t.about.p2}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-white/50 border border-white/20 px-3 py-1 hover:border-white/50 hover:text-white transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projekti grid */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projekti.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/5 border border-white/10 p-6 rounded-lg hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-mono text-xs text-white/40 tracking-widest uppercase">{p.tag}</span>
                <h2 className="font-display text-xl font-bold text-white mt-3 mb-2 group-hover:text-white/80 transition-colors duration-300">
                  {p.naziv}
                </h2>
                <p className="font-body text-sm text-white/50 leading-relaxed">{p.opis}</p>
                <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-white/70 transition-colors duration-300">
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

      {/* Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} Anamaria Sverić. {t.contact.footer_rights}
          </p>
          <p className="font-mono text-xs text-white/30">{t.contact.footer_made}</p>
        </div>
      </div>

    </main>
  )
}
