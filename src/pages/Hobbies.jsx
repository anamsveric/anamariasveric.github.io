export default function Hobbies() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">

      {/* Gradijent pozadina */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#5C0FCC] via-[#2E0A85] to-[#080320] -z-10" />
      <div className="blob-drift-1 fixed top-[-60px] left-[-120px] w-[750px] h-[550px] bg-fuchsia-500/40 rounded-full blur-[95px] -z-10 pointer-events-none" />
      <div className="blob-drift-4 fixed top-[80px] left-[180px] w-[550px] h-[380px] bg-orange-400/50 rounded-full blur-[75px] -z-10 pointer-events-none" style={{borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%'}} />
      <div className="blob-drift-2 fixed top-[-80px] right-[-60px] w-[700px] h-[600px] bg-indigo-500/60 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="blob-drift-3 fixed bottom-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/45 rounded-full blur-[90px] -z-10 pointer-events-none" />
      <div className="blob-drift-5 fixed top-1/2 left-[-200px] w-[900px] h-[200px] bg-rose-500/25 rounded-full blur-[70px] -z-10 pointer-events-none" style={{transform: 'rotate(-15deg)'}} />

      {/* Provođenje slobodnog vremena */}
      <section className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">Provođenje slobodnog vremena</h2>
          <p className="font-body text-white/50 leading-relaxed">Stranica u izradi — uskoro dostupno.</p>
        </div>
      </section>

      {/* Psi sekcija */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">Psi</h2>
          <p className="font-body text-white/50 leading-relaxed">Stranica u izradi — uskoro dostupno.</p>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} Anamaria Sverić. Sva prava pridržana.
          </p>
          <p className="font-mono text-xs text-white/30">Napravljeno s React + Tailwind</p>
        </div>
      </div>

    </main>
  )
}
