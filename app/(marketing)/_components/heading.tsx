"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
      {/* Eyebrow */}
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e7e5df] bg-white/80 px-4 py-2 text-sm text-[#68675f] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
        <Sparkles className="h-4 w-4" />
        <span>A calmer space for your thoughts</span>
      </div>

      {/* Main heading */}
      <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-[#252522] sm:text-5xl md:text-7xl dark:text-[#f6f5f2]">
        Give your ideas
        <br className="hidden sm:block" /> room to{" "}
        <span className="text-[#77836d] dark:text-[#a6b49a]">grow.</span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-7 text-[#77766e] sm:text-lg sm:leading-8 dark:text-neutral-300">
        Notes, documents, and plans — all in one place. Keep your thoughts
        organized and make space for what matters.
      </p>

      {/* CTA buttons */}
      <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
        {isLoading ? (
          <div className="flex h-12 items-center justify-center px-6">
            <Spinner size="lg" />
          </div>
        ) : isAuthenticated ? (
          <Button
            
            size="lg"
            className="h-12 rounded-xl bg-[#292925] px-6 text-white hover:bg-[#41413b] dark:bg-[#f5f4f0] dark:text-[#252522] dark:hover:bg-white"
          >
            <Link href="/documents">
              Open your workspace
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <SignInButton mode="modal">
            <Button
              size="lg"
              className="h-12 rounded-xl bg-[#292925] px-6 text-white hover:bg-[#41413b] dark:bg-[#f5f4f0] dark:text-[#252522] dark:hover:bg-white"
            >
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </SignInButton>
        )}

        <Button
          
          size="lg"
          variant="outline"
          className="h-12 rounded-xl border-[#e1dfd8] bg-white/70 px-6 text-[#383831] hover:bg-[#f1f0eb] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          <Link href="#workspace-preview">Explore the workspace</Link>
        </Button>
      </div>

      {/* Supporting line */}
      <p className="mt-5 text-sm text-[#929087] dark:text-neutral-400">
        A little less clutter. A little more clarity.
      </p>
    </section>
  );
};
