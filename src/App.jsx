import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, Globe2, Mail, MapPin, Phone, Search, ShieldCheck, Smartphone, Star, Target, Wrench } from "lucide-react";

const services = [
  { icon: Building2, title: "New Business Websites", description: "Professional websites built from the ground up for businesses that need a credible online presence." },
  { icon: Wrench, title: "Website Redesigns", description: "Modernize an outdated website with a cleaner design, stronger messaging, and better customer flow." },
  { icon: Smartphone, title: "Mobile-Friendly Design", description: "Responsive layouts that look sharp on phones, tablets, and desktops." },
  { icon: Target, title: "Contact & Quote Forms", description: "Simple lead capture forms that make it easier for customers to reach out." },
  { icon: Search, title: "Basic SEO Setup", description: "Foundational search setup, page titles, descriptions, and structure to help customers find you online." },
  { icon: ShieldCheck, title: "Hosting & Maintenance", description: "Ongoing website hosting, updates, support, and small content changes." }
];

const industries = ["Contractors", "Handyman Services", "Home Services", "Professional Services", "Local Businesses"];

const highlights = [
  { icon: Star, title: "Professional Look", description: "A polished website that makes your business look established and trustworthy." },
  { icon: Smartphone, title: "Mobile Ready", description: "Built for the way customers actually search, mostly from their phones." },
  { icon: Target, title: "Lead Focused", description: "Clear calls to action that make it easy for visitors to contact you." },
  { icon: ShieldCheck, title: "Managed For You", description: "We can handle hosting, updates, and support so you do not have to." }
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
        <p className="mt-3 leading-7 text-slate-600">Thank you for reaching out to Fenley Bid Systems. We received your website consultation request and will follow up soon.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-950 shadow-2xl">
      <h3 className="text-2xl font-black">Request a Website Consultation</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">Tell us what kind of website you need. Your information will be sent directly to Fenley Bid Systems.</p>
      <input type="hidden" name="_subject" value="New Fenley Bid Systems Website Consultation Request" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div><label className="text-sm font-bold">Name *</label><input name="name" type="text" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="Your name" /><ValidationError field="name" errors={state.errors} className="mt-1 text-sm text-red-600" /></div>
        <div><label className="text-sm font-bold">Company</label><input name="company" type="text" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="Business name" /></div>
        <div><label className="text-sm font-bold">Email *</label><input name="email" type="email" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="you@example.com" /><ValidationError field="email" errors={state.errors} className="mt-1 text-sm text-red-600" /></div>
        <div><label className="text-sm font-bold">Phone *</label><input name="phone" type="tel" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="(555) 555-5555" /><ValidationError field="phone" errors={state.errors} className="mt-1 text-sm text-red-600" /></div>
      </div>
      <div className="mt-4"><label className="text-sm font-bold">What do you need? *</label><select name="service" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"><option value="">Select one</option><option>New website</option><option>Website redesign</option><option>Landing page</option><option>Website maintenance</option><option>Not sure yet</option></select><ValidationError field="service" errors={state.errors} className="mt-1 text-sm text-red-600" /></div>
      <div className="mt-4"><label className="text-sm font-bold">Project details *</label><textarea name="message" required rows="5" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="Tell us about your business, current website if you have one, services, goals, and timeline." /><ValidationError field="message" errors={state.errors} className="mt-1 text-sm text-red-600" /></div>
      <button type="submit" disabled={state.submitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60">{state.submitting ? "Sending..." : "Send Website Request"} <ArrowRight className="h-5 w-5" /></button>
      <ValidationError errors={state.errors} className="mt-4 text-sm text-red-600" />
    </form>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4"><LogoMark /><div><h1 className="text-2xl font-black tracking-[0.2em] text-white">FENLEY</h1><p className="text-sm font-semibold tracking-[0.35em] text-slate-300">BID SYSTEMS</p><p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400">Professional websites. Measurable growth.</p></div></div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-200 md:flex"><a href="#home" className="hover:text-blue-400">Home</a><a href="#services" className="hover:text-blue-400">Services</a><a href="#industries" className="hover:text-blue-400">Industries</a><a href="#about" className="hover:text-blue-400">About</a><a href="#consultation" className="hover:text-blue-400">Contact</a></nav>
          <a href="#consultation" className="hidden rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 md:inline-flex">Request a Website</a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 opacity-25"><div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-blue-600 blur-3xl" /><div className="absolute bottom-[-20%] right-[-5%] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl" /></div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
            <div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-200"><Globe2 className="h-4 w-4" /> Professional Website Design</div><h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">Professional websites. Measurable growth.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">We build modern, mobile-friendly websites that help local businesses look credible, showcase their work, and make it easy for customers to reach out.</p><div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="#consultation" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/30 transition hover:bg-blue-500">Request a Website <ArrowRight className="h-5 w-5" /></a><a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950">View Services</a></div></div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur"><div className="rounded-[1.5rem] bg-slate-900 p-6"><div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="text-sm font-semibold text-slate-400">Website Project Snapshot</p><p className="text-2xl font-black">Built For Leads</p></div><div className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-bold">Live</div></div><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-white p-5 text-slate-950"><p className="text-sm font-semibold text-slate-500">Mobile Ready</p><p className="mt-2 text-4xl font-black">100%</p><p className="mt-2 text-sm text-slate-500">Built for all devices</p></div><div className="rounded-2xl bg-white p-5 text-slate-950"><p className="text-sm font-semibold text-slate-500">Contact Flow</p><p className="mt-2 text-4xl font-black">24/7</p><p className="mt-2 text-sm text-slate-500">Customers can reach out anytime</p></div><div className="rounded-2xl bg-white p-5 text-slate-950 sm:col-span-2"><p className="text-sm font-semibold text-slate-500">Website Structure</p><div className="mt-5 grid grid-cols-4 gap-3 text-center text-xs font-bold text-white">{["Home", "Services", "Gallery", "Contact"].map((item) => <div key={item} className="rounded-xl bg-blue-500 p-4">{item}</div>)}</div></div></div></div></div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-4">{highlights.map((item) => <div key={item.title} className="flex gap-4 border-slate-200 md:border-r md:pr-6 last:border-r-0"><item.icon className="h-9 w-9 shrink-0 text-blue-600" /><div><h3 className="font-black uppercase tracking-wide">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p></div></div>)}</div></section>

        <section id="services" className="bg-slate-950 px-6 py-20 text-white"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.25em] text-blue-400">Website Services</p><h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">Websites built to look sharp and convert</h2><p className="mt-5 text-lg leading-8 text-slate-300">Fenley Bid Systems creates professional websites that help small businesses build trust, explain their services, and turn online visitors into real conversations.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"><service.icon className="h-12 w-12 text-blue-400" /><h3 className="mt-6 text-xl font-black uppercase tracking-wide">{service.title}</h3><p className="mt-4 leading-7 text-slate-300">{service.description}</p></div>)}</div></div></section>

        <section id="industries" className="bg-slate-50 px-6 py-20"><div className="mx-auto max-w-7xl text-center"><p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">Who We Build For</p><h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-slate-950 md:text-5xl">Websites for businesses like yours</h2><div className="mt-12 grid gap-5 md:grid-cols-5">{industries.map((industry) => <div key={industry} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><BriefcaseBusiness className="mx-auto h-10 w-10 text-blue-600" /><h3 className="mt-5 text-sm font-black uppercase tracking-wide text-slate-900">{industry}</h3></div>)}</div></div></section>

        <section id="about" className="bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">About Fenley Bid Systems</p><h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">A clean website can change the way customers see your business.</h2></div><div className="space-y-5 text-lg leading-8 text-slate-600"><p>Fenley Bid Systems helps local businesses create professional websites that build credibility, present services clearly, and make customer contact simple.</p><div className="grid gap-3 sm:grid-cols-2">{["Professional presentation", "Clear service pages", "Simple contact flow", "Hosting and support"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-semibold text-slate-900"><CheckCircle2 className="h-5 w-5 text-blue-600" /> {item}</div>)}</div></div></div></section>

        <section id="consultation" className="bg-slate-950 px-6 py-20 text-white"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><p className="text-sm font-black uppercase tracking-[0.25em] text-blue-400">Start the Conversation</p><h2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">Request a website consultation.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Fill out the form and tell us what type of website your business needs. We will review your information and follow up directly.</p><div className="mt-8 space-y-4"><a href="mailto:fenleybidsystems@gmail.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-white transition hover:bg-white/10"><Mail className="h-6 w-6 text-blue-400" /> fenleybidsystems@gmail.com</a><a href="tel:8327553203" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-white transition hover:bg-white/10"><Phone className="h-6 w-6 text-blue-400" /> (832) 755-3203</a><div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-bold text-white"><MapPin className="h-6 w-6 text-blue-400" /> Serving businesses nationwide</div></div></div><ConsultationForm /></div></section>
      </main>

      <footer className="bg-slate-950 px-6 pb-10 text-white"><div className="mx-auto max-w-7xl border-t border-white/10 pt-10"><div className="grid gap-10 md:grid-cols-4"><div className="md:col-span-2"><div className="flex items-center gap-4"><LogoMark /><div><p className="text-2xl font-black tracking-[0.2em]">FENLEY</p><p className="text-sm font-semibold tracking-[0.35em] text-slate-300">BID SYSTEMS</p></div></div><p className="mt-4 max-w-md text-sm leading-6 text-slate-400">Professional websites. Measurable growth.</p></div><div><h4 className="font-black uppercase tracking-wide">Website Services</h4><div className="mt-4 space-y-2 text-sm text-slate-400"><p>New Websites</p><p>Website Redesigns</p><p>Landing Pages</p><p>Hosting & Maintenance</p></div></div><div><h4 className="font-black uppercase tracking-wide">Contact</h4><div className="mt-4 space-y-2 text-sm text-slate-400"><p>fenleybidsystems@gmail.com</p><p>(832) 755-3203</p></div></div></div><p className="mt-10 text-center text-xs text-slate-500">© 2026 Fenley Bid Systems. All rights reserved.</p></div></footer>
    </div>
  );
}
