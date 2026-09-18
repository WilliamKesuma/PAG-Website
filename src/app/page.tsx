"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// Studio Brand Logos for the Carousel
const brandLogos = [
  {
    name: "Project Art Corporate",
    tag: "Corporate & Institutional",
    description: "Your description here...",
    href: "/corporate",
    logo: "/logos/LOGO PA CORP WHITE.png",
  },
  {
    name: "Project Art Plus",
    tag: "Luxury Weddings",
    description: "Your description here...",
    href: "/plus",
    logo: "/logos/LOGO PA WHITE.png",
  },
  {
    name: "Prime Project",
    tag: "Modern Weddings",
    description: "Your description here...",
    href: "/prime",
    logo: "/logos/LOGO PP PUTIH.png",
  },
  {
    name: "Oneway Party Idea",
    tag: "Celebrations & Parties",
    description: "Your description here...",
    href: "/oneway",
    logo: "/logos/LOGO ONEWAY WHITE.png",
  },
];

const businesses = [
  {
    name: "Project Art Corporate",
    tag: "Corporate & Institutional Events",
    description:
      "Corporate Branch Studio | Grand openings, Galas, Awardings, Expos, and more. Every corporate event that isn't a wedding. Trusted by respected brands such as Singapore Airlines, CIMB, and Mercedes-Benz.",
    href: "/corporate",
    featured: true,
    logo: "/logos/LOGO PA CORP WHITE.png",
  },
  {
    name: "Project Art Plus",
    tag: "Glamourous Weddings",
    description:
      "Our Flagship Studio | High-glamour weddings built from concept to the last detail.",
    href: "/plus",
    logo: "/logos/LOGO PA WHITE.png",
  },
  {
    name: "Prime Project",
    tag: "Intimate Weddings",
    description:
      "Weddings built around what a couple actually needs, at a more accessible scale.",
    href: "/prime",
    logo: "/logos/LOGO PP PUTIH.png",
  },
  {
    name: "Oneway Party Idea",
    tag: "Celebrations & Parties",
    description:
      "Birthdays, parties, and the everyday celebrations that still deserve a good run of show.",
    href: "/oneway",
    logo: "/logos/LOGO ONEWAY WHITE.png",
  },
];

