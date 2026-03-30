import { Link, useSearchParams } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const placeholders = [
  'from-violet-400 to-indigo-600',
  'from-orange-300 to-rose-500',
  'from-emerald-400 to-teal-600',
]

export default function Projects() {
  const { t } = useLang()
  const [searchParams] = useSearchParams()
  const cat = searchParams.get('cat')

  const showWebsites = !cat || cat === 'websites'
  const showWebapps = !cat || cat === 'webapps'

  const websites = [
    {
      id: 1,
      naziv: t.projects.p1_name,
      opis: t.projects.p1_desc,
      url: 'https://anamsveric.github.io/kucni-ljubimci/',
      tags: ['React', 'Tailwind CSS'],
      img: 'https://anamsveric.github.io/kucni-ljubimci/oba1.jpg',
      inProgress: false,
    },
    {
      id: 2,
      naziv: t.projects.p2_name,
      opis: t.projects.p2_desc,
      url: 'https://anamsveric.github.io/restaurantveritas/',
      tags: ['HTML', 'CSS', 'JavaScript'],
      img: 'https://anamsveric.github.io/restaurantveritas/veritas.jpg',
      inProgress: false,
    },
  ]

  const webapps = [
    {
      id: 3,
      naziv: t.projects.p3_name,
      opis: t.projects.p3_desc,
      url: 'https://anamsveric.github.io/budget/',
      tags: ['React', 'JavaScript'],
      img: null,
      icon: '💶',
      inProgress: true,
    },
  ]

  return (
    <main className="relative z-10 min-h-screen">

      {/* ── HEADER ── */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-4">{t.projects.title}</h1>
          <nav className="flex items-center justify-center gap-2 font-body text-sm text-muted mb-4">
            <Link to="/" className="hover:text-accent transition-colors">{t.nav.home}</Link>
            <svg className="w-4 h-4 text-muted/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-accent font-medium">{t.nav.projects}</span>
          </nav>
          <p className="font-body text-base text-muted leading-relaxed max-w-xl mx-auto">{t.projects.subtitle}</p>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="border-b border-black/5 bg-white/90 backdrop-blur-sm sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 py-3">
            <Link
              to="/projekti"
              className={`font-body text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 ${
                !cat ? 'bg-accent text-white' : 'text-ink/60 hover:text-ink hover:bg-ink/5'
              }`}
            >
              Sve
            </Link>
            <Link
              to="/projekti?cat=websites"
              className={`font-body text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 ${
                cat === 'websites' ? 'bg-accent text-white' : 'text-ink/60 hover:text-ink hover:bg-ink/5'
              }`}
            >
              {t.projects.cat_website}
            </Link>
            <Link
              to="/projekti?cat=webapps"
              className={`font-body text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 ${
                cat === 'webapps' ? 'bg-accent text-white' : 'text-ink/60 hover:text-ink hover:bg-ink/5'
              }`}
            >
              {t.projects.cat_webapp}
            </Link>
          </div>
        </div>
      </div>

      {/* ── WEB STRANICE ── */}
      {showWebsites && (
        <section id="web-stranice" className="py-12 sm:py-16 bg-white/70 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-ink mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-accent inline-block" />
              {t.projects.cat_website}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((p, i) => (
                <ProjectCard key={p.id} project={p} gradient={placeholders[i]} inProgressLabel={t.projects.in_progress} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WEB APLIKACIJE ── */}
      {showWebapps && (
        <section id="web-aplikacije" className={`py-12 sm:py-16 bg-white/70 backdrop-blur-sm ${showWebsites ? 'border-t border-black/5' : ''}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-ink mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-accent inline-block" />
              {t.projects.cat_webapp}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webapps.map((p) => (
                <ProjectCard key={p.id} project={p} gradient={placeholders[2]} inProgressLabel={t.projects.in_progress} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TECH ── */}
      <section className="border-t border-black/5 py-12 sm:py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">{t.projects.tech_title}</h2>
          <p className="font-body text-base text-muted leading-relaxed mb-8 text-justify">{t.projects.tech_desc}</p>
          <div className="flex flex-wrap gap-2">
            {['React', 'JavaScript', 'Tailwind CSS', 'Git', 'Claude Code'].map((tech) => (
              <span key={tech} className="font-body text-xs text-ink/60 border border-ink/15 px-3 py-1.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>
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

function ProjectCard({ project, gradient, inProgressLabel }) {
  const inner = (
    <>
      <div className="relative overflow-hidden rounded-t-2xl">
        {project.img ? (
          <img src={project.img} alt={project.naziv} className="w-full h-52 object-cover" />
        ) : (
          <div className={`w-full h-52 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            {project.icon ? (
              <span className="text-6xl drop-shadow-md">{project.icon}</span>
            ) : project.inProgress && (
              <span className="font-body text-sm text-white/80 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                {inProgressLabel}
              </span>
            )}
          </div>
        )}
        {project.inProgress && (
          <span className="absolute top-3 right-3 font-body text-xs font-medium text-white bg-accent/90 px-3 py-1 rounded-full">
            {inProgressLabel}
          </span>
        )}
      </div>

      <div className="p-6">
        <h2 className="font-display text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors duration-300">
          {project.naziv}
        </h2>
        <p className="font-body text-sm text-muted leading-relaxed mb-4 text-justify">{project.opis}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-body text-xs text-ink/60 bg-ink/5 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </>
  )

  if (!project.url) {
    return (
      <div className="group bg-white rounded-2xl border border-black/5 border-b-2 border-l-2 border-b-accent border-l-accent shadow-sm overflow-hidden opacity-70 cursor-default">
        {inner}
      </div>
    )
  }

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer"
      className="group block bg-white rounded-2xl border border-black/5 border-b-2 border-l-2 border-b-accent border-l-accent shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {inner}
    </a>
  )
}
