import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "teal" | "gold" | "outline";

const styles: Record<Variant, string> = {
  teal: "bg-accent text-accent-foreground hover:brightness-110",
  gold: "bg-gold text-gold-foreground hover:brightness-105",
  outline: "border border-primary/20 bg-transparent text-primary hover:bg-primary/5",
};

interface Props {
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function CTAButton({ to, href, variant = "teal", className, children, type, onClick }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide shadow-[0_4px_24px_rgba(11,31,58,0.10)] transition-all duration-200 hover:-translate-y-0.5";
  const cls = cn(base, styles[variant], className);
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button type={type ?? "button"} onClick={onClick} className={cls}>{children}</button>;
}