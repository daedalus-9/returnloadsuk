export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-extrabold text-slate-950">
            {item.question}
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none group-open:bg-lime-300"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-10 leading-7 text-slate-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
