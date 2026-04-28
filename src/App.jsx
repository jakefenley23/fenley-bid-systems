import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight, BarChart3, BriefcaseBusiness, Building2, CheckCircle2, ClipboardList, Mail, MapPin, Phone, ShieldCheck, Sparkles, Target, Workflow, Wrench } from "lucide-react";

const solutions = [
  { icon: Building2, title: "Professional Websites", description: "Modern, mobile-friendly websites built to strengthen credibility and convert visitors into real customers." },
  { icon: Target, title: "Lead Generation Systems", description: "Quote forms, contact flows, and follow-up systems designed to capture and organize qualified opportunities." },
  { icon: Workflow, title: "CRM & Automation", description: "Simple systems that help track leads, manage follow-ups, and reduce manual administrative work." },
  { icon: ClipboardList, title: "Proposal & Estimating Systems", description: "Professional templates and bid systems that help companies quote faster and present sharper." },
  { icon: Wrench, title: "Business Process Optimization", description: "Operational workflows that improve organization, accountability, and day-to-day efficiency." },
  { icon: BarChart3, title: "Data & Performance Dashboards", description: "Clear reporting tools that help business owners understand activity, leads, and growth opportunities." }
];

const industries = ["Contractors", "Industrial Services", "Professional Services", "Retail & Local Business", "Healthcare & Wellness"];

