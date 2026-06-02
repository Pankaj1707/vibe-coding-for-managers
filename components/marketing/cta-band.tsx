import { SignupForm } from "@/components/marketing/signup-form";

type CtaBandProps = {
  id?: string;
  title: string;
  body: string;
  source: string;
};

export function CtaBand({ id, title, body, source }: CtaBandProps) {
  return (
    <section id={id} className="bg-black px-5 py-16 text-white md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent">Start here</p>
          <h2 className="font-heading text-5xl font-semibold uppercase leading-[0.94] md:text-7xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{body}</p>
        </div>
        <div className="mt-10 max-w-3xl bg-white text-black">
          <SignupForm source={source} />
        </div>
      </div>
    </section>
  );
}
