import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Project Art Corporate — Trust Is a Must",
  description:
    "Project Art Corporate has run corporate and institutional events since 2002, for clients including Singapore Airlines, CIMB, and Mercedes-Benz.",
};

const process = [
  {
    step: "Concepting",
    detail: "Translating the brief into a theme, a flow, and a look.",
  },
  {
    step: "Budgeting",
    detail: "Costing the event against what it actually needs to achieve.",
  },
  {
    step: "Vendor & Supplier Selection",
    detail: "Sourcing venues, production, and talent.",
  },
  { step: "Scheduling", detail: "Building the run of show and the lead-up timeline." },
  {
    step: "Coordination Meeting",
    detail: "Aligning every vendor and stakeholder before the day.",
  },
  { step: "Dealing", detail: "Locking contracts and terms with every party involved." },
  { step: "Event Day", detail: "Full on-site production, start to finish." },
];

const eventTypes = [
  "Grand openings",
  "Anniversaries",
  "Gala dinners",
  "Awarding nights",
  "Expos",
  "Tournaments",
  "Book launches",
  "Reunions",
];

const clients = [
  "Singapore Airlines",
  "Hong Kong Tourism Board",
  "Cathay Pacific",
  "Starlux Airlines",
  "Mercedes-Benz",
  "CIMB",
  "BCA Prioritas",
  "Miss Universe Indonesia",
  "British Embassy",
  "Sampoerna",
  "Samator",
  "Rotary",
  "Kota Surabaya",
];

const cities = ["Surabaya", "Bali", "Jakarta", "Singapore", "Thailand", "London"];

export default function Corporate() {
  return (
    <div className="min-h-screen bg-bone">
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-24">
        <p className="text-xs text-brass">Project Art Corporate · Since 2002</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight sm:text-6xl">
          The studio for events a company can&apos;t afford to get wrong.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-void/75 sm:text-lg">
          Project Art Corporate handles every corporate and institutional event Project
          Art Group runs that isn&apos;t a wedding — planned and produced end to end, from
          the first concept meeting to the last minute of the run of show.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="rounded-full bg-void px-6 py-3 text-sm text-bone-soft transition-colors hover:bg-brass"
          >
            Get in touch
          </Link>
          <Link
            href="#process"
            className="rounded-full border border-void/30 px-6 py-3 text-sm transition-colors hover:border-brass hover:text-brass"
          >
            How we work
          </Link>
        </div>
      </section>

      <section className="border-t rule-bone bg-bone-soft">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl">Who we&apos;re for</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-void/70">
                Mid-to-large corporate and institutional clients — companies, embassies,
                and organizations that need an event managed by people who&apos;ve done it
                before, not figured out for the first time on their budget.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {eventTypes.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border rule-bone px-3 py-1 text-xs text-void/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl">Where we&apos;ve worked</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-void/70">
                Based in Surabaya, on the ground well beyond it.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {cities.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border rule-bone px-3 py-1 text-xs text-void/70"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="border-t rule-bone">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
          <h2 className="font-display text-3xl sm:text-4xl">How an event gets built</h2>
          <p className="mt-3 max-w-xl text-void/70">
            The same seven stages, every time, regardless of the event&apos;s size.
          </p>
          <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {process.map((p, i) => (
              <li key={p.step} className="flex gap-4 border-t rule-bone pt-5">
                <span className="font-display text-xl text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-medium">{p.step}</p>
                  <p className="mt-1 text-sm text-void/65">{p.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t rule-void bg-void text-bone-soft">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl">
            Names that have called us back
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-on-dark">
            A selection of the companies and institutions Project Art Corporate has
            produced events for.
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {clients.map((c) => (
              <li key={c} className="font-display text-lg text-bone-soft/85 sm:text-xl">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="border-t rule-bone">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">
                Start with a conversation
              </h2>
              <p className="mt-4 max-w-md text-void/70">
                Tell us the event, the date, and roughly what it needs to do. Glenn, who
                leads marketing and client relationships for Project Art Corporate, will
                take it from there.
              </p>
            </div>
            <div className="rounded-2xl border rule-bone bg-bone-soft p-8">
              <p className="text-xs text-brass">Project Art Corporate</p>
              <p className="mt-2 font-display text-xl">Get in touch with Glenn</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="text-slate">Email</dt>
                  <dd>business@projectartplus.co.id</dd>
                </div>
                <div>
                  <dt className="text-slate">Phone</dt>
                  <dd>+62 31 734 8569</dd>
                </div>
                <div>
                  <dt className="text-slate">WhatsApp</dt>
                  <dd>+62 811 3496 269</dd>
                </div>
                <div>
                  <dt className="text-slate">Office</dt>
                  <dd>
                    Ruko Satelit Town Square Blok D-21,
                    <br />
                    Jl. Raya Sukomanunggal Jaya, Surabaya
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
