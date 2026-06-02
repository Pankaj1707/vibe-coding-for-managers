import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-black/70 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p>Vibe Coding for Managers</p>
          <p className="text-xs text-black/60">Built in public — see the founder story on About.</p>
        </div>
        <div className="flex gap-5">
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <a href="mailto:hello@vibecodingformanagers.com" className="hover:text-accent">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
