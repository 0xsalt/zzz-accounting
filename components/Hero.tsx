import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FIRM } from "@/lib/data";

export function Hero() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="mx-auto max-w-[1200px] px-8 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
          Established {FIRM.founded}
        </p>
        <h1 className="mb-6 text-5xl font-light tracking-tight text-foreground lg:text-7xl">
          {FIRM.name}
        </h1>
        <p className="mb-4 text-xl font-light tracking-wide text-foreground-muted">
          {FIRM.tagline}
        </p>
        <p className="mb-12 max-w-[600px] text-base leading-relaxed text-foreground-muted">
          {FIRM.description}
        </p>
        <div className="flex gap-4">
          <Button
            asChild
            className="bg-accent px-8 py-5 text-sm font-medium uppercase tracking-wider text-background transition-colors duration-200 hover:bg-accent-hover"
          >
            <Link href="/services">Our Services</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-border px-8 py-5 text-sm font-medium uppercase tracking-wider text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
