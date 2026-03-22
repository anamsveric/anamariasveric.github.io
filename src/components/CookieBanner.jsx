import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div
        className="max-w-3xl mx-auto bg-white rounded-2xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-lg border border-black/5"
      >
        <p className="font-body text-sm text-muted flex-1 leading-relaxed">
          Koristimo kolačiće za prikazivanje oglasa putem Google AdSense-a.{' '}
          <Link to="/privacy" className="text-accent underline underline-offset-4 hover:text-blue-700 transition-colors">
            Saznaj više
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-body text-sm text-muted hover:text-ink transition-colors px-4 py-2 rounded-full border border-black/10 hover:border-black/30"
          >
            Odbij
          </button>
          <button
            onClick={accept}
            className="font-body text-sm text-white font-semibold bg-accent px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
  )
}
