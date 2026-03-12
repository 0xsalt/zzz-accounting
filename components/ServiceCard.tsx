import {
  Search,
  Calculator,
  Shield,
  TrendingUp,
  BookOpen,
  FileCheck,
} from "lucide-react";
import type { Service } from "@/lib/data";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Calculator,
  Shield,
  TrendingUp,
  BookOpen,
  FileCheck,
};

export function ServiceCard({ title, description, icon }: Service) {
  const Icon = ICONS[icon] ?? Search;

  return (
    <div className="group relative rounded-lg border border-border bg-background-secondary p-8 transition-all duration-200 hover:border-accent/40 hover:brightness-110">
      <div className="absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-y-100" />
      <div className="mb-5 inline-flex rounded-md bg-accent/10 p-3 text-accent transition-colors duration-200 group-hover:bg-accent/20">
        <Icon className="size-5" />
      </div>
      <h3 className="mb-3 text-lg font-medium text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-foreground-muted">
        {description}
      </p>
    </div>
  );
}
