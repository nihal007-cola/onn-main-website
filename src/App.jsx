import { useEffect, useMemo, useRef, useState } from "react"

export default function App() {

  const API_URL =
    import.meta.env.VITE_ONN_API_URL

  const [showChat, setShowChat] =
    useState(false)

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

  const messagesEndRef =
    useRef(null)

  const [form, setForm] =
    useState({

      name: "",
      company: "",
      phone: "",
      email: "",
      requirement: ""

    })

  const sessionId =
    useMemo(() => {

      let existing =
        localStorage.getItem(
          "onn_jim_session"
        )

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

    const timer =
      setTimeout(() => {

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

    return () =>
      clearTimeout(timer)

  }, [])

  useEffect(() => {

    messagesEndRef.current
      ?.scrollIntoView({

        behavior: "smooth"

      })

  }, [messages])

  const products = [

    {

      title:
        "ERP Systems",

      price:
        "₹75K – ₹12L+",

      time:
        "4–16 Weeks",

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

      title:
        "Workflow Automation",

      price:
        "₹15K – ₹4L+",

      time:
        "1–8 Weeks",

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

      title:
        "Reporting Systems",

      price:
        "₹12K – ₹3L",

      time:
        "1–6 Weeks",

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

      title:
        "Operations SaaS",

      price:
        "₹1L – ₹50L+",

      time:
        "2–12 Months",

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
        await fetch(

          API_URL,

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json"

            },

            body:
              JSON.stringify({

                action:
                  "submit_inquiry",

                ...form,

                source:
                  window.location.href

              })

          }

        )

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

    if (!jimInput.trim())
      return

    const userMessage = {

      sender: "user",

      text: jimInput

    }

    setMessages(prev => [

      ...prev,

      userMessage

    ])

    const currentInput =
      jimInput

    setJimInput("")

    try {

      setJimLoading(true)

      const response =
        await fetch(

          API_URL,

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json"

            },

            body:
              JSON.stringify({

                action:
                  "jim_message",

                sessionId,

                message:
                  currentInput,

                source:
                  window.location.href

              })

          }

        )

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

            text:
              data.reply

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
                scrollToSection(
                  "products"
                )
              }
              className="hover:text-cyan-400 transition"
            >
              Products
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "systems"
                )
              }
              className="hover:text-cyan-400 transition"
            >
              Systems
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "contact"
                )
              }
              className="hover:text-cyan-400 transition"
            >
              Contact
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "contact"
                )
              }
              className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-bold hover:bg-cyan-300 transition"
            >
              Request Demo
            </button>

          </div>

          <button
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
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
                  scrollToSection(
                    "products"
                  )
                }
                className="block w-full text-left"
              >
                Products
              </button>

              <button
                onClick={() =>
                  scrollToSection(
                    "systems"
                  )
                }
                className="block w-full text-left"
              >
                Systems
              </button>

              <button
                onClick={() =>
                  scrollToSection(
                    "contact"
                  )
                }
                className="block w-full text-left"
              >
                Contact
              </button>

            </div>

          )

        }

      </nav>

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

        </div>

      </section>

    </div>

  )

}