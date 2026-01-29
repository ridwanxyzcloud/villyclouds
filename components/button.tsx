import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-white text-zinc-950 hover:bg-zinc-100 shadow-soft",
  secondary:
    "bg-zinc-900/60 text-white hover:bg-zinc-900 border border-white/10",
  ghost:
    "bg-transparent text-white hover:bg-white/10 border border-white/10",
};

export function Button({ href, variant = "primary", className, children, ...props }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-tight transition",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
