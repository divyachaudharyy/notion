
import { ArrowRight, FileText, FolderTree, UserRound } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserRound,
    title: "Start with your workspace",
    description:
      "Sign in and enter your own space, ready for the notes and documents you want to create.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Create your first page",
    description:
      "Start with a blank page. Write a note, sketch out a plan, or begin a longer document.",
  },
  {
    number: "03",
    icon: FolderTree,
    title: "Keep building",
    description:
      "Create more pages, organize related content, and return to your work whenever you need it.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#98734d] dark:text-[#e5c49d]">
            Simple by design
          </p>

          <h2
            id="how-it-works-title"
            className="text-3xl font-semibold tracking-tight text-[#252522] sm:text-4xl dark:text-[#f6f5f2]"
          >
            From blank page to your own space.
          </h2>

          <p className="mt-4 leading-7 text-[#777067] dark:text-neutral-300">
            No elaborate setup. Just start with an idea and
            organize it as you go.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffe7c8] text-[#4e3925]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-[#ad9275] dark:text-[#e5c49d]">
                    {step.number}
                  </span>

                  {index < steps.length - 1 && (
                    <ArrowRight className="ml-auto hidden h-4 w-4 text-[#c3ab90] md:block" />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-[#302d28] dark:text-[#f6f5f2]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#777067] dark:text-neutral-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
