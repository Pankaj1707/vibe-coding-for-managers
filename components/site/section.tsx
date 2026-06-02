import { cn } from "@/lib/cn";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ eyebrow, title, intro, children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("border-b border-line px-5 py-16 md:px-8 md:py-24", className)}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
        <div className="max-w-xl">
          {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent">{eyebrow}</p> : null}
          {title ? <h2 className="font-heading text-5xl font-semibold uppercase leading-[0.94] md:text-7xl">{title}</h2> : null}
          {intro ? <p className="mt-6 text-lg leading-8 text-black/70">{intro}</p> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
