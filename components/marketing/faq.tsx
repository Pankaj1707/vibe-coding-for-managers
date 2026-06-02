type FaqItem = {
  question: string;
  answer: string;
};

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="cursor-pointer list-none font-heading text-3xl font-semibold uppercase leading-none marker:hidden">
            <span className="mr-3 text-accent">+</span>
            {item.question}
          </summary>
          <p className="mt-4 max-w-2xl text-base leading-7 text-black/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
