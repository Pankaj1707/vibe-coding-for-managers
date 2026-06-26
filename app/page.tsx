import { SignupForm } from "@/components/marketing/signup-form";
import { Roadmap } from "@/components/marketing/roadmap";

const audiences = ["Marketing", "Operations", "Projects", "Programs", "Consulting", "Leadership"];

const roadmapSteps = [
  { title: "Mindset", description: "Learn to think like a builder and frame problems in ways AI can act on." },
  { title: "IDE", description: "Choose a workspace that feels calm, focused, and approachable for your first build." },
  { title: "AI Tools", description: "Use assistants that help you generate, iterate, and review fast without the noise." },
  { title: "Prompting", description: "Learn how to give AI enough context to make useful progress without overexplaining." },
  { title: "HTML", description: "Understand the minimum structure that keeps your ideas visible and usable." },
  { title: "CSS", description: "Shape the feel of a product so it feels polished from the first draft." },
  { title: "JavaScript", description: "Add interaction and logic without drowning in theory or complexity." },
  { title: "Frameworks", description: "Learn the patterns behind modern apps without losing your footing." },
  { title: "Deploy", description: "Ship your first version and see it live in the world with confidence." },
  { title: "Build Websites", description: "Turn business ideas into simple, useful web experiences." },
  { title: "Build AI Apps", description: "Create workflows and prototypes that feel genuinely valuable." },
  { title: "Launch Products", description: "Treat your first build as evidence and use it to create momentum." },
];

const chapters = [
  {
    title: "1. Why managers are natural builders",
    body: "Learn why your judgment, context, and customer insight matter more than technical fluency at the start.",
  },
  {
    title: "2. The Vibe Coding workflow",
    body: "See how to turn a messy idea into a clear prompt, a prototype, and a first meaningful build.",
  },
  {
    title: "3. The minimal stack",
    body: "Get a simple mental model for the tools that matter most when you are learning fast.",
  },
  {
    title: "4. Shipping without panic",
    body: "Learn how to review output, debug simply, and keep moving when something breaks.",
  },
];

