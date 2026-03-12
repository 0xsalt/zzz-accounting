"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const FORMSPREE_URL = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : null;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_URL) {
      setStatus("error");
      return;
    }
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-accent/30 bg-background-secondary p-12 text-center">
        <p className="stamp text-accent">Inquiry Received</p>
        <p className="text-sm leading-relaxed text-foreground-muted">
          We will review your message and respond within two business days.
          Discretion is assured.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="stamp mt-4 text-foreground-muted/60 transition-colors hover:text-accent"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-foreground-muted"
        >
          Name
        </label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="h-11 border-border bg-background-secondary text-foreground placeholder:text-foreground-muted/50 focus:border-accent focus:ring-1 focus:ring-accent/30"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-foreground-muted"
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="h-11 border-border bg-background-secondary text-foreground placeholder:text-foreground-muted/50 focus:border-accent focus:ring-1 focus:ring-accent/30"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground-muted"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="How can we help?"
          rows={5}
          className="border-border bg-background-secondary text-foreground placeholder:text-foreground-muted/50 focus:border-accent focus:ring-1 focus:ring-accent/30"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent px-8 py-5 text-sm font-medium uppercase tracking-wider text-background transition-colors duration-200 hover:bg-accent-hover disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
