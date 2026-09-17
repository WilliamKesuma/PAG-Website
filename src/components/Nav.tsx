import Link from "next/link";

const links = [
  { href: "/#businesses", label: "Our Businesses" },
  { href: "/corporate", label: "Project Art Corporate" },
  { href: "/corporate#contact", label: "Talk to Us" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b rule-bone bg-bone/90 backdrop-blur supports-[backdrop-filter]:bg-bone/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="font-display text-lg tracking-tight">
          Project Art Group
        </Link>
        <nav className="hidden gap-8 text-sm text-void/80 sm:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/corporate#contact"
          className="rounded-full border border-void px-4 py-2 text-sm transition-colors hover:border-brass hover:text-brass sm:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
