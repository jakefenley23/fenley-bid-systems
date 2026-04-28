import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "New Business Websites",
    description:
      "Professional websites built from the ground up for businesses that need a credible online presence.",
  },
  {
    icon: Wrench,
    title: "Website Redesigns",
    description:
      "Modernize an outdated website with a cleaner design, stronger messaging, and better customer flow.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Design",
    description:
      "Responsive layouts that look sharp on phones, tablets, and desktops.",
  },
  {
    icon: Target,
    title: "Contact & Quote Forms",
    description:
      "Simple lead capture forms that make it easier for customers to reach out.",
  },
  {
    icon: Search,
    title: "Basic SEO Setup",
    description:
      "Foundational search setup, page titles, descriptions, and structure to help customers find you online.",
  },
  {
    icon: ShieldCheck,
    title: "Hosting & Maintenance",
    description:
      "Ongoing website hosting, updates, support, and small content changes.",
  },
];

const industries = [
  "Contractors",
  "Handyman Services",
  "Home Services",
  "Professional Services",
  "Local Businesses",
];

const highlights = [
  {
    icon: Star,
    title: "Professional Look",
    description:
      "A polished website that makes your business look established and trustworthy.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description:
      "Built for the way customers actually search, mostly from their phones.",
  },
  {
    icon: Target,
    title: "Growth Focused",
    description:
      "Clear messaging and calls to action that make it easy for visitors to contact you.",
  },
  {
    icon: ShieldCheck,
    title: "Managed For You",
    description:
      "Hosting, maintenance, support, and small updates handled for you.",
  },
];

const planFeatures = [
  "Custom professional website",
  "Mobile-friendly design",
  "Contact form setup",
  "Basic SEO setup",
  "Hosting and maintenance",
  "Small monthly content updates",
];

const processSteps = [
  {
    number: "01",
    title: "I build the preview",
    description:
      "I create a professional website preview for your business with no upfront build cost.",
  },
  {
    number: "02",
    title: "You review it",
    description:
      "You get to see the design first and decide if it feels like a good fit for your company.",
  },
  {
    number: "03",
    title: "Go live monthly",
    description:
      "If you like it, we move into a simple monthly plan that includes the website, hosting, support, and updates.",
  },
];

const portfolioItems = [
  {
    title: "Fenley Bid Systems",
    label: "Live Website",
    description:
      "Professional website agency homepage built to explain the offer clearly and convert local businesses.",
  },
  {
    title: "Wright Renovations & Handyman",
    label: "Concept Design",
    description:
      "Home remodeling and handyman website concept designed to build trust and generate estimate requests.",
  },
  {
    title: "Idea Designs",
    label: "Concept Design",
    description:
      "Small business website concept focused on clean branding, simple messaging, and clear calls to action.",
  },
];

function LogoMark() {
  return (
    <div className="relative h-14 w-14 shrink-0">
      <div className="absolute left-1 top-0 h-3 w-11 skew-x-[-28deg] rounded-sm bg-blue-500" />
      <div className="absolute left-1 top-5 h-3 w-9 skew-x-[-28deg] rounded-sm bg-blue-400" />
      <div className="absolute left-1 top-10 h-3 w-6 skew-x-[-28deg] rounded-sm bg-blue-300" />
      <div className="absolute left-1 top-2 h-12 w-3 skew-y-[-35deg] rounded-sm bg-blue-600" />
    </div>
  );
}

