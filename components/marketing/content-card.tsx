type ContentCardProps = {
  kicker: string;
  title: string;
  body: string;
};

export function ContentCard({ kicker, title, body }: ContentCardProps) {
  return (
    <article className="group flex min-h-64 flex-col rounded-[1.5rem] border border-black/10 bg-white p-6 md:p-8 hover:border-black/20">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase text-accent">{kicker}</p>
        <span aria-hidden="true" className="font-heading text-3xl leading-none text-black/15 transition-colors group-hover:text-black/30">+</span>
      </div>
      <h3 className="mt-7 max-w-sm font-heading text-4xl font-semibold uppercase leading-[0.9] md:text-5xl">{title}</h3>
      <p className="mt-5 text-sm leading-7 text-black/80">{body}</p>
    </article>
  );
}
