import { useEffect, useState } from "react"
import ONNIndiaDesk from "./pages/ONNIndiaDesk"

export default function App() {

  const API_URL = "/api"

  const [sendingInquiry, setSendingInquiry] =
    useState(false)

  const [inquirySuccess, setInquirySuccess] =
    useState(false)

  const [inquiryError, setInquiryError] =
    useState(false)

  const [mobileMenu, setMobileMenu] =
    useState(false)

  const [showONNModal, setShowONNModal] =
    useState(false)

  const [form, setForm] = useState({

    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: ""

  })

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowONNModal(true)

    }, 5000)

    return () => clearTimeout(timer)

  }, [])

  const products = [

    {
      title: "ERP Systems",
      price: "₹75K – ₹12L+",
      time: "4–16 Weeks",
      details: [
        "ERP Bridging",
        "Allocation Systems",
        "Approval Systems",
        "Issuance Workflows",
        "Production Visibility",
        "Google Sheets Sync"
      ]
    },

    {
      title: "Workflow Automation",
      price: "₹15K – ₹4L+",
      time: "1–8 Weeks",
      details: [
        "Approval Routing",
        "Escalation Systems",
        "Reminder Engines",
        "Task Pipelines",
        "Notification Logic",
        "Operations Automation"
      ]
    },

    {
      title: "Reporting Systems",
      price: "₹12K – ₹3L",
      time: "1–6 Weeks",
      details: [
        "MIS Dashboards",
        "Production Reports",
        "Factory Visibility",
        "Buyer Reporting",
        "Analytics Systems",
        "Executive Reporting"
      ]
    },

    {
      title: "Operations SaaS",
      price: "₹1L – ₹50L+",
      time: "2–12 Months",
      details: [
        "Factory Platforms",
        "Vendor Portals",
        "Production Tracking",
        "Inventory Systems",
        "Operational Intelligence",
        "AI Infrastructure"
      ]
    }

  ]

  async function submitInquiry() {

    if (
      !form.name ||
      !form.phone ||
      !form.requirement
    ) {

      setInquiryError(true)

      setTimeout(() => {

        setInquiryError(false)

      }, 3000)

      return

    }

    try {

      setSendingInquiry(true)

      const response =
        await fetch(API_URL, {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            action:
              "submit_inquiry",

            ...form,

            source:
              window.location.href

          })

        })

      const text =
        await response.text()

      console.log(
        "RAW API RESPONSE:",
        text
      )

      let data = {}

      try {

        data =
          JSON.parse(text)

      } catch (error) {

        console.error(
          "INVALID JSON:",
          text
        )

        return

      }

      if (data.success) {

        setInquirySuccess(true)

        setTimeout(() => {

          setInquirySuccess(false)

        }, 5000)

        setForm({

          name: "",
          company: "",
          phone: "",
          email: "",
          requirement: ""

        })

      }

    } catch (error) {

      console.error(error)

    } finally {

      setSendingInquiry(false)

    }

  }

  function scrollToSection(id) {

    const element =
      document.getElementById(id)

    if (element) {

      element.scrollIntoView({

        behavior: "smooth"

      })

    }

    setMobileMenu(false)

  }

  if (
    window.location.pathname ===
    "/indian-desk"
  ) {
    return <ONNIndiaDesk />
  }

  return (

    <div className="bg-[#020617] text-white overflow-x-hidden">

      {/* BACKGROUND */}

      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      </div>

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-[99999] border-b border-white/10 bg-black/70 backdrop-blur-2xl">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="ONN"
              className="w-16 md:w-20 object-contain"
            />

            <div>

              <h1 className="font-black text-lg md:text-2xl tracking-wide">
                Offices of Nawnit Nihal
              </h1>

              <p className="text-cyan-400 text-xs md:text-sm">
                Operational Software Systems
              </p>

            </div>

          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">

            <button
              onClick={() =>
                scrollToSection("products")
              }
              className="hover:text-cyan-400 transition"
            >
              Products
            </button>

            <button
              onClick={() =>
                scrollToSection("systems")
              }
              className="hover:text-cyan-400 transition"
            >
              Systems
            </button>

            <button
              onClick={() =>
                scrollToSection("contact")
              }
              className="hover:text-cyan-400 transition"
            >
              Contact
            </button>

            <button
              onClick={() =>
                scrollToSection("contact")
              }
              className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-bold hover:bg-cyan-300 transition"
            >
              Request Demo
            </button>
            <button
            onClick={() =>
            window.location.href =
           "/indian-desk"
           }
           className="bg-green-500 text-black px-5 py-2 rounded-xl font-bold hover:bg-green-400 transition shadow-[0_0_30px_rgba(34,197,94,0.35)]"
           >

           India Desk

          </button>

          </div>

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>

        {
          mobileMenu && (

            <div className="md:hidden border-t border-white/10 px-6 py-4 bg-black/95 space-y-4">

              <button
                onClick={() =>
                  scrollToSection("products")
                }
                className="block w-full text-left"
              >
                Products
              </button>

              <button
                onClick={() =>
                  scrollToSection("systems")
                }
                className="block w-full text-left"
              >
                Systems
              </button>

              <button
                onClick={() =>
                  scrollToSection("contact")
                }
                className="block w-full text-left"
              >
                Contact
              </button>

            </div>

          )
        }

      </nav>

      {/* HERO */}

      <section className="relative pt-44 pb-32 px-8 md:px-20 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 rounded-full px-5 py-2 text-sm mb-8">

            Enterprise Workflow Intelligence

          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] max-w-6xl">

            Industrial
            <span className="text-cyan-400">
              {" "}Operational Systems{" "}
            </span>

            For Manufacturing,
            Workflow Automation &
            Enterprise Execution

          </h1>

          <p className="mt-10 text-lg text-white/65 leading-relaxed max-w-4xl">

            Offices of Nawnit Nihal develops enterprise-grade operational software systems for factories, sourcing offices, manufacturing operations, workflow automation, ERP overlays, production tracking, inventory systems, reporting infrastructure, dashboards, approval systems, AI-assisted workflows, and operational intelligence platforms.

          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <button
              onClick={() =>
                scrollToSection("products")
              }
              className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black hover:bg-cyan-300 transition"
            >
              Explore Systems
            </button>

            <button
              onClick={() =>
                scrollToSection("contact")
              }
              className="border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/5 transition"
            >
              Request Executive Consultation
            </button>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section
        id="products"
        className="relative px-8 md:px-20 py-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">

            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">

              Operational Infrastructure

            </div>

            <h2 className="text-4xl md:text-6xl font-black">

              Enterprise Systems

            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {
              products.map((product, index) => (

                <div
                  key={index}
                  className="rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-cyan-400/30 hover:-translate-y-2 transition duration-300"
                >

                  <div className="flex items-center justify-between mb-6">

                    <h3 className="text-2xl font-black text-cyan-400">

                      {product.title}

                    </h3>

                    <div className="text-xs border border-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">

                      LIVE

                    </div>

                  </div>

                  <div className="text-3xl font-black mb-2">

                    {product.price}

                  </div>

                  <div className="text-white/40 text-sm mb-6">

                    Setup Time:
                    {" "}
                    {product.time}

                  </div>

                  <div className="space-y-3">

                    {
                      product.details.map((detail, i) => (

                        <div
                          key={i}
                          className="flex gap-3 text-white/70 text-sm"
                        >

                          <span className="text-cyan-400">

                            •

                          </span>

                          <span>

                            {detail}

                          </span>

                        </div>

                      ))
                    }

                  </div>

                  <button
                    onClick={() =>
                      scrollToSection("contact")
                    }
                    className="mt-8 w-full py-3 rounded-xl bg-cyan-400 text-black font-black hover:bg-cyan-300 transition"
                  >
                    Request Consultation
                  </button>

                </div>

              ))
            }

          </div>

        </div>

      </section>

      {/* AI SECTION */}

      <section
        id="systems"
        className="px-8 md:px-20 py-24"
      >

        <div className="max-w-7xl mx-auto rounded-[40px] border border-cyan-400/10 bg-white/[0.03] backdrop-blur-2xl p-10 md:p-16">

          <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">

            AI Operational Intelligence

          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-5xl">

            Enterprise AI Systems
            For Operational Decision Infrastructure

          </h2>

          <p className="mt-10 text-lg text-white/65 max-w-4xl leading-relaxed">

            ONN systems integrate AI-assisted reporting, operational analysis, workflow recommendations, production visibility, escalation systems, buyer communication support, and manufacturing execution intelligence.

          </p>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="px-8 md:px-20 py-24"
      >

        <div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 md:p-16">

          <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">

            Enterprise Inquiry

          </div>

          <h2 className="text-4xl md:text-6xl font-black">

            Request Consultation

          </h2>

          <p className="mt-6 text-white/65 max-w-3xl leading-relaxed">

            Tell ONN about your workflows, approvals, ERP environment, operational bottlenecks, production systems, reporting requirements, dashboards, inventory logic, or automation goals.

          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-12">

            <input
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
              placeholder="Full Name *"
              className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              value={form.company}
              onChange={(e) =>
                setForm({
                  ...form,
                  company: e.target.value
                })
              }
              placeholder="Company Name"
              className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value
                })
              }
              placeholder="Phone Number *"
              className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
              placeholder="Email Address"
              className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

          </div>

          <textarea
            rows="6"
            value={form.requirement}
            onChange={(e) =>
              setForm({
                ...form,
                requirement:
                  e.target.value
              })
            }
            placeholder="Describe your operational requirements... *"
            className="mt-5 w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
          />

          <button
            onClick={submitInquiry}
            disabled={sendingInquiry}
            className="mt-8 px-10 py-5 bg-cyan-400 text-black rounded-2xl font-black hover:bg-cyan-300 transition disabled:opacity-50"
          >

            {
              sendingInquiry
                ? "Submitting..."
                : "Submit Enterprise Inquiry"
            }

          </button>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="px-8 md:px-20 py-12 border-t border-white/10 text-white/40 text-sm">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between">

          <div>

            Offices of Nawnit Nihal
            <br />
            Operational Software Systems

          </div>

          <div>

            Enterprise Workflow Infrastructure
            •
            ERP
            •
            AI Systems
            •
            Automation

          </div>

        </div>

      </footer>

      {/* ONNWORK POPUP */}

      {
        showONNModal && (

          <div className="fixed inset-0 z-[99999999] overflow-y-auto bg-black/80 backdrop-blur-sm px-4 py-10 md:py-16 flex justify-center items-start sm:items-center">

            <div className="relative my-auto w-full max-w-[720px] overflow-hidden rounded-[32px] md:rounded-[40px] border border-red-500/20 bg-[#0b0712] shadow-[0_0_120px_rgba(255,0,0,0.4)]">

              <div className="absolute top-[-180px] right-[-100px] w-[420px] h-[420px] rounded-full bg-red-500/30 blur-[120px]"></div>

              <div className="absolute bottom-[-160px] left-[-120px] w-[320px] h-[320px] rounded-full bg-orange-500/10 blur-[100px]"></div>

              <button
                onClick={() =>
                  setShowONNModal(false)
                }
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1d0b12] border border-red-500/30 text-red-500 text-2xl md:text-3xl font-black hover:bg-red-600 hover:text-white transition"
              >

                ×

              </button>

              <div className="relative z-10 px-6 md:px-16 py-14 md:py-20 text-center">

                <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-500 text-white text-[11px] font-black tracking-[0.25em] uppercase shadow-[0_0_35px_rgba(255,0,0,0.6)]">

                  Immediate Enterprise Support

                </div>

                <h2 className="mt-8 md:mt-10 text-[36px] md:text-[82px] leading-[0.95] md:leading-[0.88] tracking-[-0.04em] md:tracking-[-0.06em] font-black text-white">

                  Need Immediate

                  <span className="block text-red-500 drop-shadow-[0_0_35px_rgba(255,0,0,0.9)]">

                    Solutions?

                  </span>

                </h2>

                <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-[14px] md:text-[20px] leading-[1.7] md:leading-[1.9] text-white/70">

                  ERP systems,
                  operational intelligence,
                  workflow automation,
                  reporting infrastructure,
                  production tracking and enterprise execution systems.

                </p>

                <a
                  href="https://jamesmoriarty.in/onnwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center mt-10 md:mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-red-700 via-red-500 to-red-600 px-10 md:px-14 py-4 md:py-6 text-base md:text-xl font-black tracking-[0.08em] text-white shadow-[0_0_70px_rgba(255,0,0,0.9)] hover:scale-[1.04] transition duration-300"
                >

                  <div className="absolute inset-0 animate-pulse bg-white/10"></div>

                  <span className="relative z-10">

                    VISIT ONNwork

                  </span>

                </a>

                <div className="mt-8 md:mt-10 text-xs md:text-sm text-white/35">

                  Continue browsing Offices of Nawnit Nihal

                </div>

              </div>

            </div>

          </div>

        )
      }

      {/* SUCCESS POPUP */}

      {
        inquirySuccess && (

          <div className="fixed top-8 right-8 z-[99999999] w-[390px] max-w-[calc(100vw-24px)] overflow-hidden rounded-[32px] bg-[#04150f] border border-emerald-400/20 shadow-[0_0_80px_rgba(16,185,129,0.35)]">

            <div className="absolute top-[-120px] right-[-80px] w-[240px] h-[240px] rounded-full bg-emerald-400/30 blur-[100px]"></div>

            <div className="relative z-10 px-7 py-8">

              <div className="w-16 h-16 rounded-full bg-emerald-400 text-black text-3xl font-black flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.6)]">

                ✓

              </div>

              <h3 className="mt-5 text-3xl font-black text-white">

                Inquiry Submitted

              </h3>

              <p className="mt-4 text-white/70 leading-[1.8]">

                Offices of Nawnit Nihal has received your enterprise inquiry.
                An executive will contact you shortly.

              </p>

            </div>

          </div>

        )
      }

      {/* ERROR POPUP */}

      {
        inquiryError && (

          <div className="fixed top-8 right-8 z-[99999999] w-[390px] max-w-[calc(100vw-24px)] overflow-hidden rounded-[32px] bg-[#160607] border border-red-500/20 shadow-[0_0_80px_rgba(255,0,0,0.35)]">

            <div className="absolute top-[-120px] right-[-80px] w-[240px] h-[240px] rounded-full bg-red-500/30 blur-[100px]"></div>

            <button
              onClick={() =>
                setInquiryError(false)
              }
              className="absolute top-5 right-5 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#2a0a0d] border border-red-500/30 text-red-400 text-xl font-black hover:bg-red-600 hover:text-white transition"
            >

              ×

            </button>

            <div className="relative z-10 px-7 py-8">

              <div className="w-16 h-16 rounded-full bg-red-500 text-white text-3xl font-black flex items-center justify-center shadow-[0_0_40px_rgba(255,0,0,0.6)]">

                !

              </div>

              <h3 className="mt-5 text-3xl font-black text-white">

                Missing Information

              </h3>

              <p className="mt-4 text-white/70 leading-[1.8]">

                Please fill all mandatory fields before submitting your enterprise inquiry.

              </p>

            </div>

          </div>

        )
      }

    </div>

  )

}