import Link from "next/link";
import type { Route } from "next";

const navItems: Array<{ href: Route; label: string }> = [
  { href: "/about", label: "About" },
  { href: "/#learn", label: "Course" },
  { href: "/#join", label: "Join" },
];

export function Header() {
  return (
    <header className="border-b border-line bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <Link href="/" className="font-heading text-2xl font-semibold uppercase leading-none">
          VCFM
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm font-medium md:gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
