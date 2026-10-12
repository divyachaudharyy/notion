
import { FileText, FolderTree, PenLine } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "A page for every idea",
    description:
      "Create a home for class notes, project plans, personal lists, and the thoughts you want to keep.",
  },
  {
    icon: FolderTree,
    title: "Keep things organized",
    description:
      "Bring related pages together in one workspace and find your way around with a familiar sidebar.",
  },
  {
    icon: PenLine,
    title: "Make ideas take shape",
    description:
      "Turn a blank page into useful notes and documents with a focused writing experience.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="scroll-mt-24 border-y border-[#f0e5d8] bg-white/65 px-4 py-20 sm:px-6 sm:py-24 dark:border-white/10 dark:bg-white/2"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#98734d] dark:text-[#e5c49d]">
            Everything in its place
          </p>

          <h2
            id="features-title"
            className="text-3xl font-semibold tracking-tight text-[#252522] sm:text-4xl dark:text-[#f6f5f2]"
          >
            Less searching. More thinking.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-[#777067] dark:text-neutral-300">
            A simple space for the information you create,
            the ideas you collect, and the work you return to.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-[#eee3d7] bg-[#fffdf9] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#e7c59d] hover:shadow-lg hover:shadow-[#8c663d]/5 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-white/20"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f0d0a9] bg-[#ffe7c8] text-[#4e3925] transition-transform duration-200 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mb-3 text-xs font-medium tracking-wide text-[#a58c72] dark:text-neutral-400">
                  0{index + 1}
                </p>

                <h3 className="text-lg font-semibold tracking-tight text-[#302d28] dark:text-[#f6f5f2]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#777067] dark:text-neutral-300">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
