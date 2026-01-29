import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { ArrowRight, Blocks, Brain, Database, LineChart, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  { icon: Database, title: "Data Engineering (DEaaS)", desc: "Modern pipelines, lakehouse-ready modelling, orchestration, CI/CD, and performance you can trust." },
  { icon: ShieldCheck, title: "Data Management (DMaaS)", desc: "Governance, quality, lineage, and secure access — so your data becomes an asset, not a risk." },
  { icon: LineChart, title: "Analytics & BI", desc: "Decision-grade dashboards and metrics layers that align teams to the same truth." },
  { icon: Brain, title: "AI & ML Integration", desc: "Use cases that ship: forecasting, automation, NLP, and copilots — with the right guardrails." },
  { icon: Blocks, title: "Custom Software", desc: "Internal tools, portals, APIs, and platforms — designed for speed, reliability, and polish." },
  { icon: Sparkles, title: "Automation", desc: "Streamline operations with low-code + code: Power Automate, integrations, and event-driven workflows." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <Container className="relative py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            UK-based • Remote-friendly • Enterprise-ready
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Data • AI • Software • Innovation
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75 md:text-xl">
            One unified solution: we deliver cutting-edge <span className="text-white">data & software</span> that drives business success —
            from scalable pipelines to AI-powered applications.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">
              Start a project <ArrowRight size={16} />
            </Button>
            <Button href="/services" variant="secondary">
              Explore services
            </Button>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold">Scalable by design</div>
              <p className="mt-2 text-sm text-white/70">Build once. Grow without rewrites. Architectures that handle volume and change.</p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Built with governance</div>
              <p className="mt-2 text-sm text-white/70">Quality, security, and clarity baked in — not bolted on at the end.</p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Shipped with polish</div>
              <p className="mt-2 text-sm text-white/70">Premium UX and robust engineering — so teams actually enjoy using it.</p>
            </Card>
          </div>

          <div className="pointer-events-none absolute -right-8 -top-6 hidden md:block">
            <div className="relative h-[420px] w-[420px] opacity-70">
              <Image
                src="http://villyclouds.com/wp-content/uploads/2025/02/StockSnap_M6D1GS9PSL-2.jpg"
                alt="Abstract aerial landscape"
                fill
                className="rounded-3xl object-cover opacity-40"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">Our services</h2>
            <p className="mt-3 text-white/70">
              We combine strategy + engineering to deliver measurable outcomes — faster insights, cleaner operations, and technology you can scale.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className="group">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{s.title}</div>
                      <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-10">
            <Button href="/services" variant="ghost">
              View service detail <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Built for teams that want clarity — not complexity.
            </h2>
            <p className="mt-4 text-white/70">
              At Villy Clouds, we help businesses unlock the power of their data and technology with solutions designed for
              scalability, automation, and actionable insight.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href="/about" variant="secondary">About us</Button>
              <Button href="/blog" variant="ghost">Read insights</Button>
            </div>
          </div>

          <Card className="p-8">
            <div className="text-xs font-semibold text-white/60">How we work</div>
            <ol className="mt-4 space-y-3 text-sm text-white/75">
              <li><span className="text-white font-semibold">1.</span> Discovery: outcomes, constraints, and stakeholders.</li>
              <li><span className="text-white font-semibold">2.</span> Blueprint: architecture, roadmap, and success metrics.</li>
              <li><span className="text-white font-semibold">3.</span> Build: iterative delivery with demos and feedback loops.</li>
              <li><span className="text-white font-semibold">4.</span> Operate: monitoring, governance, and continuous improvement.</li>
            </ol>
          </Card>
        </Container>
      </section>
    </>
  );
}
