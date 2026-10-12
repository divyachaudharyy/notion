
"use client";

import Link from "next/link";
import { ArrowRight} from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6"
    >
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f0d0a9] bg-[#ffe7c8]/65 px-4 py-2 text-sm font-medium text-[#694a2b] dark:border-white/10 dark:bg-[#ffe7c8]/10 dark:text-[#ffe7c8]">
        
        <span>A little more room for your thoughts</span>
      </div>

      <h1
        id="hero-title"
        className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-0.05em] text-[#252522] sm:text-5xl md:text-7xl dark:text-[#f6f5f2]"
      >
        Your ideas deserve
        <br className="hidden sm:block" /> a place to{" "}
        <span className="relative inline-block whitespace-nowrap rounded-xl bg-[#ffe7c8] px-2 pb-1 text-[#30271e] sm:px-3 dark:text-[#30271e]">
          grow.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-[#777067] sm:text-lg sm:leading-8 dark:text-neutral-300">
        Notes, plans, and little sparks of inspiration —
        bring them together in one calm, organized workspace.
      </p>

      <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
        {isLoading ? (
          <div className="flex h-12 items-center justify-center px-6">
            <Spinner size="lg" />
          </div>
        ) : isAuthenticated ? (
          <Button
            render={<Link href="/documents" />}
            size="lg"
            className="h-12 rounded-xl border border-[#f0d0a9] bg-[#ffe7c8] px-6 text-[#30271e] shadow-sm hover:bg-[#f8d8ae]"
          >
            Open your workspace
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <SignInButton mode="modal">
            <Button
              size="lg"
              className="h-12 rounded-xl border border-[#f0d0a9] bg-[#ffe7c8] px-6 text-[#30271e] shadow-sm hover:bg-[#f8d8ae]"
            >
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </SignInButton>
        )}

        <Button
          render={<Link href="#workspace-preview" />}
          size="lg"
          variant="outline"
          className="h-12 rounded-xl border-[#e8ddce] bg-white/70 px-6 text-[#383831] hover:bg-[#fff0df] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          Explore the workspace
        </Button>
      </div>

      <p className="mt-5 text-sm text-[#93877a] dark:text-neutral-400">
        Less clutter. More clarity.
      </p>
    </section>
  );
};
