import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
});

export const Logo = () => {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <Image
        src="/logo.svg"
        height={32}
        width={32}
        alt=""
        className="dark:hidden"
      />

      <Image
        src="/logo-dark.svg"
        height={32}
        width={32}
        alt=""
        className="hidden dark:block"
      />

      <p
        className={cn(
          "text-lg font-semibold tracking-tight",
          font.className
        )}
      >
        Noterr
      </p>
    </div>
  );
};