"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// ── Data ────────────────────────────────────────────────────────
const process = [
  { step: "Concepting", detail: "Brainstorm and exchange ideas to produce unique event concepts." },
  { step: "Budgeting", detail: "Budget arrangements to bring the concept to life effectively and efficiently." },
  { step: "Vendor & Supplier Selection", detail: "Work with our vendor partners to bring it from concept to life." },
  { step: "Scheduling", detail: "Organize & schedule important dates towards the event day." },
  { step: "Coordination Meeting", detail: "Manage production, talent/artist booking, MC, others, and partners to make sure everything runs smoothly." },
  { step: "Dealing", detail: "Help clients manage billings, invoices, and payments to suppliers and vendors." },
  { step: "Event Day", detail: "Being present to ensure all elements are achieved in your big day." },
];

const eventTypes = [
  "Bespoke Weddings",
  "VIP Private Dinners",
  "Exclusive Galas",
  "Milestone Celebrations",
  "Luxury Brand Soirées",
  "High-End Socials",
  "Etc."
];

const clients = [
  { name: "Singapore Airlines", logo: "/Brand Logos/Singapore Air.png" },
  { name: "Hong Kong Tourism Board", logo: "/Brand Logos/HKTB.png" },
  { name: "Galaxy", logo: "/Brand Logos/Galaxy.png" },
  { name: "Laifen", logo: "/Brand Logos/Laifen.png" },
  { name: "Miracle", logo: "/Brand Logos/Miracle.png" },
  { name: "Profira", logo: "/Brand Logos/Profira.png" },
];

const cities = ["Surabaya", "Bali", "Jakarta", "Semarang"];

// ── Placeholder event photography for the horizontal carousel ───────
const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury Gala Night",
    title: "Luxury Gala",
    client: "Prime Project · Surabaya",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    alt: "Bespoke Private Dinner",
    title: "VIP Soirée",
    client: "Prime Project · Jakarta",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    alt: "Destination Wedding & Celebration",
    title: "Bespoke Wedding",
    client: "Prime Project · Bali",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    alt: "High-End Corporate Celebration",
    title: "Exclusive Gala",
    client: "Prime Project · Surabaya",
  },
];

