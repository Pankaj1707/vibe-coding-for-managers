import { ContentCard } from "@/components/marketing/content-card";
import { CtaBand } from "@/components/marketing/cta-band";
import { SignupForm } from "@/components/marketing/signup-form";
import { Section } from "@/components/site/section";
import { learnCards } from "@/components/data/site-copy";

const audiences = ["Marketing", "Operations", "Projects", "Programs", "Consulting", "Leadership"];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-black/10 bg-white px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-14">
        <div className="mx-auto max-w-[90rem]">
          <div className="flex items-center justify-between border-b border-black/10 pb-3 text-[0.65rem] font-bold uppercase md:text-xs">
            <p className="text-accent">AI-assisted building for managers</p>
            <p className="text-black/70">Field notes / 001</p>
          </div>

          <h1 className="mt-8 max-w-[82rem] font-heading text-[4.15rem] font-semibold uppercase leading-[0.76] sm:text-8xl md:text-[8rem] lg:text-[11.5rem]">
            <span className="block">It&apos;s not too late</span>
            <span className="block text-accent">to build.</span>
          </h1>

          <div className="mt-10 grid gap-10 border-t border-black/10 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="flex flex-col justify-between gap-8">
              <p className="max-w-2xl text-xl font-medium leading-8 text-black/80 md:text-2xl md:leading-9">
                Turn your operational insight into working software without waiting for engineering bandwidth. Learn how to scope, prototype, and test real solutions with AI, so your ideas move from backlog to evidence faster.
              </p>
              <div>
                <SignupForm source="home-hero" />
                <p className="mt-3 max-w-2xl text-xs leading-5 text-black/60">Get weekly notes, AI build playbooks, and first access to the course.</p>
                <p className="mt-2 max-w-2xl text-xs leading-5 text-black/60">No spam. No hype. Just real lessons from building with AI.</p>
              </div>
            </div>

            <div className="relative min-h-72 overflow-hidden bg-black p-8 text-white md:min-h-80 md:p-10">
              <div className="flex items-start justify-between text-[0.65rem] font-bold uppercase text-white/70">
                <p>The leverage shift</p>
                <p>Manager to builder</p>
              </div>
              <div className="absolute inset-x-8 bottom-8 md:inset-x-10 md:bottom-10">
                <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-4">
                  <div>
                    <p className="text-xs uppercase text-white/60">You bring</p>
                    <p className="mt-2 font-heading text-5xl font-semibold uppercase leading-[0.82] md:text-6xl">Context</p>
                  </div>
                  <span className="pb-1 font-heading text-5xl text-accent" aria-hidden="true">→</span>
                  <div className="text-right">
                    <p className="text-xs uppercase text-white/60">AI helps make</p>
                    <p className="mt-2 font-heading text-5xl font-semibold uppercase leading-[0.82] md:text-6xl">Product</p>
                  </div>
                </div>
                <div className="mt-8 h-1 bg-white/20">
                  <div className="h-full w-3/4 bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-black/10 bg-accent px-5 py-4 md:px-8">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center gap-x-8 gap-y-3 text-xs font-bold uppercase md:justify-between">
          <span className="text-black/70">Built for</span>
          {audiences.map((audience) => (
            <span key={audience} className="flex items-center gap-8 after:size-1 after:bg-black last:after:hidden">
              {audience}
            </span>
          ))}
        </div>
      </div>

      <section className="bg-black px-5 py-18 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[0.42fr_1.58fr] lg:gap-16">
          <div className="flex justify-between lg:block">
            <p className="text-xs font-bold uppercase text-accent">01 / The old rule</p>
            <p className="font-heading text-6xl font-medium leading-none text-white/20 lg:mt-10 lg:text-9xl">WAIT</p>
          </div>
          <div>
            <h2 className="max-w-5xl font-heading text-6xl font-semibold uppercase leading-[0.86] md:text-8xl lg:text-[7.5rem]">
              You had the idea. The queue had the power.
            </h2>
            <div className="mt-10 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-2 md:gap-12">
              <p className="text-lg leading-8 text-white/82">
                Managers could spot the problem, write the brief, lobby for priority, and still wait weeks or months for engineering time.
              </p>
              <p className="text-lg leading-8 text-white/82">
                That created a quiet ceiling. Product instincts had to pass through tickets, roadmaps, and compromises before becoming real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-muted px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-8 lg:grid-cols-[0.48fr_1.52fr] lg:gap-16">
            <p className="text-xs font-bold uppercase text-accent">02 / Why now</p>
            <h2 className="max-w-5xl font-heading text-6xl font-semibold uppercase leading-[0.87] md:text-8xl lg:text-[7rem]">
              The people closest to the problem can make the first version.
            </h2>
          </div>

          <div className="mt-14 grid border border-black/15 bg-white md:grid-cols-2">
            <article className="border-b border-black/15 p-7 md:border-b-0 md:border-r md:p-9">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase text-black/70">Before AI</p>
                <span className="font-heading text-4xl text-black/25">—</span>
              </div>
              <h3 className="mt-7 font-heading text-5xl font-semibold uppercase leading-[0.88] md:text-6xl">An idea needed access.</h3>
              <p className="mt-5 max-w-lg text-base leading-7 text-black/75">Budget, engineering capacity, and a place in the roadmap came before learning.</p>
            </article>
            <article className="bg-accent p-7 md:p-9">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase text-black/70">With AI</p>
                <span className="font-heading text-4xl">+</span>
              </div>
              <h3 className="mt-7 font-heading text-5xl font-semibold uppercase leading-[0.88] md:text-6xl">An idea can become evidence.</h3>
              <p className="mt-5 max-w-lg text-base leading-7 text-black/80">Build a first version, test the shape of it, and decide what deserves serious investment.</p>
            </article>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Founder"
        title="Built by a Marketing Automation Team Lead with 7+ years of experience."
        intro="I’ve spent years turning product ideas into operational systems, campaigns, and workflows. Now I’m sharing what works when managers use AI to build instead of just brief."
      >
        <div className="space-y-5 text-xl leading-8 text-black/80">
          <p>
            This is a founder who knows how to move cross-functional work forward, translate business context into execution, and make software decisions that matter.
          </p>
        </div>
      </Section>

      <section id="learn" className="border-b border-black/10 bg-white px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
            <div>
              <p className="mb-5 text-xs font-bold uppercase text-accent">03 / What you&apos;ll learn</p>
              <h2 className="font-heading text-6xl font-semibold uppercase leading-[0.84] md:text-8xl lg:text-9xl">
                Builder skills. Manager brain.
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-medium leading-8 text-black/80 lg:justify-self-end">
              A practical curriculum for turning business context into useful prototypes, without pretending software engineering has become easy.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8">
            {learnCards.map((card) => (
              <ContentCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-black/10 bg-accent px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-18">
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-black/70">04 / About the journey</p>
            <h2 className="font-heading text-6xl font-semibold uppercase leading-[0.84] md:text-8xl lg:text-9xl">
              Not a guru. A manager doing the work.
            </h2>
          </div>
          <div className="border-l border-black/20 pl-8 md:pl-10">
            {[
              ["Learning", "AI-assisted building in real time"],
              ["Making", "Working products, not prompt theatre"],
              ["Sharing", "What worked, what broke, what mattered"],
            ].map(([verb, detail]) => (
              <div key={verb} className="grid gap-2 border-t border-black/20 py-5 sm:grid-cols-[0.42fr_1fr] sm:gap-6">
                <p className="font-heading text-4xl font-semibold uppercase leading-none">{verb}</p>
                <p className="text-base font-medium leading-7 text-black/80">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        id="join"
        title="Get the early lessons."
        body="Field notes, build breakdowns, and first access to a practical course for managers becoming builders."
        source="home-final"
      />
    </>
  );
}
