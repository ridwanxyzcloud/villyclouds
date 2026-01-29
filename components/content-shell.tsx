import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export function ContentShell({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <Container>
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl tracking-tight md:text-5xl">{title}</h1>
          {subtitle ? <p className="mt-3 text-white/70 md:text-lg">{subtitle}</p> : null}
        </div>

        <div className="mt-10">
          {children}
        </div>
      </Container>
    </section>
  );
}
