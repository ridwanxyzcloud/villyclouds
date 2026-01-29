import Link from "next/link";
import { Container } from "./container";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-tight">
          <span className="text-white">Villy</span>
          <span className="text-white/70">Clouds</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-white/75 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
        >
          Let’s talk
        </Link>
      </Container>
    </header>
  );
}
