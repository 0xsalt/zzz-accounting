import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FIRM } from "@/lib/data";

const NUMBER_OVERLAY_TEXT = `
2.71828 1.61803 3.14159 0.57721 1.41421 2.23606 ∑(n=1→∞) 1/n² = π²/6
$14,233,097.16  DR  $8,401,222.03  CR  Δ = $5,831,875.13  ✓ reconciled
f(x) = ∫₀ˣ e⁻ᵗ² dt  ||  σ = √(Σ(xi-μ)²/N)  ||  P(A|B) = P(B|A)·P(A)/P(B)
ACCT 7721-003  LEDGER 44B  REF: CW-1997  STATUS: CLOSED  MARGIN: 0.0003%
1.73205 2.44948 0.69314 1.09861 2.30258 4.60517 6.90775 9.21034 ∞
$327,891.44  $1,008,553.21  $44,002.87  $891,337.00  NET: $2,271,784.52
0100 1010 0011 1100 1111 0000 1001 0110 || checksum: A7F3 || valid
Solomon  Grundy  born  on  a  Monday  christened  on  Tuesday  married  on  Wednesday
`.trim();

export function Hero() {
  return (
    <section className="ledger-bg relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="number-overlay" aria-hidden="true">
        {NUMBER_OVERLAY_TEXT.repeat(8)}
      </div>
      <div className="relative mx-auto max-w-[1200px] px-8 py-20">
        <div className="accent-rule animate-fade-up mb-8" />
        <p className="stamp animate-fade-up animate-delay-100 mb-4 text-accent">
          Est. {FIRM.founded} // Plainfield, IL
        </p>
        <h1 className="animate-fade-up animate-delay-200 mb-6 text-6xl font-extralight tracking-tight text-foreground lg:text-8xl">
          {FIRM.name}
        </h1>
        <p className="animate-fade-up animate-delay-200 mb-4 text-xl font-light tracking-[0.15em] text-foreground-muted">
          {FIRM.tagline}
        </p>
        <p className="animate-fade-up animate-delay-300 mb-14 max-w-[560px] text-base leading-relaxed text-foreground-muted">
          {FIRM.description}
        </p>
        <div className="animate-fade-up animate-delay-400 flex gap-4">
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
