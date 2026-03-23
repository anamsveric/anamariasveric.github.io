import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const placeholders = [
  'from-violet-400 to-indigo-600',
  'from-orange-300 to-rose-500',
]

export default function Projects() {
  const { t } = useLang()

  const projects = [
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

  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* ── HEADER ── */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">{t.projects.label}</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">{t.projects.title}</h1>
          <p className="font-body text-base text-muted max-w-xl leading-relaxed">{t.projects.subtitle}</p>
        </div>
      </section>

      {/* ── PROJEKTI GRID ── */}
      <section className="border-t border-black/5 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} gradient={placeholders[i]} inProgressLabel={t.projects.in_progress} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ── */}
      <section className="border-t border-black/5 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">{t.projects.tech_title}</h2>
          <p className="font-body text-base text-muted max-w-2xl leading-relaxed mb-8">{t.projects.tech_desc}</p>
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
      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
            {project.inProgress && (
              <span className="font-body text-sm text-white/80 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                {inProgressLabel}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="p-6">
        <h2 className="font-display text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors duration-300">
          {project.naziv}
        </h2>
        <p className="font-body text-sm text-muted leading-relaxed mb-4">{project.opis}</p>
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
      <div className="group bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden opacity-70 cursor-default">
        {inner}
      </div>
    )
  }

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer"
      className="group block bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {inner}
    </a>
  )
}
