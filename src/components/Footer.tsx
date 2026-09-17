const businesses = [
  "Project Art Corporate",
  "Project Art Plus",
  "Prime Project",
  "Oneway Party Idea",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12">
        <div className="grid gap-12 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <img
                src="/logos/LOGO PA GROUP PUTIH.png"
                alt="Studio 1 Logo"
                className="h-8 w-auto object-contain max-w-[120px]"
              />
              <img
                src="/logos/LOGO PA CORP WHITE.png"
                alt="Studio 1 Logo"
                className="h-8 w-auto object-contain max-w-[120px]"
              />
              <img
                src="/logos/LOGO PA WHITE.png"
                alt="Studio 2 Logo"
                className="h-8 w-auto object-contain max-w-[120px]"
              />
              <img
                src="/logos/LOGO PP PUTIH.png"
                alt="Studio 3 Logo"
                className="h-8 w-auto object-contain max-w-[120px]"
              />
              <img
                src="/logos/LOGO ONEWAY WHITE.png"
                alt="Studio 4 Logo"
                className="h-8 w-auto object-contain max-w-[120px]"
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
              <li>
                <a
                  href="https://instagram.com/ProjectArt.Corporate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: @ProjectArt.Corporate
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
