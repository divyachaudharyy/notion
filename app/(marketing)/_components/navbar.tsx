"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
];

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "border-b border-transparent",
        "bg-[#faf9f6]/95 text-[#252522]",
        "backdrop-blur-md transition-all duration-200",
        "dark:bg-[#1f1f1e]/95 dark:text-[#f6f5f2]",
        scrolled && "border-[#e7e5e0] shadow-sm dark:border-white/10",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Logo />

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#68675f] transition-colors hover:text-[#252522] dark:text-[#b8b7b0] dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {isLoading ? (
            <Spinner />
          ) : isAuthenticated ? (
            <>
              <Button
                render={<Link href="/documents" />}
                size="sm"
                variant="ghost"
                className="hidden sm:inline-flex"
              >
                Open workspace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <UserButton />
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <Button
                  size="sm"
                  variant="ghost"
                  className="hidden sm:inline-flex"
                >
                  Log in
                </Button>
              </SignInButton>

              <SignInButton mode="modal">
                <Button size="sm" className="whitespace-nowrap">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignInButton>
            </>
          )}

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
