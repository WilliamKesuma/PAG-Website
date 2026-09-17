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
            <p className="font-display text-xl tracking-tight text-white">
              Project Art Group
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
              Four studios, one standard for how an event gets built. Trust is a must —
              since 2002.
            </p>
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
              Project Art Corporate
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
              <li>business@projectartplus.co.id</li>
              <li>+62 31 734 8569</li>
              <li>WhatsApp +62 811 3496 269</li>
              <li className="text-zinc-500 pt-1">
                Ruko Satelit Town Square Blok D-21,
                <br />
                Jl. Raya Sukomanunggal Jaya, Surabaya
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
