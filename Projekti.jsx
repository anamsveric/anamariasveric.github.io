export default function Projekti() {
  // Ovdje ćeš dodavati projekte — svaki ima: naziv, opis, url i tag
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
    <main className="min-h-screen bg-cream">
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-24">
        
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            — moji radovi
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight">
            Projekti
          </h1>
        </div>

        {/* Grid blokova */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projekti.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-surface border border-ink/10 p-6 
                         hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              {/* Tag */}
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                {p.tag}
              </span>

              {/* Naziv */}
              <h2 className="font-display text-xl font-bold text-ink mt-3 mb-2 
                             group-hover:text-accent transition-colors duration-300">
                {p.naziv}
              </h2>

              {/* Opis */}
              <p className="font-body text-sm text-ink/60 leading-relaxed">
                {p.opis}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-ink/40 group-hover:text-accent transition-colors duration-300">
                <span className="font-mono text-xs">Otvori projekt</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