const superpowers = [
  {
    title: "Business context",
    body: "You already understand the problem better than most builders ever will.",
  },
  {
    title: "Customer understanding",
    body: "That clarity becomes a superpower when you are shaping a first version.",
  },
  {
    title: "Problem solving",
    body: "AI helps you test faster, but your judgment still determines what matters.",
  },
  {
    title: "Prioritization",
    body: "You know what is worth building and what can wait for later.",
  },
  {
    title: "Communication",
    body: "The best builders translate ambiguity into direction, and that is your edge.",
  },
  {
    title: "Decision making",
    body: "When you can build quickly, you can evaluate faster and choose better.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <section className="border-b border-black/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,45,32,0.12),_transparent_55%)] px-5 py-10 sm:px-8 sm:py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-black/70 backdrop-blur">
                Free PDF • Zero → Hero in Vibe Coding
              </div>
              <h1 className="mt-8 max-w-4xl font-heading text-5xl font-semibold uppercase leading-[0.9] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Zero <span className="text-accent">→</span> Hero
                <span className="mt-2 block">in Vibe Coding</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70 sm:text-xl">
                A practical roadmap for managers who want to become confident builders without pretending they need to become engineers.
              </p>
              <div className="mt-8 max-w-2xl">
                <SignupForm source="home-hero" />
              </div>
              <p className="mt-4 text-sm font-medium text-black/60">
                Get the PDF, learn the path, and see how managers can build real things with AI.
              </p>
            </div>

            <div className="mt-10 grid gap-4 border-t border-black/10 pt-6 sm:grid-cols-3">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-black/50">For</p>
                <p className="mt-2 text-base font-medium text-black/80">Managers, operators, consultants, and team leads</p>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-black/50">Format</p>
                <p className="mt-2 text-base font-medium text-black/80">Practical PDF with a clear step-by-step path</p>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-black/50">Outcome</p>
                <p className="mt-2 text-base font-medium text-black/80">More confidence, clearer momentum, faster first builds</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-black p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.12)] sm:p-6 lg:p-7">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 sm:p-6">
              <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/60">
                <span>Free PDF</span>
                <span>12 chapters</span>
              </div>
              <div className="mt-6 rounded-[1.4rem] bg-white p-6 text-black sm:p-8">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-black/50">Zero → Hero in Vibe Coding for Managers</p>
                <h2 className="mt-4 font-heading text-3xl font-semibold uppercase leading-[0.95] sm:text-4xl">
                  Build confidence. Ship your first idea.
                </h2>
                <div className="mt-6 space-y-3 text-sm leading-7 text-black/70">
                  <p>• Learn how managers can use AI to create a real first version.</p>
                  <p>• Follow a clear roadmap from mindset to first product.</p>
                  <p>• Skip the noise and focus on what actually moves a build forward.</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-4 text-sm font-medium text-black/60">
                  <span>Beginner-friendly</span>
                  <span>Manager-first</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-black/10 bg-accent px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-black/70 md:justify-between">
          <span>Built for</span>
          {audiences.map((audience) => (
            <span key={audience} className="flex items-center gap-8 after:size-1 after:bg-black/50 last:after:hidden">
              {audience}
            </span>
          ))}
        </div>
      </div>

      <section className="border-b border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">01 / Why this exists</p>
            <h2 className="mt-5 max-w-xl font-heading text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              Managers always had the ideas. AI changed the bottleneck.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-black/10 bg-muted p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-black/50">Before AI</p>
              <p className="mt-4 text-lg leading-8 text-black/75">
                Good ideas waited behind roadmaps, approvals, and engineering queues that were already overloaded.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-black p-6 text-white">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/60">Now</p>
              <p className="mt-4 text-lg leading-8 text-white/80">
                Managers can turn context into a first version, test it quickly, and decide what is worth serious investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-muted px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">02 / Roadmap</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
                A clear path from curiosity to your first real build.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-black/70">
              This is not a coding course in disguise. It is a practical guide to learning Vibe Coding in a way that feels useful from day one.
            </p>
          </div>
          <Roadmap steps={roadmapSteps} />
        </div>
      </section>

      <section className="border-b border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">03 / What is inside the PDF</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              A modern guide built for people who need clarity, not complexity.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {chapters.map((chapter) => (
              <article key={chapter.title} className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">Chapter</p>
                <h3 className="mt-4 text-xl font-semibold leading-8 text-black">{chapter.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/70">{chapter.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-accent/10 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">04 / Why managers learn faster</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
                Your existing strengths become superpowers once you learn Vibe Coding.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {superpowers.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-black/10 bg-white p-6">
                  <p className="text-lg font-semibold text-black">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-black/70">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-black/10 bg-black p-8 text-white lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="max-w-xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">05 / Proof</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              This website is proof.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              You guessed it right. This website was built using Vibe Coding by a Marketing Automation Team Lead.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/60">No agency. No dedicated designer. No frontend engineer.</p>
            <p className="mt-6 text-2xl font-medium leading-9 text-white">
              Exactly the same journey you will learn in the PDF.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 px-3 py-2">Built in public</span>
              <span className="rounded-full border border-white/10 px-3 py-2">Manager-led</span>
              <span className="rounded-full border border-white/10 px-3 py-2">Practical by design</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-black/10 bg-muted p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="max-w-xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">06 / Download</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              Get the roadmap and start building with confidence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/70">
              Download the free PDF and learn the practical path from first idea to first product without getting lost in theory.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,0.06)] sm:p-8">
            <div className="rounded-[1.25rem] bg-black p-6 text-white">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/60">Free PDF</p>
              <h3 className="mt-3 font-heading text-3xl font-semibold uppercase leading-[0.95] sm:text-4xl">
                Zero → Hero in Vibe Coding
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Join with your email and the PDF will be sent to you directly. No spam. No hype. Just a useful guide and occasional thoughtful updates.
              </p>
              <div className="mt-8">
                <SignupForm source="home-final" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
