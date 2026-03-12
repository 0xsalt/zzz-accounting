import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
          404
        </p>
        <h1 className="mb-4 text-4xl font-light tracking-tight text-foreground">
          Page Not Found
        </h1>
        <p className="mb-8 text-base text-foreground-muted">
          The file you are looking for does not exist. Or perhaps it was never
          meant to be found.
        </p>
        <Button
          asChild
          className="bg-accent px-8 py-5 text-sm font-medium uppercase tracking-wider text-background transition-colors duration-200 hover:bg-accent-hover"
        >
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
