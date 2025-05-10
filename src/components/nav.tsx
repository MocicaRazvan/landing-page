import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import logo from "@/../public/logo.png";
import Image from "next/image";

export default function Nav() {
  return (
    <nav
      className="min-h-10 flex items-center justify-between px-4 py-2 border-b sticky top-0 bg-opacity-60 z-[49]
    w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-wrap 2xl:border-l 2xl:border-r"
    >
      <Link href="/">
        <Image
          src={logo}
          alt="GymBroski"
          className="h-12 w-14 rounded-full"
          width={48}
          height={56}
        />
      </Link>

      <div className="flex items-center justify-between w-full md:w-auto gap-5 md:gap-10">
        <div className="flex items-center justify-center gap-3 md:gap-7">
          <Link
            href={process.env.NEXT_PUBLIC_BUISNESSFUNDATION_URL ?? "/"}
            className="hover:underline hover:underline-offset-2 text-lg font-semibold text-primary hover:scale-[1.035] transition-all duration-150"
            target="_blank"
          >
            Buisness Fundation
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_FIGMA_URL ?? "/"}
            className="hover:underline hover:underline-offset-2 text-lg font-semibold text-primary hover:scale-[1.035] transition-all duration-150"
            target="_blank"
          >
            Figma
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_PTICH_URL ?? "/"}
            className="hover:underline hover:underline-offset-2 text-lg font-semibold text-primary hover:scale-[1.035] transition-all duration-150"
            target="_blank"
          >
            Pitch
          </Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
