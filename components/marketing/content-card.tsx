type ContentCardProps = {
  kicker: string;
  title: string;
  body: string;
};

export function ContentCard({ kicker, title, body }: ContentCardProps) {
  return (
    <article className="group flex min-h-64 flex-col border border-black bg-white p-6 transition-colors hover:bg-black hover:text-white md:p-8">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase text-accent">{kicker}</p>
        <span aria-hidden="true" className="font-heading text-3xl leading-none text-black/25 group-hover:text-white/30">+</span>
      </div>
      <h3 className="mt-10 max-w-sm font-heading text-4xl font-semibold uppercase leading-[0.9] md:text-5xl">{title}</h3>
      <p className="mt-auto pt-8 text-sm leading-6 text-black/60 group-hover:text-white/65">{body}</p>
    </article>
  );
}
