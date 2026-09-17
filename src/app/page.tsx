"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const studios = [
  {
    name: "Project Art Corporate",
    category: "Corporate & Institutional",
    tagline: "Galas, Grand Openings & Expos",
    href: "/corporate",
    highlight: true,
  },
  {
    name: "Project Art Plus",
    category: "High-Glamour Weddings",
    tagline: "Flagship Luxury Wedding Production",
    href: "#businesses",
    highlight: false,
  },
  {
    name: "Prime Project",
    category: "Modern Weddings",
    tagline: "Essential & Accessible Scaled Events",
    href: "#businesses",
    highlight: false,
  },
  {
    name: "Oneway Party Idea",
    category: "Celebrations & Parties",
    tagline: "Birthdays & High-Energy Occasions",
    href: "#businesses",
    highlight: false,
  },
  {
    name: "PAC Global Productions",
    category: "Destination Events",
    tagline: "Surabaya · Bali · Singapore · London",
    href: "/corporate",
    highlight: false,
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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-void text-bone-soft selection:bg-brass selection:text-void">
      {/* Sleek ultra-thin top scroll progress indicator */}
      <div
        className="fixed top-0 left-0 z-50 h-[2px] bg-gradient-to-r from-brass via-brass-light to-brass transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* FULL-SCREEN HERO */}
      <section className="relative flex min-h-screen flex-col justify-between overflow-hidden">
        {/* Background Image & Vignette */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/hero-aerial.jpg"
            alt="Project Art Group luxury event venue"
            fill
            priority
            className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-void/70 backdrop-brightness-75" />
          <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(16,17,20,0.9)_100%]" />
        </div>

        {/* Top Minimalist Header */}
        <header className="relative z-30 flex items-center justify-between px-6 py-6 sm:px-12">
          {/* Left: Menu & Index */}
          <div className="flex items-center gap-6 text-xs tracking-widest text-bone-soft/80 uppercase">
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-2.5 transition-colors hover:text-brass-light"
              aria-label="Open menu"
            >
              <span className="flex flex-col gap-1">
                <span className="h-0.5 w-4 bg-bone-soft/80 transition-all group-hover:w-5 group-hover:bg-brass-light" />
                <span className="h-0.5 w-2.5 bg-bone-soft/80 transition-all group-hover:w-5 group-hover:bg-brass-light" />
              </span>
              <span>MENU</span>
            </button>
            <span className="hidden text-bone-soft/30 sm:inline">|</span>
            <span className="hidden text-bone-soft/60 sm:inline">EST. 2002</span>
          </div>

          {/* Center: Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col items-center justify-center text-center"
          >
            <span className="font-display text-xl tracking-tight text-bone-soft transition-colors group-hover:text-brass-light sm:text-2xl md:text-3xl">
              Project Art Group
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

        {/* Center: Single Grand "Project Art Group" Title + Carousel */}
        <div className="relative z-20 mx-auto my-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-10 text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-bone-soft/20 bg-void/50 px-4 py-1.5 text-[11px] tracking-widest text-brass-light uppercase backdrop-blur-md">
            <span>Event Production &amp; Design</span>
            <span className="text-bone-soft/40">·</span>
            <span>Est. 2002</span>
          </div>

          <h1
            className="font-display text-5xl tracking-tight text-bone-soft transition-transform duration-500 sm:text-7xl md:text-8xl lg:text-9xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.85)" }}
          >
            Project Art Group
          </h1>

          <p className="mt-4 max-w-lg text-xs tracking-widest text-bone-soft/75 uppercase sm:text-sm">
            Four specialized studios · Surabaya · Bali · London
          </p>

          {/* SLEEK LOGO & STUDIOS CAROUSEL */}
          <div className="mt-12 w-full max-w-4xl overflow-hidden py-4">
            <div className="mb-3 flex items-center justify-between px-2 text-[10px] tracking-widest text-bone-soft/50 uppercase">
              <span>OUR STUDIOS &amp; DIVISIONS</span>
              <span className="hidden sm:inline">SWIPE / SCROLL →</span>
            </div>

            {/* Continuous Elegant Marquee Carousel */}
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="animate-marquee flex gap-4 py-2">
                {[...studios, ...studios].map((item, index) => (
                  <Link
                    key={`${item.name}-${index}`}
                    href={item.href}
                    className={`group flex min-w-[240px] flex-col justify-between rounded-xl border p-4 text-left transition-all hover:scale-105 sm:min-w-[280px] ${
                      item.highlight
                        ? "border-brass/60 bg-void/80 backdrop-blur-md hover:border-brass hover:bg-void"
                        : "border-bone-soft/15 bg-void/60 backdrop-blur-md hover:border-bone-soft/40 hover:bg-void/80"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-brass-light uppercase">
                        {item.category}
                      </span>
                      {item.highlight && (
                        <span className="rounded-full bg-brass/30 px-2 py-0.5 text-[9px] text-brass-light">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mt-2 font-display text-lg tracking-tight text-bone-soft group-hover:text-brass-light">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-bone-soft/60">{item.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Minimalist Bar with Sleek Scroll Indicator */}
        <div className="relative z-20 flex flex-col items-center justify-between gap-4 border-t border-bone-soft/10 bg-void/40 px-6 py-5 text-[11px] tracking-widest text-bone-soft/60 uppercase backdrop-blur-xs sm:flex-row sm:px-12">
          <div>SURABAYA · BALI · JAKARTA · SINGAPORE · LONDON</div>

          {/* Sleek thin animated scroll indicator */}
          <div className="flex items-center gap-2 text-brass-light">
            <span className="text-[10px]">SCROLL</span>
            <span className="inline-block animate-bounce text-xs">↓</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">&ldquo;TRUST IS A MUST&rdquo;</span>
            <span className="hidden text-bone-soft/20 sm:inline">|</span>
            <Link href="/corporate" className="transition-colors hover:text-brass-light">
              PROJECT ART CORPORATE
            </Link>
          </div>
        </div>
      </section>

      {/* SLIDE-OUT MENU DRAWER (COMES OUT FROM THE LEFT) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop overlay */}
          <div
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-void/80 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer content (aligned to LEFT) */}
          <div className="relative mr-auto flex h-full w-full max-w-md flex-col justify-between border-r border-bone-soft/10 bg-void p-8 transition-transform duration-300 sm:p-12">
            <div className="flex items-center justify-between border-b border-bone-soft/10 pb-6">
              <span className="font-display text-xl tracking-tight text-bone-soft">
                Project Art Group
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
                Studios &amp; Directory
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
              <div className="pt-4">
                <Link
                  href="/corporate#contact"
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl text-brass-light transition-colors hover:text-white sm:text-3xl"
                >
                  Inquire / Talk to Us →
                </Link>
              </div>
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
              Explore Services &amp; Process
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
