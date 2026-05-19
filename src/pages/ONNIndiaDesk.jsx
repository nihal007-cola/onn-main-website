import { useState } from "react";

export default function ONNIndiaDesk() {
  const API_URL = "/api";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    country: "",
    requirement: "",
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    title: "",
    message: "",
    isError: false,
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function showPopup(title, message, isError = false) {
    setPopup({
      show: true,
      title,
      message,
      isError,
    });

    setTimeout(() => {
      setPopup({
        show: false,
        title: "",
        message: "",
        isError: false,
      });
    }, 5000);
  }

  async function submitInquiry(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      showPopup(
        "Missing Information",
        "Please fill all mandatory fields before submitting your India Desk inquiry.",
        true
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          action: "submit_inquiry",

          name: form.name,
          phone: form.phone,
          company: form.company,
          email: form.email,
          country: form.country,
          requirement: form.requirement,

          source: window.location.href,
        }),
      });

      const text = await response.text();

      let data = {};

      try {
        data = JSON.parse(text);
      } catch {
        data = {};
      }

      if (data.success) {
        showPopup(
          "Inquiry Submitted",
          "Your India Desk inquiry has been received.\nONN will contact you shortly."
        );

        setForm({
          name: "",
          phone: "",
          company: "",
          email: "",
          country: "",
          requirement: "",
        });
      } else {
        showPopup(
          "Submission Failed",
          "Unable to submit inquiry. Please try again.",
          true
        );
      }
    } catch (err) {
      console.error(err);

      showPopup(
        "Network Error",
        "Unable to reach ONN servers.",
        true
      );
    } finally {
      setLoading(false);
    }
  }

  function scrollToContact() {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMobileMenuOpen(false);
  }

  return (
    <div className="bg-[#020617] text-white min-h-screen overflow-x-hidden">

      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[180px] rounded-full" />

      </div>

      {/* HEADER */}

      <nav className="fixed top-0 left-0 w-full z-[99999] border-b border-white/10 bg-black/70 backdrop-blur-2xl">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <a
            href="/"
            className="flex items-center gap-4"
          >

            <img
              src="/logo.png"
              alt="ONN"
              className="w-16 md:w-20 object-contain"
            />

            <div>

              <h1 className="font-black text-lg md:text-2xl">

                Offices of Nawnit Nihal

              </h1>

              <p className="text-cyan-400 text-xs">

                India Operations Desk

              </p>

            </div>

          </a>

          <div className="hidden md:flex gap-8">

            <a
              href="/"
              className="hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="/indian-desk"
              className="text-cyan-400"
            >
              India Desk
            </a>

            <button
              onClick={scrollToContact}
              className="hover:text-cyan-400"
            >
              Contact
            </button>

          </div>

          <button
            className="md:hidden text-3xl"
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
          >
            ☰
          </button>

        </div>

        {mobileMenuOpen && (

          <div className="md:hidden border-t border-white/10 bg-black/95 px-6 py-5 space-y-4">

            <a
              href="/"
              className="block"
            >
              Home
            </a>

            <a
              href="/indian-desk"
              className="block text-cyan-400"
            >
              India Desk
            </a>

            <button
              onClick={scrollToContact}
              className="block"
            >
              Contact
            </button>

          </div>

        )}

      </nav>

      {/* HERO */}

      <section className="pt-44 pb-32 px-8">

        <div className="max-w-7xl mx-auto">

          <div className="inline-flex px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">

            ONN INDIA DESK

          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.05]">

            Your Dedicated

            <span className="text-cyan-400">

              {" "}Operations Desk{" "}

            </span>

            in India

          </h1>

          <p className="mt-10 text-lg text-white/65 max-w-4xl">

            We become your local face in India.
            Factory sourcing.
            Vendor verification.
            Factory visits.
            Quality control.
            Logistics coordination.

          </p>

          <button
            onClick={scrollToContact}
            className="mt-10 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black"
          >

            Schedule Consultation

          </button>

        </div>

      </section>

      {/* SERVICES */}

      <section className="px-8 py-24">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black">

            Why Buyers Need India Desk

          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {[
              "Factory Verification",
              "On Ground Presence",
              "Quality Inspection",
              "Export Coordination",
            ].map((item) => (

              <div
                key={item}
                className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8"
              >

                <div className="text-cyan-400 font-black">

                  {item}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FORM */}

      <section
        id="contact"
        className="px-8 pb-32"
      >

        <div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-white/[0.03] p-10">

          <h2 className="text-5xl font-black">

            Ready To Start?

          </h2>

          <form
            onSubmit={submitInquiry}
          >

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name *"
                className="bg-black/40 rounded-2xl px-5 py-4"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Whatsapp Number *"
                className="bg-black/40 rounded-2xl px-5 py-4"
              />

              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company"
                className="bg-black/40 rounded-2xl px-5 py-4"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Business Email"
                className="bg-black/40 rounded-2xl px-5 py-4"
              />

              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Country"
                className="bg-black/40 rounded-2xl px-5 py-4"
              />

            </div>

            <textarea
              rows="5"
              name="requirement"
              value={form.requirement}
              onChange={handleChange}
              placeholder="Requirement"
              className="mt-5 w-full bg-black/40 rounded-2xl px-5 py-4"
            />

            <button
              disabled={loading}
              className="mt-8 px-10 py-5 bg-cyan-400 text-black rounded-2xl font-black"
            >

              {loading
                ? "Submitting..."
                : "Send Inquiry"}

            </button>

          </form>

        </div>

      </section>

      {/* POPUP */}

      {popup.show && (

        <div className="fixed top-8 right-8 z-[99999999] w-[390px] rounded-[32px] overflow-hidden">

          <div
            className={
              popup.isError
                ? "bg-[#160607] border border-red-500/20"
                : "bg-[#04150f] border border-emerald-400/20"
            }
          >

            <div className="px-7 py-8">

              <h3 className="text-3xl font-black">

                {popup.title}

              </h3>

              <p className="mt-4 text-white/70 whitespace-pre-line">

                {popup.message}

              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}