// ── Component ────────────────────────────────────────────────────
export default function Prime() {
  // ── Scroll-aware header ──────────────────────────────────────
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Center-expand menu ───────────────────────────────────────
  const [menuPhase, setMenuPhase] = useState<"idle" | "opening" | "open" | "closing">("idle");
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMenuPhase("opening");
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuPhase("open")));
  }

  function closeMenu() {
    setMenuPhase("closing");
    closeTimerRef.current = setTimeout(() => setMenuPhase("idle"), 600);
  }

  const menuVisible = menuPhase !== "idle";
  const menuExpanded = menuPhase === "open";

  // ── Carousel Scroll Ref ───────────────────────────────────
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">

      {/* ── FIXED HEADER ── */}
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 sm:px-12 transition-all duration-500 ${scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/8"
          : "bg-transparent border-b border-transparent"
          }`}
      >
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

        <div className="flex items-center gap-5 text-xs tracking-widest text-zinc-400 uppercase sm:gap-7">
          <button
            onClick={openMenu}
            className="group flex items-center gap-2.5 transition-colors hover:text-white cursor-pointer"
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

      {/* ── HERO SECTION ── */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-28 pb-16 sm:pt-36 sm:pb-24">
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30 pointer-events-none z-10" />

        <div className="relative z-20 w-full pl-6 sm:pl-12 xl:pl-[calc((100vw-80rem)/2+3rem)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left: Hero Content */}
            <div className="lg:col-span-5 pr-6 sm:pr-12 lg:pr-0">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] tracking-widest text-zinc-300 uppercase backdrop-blur-md">
                <span>Welcome to</span>
              </div>

              <h1
                className="font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
              >
                PRIME PROJECT
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
                Our Bespoke &amp; Luxury Event Studio
                <br />
                Crafted for distinguished celebrations, private galas, and high-profile social occasions requiring refined detail.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const contactSec = document.getElementById("contact");
                    if (contactSec) {
                      contactSec.scrollIntoView({ behavior: "smooth" });
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

              {/* Quick stats */}
              <div className="mt-12 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-10 border-t border-white/10 pt-8 text-left sm:text-center">
                <div>
                  <p className="font-display text-2xl sm:text-3xl text-white">2024</p>
                  <p className="mt-1 text-[11px] sm:text-xs tracking-widest text-zinc-500 uppercase">Founded</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl text-white">40+</p>
                  <p className="mt-1 text-[11px] sm:text-xs tracking-widest text-zinc-500 uppercase">Brands</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl text-white">4</p>
                  <p className="mt-1 text-[11px] sm:text-xs tracking-widest text-zinc-500 uppercase">Cities</p>
                </div>
              </div>
            </div>

            {/* Right: Carousel */}
            <div className="relative lg:col-span-7 overflow-hidden">
              <div
                ref={carouselRef}
                className="relative w-full overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 4%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 100%)",
                }}
              >
                <div className="animate-marquee flex gap-4 sm:gap-5 w-max hover:[animation-play-state:paused]">
                  {[...heroSlides, ...heroSlides].map((slide, idx) => (
                    <div
                      key={idx}
                      className="relative shrink-0 w-[200px] sm:w-[240px] xl:w-[270px] aspect-[9/14] overflow-hidden rounded-xl bg-zinc-900 border border-white/10 group transition-all hover:border-white/40"
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 640px) 200px, (max-width: 1280px) 240px, 270px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={idx < 4}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                        <p className="text-xs font-medium tracking-wide text-white">
                          {slide.title}
                        </p>
                        <p className="mt-0.5 text-[11px] text-zinc-400 line-clamp-1">
                          {slide.client}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE'RE FOR ── */}
      <section className="border-t border-white/10 bg-zinc-950 px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl grid gap-12 sm:grid-cols-2">
          <div>
            <span className="text-xs tracking-widest text-zinc-400 uppercase">Who we&apos;re for</span>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              Discerning private &amp; corporate clients
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              From intimate VIP gatherings to grand luxury affairs, we bring meticulous planning and creative curation to every event.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {eventTypes.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/40 hover:text-white"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs tracking-widest text-zinc-400 uppercase">Where we&apos;ve worked</span>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              Based in Surabaya. On the ground beyond it.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Every destination below has seen a Prime Project event, produced
              with the same high standards and discretion.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {cities.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/40 hover:text-white"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="border-t border-white/10 bg-black px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs tracking-widest text-zinc-400 uppercase">Trust</span>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            Names that have called us back
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
            A selection of the luxury brands and private hosts Prime Project has produced events for.
          </p>

          <div className="mt-16 flex flex-wrap items-center justify-start gap-4 sm:gap-6">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex h-16 sm:h-20 w-[140px] sm:w-[170px] items-center justify-center rounded-xl bg-white p-3 sm:p-4 shadow-sm transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={200}
                  height={80}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="border-t border-white/10 bg-zinc-950 px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs tracking-widest text-zinc-400 uppercase">How we work</span>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            How an event gets built
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
            The same seven stages, every time, regardless of the event&apos;s scale.
          </p>

          <ol className="mt-14 grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {process.map((p, i) => (
              <li
                key={p.step}
                className="group flex gap-5 border-t border-white/10 py-7 transition-colors hover:border-white/30"
              >
                <span className="font-display text-2xl text-zinc-700 transition-colors group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-medium text-white">{p.step}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">{p.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-white/10 bg-black px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl grid gap-12 sm:grid-cols-[1.2fr_1fr] sm:items-start">
          <div>
            <span className="text-xs tracking-widest text-zinc-400 uppercase">Contact</span>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              Start with a conversation
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Tell us your vision, date, and expectations. Our luxury event specialists at Prime Project will curate an unforgettable experience.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-xs tracking-widest text-zinc-500 uppercase">Prime Project</p>
            <p className="mt-3 font-display text-2xl text-white">Get in touch with us</p>
            <dl className="mt-8 space-y-5 text-sm">
              <div className="flex flex-col gap-1">
                <dt className="text-xs tracking-widest text-zinc-500 uppercase">Email</dt>
                <dd>
                  <a href="mailto:business@projectartplus.co.id" className="text-zinc-300 transition-colors hover:text-white">
                    business@projectartplus.co.id
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-xs tracking-widest text-zinc-500 uppercase">Phone</dt>
                <dd className="text-zinc-300">+62 31 734 8569</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-xs tracking-widest text-zinc-500 uppercase">WhatsApp</dt>
                <dd>
                  <a href="https://wa.me/628113496269" target="_blank" rel="noopener noreferrer" className="text-zinc-300 transition-colors hover:text-white">
                    +62 811 3496 269
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-xs tracking-widest text-zinc-500 uppercase">Office</dt>
                <dd className="text-zinc-500 leading-relaxed">
                  Ruko Satelit Town Square Blok D-21,<br />
                  Jl. Raya Sukomanunggal Jaya, Surabaya
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── CENTER-EXPAND MENU ── */}
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
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: "50%", left: "10%", right: "10%", height: "1px", background: "rgba(255,255,255,0.15)", transform: "translateY(-50%)", opacity: menuExpanded ? 0 : 1, transition: "opacity 0.2s" }} />

            <div
              className="flex items-center justify-between px-6 py-5 sm:px-12 border-b border-white/8"
              style={{
                opacity: menuExpanded ? 1 : 0,
                transform: menuExpanded ? "translateY(0)" : "translateY(-12px)",
                transition: menuExpanded
                  ? "opacity 0.4s 0.25s ease, transform 0.4s 0.25s ease"
                  : "opacity 0.15s ease",
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

            <div className="flex flex-1 flex-col justify-center px-6 sm:px-12 lg:px-20">
              <p
                style={{
                  opacity: menuExpanded ? 1 : 0,
                  transform: menuExpanded ? "translateY(0)" : "translateY(20px)",
                  transition: menuExpanded
                    ? "opacity 0.45s 0.3s ease, transform 0.45s 0.3s ease"
                    : "opacity 0.1s ease",
                }}
                className="mb-6 sm:mb-8 text-xs tracking-widest text-zinc-500 uppercase"
              >
                Studios &amp; Directory
              </p>

              {[
                { href: "/corporate", label: "Project Art Corporate", dim: true },
                { href: "/plus", label: "Project Art Plus", dim: true },
                { href: "/prime", label: "Prime Project", dim: false },
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
                      : "opacity 0.1s ease",
                  }}
                  className={`font-display block py-2.5 sm:py-3 text-2xl tracking-tight transition-colors hover:text-white sm:text-5xl ${dim ? "text-zinc-700" : "text-white"
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
                  marginTop: "28px",
                }}
              >
              </div>
            </div>

            <div
              className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between px-6 py-4 sm:px-12 border-t border-white/8 text-xs text-zinc-600"
              style={{
                opacity: menuExpanded ? 1 : 0,
                transform: menuExpanded ? "translateY(0)" : "translateY(12px)",
                transition: menuExpanded
                  ? "opacity 0.4s 0.5s ease, transform 0.4s 0.5s ease"
                  : "opacity 0.1s ease",
              }}
            >
              <p>Project Art Group · Est. 2002</p>
              <p>Surabaya · Bali · Jakarta · Overseas</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}