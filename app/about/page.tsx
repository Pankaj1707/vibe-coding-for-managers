import type { Metadata } from "next";
import { ContentCard } from "@/components/marketing/content-card";
import { CtaBand } from "@/components/marketing/cta-band";
import { Faq } from "@/components/marketing/faq";
import { Section } from "@/components/site/section";
import { faqs, roadmap } from "@/components/data/site-copy";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Vibe Coding for Managers, a public learning project for managers becoming AI-assisted builders.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line px-5 py-14 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-accent">Founder story</p>
            <h1 className="font-heading text-6xl font-semibold uppercase leading-[0.88] md:text-8xl">
              I am learning this in public.
            </h1>
            <p className="mt-4 text-sm text-black/60">Founder: a manager learning AI-assisted building in real time and documenting practical, testable lessons.</p>
          </div>
          <p className="max-w-2xl text-xl leading-9 text-black/72 md:text-2xl md:leading-10">
            I am a manager, not a lifelong software engineer. I know the frustration of seeing a product clearly and not having the technical path to make it real. AI changed that enough to deserve a serious attempt.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Why this exists"
        title="The leverage moved."
        intro="Managers already understand customers, constraints, incentives, workflows, and trade-offs. Those are building skills."
      >
        <div className="space-y-6 text-xl leading-9 text-black/76">
          <p>
            The missing piece was always execution. AI-assisted tools now make it possible to create working software by directing the build with clarity, taste, and persistence.
          </p>
          <p>
            This project exists to help non-technical professionals cross that threshold without buying into hype or pretending the hard parts disappeared.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Who this is for"
        title="Not engineers. Operators."
        intro="If your work gives you a close view of broken workflows and better ways to serve people, you belong here."
        className="bg-muted"
      >
        <div className="grid gap-4 text-lg font-semibold md:grid-cols-2">
          {["Marketing managers", "Operations managers", "Project managers", "Program managers", "Team leads", "Consultants", "Functional leaders", "Curious generalists"].map((person) => (
            <div key={person} className="border-t-2 border-black py-4">
              {person}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Course roadmap"
        title="A practical path, still being shaped."
        intro="The first course will focus on manager-friendly building habits and useful software artifacts."
      >
        <div className="grid gap-10 md:grid-cols-2">
          {roadmap.map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Straight answers.">
        <Faq items={faqs} />
      </Section>

      <CtaBand
        title="Follow the build."
        body="Get practical build breakdowns, checklists, and early access to the course for managers."
        source="about-final"
      />
    </>
  );
}
