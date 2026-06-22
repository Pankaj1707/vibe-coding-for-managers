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
    <section id={id} className={cn("border-b border-black/10 px-5 py-18 md:px-8 md:py-24", className)}>
      <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="max-w-xl">
          {eyebrow ? <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase text-accent before:h-px before:w-8 before:bg-accent">{eyebrow}</p> : null}
          {title ? <h2 className="font-heading text-5xl font-semibold uppercase leading-[0.88] md:text-7xl lg:text-8xl">{title}</h2> : null}
          {intro ? <p className="mt-6 max-w-lg text-base font-medium leading-7 text-black/75 md:text-lg md:leading-8">{intro}</p> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
