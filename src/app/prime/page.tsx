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
  "Social Events",
  "Private Parties",
  "Weddings",
  "Anniversaries",
  "Celebrations",
  "Special Occasions",
  "Etc."
];

// ── Memory Wall Photography ───────
const weddingMemories = [
  {
    couple: "Alexander & Clarissa",
    location: "The Mulia, Bali",
    year: "2024",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    aspect: "col-span-1 row-span-2 aspect-[3/4]",
  },
  {
    couple: "Michael & Vanessa",
    location: "Westin, Surabaya",
    year: "2023",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    aspect: "col-span-1 row-span-1 aspect-square",
  },
  {
    couple: "David & Stephanie",
    location: "Ritz-Carlton, Jakarta",
    year: "2023",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    aspect: "col-span-1 row-span-1 aspect-square",
  },
  {
    couple: "Christian & Michelle",
    location: "Ayana Resort, Bali",
    year: "2022",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    aspect: "col-span-1 row-span-2 aspect-[3/4]",
  },
  {
    couple: "Nicholas & Samantha",
    location: "Four Seasons, London",
    year: "2022",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    aspect: "col-span-1 row-span-1 aspect-square",
  },
  {
    couple: "Jonathan & Evelyn",
    location: "Shangri-La, Surabaya",
    year: "2021",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    aspect: "col-span-1 row-span-1 aspect-square",
  },
];

const cities = ["Surabaya", "Bali", "Jakarta", "Thailand", "London", "And More"];

// ── Carousel Photography ───────
const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    alt: "Private Celebration",
    title: "Private Celebration",
    client: "Prime Project · Surabaya",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    alt: "Wedding Reception",
    title: "Wedding Reception",
    client: "Prime Project · Bali",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    alt: "Social Gathering",
    title: "Milestone Party",
    client: "Prime Project · Jakarta",
  },
];

// ── Component ────────────────────────────────────────────────────
export default function Plus() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // ── Draggable / infinite-loop carousel ────────────────────────
  // A single JS-owned position (in px) drives the track's transform.
  // No native scrollLeft and no CSS keyframe animation are used —
  // mixing those with a transform is what lets the visible offset drift
  // past the duplicated content and go blank. Position is wrapped with
  // modulo math every frame, so it is never possible to run out.
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0); // always kept in (-singleSetWidth, 0]
  const singleSetWidthRef = useRef(0);
  const speedRef = useRef(0); // px/second, auto-scroll speed
  const rafRef = useRef<number | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const isDownRef = useRef(false);
  const isPausedRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPosition = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function scheduleResume() {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 2500);
  }

  function measureTrack() {
    if (!trackRef.current) return;
    const fullWidth = trackRef.current.scrollWidth; // 2 copies of heroSlides
    singleSetWidthRef.current = fullWidth / 2;
    speedRef.current = singleSetWidthRef.current / 24; // ~match old 24s loop
  }

  useEffect(() => {
    measureTrack();
    window.addEventListener("resize", measureTrack);

    let lastTime = performance.now();
    function tick(now: number) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (!isDownRef.current && !isPausedRef.current && singleSetWidthRef.current > 0) {
        positionRef.current -= speedRef.current * dt;
      }

      const w = singleSetWidthRef.current;
      if (w > 0) {
        // Wrap position into (-w, 0] — since both halves of the track are
        // pixel-identical copies, this wrap is always visually seamless,
        // no matter how far or fast the user dragged.
        while (positionRef.current <= -w) positionRef.current += w;
        while (positionRef.current > 0) positionRef.current -= w;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", measureTrack);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    isDownRef.current = true;
    isPausedRef.current = true;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartPosition.current = positionRef.current;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDownRef.current) return;
    e.preventDefault();
    const dx = e.clientX - dragStartX.current;
    positionRef.current = dragStartPosition.current + dx;
    // RAF loop wraps + applies the transform every frame, so no work needed here.
  }

  function handlePointerUp() {
    if (!isDownRef.current) return;
    isDownRef.current = false;
    setIsDragging(false);
    scheduleResume();
  }

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

            <div className="lg:col-span-5 pr-6 sm:pr-12 lg:pr-0">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] tracking-widest text-zinc-300 uppercase backdrop-blur-md">
                <span>Welcome to</span>
              </div>

              <h1
                className="font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
              >
                Prime Project
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
                Our Intimate Wedding Studio
                <br />
                Focused on crafting what couples actually need, at a more accessible scale.
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
                  <p className="font-display text-2xl sm:text-3xl text-white">2002</p>
                  <p className="mt-1 text-[11px] sm:text-xs tracking-widest text-zinc-500 uppercase">Founded</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl text-white">50+</p>
                  <p className="mt-1 text-[11px] sm:text-xs tracking-widest text-zinc-500 uppercase">Weddings/Yr</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl text-white">5</p>
                  <p className="mt-1 text-[11px] sm:text-xs tracking-widest text-zinc-500 uppercase">Cities</p>
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-7 overflow-hidden">
              <div
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                className={`relative w-full overflow-hidden select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 4%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 100%)",
                  touchAction: "none",
                }}
              >
                <div
                  ref={trackRef}
                  className="flex gap-4 sm:gap-5 w-max will-change-transform"
                >
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
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                        priority={idx < 4}
                        draggable={false}
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
              Intimate Weddings
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Building your special day, at a more accessible scale.
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
              Based in Surabaya. Operational nationwide.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Our teams frequently travel to major cities across the region to bring custom concepts to life.
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

      {/* ── MEMORY WALL ── */}
      <section className="border-t border-white/10 bg-black px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs tracking-widest text-zinc-400 uppercase">Memory Wall</span>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            Past Celebrations &amp; Weddings
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400">
            A look back at the love stories, milestone celebrations, and bespoke weddings orchestrated by <strong>Prime Project</strong>.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {weddingMemories.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 transition-all duration-500 hover:border-white/30"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.couple}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-mono">
                      {item.year} · {item.location}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-white tracking-wide">
                      {item.couple}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-white/10 bg-zinc-950 px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl grid gap-12 sm:grid-cols-[1.2fr_1fr] sm:items-start">
          <div>
            <span className="text-xs tracking-widest text-zinc-400 uppercase">Contact</span>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              Start with a conversation
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Reach out to plan your special day with the Prime Project team.
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
                { href: "/plus", label: "Project Art Plus", dim: false },
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
                      : "opacity 0.1s ease",
                  }}
                  className={`font-display block py-2.5 sm:py-3 text-2xl tracking-tight transition-colors hover:text-white sm:text-5xl ${dim ? "text-zinc-700" : "text-white"
                    }`}
                >
                  {label}
                </Link>
              ))}
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