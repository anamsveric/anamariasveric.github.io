import { useEffect, useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Kontakt() {
  const { t } = useLang()
  const [cvDate, setCvDate] = useState(null)

  useEffect(() => {
    fetch('/cv.pdf', { method: 'HEAD' })
      .then(res => {
        const lastModified = res.headers.get('Last-Modified')
        if (lastModified) {
          const date = new Date(lastModified)
          setCvDate(date.toLocaleDateString('hr-HR', { day: '2-digit', month: '2-digit', year: 'numeric' }))
        }
      })
      .catch(() => {})
  }, [])

  return (
    <main className="min-h-screen">

      {/* Cijela stranica — ljubičasta pozadina kao Početna */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D1278] via-[#1E0A4E] to-[#0E0630] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[700px] h-[550px] bg-gradient-to-br from-orange-400/40 via-rose-500/25 to-transparent rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-violet-500/40 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-600/30 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 w-full">

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-16">
            {t.contact.write}
          </h1>

          <div className="flex flex-col md:flex-row gap-16">

            {/* Kontakt info */}
            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">Email</p>
                <a
                  href="mailto:anamaria.sveric@gmail.com"
                  className="font-body text-xl text-white hover:text-white/70 transition-colors duration-300 underline underline-offset-4 decoration-white/20"
                >
                  anamaria.sveric@gmail.com
                </a>
              </div>

              <div>
                <p className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">{t.contact.phone_label}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <a href="tel:+385917938803" className="font-body text-xl text-white hover:text-white/70 transition-colors duration-300">
                    +385 91 793 8803
                  </a>
                  <a href="https://wa.me/385917938803" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity duration-300" style={{color:'#25D366'}} aria-label="WhatsApp">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="viber://chat?number=%2B385917938803" className="opacity-70 hover:opacity-100 transition-opacity duration-300" style={{color:'#7360F2'}} aria-label="Viber">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.4 0C6.37.008 2.298 1.73.814 5.163-.017 7.148-.31 9.07.25 14.95l.003.024c.609 5.553 3.897 7.68 6.613 8.259v2.421a.35.35 0 00.596.247l1.674-1.771c.8.069 1.565.093 2.263.086 5.015-.009 10.09-1.726 11.576-5.16.83-1.984 1.125-3.907.563-9.786C23.025 3.486 18.714.009 11.4 0zm6.43 17.47c-1.2 1.287-3.677 2.03-6.857 1.909l-.57-.02-2.13 2.254v-2.497c-2.447-.44-5.076-2.078-5.622-7.124-.525-5.522-.258-7.276.446-8.937C4.198 1.396 7.647.255 11.367.246h.037c6.527 0 10.37 3.025 10.895 8.316.526 5.523.259 7.277-.47 8.908z"/>
                      <path d="M16.494 14.24c-.423-.257-.826-.373-1.194-.14l-.97.615c-.37.235-.648.241-.973-.015-.67-.522-1.453-1.177-2.154-2.278-.698-1.099-.994-2.068-.965-2.892.018-.47.175-.672.481-.79l.97-.372c.368-.141.548-.42.462-.876l-.567-3.008c-.087-.456-.376-.619-.797-.506-.935.255-1.777.893-2.28 1.766C7.967 7.03 8.04 8.538 9.116 10.705c1.041 2.098 2.11 3.344 3.744 4.518 1.013.722 2.282 1.213 3.408.873.427-.128 1.005-.591 1.19-1.254.159-.575-.074-.91-.964-1.602z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* CV */}
              <div>
                <p className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">{t.contact.cv_label}</p>
                <div className="flex items-center gap-3">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/50 px-3 py-1.5 rounded"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    CV.pdf
                  </a>
                  {cvDate && (
                    <span className="font-mono text-xs text-white/25">{t.hero.cv_updated} {cvDate}</span>
                  )}
                </div>
              </div>

              {/* Društvene mreže */}
              <div>
                <p className="font-mono text-xs text-white/40 tracking-widest uppercase mb-3">{t.contact.social_label}</p>
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/anamaria.1058" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity duration-300" style={{color:'#1877F2'}} aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/anamsveric" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity duration-300" style={{color:'#E1306C'}} aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://www.threads.net/@anamsveric" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300" aria-label="Threads">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.592 12c.024 3.086.715 5.496 2.053 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.689-2.044 1.177-1.248 1.832-3.132 1.906-5.604H12.68v-2.159h9.007c.086.76.116 1.385.116 2.002 0 3.625-.985 6.484-2.932 8.496-1.8 1.86-4.379 2.839-7.684 2.828z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-white/30">
              © {new Date().getFullYear()} Anamaria Sverić. {t.contact.footer_rights}
            </p>
            <p className="font-mono text-xs text-white/30">{t.contact.footer_made}</p>
          </div>
        </div>
      </section>

    </main>
  )
}
