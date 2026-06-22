import Link from "next/link";
import type { Route } from "next";

const navItems: Array<{ href: Route; label: string }> = [
  { href: "/about", label: "About" },
  { href: "/#learn", label: "Course" },
  { href: "/#join", label: "Join" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex min-h-20 max-w-[90rem] items-center justify-between px-5 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Vibe Coding for Managers home">
          <span className="flex size-8 items-center justify-center bg-black font-heading text-xl font-semibold leading-none text-white transition-colors group-hover:bg-accent">
            V
          </span>
          <span className="hidden text-xs font-semibold uppercase leading-[1.05] sm:block">
            Vibe Coding
            <br />
            for Managers
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-5 text-xs font-semibold uppercase md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.label === "Join" ? "bg-black px-4 py-3 text-white transition-colors hover:bg-accent" : "transition-colors hover:text-accent"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
