import { FIRM, FOOTER } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1200px] px-8 py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {FIRM.name}
            </p>
            <p className="mt-1 text-xs text-foreground-muted">
              {FOOTER.copyright}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="accent-rule" />
            <p className="stamp text-foreground-muted/30">
              {FOOTER.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
