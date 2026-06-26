type RoadmapStep = {
  title: string;
  description: string;
};

type RoadmapProps = {
  steps: RoadmapStep[];
};

export function Roadmap({ steps }: RoadmapProps) {
  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-2">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold uppercase tracking-[0.18em] text-white">
              {String(index + 1).padStart(2, "0")}
            </div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">Step {index + 1}</p>
          </div>
          <p className="mt-5 font-heading text-2xl font-semibold uppercase leading-none">{step.title}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-black/70">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
