export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b border-white/10 bg-black/80 backdrop-blur-md">

        {/* LEFT SIDE */}

        <div className="flex items-center gap-4">

          <img
            src="/logo.png"
            alt="ONN Logo"
            className="w-20 md:w-28 h-auto object-contain"
          />

          <div>
            <h1 className="text-lg md:text-2xl font-bold tracking-wide leading-tight">
              Offices of Nawnit Nihal
            </h1>

            <p className="text-xs md:text-sm text-cyan-400">
              Operational Software Systems
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hidden md:flex gap-8 text-sm text-white/70">

          <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            Products
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            Industries
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            Solutions
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="relative px-8 py-24 md:px-20">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl">

          {/* TAG */}

          <div className="inline-block px-4 py-2 border border-cyan-400/20 rounded-full text-cyan-300 text-sm bg-cyan-400/5 mb-8">
            Enterprise Workflow Intelligence
          </div>

          {/* HEADLINE */}

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">

            Industrial Software
            <span className="text-cyan-400"> Systems </span>

            For Manufacturing,
            Operations & Workflow Automation

          </h1>

          {/* DESCRIPTION */}

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

          {/* PRODUCT CARDS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

            {/* ERP */}

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition">

              <h2 className="text-3xl font-bold text-cyan-400">
                ERP
              </h2>

              <p className="text-white/60 mt-2 text-sm">
                Compatibility Layers
              </p>

              <div className="mt-5 text-xs text-white/40 uppercase tracking-wider">
                Starting From
              </div>

              <div className="mt-1 text-2xl font-bold">
                ₹1.5L
              </div>

            </div>

            {/* CRM */}

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition">

              <h2 className="text-3xl font-bold text-cyan-400">
                CRM
              </h2>

              <p className="text-white/60 mt-2 text-sm">
                Sales Automation Systems
              </p>

              <div className="mt-5 text-xs text-white/40 uppercase tracking-wider">
                Starting From
              </div>

              <div className="mt-1 text-2xl font-bold">
                ₹85K
              </div>

            </div>

            {/* SAAS */}

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition">

              <h2 className="text-3xl font-bold text-cyan-400">
                SaaS
              </h2>

              <p className="text-white/60 mt-2 text-sm">
                Workflow Platforms
              </p>

              <div className="mt-5 text-xs text-white/40 uppercase tracking-wider">
                Starting From
              </div>

              <div className="mt-1 text-2xl font-bold">
                ₹2L
              </div>

            </div>

            {/* LIVE */}

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition">

              <h2 className="text-3xl font-bold text-cyan-400">
                Live
              </h2>

              <p className="text-white/60 mt-2 text-sm">
                Analytics & Monitoring
              </p>

              <div className="mt-5 text-xs text-white/40 uppercase tracking-wider">
                Monitoring
              </div>

              <div className="mt-1 text-2xl font-bold">
                24/7
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}