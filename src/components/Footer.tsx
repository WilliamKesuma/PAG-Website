import Image from "next/image";

const businesses = [
  "Project Art Corporate",
  "Project Art Plus",
  "Prime Project",
  "Oneway Party Idea",
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12">
        <div className="grid gap-12 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Main Group Logo */}
            <div>
              <Image
                src="/logos/LOGO PA GROUP PUTIH.png"
                alt="Project Art Group"
                width={200}
                height={80}
                className="h-16 sm:h-20 w-auto object-contain object-left"
              />
            </div>

            {/* 4 Sub-studios Row: PA+, ONEWAY, PAC, PRIME PROJECT */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-1">
              <Image
                src="/logos/LOGO PA WHITE.png"
                alt="Project Art Plus"
                width={100}
                height={36}
                className="h-7 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
              />
              <Image
                src="/logos/LOGO ONEWAY WHITE.png"
                alt="Oneway Party Idea"
                width={120}
                height={36}
                className="h-6 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
              />
              <Image
                src="/logos/LOGO PA CORP WHITE.png"
                alt="Project Art Corporate"
                width={110}
                height={36}
                className="h-6 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
              />
              <Image
                src="/logos/LOGO PP PUTIH.png"
                alt="Prime Project"
                width={110}
                height={36}
                className="h-7 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Our businesses
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
              {businesses.map((b) => (
                <li key={b} className="hover:text-white transition-colors">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div id="contact">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Project Art Group
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
              <li>
                <a
                  href="mailto:business@projectartplus.co.id"
                  className="hover:text-white transition-colors"
                >
                  Mail: business@projectartplus.co.id
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/628113496269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +62 811 3496 269
                </a>
              </li>
              <li className="text-zinc-500 pt-1 leading-relaxed">
                Ruko Satelit Town Square Blok D-21
                <br />
                Jl. Raya Sukomanunggal Jaya
                <br />
                Surabaya - Indonesia
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Project Art Group. All rights reserved.</p>
          <p>Mock build — not yet connected to projectartplus.co.id</p>
        </div>
      </div>
    </footer>
  );
}
