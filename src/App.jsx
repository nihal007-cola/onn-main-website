export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="ONN Logo"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-xl font-bold tracking-wide">
              Offices of Nawnit Nihal
            </h1>

            <p className="text-sm text-cyan-400">
              Operational Software Systems
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#">Products</a>
          <a href="#">Industries</a>
          <a href="#">Solutions</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section className="relative px-8 py-24 md:px-20">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl">

          <div className="inline-block px-4 py-2 border border-cyan-400/20 rounded-full text-cyan-300 text-sm bg-cyan-400/5 mb-8">
            Enterprise Workflow Intelligence
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
            Industrial Software
            <span className="text-cyan-400"> Systems </span>
            For Manufacturing,
            Operations & Workflow Automation
          </h1>

          <p className="mt-8 text-lg text-white/70 max-w-3xl leading-relaxed">
            Offices of Nawnit Nihal builds operational software systems for factories,
            sourcing offices, production teams, and growing businesses —
            integrating workflows, approvals, stock movement,
            ERP layers, and execution pipelines into unified digital systems.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4 mt-10">

            <button className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 transition">
              Explore Products
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition">
              Request Demo
            </button>

            <button className="px-8 py-4 border border-cyan-400/20 text-cyan-300 rounded-xl hover:bg-cyan-400/10 transition">
              Telegram
            </button>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-cyan-400">ERP</h2>
              <p className="text-white/60 mt-2 text-sm">
                Compatibility Layers
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-cyan-400">CRM</h2>
              <p className="text-white/60 mt-2 text-sm">
                Sales Automation Systems
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-cyan-400">SaaS</h2>
              <p className="text-white/60 mt-2 text-sm">
                Workflow Platforms
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-cyan-400">Live</h2>
              <p className="text-white/60 mt-2 text-sm">
                Analytics & Monitoring
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}