import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-lg">VillyClouds</div>
          <p className="mt-1 text-sm text-white/60">
            Data • AI • Software • Innovation — built with clarity and craftsmanship.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/philosophy" className="hover:text-white">Philosophy</Link>
          <a href="mailto:info@villyclouds.com" className="hover:text-white">info@villyclouds.com</a>
        </div>
      </Container>
    </footer>
  );
}