const highlights = [
  { icon: Target, title: "Strategic Approach", description: "We align technology and processes with your business goals for practical results." },
  { icon: Workflow, title: "Smarter Operations", description: "Streamline workflows, reduce manual work, and improve consistency." },
  { icon: BarChart3, title: "Measurable Results", description: "Systems built to generate leads, track activity, and support better decisions." },
  { icon: ShieldCheck, title: "Built to Scale", description: "Professional systems that can grow with your business instead of holding it back." }
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
          Thank you for reaching out to Fenley Bid Systems. We received your consultation request and will follow up soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-950 shadow-2xl">
      <h3 className="text-2xl font-black">Request a Consultation</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">Tell us a little about your business and what you need. Your information will be sent directly to Fenley Bid Systems.</p>

      <input type="hidden" name="_subject" value="New Fenley Bid Systems Consultation Request" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-bold">Name *</label>
          <input name="name" type="text" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="Your name" />
          <ValidationError field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
        </div>
        <div>
          <label className="text-sm font-bold">Company</label>
          <input name="company" type="text" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="Business name" />
        </div>
        <div>
          <label className="text-sm font-bold">Email *</label>
          <input name="email" type="email" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="you@example.com" />
          <ValidationError field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
        </div>
        <div>
          <label className="text-sm font-bold">Phone *</label>
          <input name="phone" type="tel" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="(555) 555-5555" />
          <ValidationError field="phone" errors={state.errors} className="mt-1 text-sm text-red-600" />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm font-bold">What do you need help with? *</label>
        <select name="service" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600">
          <option value="">Select one</option>
          <option>New website</option>
          <option>Website redesign</option>
          <option>Landing page</option>
          <option>Lead capture / contact form</option>
          <option>Not sure yet</option>
        </select>
        <ValidationError field="service" errors={state.errors} className="mt-1 text-sm text-red-600" />
      </div>

      <div className="mt-4">
        <label className="text-sm font-bold">Project details *</label>
        <textarea name="message" required rows="5" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="Tell us about your business, current website, goals, and timeline." />
        <ValidationError field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
      </div>

      <button type="submit" disabled={state.submitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60">
        {state.submitting ? "Sending..." : "Send Consultation Request"} <ArrowRight className="h-5 w-5" />
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
          <div className="flex items-center gap-4">
            <LogoMark />
            <div>
              <h1 className="text-2xl font-black tracking-[0.2em] text-white">FENLEY</h1>
              <p className="text-sm font-semibold tracking-[0.35em] text-slate-300">BID SYSTEMS</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400">Professional systems. Measurable growth.</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-200 md:flex">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#solutions" className="hover:text-blue-400">Solutions</a>
            <a href="#industries" className="hover:text-blue-400">Industries</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#consultation" className="hover:text-blue-400">Contact</a>
          </nav>
          <a href="#consultation" className="hidden rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 md:inline-flex">Schedule a Consultation</a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-blue-600 blur-3xl" />
            <div className="absolute bottom-[-20%] right-[-5%] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-200">
                <Sparkles className="h-4 w-4" /> Websites + Business Systems
              </div>
              <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">Professional systems. Measurable growth.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">We build professional websites and business systems that help companies operate smarter and grow faster.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#consultation" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/30 transition hover:bg-blue-500">
                  Schedule a Consultation <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#solutions" className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950">Explore Solutions</a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-900 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-400">Business Growth Dashboard</p>
                    <p className="text-2xl font-black">Systems Overview</p>
                  </div>
                  <div className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-bold">Live</div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-5 text-slate-950"><p className="text-sm font-semibold text-slate-500">New Leads</p><p className="mt-2 text-4xl font-black">42</p><p className="mt-2 text-sm text-slate-500">Captured this month</p></div>
                  <div className="rounded-2xl bg-white p-5 text-slate-950"><p className="text-sm font-semibold text-slate-500">Follow-Ups</p><p className="mt-2 text-4xl font-black">18</p><p className="mt-2 text-sm text-slate-500">Automated tasks</p></div>
                  <div className="rounded-2xl bg-white p-5 text-slate-950 sm:col-span-2">
                    <p className="text-sm font-semibold text-slate-500">Pipeline Activity</p>
                    <div className="mt-5 flex h-24 items-end gap-3">
                      {[42, 68, 54, 80, 62, 90, 76].map((height, index) => (
                        <div key={index} className="flex-1 rounded-t-xl bg-blue-500" style={{ height: `${height}%` }} />
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
              <div key={item.title} className="flex gap-4 border-slate-200 md:border-r md:pr-6 last:border-r-0">
                <item.icon className="h-9 w-9 shrink-0 text-blue-600" />
                <div><h3 className="font-black uppercase tracking-wide">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-400">Our Solutions</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">Systems that drive growth</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Fenley Bid Systems helps businesses create the digital infrastructure and operational systems needed to look professional, stay organized, and grow with confidence.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <div key={solution.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <solution.icon className="h-12 w-12 text-blue-400" />
                  <h3 className="mt-6 text-xl font-black uppercase tracking-wide">{solution.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">Industries We Serve</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 md:text-5xl">Built for businesses like yours</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-5">
              {industries.map((industry) => (
                <div key={industry} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <BriefcaseBusiness className="mx-auto h-10 w-10 text-blue-600" />
                  <h3 className="mt-5 text-sm font-black uppercase tracking-wide text-slate-900">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div><p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">About Fenley Bid Systems</p><h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">Practical systems for serious business growth.</h2></div>
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>Fenley Bid Systems partners with businesses to create professional digital presence and modern operational systems that improve efficiency, strengthen credibility, and support measurable growth.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Professional presentation", "Lead-focused systems", "Operational organization", "Growth-minded execution"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-semibold text-slate-900"><CheckCircle2 className="h-5 w-5 text-blue-600" /> {item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="consultation" className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-400">Start the Conversation</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">Request a website consultation.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Fill out the form and tell us what you are looking for. We will review your information and follow up directly.</p>
              <div className="mt-8 space-y-4">
                <a href="mailto:fenleybidsystems@gmail.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-white transition hover:bg-white/10"><Mail className="h-6 w-6 text-blue-400" /> fenleybidsystems@gmail.com</a>
                <a href="tel:8327553203" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-white transition hover:bg-white/10"><Phone className="h-6 w-6 text-blue-400" /> (832) 755-3203</a>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-white"><MapPin className="h-6 w-6 text-blue-400" /> Serving businesses nationwide</div>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-6 pb-10 text-white">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2"><div className="flex items-center gap-4"><LogoMark /><div><p className="text-2xl font-black tracking-[0.2em]">FENLEY</p><p className="text-sm font-semibold tracking-[0.35em] text-slate-300">BID SYSTEMS</p></div></div><p className="mt-4 max-w-md text-sm leading-6 text-slate-400">Professional systems. Measurable growth.</p></div>
            <div><h4 className="font-black uppercase tracking-wide">Solutions</h4><div className="mt-4 space-y-2 text-sm text-slate-400"><p>Websites</p><p>Lead Generation</p><p>CRM & Automation</p><p>Proposal Systems</p></div></div>
            <div><h4 className="font-black uppercase tracking-wide">Contact</h4><div className="mt-4 space-y-2 text-sm text-slate-400"><p>fenleybidsystems@gmail.com</p><p>(832) 755-3203</p></div></div>
          </div>
          <p className="mt-10 text-center text-xs text-slate-500">© 2026 Fenley Bid Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
