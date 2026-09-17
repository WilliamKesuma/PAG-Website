"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// Studio Brand Logos for the Carousel (Matched to files in public/logos/)
const brandLogos = [
  {
    name: "Project Art Corporate",
    src: "/logos/LOGO PA CORP WHITE.png",
    href: "/corporate",
  },
  {
    name: "Project Art Plus",
    src: "/logos/LOGO PA WHITE.png",
    href: "#businesses",
  },
  {
    name: "Prime Project",
    src: "/logos/LOGO PP PUTIH.png",
    href: "#businesses",
  },
  {
    name: "Oneway Party Idea",
    src: "/logos/LOGO ONEWAY WHITE.png",
    href: "#businesses",
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

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* 1. FIRST SECTION WITH VISIBLE BACKGROUND PICTURE */}
      <section className="relative flex min-h-screen flex-col justify-between overflow-hidden">
        {/* Background Image & Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/hero-aerial.jpg"
            alt="Project Art Group luxury event venue"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/90" />
        </div>

        {/* Top Minimalist Header */}
        <header className="relative z-30 flex items-center justify-between px-6 py-6 sm:px-12">
          {/* Left: Project Art Group Logo + Menu Button */}
          <div className="flex items-center gap-5 sm:gap-7">
            <Link
              href="/"
              title="Project Art Group — Home"
              className="flex shrink-0 items-center transition-transform hover:scale-105"
            >
              <Image
                src="/logos/LOGO PA GROUP PUTIH.png"
                alt="Project Art Group Logo"
                width={48}
                height={48}
                priority
                className="h-8 w-auto object-contain sm:h-10"
              />
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-2.5 text-xs tracking-widest text-zinc-300 uppercase transition-colors hover:text-white"
              aria-label="Open menu"
            >
              <span className="flex flex-col gap-1">
                <span className="h-0.5 w-4 bg-zinc-300 transition-all group-hover:w-5 group-hover:bg-white" />
                <span className="h-0.5 w-2.5 bg-zinc-300 transition-all group-hover:w-5 group-hover:bg-white" />
              </span>
              <span>MENU</span>
            </button>
          </div>

          {/* Center: Brand Title */}
          <Link
            href="/"
            className="group hidden sm:flex flex-col items-center justify-center text-center"
          >
            <span className="font-display text-xl tracking-tight text-white transition-opacity group-hover:opacity-80 md:text-2xl">
              Project Art Group
            </span>
          </Link>

          {/* Right: Navigation Links & Inquire Button */}
          <div className="flex items-center gap-4 text-xs tracking-widest text-zinc-300 uppercase sm:gap-6">
            <Link
              href="#about"
              className="hidden transition-colors hover:text-white sm:inline"
            >
              ABOUT
            </Link>
            <Link
              href="/corporate"
              className="hidden transition-colors hover:text-white sm:inline"
            >
              CORPORATE
            </Link>
            <Link
              href="/corporate#contact"
              className="rounded-full border border-white/30 px-5 py-2 text-white transition-all hover:border-white hover:bg-white hover:text-black"
            >
              INQUIRE
            </Link>
          </div>
        </header>

        {/* Center Content: Single Project Art Group Heading + Full-Size Natural Aspect Ratio Logo Carousel */}
        <div className="relative z-20 mx-auto my-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-12 text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-[11px] tracking-widest text-zinc-300 uppercase backdrop-blur-md">
            <span>Event Production &amp; Design</span>
            <span className="text-zinc-500">·</span>
            <span>Est. 2002</span>
          </div>

          <h1
            className="font-display text-5xl tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}
          >
            Project Art Group
          </h1>

          <p className="mt-4 max-w-lg text-xs tracking-widest text-zinc-300 uppercase sm:text-sm">
            Surabaya · Bali · Jakarta · Overseas
          </p>

          {/* PROMINENT FULL LOGO CAROUSEL */}
          <div className="mt-14 w-full max-w-4xl overflow-hidden py-4">
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-4">
                {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map(
                  (logo, index) => (
                    <Link
                      key={`${logo.name}-${index}`}
                      href={logo.href}
                      className="group flex shrink-0 items-center justify-center opacity-85 transition-all duration-300 hover:opacity-100 hover:scale-105"
                      title={logo.name}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={encodeURI(logo.src)}
                        alt={logo.name}
                        className="h-14 sm:h-16 w-auto max-h-20 object-contain filter transition-all duration-300 group-hover:brightness-125"
                      />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Empty bottom spacer for balance */}
        <div className="h-6" />
      </section>

      {/* SLIDE-OUT MENU DRAWER (FROM LEFT) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer (Left Aligned) */}
          <div className="relative mr-auto flex h-full w-full max-w-md flex-col justify-between border-r border-white/10 bg-zinc-950 p-8 text-white transition-transform duration-300 sm:p-12">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logos/LOGO PA GROUP PUTIH.png"
                  alt="Project Art Group Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
                <span className="font-display text-xl tracking-tight text-white">
                  Project Art Group
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-white/20 p-2 text-xs text-zinc-400 transition-colors hover:border-white hover:text-white"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="my-auto flex flex-col space-y-6 text-left">
              <p className="text-xs tracking-widest text-zinc-400 uppercase">
                Studios &amp; Directory
              </p>
              <Link
                href="/corporate"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-white transition-colors hover:text-zinc-400 sm:text-3xl"
              >
                Project Art Corporate
              </Link>
              <Link
                href="#businesses"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-zinc-300 transition-colors hover:text-white sm:text-3xl"
              >
                Project Art Plus (Weddings)
              </Link>
              <Link
                href="#businesses"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-zinc-300 transition-colors hover:text-white sm:text-3xl"
              >
                Prime Project
              </Link>
              <Link
                href="#businesses"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-zinc-300 transition-colors hover:text-white sm:text-3xl"
              >
                Oneway Party Idea
              </Link>
              <div className="pt-4">
                <Link
                  href="/corporate#contact"
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl text-white underline decoration-white/40 underline-offset-8 transition-colors hover:text-zinc-300 sm:text-3xl"
                >
                  Inquire / Talk to Us →
                </Link>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 text-xs text-zinc-500">
              <p>Project Art Group · Founded in 2002</p>
              <p className="mt-1">Surabaya, East Java, Indonesia</p>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT & HERITAGE SECTION */}
      <section
        id="about"
        className="border-t border-white/10 bg-zinc-950 px-6 py-24 sm:px-12 sm:py-32"
      >
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="text-xs tracking-widest text-zinc-400 uppercase">
              About Project Art Group
            </span>
            <h2 className="mt-4 font-display text-3xl leading-snug tracking-tight text-white sm:text-5xl">
              Event production, done properly, since 2002.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Project Art Group runs four studios out of Surabaya — bespoke weddings,
              high-energy celebrations, and the corporate and institutional events of
              companies like Singapore Airlines, CIMB, and Mercedes-Benz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/corporate"
                className="rounded-full bg-white px-6 py-3 text-sm text-black transition-colors hover:bg-zinc-200"
              >
                Explore Project Art Corporate
              </Link>
              <Link
                href="/corporate#contact"
                className="rounded-full border border-white/30 px-6 py-3 text-sm text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Inquire for Your Event
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-8 self-start border-t border-white/10 pt-8 sm:grid-cols-1 sm:border-t-0 sm:border-l sm:border-white/10 sm:pl-10 sm:pt-0">
            <div>
              <dt className="text-xs tracking-widest text-zinc-500 uppercase">Est.</dt>
              <dd className="font-display text-3xl text-white">2002</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-zinc-500 uppercase">Studios</dt>
              <dd className="font-display text-3xl text-white">4</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-zinc-500 uppercase">
                Destinations
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-zinc-300">
                Surabaya, Bali, Jakarta, Singapore, Thailand, London
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FOUR STUDIOS DIRECTORY */}
      <section
        id="businesses"
        className="border-t border-white/10 bg-black px-6 py-20 sm:px-12 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between sm:flex-row sm:items-end">
            <div>
              <span className="text-xs tracking-widest text-zinc-400 uppercase">
                The Four Studios
              </span>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                What We Run
              </h2>
            </div>
            <p className="mt-3 max-w-md text-sm text-zinc-400 sm:mt-0">
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
                  className="group flex flex-col justify-between rounded-2xl border border-white/20 bg-zinc-950 p-8 text-white transition-all hover:border-white hover:bg-zinc-900 sm:col-span-2 sm:flex-row sm:items-end"
                >
                  <div className="max-w-xl">
                    <p className="text-xs tracking-widest text-zinc-400 uppercase">
                      {b.tag}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white group-hover:text-zinc-200 sm:text-3xl">
                      {b.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {b.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-sm text-white transition-colors group-hover:bg-white group-hover:text-black sm:mt-0">
                    View Corporate Studio →
                  </span>
                </Link>
              ) : (
                <div
                  key={b.name}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950 p-8 text-white"
                >
                  <div>
                    <p className="text-xs tracking-widest text-zinc-400 uppercase">
                      {b.tag}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white">{b.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {b.description}
                    </p>
                  </div>
                  <p className="mt-6 text-xs text-zinc-600">Studio page in progress</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TRUST STATEMENT / CTA */}
      <section className="border-t border-white/10 bg-zinc-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-12 sm:py-32">
          <p className="font-display text-3xl italic leading-snug text-white sm:text-5xl">
            &ldquo;Trust is a must.&rdquo;
          </p>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
            That&apos;s been Project Art Group&apos;s line since 2002, and it&apos;s still
            what most companies call us for — the event they can&apos;t afford to get
            wrong.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/corporate#contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Talk to Project Art Corporate
            </Link>
            <Link
              href="/corporate"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Explore Services &amp; Process
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
