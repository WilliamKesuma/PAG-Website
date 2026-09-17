const businesses = [
  "Project Art Corporate",
  "Project Art Plus",
  "Prime Project",
  "Oneway Party Idea",
];

export default function Footer() {
  return (
    <footer className="border-t rule-void bg-void text-bone-soft">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg">Project Art Group</p>
            <p className="mt-3 max-w-xs text-sm text-slate-on-dark">
              Four studios, one standard for how an event gets built. Trust is a must —
              since 2002.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-on-dark">
              Our businesses
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {businesses.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div id="contact">
            <p className="text-xs uppercase tracking-wide text-slate-on-dark">
              Project Art Corporate
            </p>
            <ul className="mt-3 space-y-2 text-sm text-bone-soft">
              <li>business@projectartplus.co.id</li>
              <li>+62 31 734 8569</li>
              <li>WhatsApp +62 811 3496 269</li>
              <li className="text-slate-on-dark">
                Ruko Satelit Town Square Blok D-21,
                <br />
                Jl. Raya Sukomanunggal Jaya, Surabaya
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t rule-void pt-6 text-xs text-slate-on-dark sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Project Art Group. All rights reserved.</p>
          <p>Mock build — not yet connected to projectartplus.co.id</p>
        </div>
      </div>
    </footer>
  );
}
