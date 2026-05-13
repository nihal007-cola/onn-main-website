export default function App() {

  const products = [
    {
      title: "ERP Layer",
      price: "₹75K – ₹12L+",
      time: "4–16 Weeks",
      details: [
        "ERP Bridging",
        "Google Sheets Sync",
        "Approval Flows",
        "Allocation Systems",
        "Issuance Logic",
        "Vendor Panels",
        "Excel Automation"
      ]
    },

    {
      title: "Reporting Systems",
      price: "₹12K – ₹3L",
      time: "1–6 Weeks",
      details: [
        "MIS Automation",
        "Buyer Dashboards",
        "Stock Reports",
        "Email Reports",
        "Data Cleaning",
        "Production Reporting"
      ]
    },

    {
      title: "CRM Systems",
      price: "₹25K – ₹4L+",
      time: "2–10 Weeks",
      details: [
        "Lead Tracking",
        "Sales Pipelines",
        "WhatsApp CRM",
        "Quotation Workflows",
        "Activity Tracking",
        "Email Integration"
      ]
    },

    {
      title: "Sales Automation",
      price: "₹15K – ₹2.5L+",
      time: "1–8 Weeks",
      details: [
        "Automated Outreach",
        "Lead Routing",
        "Proposal Generation",
        "Follow-up Systems",
        "Sales Reporting",
        "Reminder Engines"
      ]
    },

    {
      title: "Dashboards",
      price: "₹40K – ₹5L+",
      time: "2–12 Weeks",
      details: [
        "KPI Dashboards",
        "Production Monitoring",
        "Factory Visibility",
        "Live Stock Monitoring",
        "Executive Panels",
        "Role Access"
      ]
    },

    {
      title: "Notification Systems",
      price: "₹10K – ₹1L+",
      time: "1–4 Weeks",
      details: [
        "WhatsApp Alerts",
        "Low Stock Warnings",
        "Dispatch Alerts",
        "Delay Notifications",
        "Escalation Systems",
        "Approval Reminders"
      ]
    },

    {
      title: "Operations SaaS",
      price: "₹1L – ₹50L+",
      time: "2–12 Months",
      details: [
        "Trim Management",
        "Factory Systems",
        "Vendor Portals",
        "Dispatch Tracking",
        "Compliance Systems",
        "Production Control"
      ]
    },

    {
      title: "Mobile Apps",
      price: "+₹50K / +₹75K",
      time: "Addon",
      details: [
        "Android Apps",
        "iOS Apps",
        "Operational Mobility",
        "Live Notifications",
        "Mobile Dashboards",
        "Workflow Apps"
      ]
    }
  ]

  return (

    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* STICKY NAVBAR */}

      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-2 border-b border-white/10 bg-black/90 backdrop-blur-xl">

        <div className="flex items-center gap-4">

          <img
            src="/logo.png"
            alt="ONN Logo"
            className="w-16 md:w-20 h-auto object-contain"
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

        <div className="hidden md:flex gap-8 text-sm text-white/70">

          <a href="#products" className="hover:text-cyan-400 transition">
            Products
          </a>

          <a href="#systems" className="hover:text-cyan-400 transition">
            Systems
          </a>

          <a href="#pricing" className="hover:text-cyan-400 transition">
            Pricing
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative px-8 py-24 md:px-20 min-h-screen">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl">

          <div className="inline-block px-4 py-2 border border-cyan-400/20 rounded-full text-cyan-300 text-sm bg-cyan-400/5 mb-8">
            Enterprise Workflow Intelligence
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-6xl">

            Industrial Software
            <span className="text-cyan-400"> Systems </span>

            For Manufacturing,
            Operations &
            Workflow Automation

          </h1>

          <p className="mt-8 text-lg text-white/70 max-w-4xl leading-relaxed">

            Offices of Nawnit Nihal builds operational software systems for factories,
            sourcing offices, production teams, and growing businesses —
            integrating workflows, approvals, stock movement,
            ERP layers, spreadsheets, reporting systems,
            dashboards, and execution pipelines into unified digital infrastructure.

          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4 mt-10">

            <button className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 transition">
              Explore Products
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition">
              Request Executive Demo
            </button>

            <button className="px-8 py-4 border border-cyan-400/20 text-cyan-300 rounded-xl hover:bg-cyan-400/10 transition">
              AI Consultation
            </button>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section
        id="products"
        className="px-8 md:px-20 py-20"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Operational Systems
          </h2>

          <p className="text-white/60 max-w-3xl mb-14 text-lg">
            Enterprise-grade workflow systems, ERP overlays,
            automation infrastructure, reporting layers,
            dashboards, SaaS platforms, and operational intelligence.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {products.map((product, index) => (

              <div
                key={index}
                className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300"
              >

                <div className="flex items-center justify-between mb-4">

                  <h3 className="text-2xl font-bold text-cyan-400">
                    {product.title}
                  </h3>

                  <div className="text-xs text-cyan-300 border border-cyan-400/20 px-2 py-1 rounded-full">
                    LIVE
                  </div>

                </div>

                <div className="text-3xl font-black mb-2">
                  {product.price}
                </div>

                <div className="text-sm text-white/50 mb-6">
                  Setup Time: {product.time}
                </div>

                <div className="space-y-3">

                  {product.details.map((detail, i) => (

                    <div
                      key={i}
                      className="text-sm text-white/70 flex items-start gap-2"
                    >
                      <span className="text-cyan-400">
                        •
                      </span>

                      {detail}
                    </div>

                  ))}

                </div>

                <button className="mt-8 w-full py-3 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition">
                  Request Consultation
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* AI SECTION */}

      <section
        id="systems"
        className="px-8 md:px-20 py-20"
      >

        <div className="max-w-7xl mx-auto rounded-[40px] border border-cyan-400/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-16">

          <div className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-4">
            Powered By OpenAI
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-5xl">
            AI Assisted Operational Decision Systems
          </h2>

          <p className="mt-8 text-white/70 text-lg max-w-4xl leading-relaxed">

            ONN systems can integrate AI-assisted operational analysis,
            workflow recommendations, reporting intelligence,
            buyer communication support,
            escalation logic, and business monitoring systems.

          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="p-6 rounded-2xl border border-white/10 bg-black/30">
              <h3 className="text-cyan-400 text-xl font-bold">
                AI Reporting
              </h3>

              <p className="text-white/60 mt-3">
                Executive summaries, operational insights,
                and production analytics.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-black/30">
              <h3 className="text-cyan-400 text-xl font-bold">
                AI Workflow Intelligence
              </h3>

              <p className="text-white/60 mt-3">
                Intelligent operational flow suggestions
                and escalation detection.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-black/30">
              <h3 className="text-cyan-400 text-xl font-bold">
                AI Communication
              </h3>

              <p className="text-white/60 mt-3">
                AI-assisted buyer communication,
                summaries, and automation support.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT FORM */}

      <section
        id="contact"
        className="px-8 md:px-20 py-24"
      >

        <div className="max-w-4xl mx-auto text-center">

          <div className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-4">
            Enterprise Inquiry
          </div>

          <h2 className="text-4xl md:text-6xl font-black">
            Request Consultation
          </h2>

          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Tell us about your factory,
            workflows, reporting requirements,
            approvals, ERP environment,
            operational bottlenecks, or automation goals.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-14">

            <input
              placeholder="Full Name"
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              placeholder="Company Name"
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              placeholder="Phone Number"
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              placeholder="Email Address"
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

          </div>

          <textarea
            rows="6"
            placeholder="Describe your operational requirements..."
            className="mt-5 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
          ></textarea>

          <button className="mt-8 px-10 py-5 bg-cyan-400 text-black font-black rounded-2xl hover:bg-cyan-300 transition text-lg">
            Submit Inquiry
          </button>

          <div className="mt-10 text-white/40 text-sm">
            Powered by ONN Systems Infrastructure + OpenAI Intelligence
          </div>

        </div>

      </section>

    </div>
  )
}