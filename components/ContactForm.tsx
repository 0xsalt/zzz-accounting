"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-6"
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-foreground-muted"
        >
          Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          className="border-border bg-background-secondary text-foreground placeholder:text-foreground-muted/50 focus:border-accent"
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
          type="email"
          placeholder="your@email.com"
          className="border-border bg-background-secondary text-foreground placeholder:text-foreground-muted/50 focus:border-accent"
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
          placeholder="How can we help?"
          rows={5}
          className="border-border bg-background-secondary text-foreground placeholder:text-foreground-muted/50 focus:border-accent"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-accent px-8 py-5 text-sm font-medium uppercase tracking-wider text-background transition-colors duration-200 hover:bg-accent-hover"
      >
        Send Inquiry
      </Button>
    </form>
  );
}
