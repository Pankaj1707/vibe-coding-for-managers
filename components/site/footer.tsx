import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-8 px-5 py-12 text-sm text-black/70 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-heading text-3xl font-semibold uppercase leading-none text-black">Vibe Coding for Managers</p>
          <p className="mt-2 text-xs text-black/60">Built in public. For managers ready to make software.</p>
        </div>
        <div className="flex gap-5">
          <Link href="/about" className="transition-colors hover:text-black">
            About
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-black">
            Privacy
          </Link>
          <a href="mailto:hello@vibecodingformanagers.com" className="transition-colors hover:text-black">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
