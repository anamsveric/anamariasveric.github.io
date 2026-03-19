import { useLang } from '../context/LanguageContext'

export default function HobijiWeb() {
  const { t } = useLang()

  return (
    <main className="min-h-screen">

      <section className="relative bg-dark overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D1278] via-[#1E0A4E] to-[#0E0630] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-gradient-to-br from-orange-400/35 via-rose-500/20 to-transparent rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/35 rounded-full blur-[110px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{t.hobbies.label}</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
            {t.hobbies.title} <span className="italic font-normal text-white/40">{t.hobbies.title_italic}</span>
          </h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="font-body text-ink/50 text-lg">{t.hobbies.coming_soon}</p>
        </div>
      </section>

      <div className="bg-cream border-t border-ink/10">
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
