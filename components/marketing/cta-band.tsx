import { SignupForm } from "@/components/marketing/signup-form";

type CtaBandProps = {
  id?: string;
  title: string;
  body: string;
  source: string;
};

export function CtaBand({ id, title, body, source }: CtaBandProps) {
  return (
    <section id={id} className="editorial-grid overflow-hidden bg-black px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-accent before:h-px before:w-8 before:bg-accent">Start here</p>
          <h2 className="font-heading text-6xl font-semibold uppercase leading-[0.84] md:text-8xl lg:text-9xl">{title}</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">{body}</p>
        </div>
        <div className="bg-white p-3 text-black md:p-5">
          <p className="mb-4 text-xs font-bold uppercase text-accent">Join the first cohort</p>
          <SignupForm source={source} compact />
        </div>
      </div>
    </section>
  );
}
