import { useLang } from '../context/LanguageContext'

export default function Projects() {
  const { t } = useLang()

  const projects = [
    {
      id: 1,
      naziv: 'Projekt Jedan',
      opis: 'Kratki opis prvog projekta. Zamijeni s pravim opisom.',
      url: 'https://github.com',
      tag: 'Web App',
    },
  ]

  return (
    <main className="min-h-screen relative overflow-x-hidden">

      {/* Gradijent pozadina */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#5C0FCC] via-[#2E0A85] to-[#080320] -z-10" />
      <div className="blob-drift-1 fixed top-[-60px] left-[-120px] w-[750px] h-[550px] bg-fuchsia-500/40 rounded-full blur-[95px] -z-10 pointer-events-none" />
      <div className="blob-drift-4 fixed top-[80px] left-[180px] w-[550px] h-[380px] bg-orange-400/50 rounded-full blur-[75px] -z-10 pointer-events-none" style={{borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%'}} />
      <div className="blob-drift-2 fixed top-[-80px] right-[-60px] w-[700px] h-[600px] bg-indigo-500/60 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="blob-drift-3 fixed bottom-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/45 rounded-full blur-[90px] -z-10 pointer-events-none" />
      <div className="blob-drift-5 fixed top-1/2 left-[-200px] w-[900px] h-[200px] bg-rose-500/25 rounded-full blur-[70px] -z-10 pointer-events-none" style={{transform: 'rotate(-15deg)'}} />

      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
            {t.projects.title}
          </h1>
        </div>
      </section>


      {/* O meni — uvod */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-6">
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

      {/* Projects grid */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
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
