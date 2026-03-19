import { useLang } from '../context/LanguageContext'

export default function HobijiWeb() {
  const { t } = useLang()

  return (
    <main className="min-h-screen relative overflow-hidden">

      {/* Gradijent pozadina */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#3D1278] via-[#1E0A4E] to-[#0E0630] -z-10" />
      <div className="fixed top-0 left-0 w-[700px] h-[550px] bg-gradient-to-br from-orange-400/40 via-rose-500/25 to-transparent rounded-full blur-[90px] -z-10 pointer-events-none" />
      <div className="fixed top-0 right-0 w-[650px] h-[650px] bg-violet-500/40 rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-600/30 rounded-full blur-[80px] -z-10 pointer-events-none" />

      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-white/50 tracking-widest uppercase mb-4">{t.hobbies.label}</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
            {t.hobbies.title}
          </h1>
        </div>
      </section>

      {/* Psi sekcija */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-xs text-white/50 tracking-widest uppercase mb-4">{t.hobbies.subtitle}</p>
          <p className="font-body text-white/50 leading-relaxed">{t.hobbies.coming_soon}</p>
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
