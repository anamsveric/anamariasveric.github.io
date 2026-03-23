import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

export default function PrivacyPolicy() {
  const { t } = useLang()
  const p = t.privacy

  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* ── HEADER ── */}
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">{p.label}</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            {p.title}
          </h1>
          <p className="font-body text-sm text-muted">
            {p.updated}: {new Date().toLocaleDateString('hr-HR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* ── SADRŽAJ ── */}
      <section className="border-t border-black/5 py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8">

          <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink mb-3">{p.intro_title}</h2>
            <p className="font-body text-base text-muted leading-relaxed">
              {p.intro_text}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink mb-3">{p.ads_title}</h2>
            <p className="font-body text-base text-muted leading-relaxed mb-3">{p.ads_p1}</p>
            <p className="font-body text-base text-muted leading-relaxed mb-3">{p.ads_p2}</p>
            <p className="font-body text-base text-muted leading-relaxed">
              {p.ads_p3}{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:text-blue-700 transition-colors">
                {p.ads_link}
              </a>.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink mb-3">{p.data_title}</h2>
            <p className="font-body text-base text-muted leading-relaxed mb-3">{p.data_p1}</p>
            <p className="font-body text-base text-muted leading-relaxed">
              {p.data_p2}{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:text-blue-700 transition-colors">
                {p.data_link}
              </a>.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink mb-3">{p.gdpr_title}</h2>
            <p className="font-body text-base text-muted leading-relaxed mb-4">{p.gdpr_intro}</p>
            <ul className="space-y-2">
              {p.gdpr_items.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-base text-muted">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink mb-3">{p.contact_title}</h2>
            <p className="font-body text-base text-muted leading-relaxed">
              {p.contact_text}{' '}
              <Link to="/kontakt"
                className="text-accent underline underline-offset-4 hover:text-blue-700 transition-colors">
                {p.contact_link}
              </Link>.
            </p>
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-black/5 mt-8">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted">© {new Date().getFullYear()} Anamaria Sverić. {t.footer.rights}</p>
          <Link to="/" className="font-body text-sm text-muted hover:text-ink transition-colors duration-300">
            ← {t.nav.home}
          </Link>
        </div>
      </footer>

    </main>
  )
}
