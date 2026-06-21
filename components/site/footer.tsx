import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black bg-white">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-6 px-5 py-10 text-sm text-black/65 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-heading text-3xl font-semibold uppercase leading-none text-black">Vibe Coding for Managers</p>
          <p className="mt-2 text-xs">Built in public. For managers ready to make software.</p>
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
