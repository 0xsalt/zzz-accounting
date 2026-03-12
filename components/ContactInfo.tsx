"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import type { Firm } from "@/lib/data";

export function ContactInfo({ firm }: { firm: Firm }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const IconPlaceholder = () => <span className="size-4 block" />;

  return (
    <div>
      <h2 className="stamp mb-6 text-accent">Office</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          {mounted ? (
            <MapPin className="mt-0.5 size-4 text-accent" />
          ) : (
            <span className="mt-0.5 size-4 block" />
          )}
          <div className="text-sm text-foreground-muted">
            <p>{firm.address.street}</p>
            <p>
              {firm.address.city}, {firm.address.state} {firm.address.zip}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {mounted ? (
            <Phone className="size-4 text-accent" />
          ) : (
            <IconPlaceholder />
          )}
          <p className="text-sm text-foreground-muted">{firm.phone}</p>
        </div>
        <div className="flex items-center gap-3">
          {mounted ? (
            <Mail className="size-4 text-accent" />
          ) : (
            <IconPlaceholder />
          )}
          <p className="text-sm text-foreground-muted">{firm.email}</p>
        </div>
      </div>
    </div>
  );
}
