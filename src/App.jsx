import { useEffect, useMemo, useRef, useState } from "react"

export default function App() {

  const API_URL = "/api"

  const [showChat, setShowChat] = useState(false)

  const [sendingInquiry, setSendingInquiry] =
    useState(false)

  const [inquirySuccess, setInquirySuccess] =
    useState(false)

  const [jimLoading, setJimLoading] =
    useState(false)

  const [jimInput, setJimInput] =
    useState("")

  const [messages, setMessages] =
    useState([])

  const [mobileMenu, setMobileMenu] =
    useState(false)

  const messagesEndRef = useRef(null)

  const [form, setForm] = useState({

    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: ""

  })

  const sessionId = useMemo(() => {

    let existing =
      localStorage.getItem("onn_jim_session")

    if (!existing) {

      existing =
        "JIM-" +
        Date.now()

      localStorage.setItem(
        "onn_jim_session",
        existing
      )

    }

    return existing

  }, [])

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowChat(true)

      if (messages.length === 0) {

        setMessages([

          {

            sender: "jim",

            text:
`Hello. I'm Jim.

I help businesses understand ONN operational systems, ERP workflows, inventory visibility, dashboards, workflow automation, reporting systems, production tracking, and manufacturing operations.

How can ONN assist your operational infrastructure today?`

          }

        ])

      }

    }, 5000)

    return () => clearTimeout(timer)

  }, [])

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({

      behavior: "smooth"

    })

  }, [messages])

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

      alert(
        "Please complete required fields."
      )

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

        alert(
          "Backend returned invalid response."
        )

        return

      }

      if (data.success) {

        setInquirySuccess(true)

        setForm({

          name: "",
          company: "",
          phone: "",
          email: "",
          requirement: ""

        })

      } else {

        alert(
          data.error ||
          "Inquiry submission failed."
        )

      }

    } catch (error) {

      console.error(error)

      alert(
        "Server connection failed."
      )

    } finally {

      setSendingInquiry(false)

    }

  }

  async function sendJimMessage() {

    if (!jimInput.trim()) return

    const userMessage = {

      sender: "user",
      text: jimInput

    }

    setMessages(prev => [

      ...prev,
      userMessage

    ])

    const currentInput = jimInput

    setJimInput("")

    try {

      setJimLoading(true)

      const response =
        await fetch(API_URL, {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            action:
              "jim_message",

            sessionId,

            message:
              currentInput,

            source:
              window.location.href

          })

        })

      const text =
        await response.text()

      console.log(
        "RAW JIM RESPONSE:",
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

        setMessages(prev => [

          ...prev,

          {

            sender: "jim",

            text:
              "Operational backend returned invalid response."

          }

        ])

        return

      }

      if (data.success) {

        setMessages(prev => [

          ...prev,

          {

            sender: "jim",

            text: data.reply

          }

        ])

      } else {

        setMessages(prev => [

          ...prev,

          {

            sender: "jim",

            text:
              data.error ||
              "Operational processing failed."

          }

        ])

      }

    } catch (error) {

      console.error(error)

    } finally {

      setJimLoading(false)

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

  return (

    <div className="bg-[#020617] text-white overflow-x-hidden">

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
            placeholder="Describe your operational requirements..."
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

          {
            inquirySuccess && (

              <div className="mt-6 text-cyan-400 font-semibold">

                Inquiry submitted successfully.
                ONN has received your request.

              </div>

            )
          }

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

      {/* JIM */}

      {
        showChat && (

          <div className="fixed bottom-6 right-6 z-[999999] w-[380px] max-w-[calc(100vw-24px)] rounded-[30px] border border-cyan-400/20 bg-black/95 backdrop-blur-2xl shadow-2xl overflow-hidden">

            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

              <div>

                <div className="text-cyan-400 text-xl font-black">

                  JIM

                </div>

                <div className="text-xs text-white/50">

                  ONN Executive AI Consultant

                </div>

              </div>

              <button
                onClick={() =>
                  setShowChat(false)
                }
                className="text-2xl text-white/40 hover:text-white"
              >
                ×
              </button>

            </div>

            <div className="h-[360px] overflow-y-auto p-5 space-y-4">

              {
                messages.map((msg, index) => (

                  <div
                    key={index}
                    className={
                      msg.sender === "user"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }
                  >

                    <div
                      className={
                        msg.sender === "user"
                          ? "max-w-[85%] bg-cyan-400 text-black rounded-2xl px-4 py-3 text-sm"
                          : "max-w-[85%] bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white/80 whitespace-pre-line"
                      }
                    >

                      {msg.text}

                    </div>

                  </div>

                ))
              }

              {
                jimLoading && (

                  <div className="text-cyan-400 text-sm">

                    Jim is analyzing operational requirements...

                  </div>

                )
              }

              <div ref={messagesEndRef}></div>

            </div>

            <div className="border-t border-white/10 p-4">

              <textarea
                value={jimInput}
                onChange={(e) =>
                  setJimInput(
                    e.target.value
                  )
                }
                placeholder="Ask Jim about ERP systems, workflow automation, dashboards, inventory systems, reporting, factory operations..."
                className="w-full h-24 resize-none bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400"
              />

              <button
                onClick={sendJimMessage}
                disabled={jimLoading}
                className="w-full mt-4 py-3 rounded-2xl bg-cyan-400 text-black font-black hover:bg-cyan-300 transition disabled:opacity-50"
              >

                {
                  jimLoading
                    ? "Processing..."
                    : "Start AI Consultation"
                }

              </button>

              <div className="mt-3 text-[11px] text-white/30 leading-relaxed">

                Live conversations are securely logged into ONN operational infrastructure and can be escalated directly to executive operators via Telegram relay systems.

              </div>

            </div>

          </div>

        )
      }

    </div>

  )

}