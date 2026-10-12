
import Image from "next/image";

export function Heroes() {
  return (
    <section
      id="workspace-preview"
      aria-labelledby="preview-title"
      className="w-full scroll-mt-24 px-4 pb-20 pt-20 sm:px-6 sm:pb-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#98734d] dark:text-[#e5c49d]">
            A glimpse inside
          </p>

          <h2
            id="preview-title"
            className="text-3xl font-semibold tracking-tight text-[#252522] sm:text-4xl dark:text-[#f6f5f2]"
          >
            A workspace that feels like yours.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#777067] dark:text-neutral-300">
            A place to collect your thoughts, work through
            ideas, and keep the important things together.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#f0dfca] bg-gradient-to-br from-[#fff0dc] via-[#fff8ef] to-[#f9e4ca] p-4 shadow-[0_20px_70px_-35px_rgba(120,83,40,0.28)] sm:p-8 md:p-10 dark:border-white/10 dark:bg-none dark:bg-[#292825]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#ffe7c8]/70 blur-3xl dark:bg-[#ffe7c8]/10"
          />

          <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-5 md:grid-cols-[1.05fr_0.95fr] md:gap-4">
            <div className="relative mx-auto aspect-square w-full max-w-[400px] overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5">
              <Image
                className="object-contain p-3 dark:hidden"
                src="/documents.png"
                alt="Illustration of organizing documents"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
              />

              <Image
                className="hidden object-contain p-3 dark:block"
                src="/documents-dark.png"
                alt="Illustration of organizing documents in dark mode"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>

            <div className="relative mx-auto hidden aspect-square w-full max-w-[380px] overflow-hidden rounded-3xl border border-white/80 bg-white/65 shadow-sm dark:border-white/10 dark:bg-white/5 md:block">
              <Image
                className="object-contain p-3 dark:hidden"
                src="/reading.png"
                alt="Illustration of a reading space"
                fill
                sizes="(max-width: 768px) 90vw, 35vw"
              />

              <Image
                className="hidden object-contain p-3 dark:block"
                src="/reading-dark.png"
                alt="Illustration of a reading space in dark mode"
                fill
                sizes="(max-width: 768px) 90vw, 35vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

