import type { ReactNode } from "react";

type BadgeTone = "default" | "accent" | "muted" | "success";

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
}

export function Badge({ children, tone = "default" }: BadgeProps) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}
