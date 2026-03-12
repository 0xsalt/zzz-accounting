import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — ZZZ Accounting",
  description: "Forensic accounting, tax strategy, asset protection, and financial consulting.",
};

export default function ServicesPage() {
  return (
    <div className="ledger-bg mx-auto max-w-[1200px] px-8 py-20">
      <div className="accent-rule mb-8" />
      <p className="stamp mb-3 text-accent">
        Services
      </p>
      <h1 className="mb-4 text-4xl font-extralight tracking-tight text-foreground">
        What We Offer
      </h1>
      <p className="mb-16 max-w-[600px] text-base leading-relaxed text-foreground-muted">
        Every engagement begins with understanding. We do not offer cookie-cutter
        solutions — each client receives a methodology tailored to their specific
        situation.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}
