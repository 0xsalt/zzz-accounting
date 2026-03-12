import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FIRM } from "@/lib/data";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — ZZZ Accounting",
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
          <div>
            <h2 className="stamp mb-6 text-accent">
              Office
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-accent" />
                <div className="text-sm text-foreground-muted">
                  <p>{FIRM.address.street}</p>
                  <p>
                    {FIRM.address.city}, {FIRM.address.state}{" "}
                    {FIRM.address.zip}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-accent" />
                <p className="text-sm text-foreground-muted">{FIRM.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-accent" />
                <p className="text-sm text-foreground-muted">{FIRM.email}</p>
              </div>
            </div>
          </div>
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
              File Note — Personal
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
