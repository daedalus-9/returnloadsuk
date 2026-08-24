import type { BreadcrumbItem } from "@/components/seo/Seo";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <IconChevronRight aria-hidden="true" className="h-4 w-4" />
              )}
              {isCurrent ? (
                <span
                  aria-current="page"
                  className="font-medium text-slate-700"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-slate-950 hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
