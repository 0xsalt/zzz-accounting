import type { Metadata } from "next";
import { FIRM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | ZZZ Accounting",
  description: "Our philosophy, history, and approach to accounting.",
};

export default function AboutPage() {
  return (
    <div className="ledger-bg mx-auto max-w-[1200px] px-8 py-20">
      <div className="accent-rule mb-8" />
      <p className="stamp mb-3 text-accent">
        About Us
      </p>
      <h1 className="mb-16 text-4xl font-extralight tracking-tight text-foreground">
        Who We Are
      </h1>

      <div className="grid gap-20 lg:grid-cols-2">
        <div>
          <h2 className="stamp mb-6 text-accent">
            Our Philosophy
          </h2>
          <p className="text-base leading-relaxed text-foreground-muted">
            {FIRM.philosophy}
          </p>
        </div>
        <div>
          <h2 className="stamp mb-6 text-accent">
            Our History
          </h2>
          <p className="text-base leading-relaxed text-foreground-muted">
            {FIRM.history}
          </p>
        </div>
      </div>

      <div className="mt-20 border-t border-border pt-20">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="stamp text-accent">
            Our Principles
          </h2>
          <div className="accent-rule flex-1" style={{ width: "auto" }} />
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-medium text-foreground">
              Precision
            </h3>
            <p className="text-sm leading-relaxed text-foreground-muted">
              Every decimal matters. Every transaction is traced. We do not
              estimate. We verify. Our work product is exact, or it does not
              leave our office.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-foreground">
              Discretion
            </h3>
            <p className="text-sm leading-relaxed text-foreground-muted">
              Our client relationships are confidential. We do not discuss our
              work, our methods, or our clients. What happens in our office stays
              in our office.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-foreground">
              Results
            </h3>
            <p className="text-sm leading-relaxed text-foreground-muted">
              We are retained to solve problems, not to bill hours. Every
              engagement has a defined objective, and we do not rest until that
              objective is met.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-border pt-16">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="stamp mb-6 text-foreground-muted/40">
            Case File Note // Ref: CW-1997
          </p>
          <p className="text-base italic leading-relaxed text-foreground-muted/70">
            &ldquo;The hardest thing about having a gift is not the gift itself,
            but what it does to everyone around you. I chose numbers because
            numbers are safe. Numbers don&rsquo;t have opinions. They simply are
            what they are.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
