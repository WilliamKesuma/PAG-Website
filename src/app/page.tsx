"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const studios = [
  {
    number: "01",
    title: "WEDDINGS",
    subtitle: "ALL VISUAL STORIES",
    meta: "PROJECT ART PLUS & PRIME PROJECT",
    desc: "From high-glamour couture celebrations to bespoke intimate gatherings.",
    href: "#businesses",
  },
  {
    number: "02",
    title: "CORPORATE",
    subtitle: "INSTITUTIONAL & COMMERCIAL",
    meta: "PROJECT ART CORPORATE",
    desc: "End-to-end production for Singapore Airlines, CIMB, Mercedes-Benz, and global institutions.",
    href: "/corporate",
    badge: "FEATURED STUDIO",
  },
  {
    number: "03",
    title: "CELEBRATIONS",
    subtitle: "PRIVATE EVENTS & PARTIES",
    meta: "ONEWAY PARTY IDEA",
    desc: "Birthdays, anniversaries, and high-energy celebration runs of show.",
    href: "#businesses",
  },
  {
    number: "04",
    title: "EDITORIALS",
    subtitle: "VIEW EDITORIAL ARCHIVE",
    meta: "EST. 2002 · SURABAYA",
    desc: "Two decades of bespoke spatial design, lighting, and stage craftsmanship.",
    href: "#archive",
  },
];

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
    description:
      "The flagship studio — high-glamour weddings built from concept to the last dance.",
  },
  {
    name: "Prime Project",
    tag: "Weddings",
    description:
      "Weddings built around what a couple actually needs, at a more accessible scale.",
  },
  {
    name: "Oneway Party Idea",
    tag: "Celebrations",
    description:
      "Birthdays, parties, and the everyday celebrations that still deserve a good run of show.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-void text-bone-soft selection:bg-brass selection:text-void">
      {/* FULL-SCREEN EDITORIAL HERO SECTION */}
      <section className="relative flex min-h-screen flex-col justify-between overflow-hidden">
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/hero-aerial.jpg"
            alt="Project Art Group luxury event venue"
            fill
            priority
            className="object-cover object-center transition-transform duration-1000 ease-out"
            style={{
              transform: activeHover !== null ? "scale(1.03)" : "scale(1.0)",
            }}
          />
          {/* Moody Luxury Gradient Overlays */}
          <div className="absolute inset-0 bg-void/65 backdrop-brightness-75" />
          <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(16,17,20,0.85)_100%]" />
        </div>

        {/* Top Minimalist Luxury Header */}
        <header className="relative z-30 flex items-center justify-between px-6 py-6 sm:px-12">
          {/* Left: Menu & Index */}
          <div className="flex items-center gap-6 text-xs tracking-widest text-bone-soft/80 uppercase">
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-2 transition-colors hover:text-brass-light"
              aria-label="Open menu"
            >
              <span className="flex flex-col gap-1">
                <span className="h-0.5 w-4 bg-bone-soft/80 transition-all group-hover:w-5 group-hover:bg-brass-light" />
                <span className="h-0.5 w-3 bg-bone-soft/80 transition-all group-hover:w-5 group-hover:bg-brass-light" />
              </span>
              <span>MENU</span>
            </button>
            <span className="hidden text-bone-soft/40 sm:inline">|</span>
            <span className="hidden text-bone-soft/60 sm:inline">EST. 2002</span>
          </div>

          {/* Center: Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col items-center justify-center text-center"
          >
            <span className="font-display text-2xl tracking-tight text-bone-soft transition-colors group-hover:text-brass-light sm:text-3xl">
              Project Art
            </span>
          </Link>

          {/* Right: Navigation Links & Inquire Pill */}
          <div className="flex items-center gap-5 text-xs tracking-widest text-bone-soft/80 uppercase sm:gap-7">
            <Link
              href="#about"
              className="hidden transition-colors hover:text-brass-light sm:inline"
            >
              ABOUT
            </Link>
            <Link
              href="/corporate"
              className="hidden transition-colors hover:text-brass-light sm:inline"
            >
              CORPORATE
            </Link>
            <Link
              href="/corporate#contact"
              className="rounded-full border border-bone-soft/40 px-5 py-2 transition-all hover:border-brass hover:bg-brass/20 hover:text-bone-soft"
            >
              INQUIRE
            </Link>
          </div>
        </header>

        {/* Center: Stacked Editorial Hero Titles */}
        <div className="relative z-20 mx-auto my-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-12 text-center">
          <div className="flex w-full flex-col items-center space-y-4 sm:space-y-6">
            {studios.map((item, idx) => (
              <div
                key={item.title}
                onMouseEnter={() => setActiveHover(idx)}
                onMouseLeave={() => setActiveHover(null)}
                className="group relative flex flex-col items-center transition-all duration-300"
              >
                {/* Micro Number & Label above or beside */}
                <div className="flex items-center gap-3 text-[11px] tracking-widest text-bone-soft/60 uppercase transition-colors group-hover:text-brass-light">
                  <span className="font-mono text-brass-light/80">{item.number}</span>
                  {item.badge && (
                    <span className="rounded-full border border-brass/50 bg-brass/20 px-2 py-0.5 text-[9px] text-brass-light">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Giant Editorial Heading */}
                <Link
                  href={item.href}
                  className="font-display text-4xl tracking-tight text-bone-soft transition-all duration-300 group-hover:scale-105 group-hover:tracking-wider group-hover:text-white sm:text-6xl md:text-7xl lg:text-8xl"
                  style={{
                    opacity: activeHover !== null && activeHover !== idx ? 0.4 : 1.0,
                    textShadow: "0 2px 20px rgba(0,0,0,0.8)",
                  }}
                >
                  {item.title}
                </Link>

                {/* Editorial Subtitle Line */}
                <div className="mt-1 flex items-center gap-2 text-xs tracking-widest text-bone-soft/70 uppercase transition-opacity group-hover:text-bone-soft sm:text-sm">
                  <span>{item.subtitle}</span>
                  <span className="text-bone-soft/30">/</span>
                  <span className="text-[10px] text-brass-light/80 sm:text-xs">
                    {item.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Minimalist Bar */}
        <div className="relative z-20 flex flex-col items-center justify-between gap-4 border-t border-bone-soft/10 bg-void/30 px-6 py-5 text-[11px] tracking-widest text-bone-soft/60 uppercase backdrop-blur-xs sm:flex-row sm:px-12">
          <div>SURABAYA · BALI · JAKARTA · SINGAPORE · LONDON</div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">&ldquo;TRUST IS A MUST&rdquo;</span>
            <span className="hidden text-bone-soft/20 sm:inline">|</span>
            <Link href="/corporate" className="transition-colors hover:text-brass-light">
              PROJECT ART CORPORATE
            </Link>
          </div>
        </div>
      </section>

      {/* SLIDE-OUT MENU DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop overlay */}
          <div
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-void/80 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer content */}
          <div className="relative ml-auto flex h-full w-full max-w-md flex-col justify-between border-l border-bone-soft/10 bg-void p-8 sm:p-12">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl tracking-tight text-bone-soft">
                Project Art
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-bone-soft/20 p-2 text-xs text-bone-soft transition-colors hover:border-brass hover:text-brass-light"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="my-auto flex flex-col space-y-6 text-left">
              <p className="text-xs tracking-widest text-brass-light uppercase">
                Directory
              </p>
              <Link
                href="/corporate"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-bone-soft transition-colors hover:text-brass-light sm:text-3xl"
              >
                Project Art Corporate
              </Link>
              <Link
                href="#businesses"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-bone-soft transition-colors hover:text-brass-light sm:text-3xl"
              >
                Project Art Plus (Weddings)
              </Link>
              <Link
                href="#businesses"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-bone-soft transition-colors hover:text-brass-light sm:text-3xl"
              >
                Prime Project
              </Link>
              <Link
                href="#businesses"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-bone-soft transition-colors hover:text-brass-light sm:text-3xl"
              >
                Oneway Party Idea
              </Link>
              <Link
                href="/corporate#contact"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-brass-light transition-colors hover:text-white sm:text-3xl"
              >
                Inquire / Talk to Us →
              </Link>
            </div>

            <div className="border-t border-bone-soft/10 pt-6 text-xs text-bone-soft/50">
              <p>Project Art Group · Founded in 2002</p>
              <p className="mt-1">Surabaya, East Java, Indonesia</p>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT & HERITAGE SECTION */}
      <section
        id="about"
        className="border-t border-bone-soft/10 bg-void-soft px-6 py-24 sm:px-12 sm:py-32"
      >
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="text-xs tracking-widest text-brass-light uppercase">
              About Project Art Group
            </span>
            <h2 className="mt-4 font-display text-3xl leading-snug tracking-tight text-bone-soft sm:text-5xl">
              Event production, done properly, since 2002.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft/70 sm:text-lg">
              Project Art Group runs four studios out of Surabaya — bespoke weddings,
              high-energy celebrations, and the corporate and institutional events of
              companies like Singapore Airlines, CIMB, and Mercedes-Benz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/corporate"
                className="rounded-full bg-bone-soft px-6 py-3 text-sm text-void transition-colors hover:bg-brass-light hover:text-void"
              >
                Explore Project Art Corporate
              </Link>
              <Link
                href="/corporate#contact"
                className="rounded-full border border-bone-soft/30 px-6 py-3 text-sm text-bone-soft transition-colors hover:border-brass hover:text-brass-light"
              >
                Inquire for Your Event
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-8 self-start border-t border-bone-soft/10 pt-8 sm:grid-cols-1 sm:border-t-0 sm:border-l sm:pl-10 sm:pt-0">
            <div>
              <dt className="text-xs tracking-widest text-slate-on-dark uppercase">
                Est.
              </dt>
              <dd className="font-display text-3xl text-bone-soft">2002</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-slate-on-dark uppercase">
                Studios
              </dt>
              <dd className="font-display text-3xl text-bone-soft">4</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-slate-on-dark uppercase">
                Destinations
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-bone-soft/80">
                Surabaya, Bali, Jakarta, Singapore, Thailand, London
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FOUR STUDIOS DIRECTORY */}
      <section
        id="businesses"
        className="border-t border-bone-soft/10 bg-void px-6 py-20 sm:px-12 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between sm:flex-row sm:items-end">
            <div>
              <span className="text-xs tracking-widest text-brass-light uppercase">
                The Four Studios
              </span>
              <h2 className="mt-3 font-display text-3xl text-bone-soft sm:text-4xl">
                What We Run
              </h2>
            </div>
            <p className="mt-3 max-w-md text-sm text-bone-soft/60 sm:mt-0">
              Four specialized studios, four kinds of occasion. Project Art Corporate
              handles institutional and corporate events end to end.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {businesses.map((b) =>
              b.featured ? (
                <Link
                  key={b.name}
                  href={b.href!}
                  className="group flex flex-col justify-between rounded-2xl border border-brass/40 bg-void-soft p-8 text-bone-soft transition-all hover:border-brass hover:bg-void-soft/80 sm:col-span-2 sm:flex-row sm:items-end"
                >
                  <div className="max-w-xl">
                    <p className="text-xs tracking-widest text-brass-light uppercase">
                      {b.tag}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-bone-soft group-hover:text-brass-light sm:text-3xl">
                      {b.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-on-dark">
                      {b.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-brass/50 bg-brass/10 px-5 py-2.5 text-sm text-brass-light transition-colors group-hover:bg-brass group-hover:text-void sm:mt-0">
                    View Corporate Studio →
                  </span>
                </Link>
              ) : (
                <div
                  key={b.name}
                  className="flex flex-col justify-between rounded-2xl border border-bone-soft/10 bg-void-soft p-8"
                >
                  <div>
                    <p className="text-xs tracking-widest text-brass-light uppercase">
                      {b.tag}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-bone-soft">
                      {b.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone-soft/70">
                      {b.description}
                    </p>
                  </div>
                  <p className="mt-6 text-xs text-bone-soft/40">
                    Studio page in progress
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TRUST STATEMENT / CTA */}
      <section className="border-t border-bone-soft/10 bg-void-soft text-bone-soft">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-12 sm:py-32">
          <p className="font-display text-3xl italic leading-snug text-brass-light sm:text-5xl">
            &ldquo;Trust is a must.&rdquo;
          </p>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-slate-on-dark sm:text-base">
            That&apos;s been Project Art Group&apos;s line since 2002, and it&apos;s still
            what most companies call us for — the event they can&apos;t afford to get
            wrong.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/corporate#contact"
              className="rounded-full bg-brass px-8 py-3.5 text-sm font-medium text-void transition-colors hover:bg-brass-light"
            >
              Talk to Project Art Corporate
            </Link>
            <Link
              href="/corporate"
              className="rounded-full border border-bone-soft/30 px-8 py-3.5 text-sm text-bone-soft transition-colors hover:border-brass hover:text-brass-light"
            >
              Explore Services & Process
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
