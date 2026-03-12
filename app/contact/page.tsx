import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { FIRM } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | ZZZ Accounting",
  description: "Get in touch with ZZZ Accounting.",
};

export default function ContactPage() {
  return (
    <div className="ledger-bg mx-auto max-w-[1200px] px-8 py-20">
      <div className="accent-rule mb-8" />
      <p className="stamp mb-3 text-accent">
        Contact
      </p>
      <h1 className="mb-4 text-4xl font-extralight tracking-tight text-foreground">
        Get in Touch
      </h1>
      <p className="mb-16 max-w-[600px] text-base leading-relaxed text-foreground-muted">
        Initial consultations are by appointment only. Please provide your
        details and a brief description of your needs. Discretion is assured.
      </p>

      <div className="grid gap-20 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-10">
          <ContactInfo firm={FIRM} />
          <div>
            <h2 className="stamp mb-4 text-accent">
              Hours
            </h2>
            <div className="space-y-2 text-sm text-foreground-muted">
              <p>Monday – Friday: By appointment</p>
              <p>Saturday – Sunday: Closed</p>
            </div>
          </div>
          <div className="relative rounded-lg border border-accent/20 bg-background-secondary p-6">
            <p className="stamp mb-3 text-foreground-muted/30">
              File Note // Personal
            </p>
            <p className="text-sm italic leading-relaxed text-foreground-muted">
              &ldquo;I have a gift with numbers. I see things others
              don&rsquo;t.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