function ConsultationForm() {
  const [state, handleSubmit] = useForm("maqarnrg");

  if (state.succeeded) {
    return (
      <div className="rounded-[2rem] border border-green-400/30 bg-white p-8 text-slate-950 shadow-2xl">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h3 className="mt-5 text-2xl font-black">Request received.</h3>
        <p className="mt-3 leading-7 text-slate-600">
          Thank you for reaching out to Fenley Bid Systems. We received your website preview request and will follow up soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-950 shadow-2xl"
    >
      <h3 className="text-2xl font-black">Request a Free Website Mockup</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Tell us about your business. Your information will be sent directly to Fenley Bid Systems.
      </p>
      <input
        type="hidden"
        name="_subject"
        value="New Fenley Bid Systems Website Mockup Request"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-bold">Name *</label>
          <input
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            placeholder="Your name"
          />
          <ValidationError
            field="name"
            errors={state.errors}
            className="mt-1 text-sm text-red-600"
          />
        </div>

        <div>
          <label className="text-sm font-bold">Company *</label>
          <input
            name="company"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            placeholder="Business name"
          />
          <ValidationError
            field="company"
            errors={state.errors}
            className="mt-1 text-sm text-red-600"
          />
        </div>

        <div>
          <label className="text-sm font-bold">Email *</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            placeholder="you@example.com"
          />
          <ValidationError
            field="email"
            errors={state.errors}
            className="mt-1 text-sm text-red-600"
          />
        </div>

        <div>
          <label className="text-sm font-bold">Phone *</label>
          <input
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            placeholder="(555) 555-5555"
          />
          <ValidationError
            field="phone"
            errors={state.errors}
            className="mt-1 text-sm text-red-600"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm font-bold">What do you need? *</label>
        <select
          name="service"
          required
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        >
          <option value="">Select one</option>
          <option>New website</option>
          <option>Website redesign</option>
          <option>Landing page</option>
          <option>Website maintenance</option>
          <option>Not sure yet</option>
        </select>
        <ValidationError
          field="service"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      <div className="mt-4">
        <label className="text-sm font-bold">Project details *</label>
        <textarea
          name="message"
          required
          rows="5"
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          placeholder="Tell us about your business, services, current website if you have one, and what you want customers to do when they visit your site."
        />
        <ValidationError
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? "Sending..." : "Request Free Mockup"}
        <ArrowRight className="h-5 w-5" />
      </button>
      <ValidationError errors={state.errors} className="mt-4 text-sm text-red-600" />
    </form>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-4">
            <LogoMark />
            <div>
              <h1 className="text-2xl font-black tracking-[0.2em] text-white">FENLEY</h1>
              <p className="text-sm font-semibold tracking-[0.35em] text-slate-300">BID SYSTEMS</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400">
                Professional websites. Measurable growth.
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-200 md:flex">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#pricing" className="hover:text-blue-400">Pricing</a>
            <a href="#portfolio" className="hover:text-blue-400">Portfolio</a>
            <a href="#consultation" className="hover:text-blue-400">Contact</a>
          </nav>

          <a
            href="#consultation"
            className="hidden rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 md:inline-flex"
          >
            Free Mockup
          </a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-blue-600 blur-3xl" />
            <div className="absolute bottom-[-20%] right-[-5%] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl" />
          </div>
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-200">
                <Globe2 className="h-4 w-4" />
                No Upfront Build Cost
              </div>
              <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
                Professional websites built before you pay.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Fenley Bid Systems builds modern, mobile-friendly websites for small businesses. I build the preview first, you review it, and if you like it, we move into a simple monthly service plan.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/30 transition hover:bg-blue-500"
                >
                  Get a Free Website Mockup
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
                >
                  View Monthly Plan
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-900 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-400">Website Project Snapshot</p>
                    <p className="text-2xl font-black">Built For Growth</p>
                  </div>
                  <div className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-bold">Live</div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-5 text-slate-950">
                    <p className="text-sm font-semibold text-slate-500">Mobile Ready</p>
                    <p className="mt-2 text-4xl font-black">100%</p>
                    <p className="mt-2 text-sm text-slate-500">Built for all devices</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 text-slate-950">
                    <p className="text-sm font-semibold text-slate-500">Starting Plan</p>
                    <p className="mt-2 text-4xl font-black">$149</p>
                    <p className="mt-2 text-sm text-slate-500">Monthly website service</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 text-slate-950 sm:col-span-2">
                    <p className="text-sm font-semibold text-slate-500">Website Structure</p>
                    <div className="mt-5 grid grid-cols-4 gap-3 text-center text-xs font-bold text-white">
                      {["Home", "Services", "Work", "Contact"].map((item) => (
                        <div key={item} className="rounded-xl bg-blue-500 p-4">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 border-slate-200 md:border-r md:pr-6 last:border-r-0"
              >
                <item.icon className="h-9 w-9 shrink-0 text-blue-600" />
                <div>
                  <h3 className="font-black uppercase tracking-wide">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">How It Works</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 md:text-5xl">
                See the website before you commit
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The goal is simple. Remove the risk, show you the value, then make the monthly plan easy to say yes to.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {processSteps.map((step) => (
                <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <p className="text-sm font-black tracking-[0.25em] text-blue-600">{step.number}</p>
                  <h3 className="mt-4 text-2xl font-black uppercase tracking-tight">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-400">Website Services</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">
                Websites built to look sharp and convert
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Fenley Bid Systems creates professional websites that help small businesses build trust, explain their services, and turn online visitors into real conversations.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <service.icon className="h-12 w-12 text-blue-400" />
                  <h3 className="mt-6 text-xl font-black uppercase tracking-wide">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">Simple Monthly Pricing</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 md:text-5xl">
                No upfront build cost.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                I build your website first. If you like it and want to keep it live, we move into a monthly service plan. If it is not a fit, there is no obligation.
              </p>
            </div>

            <div className="rounded-[2rem] border border-blue-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Website Plan</p>
                  <h3 className="mt-2 text-3xl font-black">Professional Website Service</h3>
                  <p className="mt-2 max-w-xl leading-7 text-slate-300">
                    Best for small businesses that want a professional online presence without a large upfront website bill.
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="text-5xl font-black">$149</p>
                  <p className="font-semibold text-slate-300">per month</p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {planFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 font-semibold text-slate-100">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-300" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-blue-400/30 bg-blue-500/10 p-5">
                <p className="font-bold text-blue-100">
                  Simple pitch: I build the site first. You only move forward if you like it and want to keep it live.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">Portfolio</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 md:text-5xl">
                Recent Website Concepts
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A look at modern website designs created for local service businesses.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-56 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6">
                    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:32px_32px]" />
                    <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                      <span className="w-fit rounded-full bg-blue-500/20 px-3 py-1 text-xs font-black uppercase tracking-widest text-blue-200">
                        {item.label}
                      </span>
                      <div>
                        <div className="mb-3 h-3 w-28 rounded-full bg-blue-300/70" />
                        <div className="mb-2 h-3 w-44 rounded-full bg-white/30" />
                        <div className="h-3 w-32 rounded-full bg-white/20" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black uppercase tracking-tight">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">Who We Build For</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 md:text-5xl">
              Websites for businesses like yours
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-5">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <BriefcaseBusiness className="mx-auto h-10 w-10 text-blue-600" />
                  <h3 className="mt-5 text-sm font-black uppercase tracking-wide text-slate-900">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-400">About Fenley Bid Systems</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">
                A clean website can change the way customers see your business.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>
                Fenley Bid Systems helps local businesses create professional websites that build credibility, present services clearly, and make customer contact simple.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Professional presentation", "Clear service pages", "Simple contact flow", "Hosting and support"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 font-semibold text-white">
                    <CheckCircle2 className="h-5 w-5 text-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="consultation" className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-400">Start the Conversation</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">
                Request a free website mockup.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Fill out the form and tell us about your business. I will review your information and follow up directly.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:fenleybidsystems@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-white transition hover:bg-white/10"
                >
                  <Mail className="h-6 w-6 text-blue-400" />
                  fenleybidsystems@gmail.com
                </a>
                <a
                  href="tel:8327553203"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-6 w-6 text-blue-400" />
                  (832) 755-3203
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-white">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  Serving businesses nationwide
                </div>
              </div>
            </div>

            <ConsultationForm />
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-6 pb-10 text-white">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4">
                <LogoMark />
                <div>
                  <p className="text-2xl font-black tracking-[0.2em]">FENLEY</p>
                  <p className="text-sm font-semibold tracking-[0.35em] text-slate-300">BID SYSTEMS</p>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
                Professional websites. Measurable growth.
              </p>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-wide">Website Services</h4>
              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <p>New Websites</p>
                <p>Website Redesigns</p>
                <p>Landing Pages</p>
                <p>Hosting & Maintenance</p>
              </div>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-wide">Contact</h4>
              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <p>fenleybidsystems@gmail.com</p>
                <p>(832) 755-3203</p>
              </div>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-slate-500">
            © 2026 Fenley Bid Systems. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
