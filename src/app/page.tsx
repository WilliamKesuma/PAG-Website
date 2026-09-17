import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const businesses = [
  {
    name: "Project Art Corporate",
    tag: "Corporate & institutional events",
    description:
      "Grand openings, galas, awards nights, expos, and launches — every corporate event that isn't a wedding. Run end to end since 2002 for names like Singapore Airlines, CIMB, and Mercedes-Benz.",
    href: "/corporate",
    featured: true,
  },
  {
    name: "Project Art Plus",
    tag: "Weddings",
    description: "The flagship studio — high-glamour weddings built from concept to the last dance.",
  },
  {
    name: "Prime Project",
    tag: "Weddings",
    description: "Weddings built around what a couple actually needs, at a more accessible scale.",
  },
  {
    name: "Oneway Party Idea",
    tag: "Celebrations",
    description: "Birthdays, parties, and the everyday celebrations that still deserve a good run of show.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-bone">
      <Nav />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 sm:grid-cols-[1.5fr_1fr] sm:px-10 sm:pb-24 sm:pt-24">
        <div>
          <h1 className="font-display text-4xl leading-[1.1] tracking-tight sm:text-6xl">
            Event production, done properly, since 2002.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-void/75 sm:text-lg">
            Project Art Group runs four studios out of Surabaya — weddings, parties, and the
            corporate and institutional events of companies like Singapore Airlines, CIMB, and
            Mercedes-Benz. This site is where that last part lives.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/corporate"
              className="rounded-full bg-void px-6 py-3 text-sm text-bone-soft transition-colors hover:bg-brass"
            >
              Explore Project Art Corporate
            </Link>
            <Link
              href="#businesses"
              className="rounded-full border border-void/30 px-6 py-3 text-sm transition-colors hover:border-brass hover:text-brass"
            >
              See all four studios
            </Link>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-6 self-start border-t rule-bone pt-8 text-sm sm:grid-cols-1 sm:border-t-0 sm:border-l sm:pl-10 sm:pt-0">
          <div>
            <dt className="text-slate">Est.</dt>
            <dd className="font-display text-2xl">2002</dd>
          </div>
          <div>
            <dt className="text-slate">Studios</dt>
            <dd className="font-display text-2xl">4</dd>
          </div>
          <div>
            <dt className="text-slate">Worked in</dt>
            <dd className="mt-1 leading-relaxed">
              Surabaya, Bali, Jakarta, Singapore, Thailand, London
            </dd>
          </div>
        </dl>
      </section>

      <section id="businesses" className="border-t rule-bone bg-bone-soft">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
          <h2 className="font-display text-3xl sm:text-4xl">What we run</h2>
          <p className="mt-3 max-w-xl text-void/70">
            Four studios, four kinds of occasion. Project Art Corporate is the one we&apos;re building
            out in full here.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {businesses.map((b) =>
              b.featured ? (
                <Link
                  key={b.name}
                  href={b.href!}
                  className="group flex flex-col justify-between rounded-2xl border border-void/10 bg-void p-8 text-bone-soft transition-colors sm:col-span-2 sm:flex-row sm:items-end"
                >
                  <div className="max-w-xl">
                    <p className="text-xs text-brass-light">{b.tag}</p>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl">{b.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-on-dark">
                      {b.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-bone-soft/30 px-5 py-2.5 text-sm transition-colors group-hover:border-brass group-hover:text-brass-light sm:mt-0">
                    View the corporate studio
                  </span>
                </Link>
              ) : (
                <div
                  key={b.name}
                  className="flex flex-col justify-between rounded-2xl border rule-bone bg-bone p-8"
                >
                  <div>
                    <p className="text-xs text-brass">{b.tag}</p>
                    <h3 className="mt-2 font-display text-2xl">{b.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-void/70">{b.description}</p>
                  </div>
                  <p className="mt-6 text-xs text-slate">Studio page in progress</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="border-t rule-void bg-void text-bone-soft">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <p className="font-display text-3xl italic leading-snug sm:text-4xl">
            &ldquo;Trust is a must.&rdquo;
          </p>
          <p className="mx-auto mt-5 max-w-md text-sm text-slate-on-dark">
            That&apos;s been Project Art Corporate&apos;s line since 2002, and it&apos;s still what most
            companies call us for — the event they can&apos;t afford to get wrong.
          </p>
          <Link
            href="/corporate#contact"
            className="mt-8 inline-flex rounded-full border border-brass px-6 py-3 text-sm text-brass-light transition-colors hover:bg-brass hover:text-void"
          >
            Talk to Project Art Corporate
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
