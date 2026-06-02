type ContentCardProps = {
  kicker: string;
  title: string;
  body: string;
};

export function ContentCard({ kicker, title, body }: ContentCardProps) {
  return (
    <article className="border-t-2 border-black pt-5">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-accent">{kicker}</p>
      <h3 className="mt-4 font-heading text-4xl font-semibold uppercase leading-none">{title}</h3>
      <p className="mt-4 text-base leading-7 text-black/70">{body}</p>
    </article>
  );
}
