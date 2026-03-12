import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES, FIRM } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-[1200px] px-8 py-20">
          <div className="accent-rule mb-8" />
          <p className="stamp mb-3 text-accent">
            What We Do
          </p>
          <h2 className="mb-4 text-3xl font-extralight tracking-tight text-foreground">
            Our Expertise
          </h2>
          <p className="mb-12 max-w-[600px] text-base text-foreground-muted">
            {FIRM.philosophy.split(".").slice(0, 2).join(".")}.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
