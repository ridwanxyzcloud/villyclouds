import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl2 border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-soft backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