export default function Home() {
  // ── Header scroll transparency ──────────────────────────────
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Menu center-expand state ─────────────────────────────────
  // phase: "idle" | "opening" | "open" | "closing"
  const [menuPhase, setMenuPhase] = useState<"idle" | "opening" | "open" | "closing">("idle");
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMenuPhase("opening");
    // tiny frame delay so the scaleY transition fires from the initial state
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMenuPhase("open"));
    });
  }

  function closeMenu() {
    setMenuPhase("closing");
    closeTimerRef.current = setTimeout(() => setMenuPhase("idle"), 600);
  }

  const menuVisible = menuPhase !== "idle";
  const menuExpanded = menuPhase === "open";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">

      {/* ── FIXED STICKY HEADER ── */}
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 sm:px-12 transition-all duration-500 ${scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/8"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        {/* Left: Logo → home */}
        <Link href="/" aria-label="Project Art Group home">
          <Image
            src="/logos/LOGO PA GROUP PUTIH.png"
            alt="Project Art Group"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Right: INQUIRE + MENU */}
        <div className="flex items-center gap-5 text-xs tracking-widest text-zinc-400 uppercase sm:gap-7">
          <button
            onClick={openMenu}
            className="group flex items-center gap-2.5 transition-colors hover:text-white"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-1">
              <span className="h-0.5 w-5 bg-zinc-400 transition-all group-hover:bg-white" />
              <span className="h-0.5 w-3 bg-zinc-400 transition-all group-hover:w-5 group-hover:bg-white" />
            </span>
            <span>MENU</span>
          </button>
        </div>
      </header>

      {/* 1. FIRST SECTION WITH BACKGROUND PICTURE (NO FOOTER) */}
      <section
        className="relative flex min-h-screen flex-col justify-between overflow-hidden"
        style={{
          backgroundImage: "url('/hero-aerial.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Cinematic overlay gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-black/50" />
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/70 via-transparent to-black/85" />

        {/* Center Content: Single Project Art Group Heading + Image Logo Carousel */}
        <div className="relative z-20 mx-auto my-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] tracking-widest text-zinc-300 uppercase backdrop-blur-md">
            <span>Event Production &amp; Design</span>
            <span className="text-zinc-600">·</span>
            <span>Est. 2002</span>
          </div>

          <h1
            className="font-display text-5xl tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}
          >
            Project Art Group
          </h1>

          <p className="mt-4 max-w-lg text-xs tracking-widest text-zinc-400 uppercase sm:text-sm">
            Surabaya · Bali · Jakarta · Overseas
          </p>

          {/* IMAGE-BASED LOGO CAROUSEL (CLEAN LOGOS WITHOUT CARDS) */}
          <div className="mt-16 w-full max-w-4xl overflow-hidden py-4">
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="animate-marquee flex items-center gap-16 py-4">
                {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
                  <Link
                    key={`${logo.name}-${index}`}
                    href={logo.href}
                    className="group flex shrink-0 items-center justify-center opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-105"
                    title={logo.name}
                  >
                    <div className="relative h-14 w-40 sm:h-16 sm:w-48">
                      <Image
                        src={logo.logo}
                        alt={logo.name}
                        fill
                        className="object-contain filter transition-all duration-300 group-hover:brightness-125"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Empty bottom spacer for perfect vertical balance */}
        <div className="h-10" />
      </section>

      {/* ── CENTER-EXPAND FULL-SCREEN MENU ── */}
      {menuVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: menuExpanded ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
            transition: "background 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: menuExpanded ? "scaleY(1) scaleX(1)" : "scaleY(0.015) scaleX(0.6)",
              transformOrigin: "center center",
              transition: menuExpanded
                ? "transform 0.55s cubic-bezier(0.16,1,0.3,1)"
                : "transform 0.45s cubic-bezier(0.4,0,0.6,1)",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#0a0a0a",
              padding: "0",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "10%",
                right: "10%",
                height: "1px",
                background: "rgba(255,255,255,0.15)",
                transform: "translateY(-50%)",
                opacity: menuExpanded ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />

            <div
              style={{
                opacity: menuExpanded ? 1 : 0,
                transform: menuExpanded ? "translateY(0)" : "translateY(-12px)",
                transition: menuExpanded
                  ? "opacity 0.4s 0.25s ease, transform 0.4s 0.25s ease"
                  : "opacity 0.15s ease, transform 0.15s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "28px 48px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Image
                src="/logos/LOGO PA GROUP PUTIH.png"
                alt="Project Art Group"
                width={110}
                height={36}
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={closeMenu}
                className="group flex items-center gap-2.5 text-xs tracking-widest text-zinc-400 uppercase transition-colors hover:text-white cursor-pointer"
                aria-label="Close menu"
              >
                <span>CLOSE</span>
                <img
                  src="/Icons/close.png"
                  alt="Close"
                  className="h-3.5 w-3.5 object-contain brightness-0 invert opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center px-12 sm:px-20">
              <p
                style={{
                  opacity: menuExpanded ? 1 : 0,
                  transform: menuExpanded ? "translateY(0)" : "translateY(20px)",
                  transition: menuExpanded
                    ? "opacity 0.45s 0.3s ease, transform 0.45s 0.3s ease"
                    : "opacity 0.1s ease",
                }}
                className="mb-8 text-xs tracking-widest text-zinc-500 uppercase"
              >
                Studios &amp; Directory
              </p>

              {[
                { href: "/corporate", label: "Project Art Corporate", dim: true },
                { href: "/plus", label: "Project Art Plus", dim: true },
                { href: "/prime", label: "Prime Project", dim: true },
                { href: "/oneway", label: "Oneway Party Idea", dim: true },
              ].map(({ href, label, dim }, i) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  style={{
                    opacity: menuExpanded ? 1 : 0,
                    transform: menuExpanded ? "translateY(0)" : "translateY(28px)",
                    transition: menuExpanded
                      ? `opacity 0.5s ${0.32 + i * 0.07}s ease, transform 0.5s ${0.32 + i * 0.07}s ease`
                      : "opacity 0.1s ease, transform 0.1s ease",
                  }}
                  className={`font-display block py-3 text-3xl tracking-tight transition-colors hover:text-white sm:text-5xl ${dim ? "text-zinc-500" : "text-white"
                    }`}
                >
                  {label}
                </Link>
              ))}

              <div
                style={{
                  opacity: menuExpanded ? 1 : 0,
                  transform: menuExpanded ? "translateY(0)" : "translateY(28px)",
                  transition: menuExpanded
                    ? "opacity 0.5s 0.6s ease, transform 0.5s 0.6s ease"
                    : "opacity 0.1s ease",
                  marginTop: "32px",
                }}
              >
              </div>
            </div>

            <div
              style={{
                opacity: menuExpanded ? 1 : 0,
                transform: menuExpanded ? "translateY(0)" : "translateY(12px)",
                transition: menuExpanded
                  ? "opacity 0.4s 0.5s ease, transform 0.4s 0.5s ease"
                  : "opacity 0.1s ease",
                padding: "20px 48px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="text-xs text-zinc-600">Project Art Group · Est. 2002</p>
              <p className="text-xs text-zinc-600">Surabaya · Bali · Jakarta · Overseas</p>
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
              End-to-end event management & production, done properly, for your special moments.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Project Art Group runs four studios out of Surabaya.
              From bespoke weddings, high-energy celebrations, and an array of corporate and institutional events.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => {
                  const footer = document.getElementById("footer");
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group relative overflow-hidden rounded-full border border-white/30 px-6 py-3 text-sm text-white transition-colors duration-300 hover:border-white cursor-pointer"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Inquire for Your Event
                </span>
              </button>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-8 self-start border-t border-white/10 pt-8 sm:grid-cols-1 sm:border-t-0 sm:border-l sm:border-white/10 sm:pl-10 sm:pt-0">
            <div>
              <dt className="text-xs tracking-widest text-zinc-500 uppercase">Founded</dt>
              <dd className="font-display text-3xl text-white">2002</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-zinc-500 uppercase">Event per year</dt>
              <dd className="font-display text-3xl text-white">120+</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-zinc-500 uppercase">
                Destinations
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-zinc-300">
                Indonesia, Singapore, London, and Many More
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
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {businesses.map((b) => {
              const cardClass =
                "group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950 p-8 text-white transition-all duration-300 hover:border-white/40 hover:bg-zinc-900";
              const inner = (
                <>
                  {/* Top Right Studio Logo */}
                  {b.logo && (
                    <div className="absolute top-8 right-8 h-8 w-24">
                      <Image
                        src={b.logo}
                        alt={`${b.name} logo`}
                        fill
                        className="object-contain object-right opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                  )}

                  <div className="pr-20">
                    <p className="text-xs tracking-widest text-zinc-400 uppercase">
                      {b.tag}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-white sm:text-3xl">
                      {b.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                      {b.description}
                    </p>
                  </div>

                  <span className="mt-8 inline-flex items-center gap-2 text-xs tracking-widest text-zinc-600 uppercase transition-colors duration-300 group-hover:text-white">
                    View Studio →
                  </span>
                </>
              );
              return (
                <Link key={b.name} href={b.href} className={cardClass}>
                  {inner}
                </Link>
              );
            })}
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
            Our Moto since 2002, and it&apos;s still
            why we stay true to deliver and serve you
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}