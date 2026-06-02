import { ContentCard } from "@/components/marketing/content-card";
import { CtaBand } from "@/components/marketing/cta-band";
import { SignupForm } from "@/components/marketing/signup-form";
import { Section } from "@/components/site/section";
import { learnCards } from "@/components/data/site-copy";

export default function HomePage() {
  return (
    <>
      {/* Design decision: the first viewport is almost entirely proposition plus email capture. */}
      <section className="border-b border-line px-5 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-6xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-accent">AI-assisted building for managers</p>
            <h1 className="font-heading text-6xl font-semibold uppercase leading-[0.86] md:text-8xl lg:text-[9.5rem]">
              It&apos;s not too late to build.
            </h1>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <p className="max-w-xl text-xl leading-8 text-black/72 md:text-2xl md:leading-10">
              AI has changed who gets to make software. This is a field guide for managers who have ideas, context, and taste, but never had an engineering background.
            </p>
            <div className="lg:justify-self-end">
              <SignupForm source="home-hero" />
              <p className="mt-2 text-sm text-black/55">Early notes, build breakdowns, and first access to the course.</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="The old rule"
        title="Managers had to wait."
        intro="For years, managers could spot the problem, write the brief, lobby for priority, and still wait weeks or months for engineering time."
      >
        <div className="grid gap-8 text-xl leading-9 text-black/76">
          <p>
            That created a quiet ceiling. If you could not code, your product instincts had to pass through a long chain of tickets, roadmaps, and compromises before becoming real.
          </p>
          <p>
            AI does not remove the need for engineers. It does change the first move. A manager can now turn a rough idea into a working artifact, test the shape of it, and have a sharper conversation with technical partners.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Why now"
        title="The gap is open."
        intro="The people closest to operational pain are often the ones least equipped to build the tool they can already imagine."
        className="bg-muted"
      >
        {/* The before/now contrast keeps the argument simple and skimmable for busy managers. */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="editorial-rule pb-8">
            <p className="font-heading text-5xl font-semibold uppercase leading-none">Before</p>
            <p className="mt-4 text-base leading-7 text-black/70">A useful product idea needed a budget, a team, and a place in the queue.</p>
          </div>
          <div className="editorial-rule pb-8">
            <p className="font-heading text-5xl font-semibold uppercase leading-none">Now</p>
            <p className="mt-4 text-base leading-7 text-black/70">A manager can build a first version, learn from it, and decide what deserves serious investment.</p>
          </div>
        </div>
      </Section>

      <Section
        id="learn"
        eyebrow="What you'll learn"
        title="A course for builders with manager brains."
        intro="Placeholder curriculum for the first version. The final course will be shaped by real builds, not abstract theory."
      >
        <div className="grid gap-10 md:grid-cols-2">
          {learnCards.map((card) => (
            <ContentCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="About the journey"
        title="Built in public, from the inside."
        intro="This is not a guru act. The founder is a manager learning AI-assisted building in real time and documenting the useful parts."
      >
        <div className="space-y-6 text-xl leading-9 text-black/76">
          <p>
            The promise is not mastery overnight. The promise is a serious path for people who already know how organizations work and now want to make software part of their own toolkit.
          </p>
          <p>
            Expect honest notes: what worked, what broke, which prompts mattered, where engineering judgment still matters, and how to think about building without pretending to be someone else.
          </p>
        </div>
      </Section>

      <CtaBand
        id="join"
        title="Get the early lessons."
        body="Join the list for field notes, build breakdowns, and first access when the course opens."
        source="home-final"
      />
    </>
  );
}
