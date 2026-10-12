
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Logo } from "./logo";

const footerLinks = [
  { label: "Preview", href: "#workspace-preview" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#f0e2d0] bg-[#fff7ed] px-4 dark:border-white/10 dark:bg-[#1f1f1e] sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Link
            href="#top"
            aria-label="Jotion, back to top"
            className="w-fit rounded-md transition-opacity hover:opacity-75"
          >
            <Logo />
          </Link>

          <p className="text-sm text-[#827669] dark:text-neutral-400">
            A little more space for what matters.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {footerLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#6f665c] transition-colors hover:text-[#252522] dark:text-neutral-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#top"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#6f665c] transition-colors hover:text-[#252522] dark:text-neutral-300 dark:hover:text-white"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <p className="text-xs text-[#93877a] dark:text-neutral-500">
          © {new Date().getFullYear()} Jotion
        </p>
      </div>
    </footer>
  );
}
