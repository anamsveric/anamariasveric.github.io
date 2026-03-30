import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const skillIcons = [
  <svg key="design" className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>,
  <svg key="ux" className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
  </svg>,
  <svg key="code" className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="responsive" className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>,
]

export default function About() {
  const { t } = useLang()
  const ap = t.about_page

  const skills = [
    { title: ap.skill1_title, icon: skillIcons[0] },
    { title: ap.skill2_title, icon: skillIcons[1] },
    { title: ap.skill3_title, icon: skillIcons[2] },
    { title: ap.skill4_title, icon: skillIcons[3] },
  ]

  return (
    <main className="relative z-10 min-h-screen">

      {/* ── O MENI – tekst kartice ── */}
      <section className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">{t.about.label}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4">{t.about.title}</h2>
          <p className="font-body text-base text-muted leading-relaxed mb-10 max-w-xl mx-auto">{t.about.desc}</p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 border-b-2 border-l-2 border-b-accent border-l-accent shadow-sm">
              <p className="font-body text-ink/70 leading-relaxed text-sm sm:text-base">{t.about.card1}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 border-b-2 border-l-2 border-b-accent border-l-accent shadow-sm">
              <p className="font-body text-ink/70 leading-relaxed text-sm sm:text-base">{t.about.card2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VJEŠTINE – 4 kartice + 2 detaljne ── */}
      <section className="border-t border-black/5 py-14 sm:py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3 text-center">{t.skills.label}</p>

          {/* 2 veće kartice */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 border-b-2 border-l-2 border-b-accent border-l-accent shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-body text-lg font-semibold text-ink mb-2">{t.skills.s1_name}</h3>
              <p className="font-body text-sm text-muted">{t.skills.s1_desc}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 border-b-2 border-l-2 border-b-accent border-l-accent shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-body text-lg font-semibold text-ink mb-2">{t.skills.s2_name}</h3>
              <p className="font-body text-sm text-muted">{t.skills.s2_desc}</p>
            </div>
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
