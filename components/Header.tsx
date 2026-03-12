"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, FIRM } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded border border-accent/30 transition-colors duration-200 group-hover:border-accent/60">
            <span className="stamp text-[10px] text-accent">ZZZ</span>
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">
            {FIRM.name}
          </span>
        </Link>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors duration-200",
                pathname === link.href
                  ? "text-accent"
                  : "text-foreground-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
