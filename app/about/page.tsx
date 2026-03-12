import type { Metadata } from "next";
import { FIRM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — ZZZ Accounting",
  description: "Our philosophy, history, and approach to accounting.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-8 py-20">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
        About Us
      </p>
      <h1 className="mb-16 text-4xl font-light tracking-tight text-foreground">
        Who We Are
      </h1>

      <div className="grid gap-20 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Our Philosophy
          </h2>
          <p className="text-base leading-relaxed text-foreground-muted">
            {FIRM.philosophy}
          </p>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Our History
          </h2>
          <p className="text-base leading-relaxed text-foreground-muted">
            {FIRM.history}
          </p>
        </div>
      </div>

      <div className="mt-20 border-t border-border pt-20">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Our Principles
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-medium text-foreground">
              Precision
            </h3>
            <p className="text-sm leading-relaxed text-foreground-muted">
              Every decimal matters. Every transaction is traced. We do not
              estimate — we verify. Our work product is exact, or it does not
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
    </div>
  );
}
