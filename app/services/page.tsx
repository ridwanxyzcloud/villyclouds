import { ContentShell } from "@/components/content-shell";
import { Card } from "@/components/card";
import { Database, ShieldCheck, LineChart, Brain, Blocks, Sparkles } from "lucide-react";

export const metadata = { title: "Services" };

const serviceBlocks = [
  {
    icon: Database,
    title: "Data Engineering (DEaaS)",
    points: [
      "Batch + streaming pipelines, orchestration, and CI/CD",
      "Lakehouse modelling, incremental loads, performance tuning",
      "Cloud-native patterns and cost-aware scaling",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Data Management (DMaaS)",
    points: [
      "Data quality frameworks, monitoring, and SLAs",
      "Governance, access controls, lineage, and documentation",
      "Reference data, master data, and taxonomy design",
    ],
  },
  {
    icon: LineChart,
    title: "Analytics & BI",
    points: [
      "Semantic layers and metric definitions teams can trust",
      "Power BI dashboards and executive reporting",
      "Self-serve enablement and training for stakeholders",
    ],
  },
  {
    icon: Brain,
    title: "AI & ML Integration",
    points: [
      "Forecasting, classification, recommendation, and NLP",
      "LLM-powered copilots and workflow augmentation",
      "Evaluation, monitoring, and risk-aware deployment",
    ],
  },
  {
    icon: Blocks,
    title: "Custom Software Development",
    points: [
      "Internal tools, portals, APIs, and integrations",
      "Modern web apps with premium UX and strong security",
      "Testing, observability, and reliable delivery processes",
    ],
  },
  {
    icon: Sparkles,
    title: "Automation & Integration",
    points: [
      "Low-code + code automation (Power Platform + custom)",
      "Event-driven workflows and system integration",
      "Operational efficiency with measurable impact",
    ],
  },
];

export default function ServicesPage() {
  return (
    <ContentShell
      title="Services"
      subtitle="End-to-end delivery across data engineering, AI, analytics, and software — designed for scalable growth."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {serviceBlocks.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.title} className="p-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">{s.title}</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {s.points.map((p) => <li key={p}>• {p}</li>)}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 rounded-xl2 border border-white/10 bg-white/5 p-8">
        <div className="text-sm font-semibold">Want a tailored proposal?</div>
        <p className="mt-2 text-sm text-white/70">
          Share your goals, timelines, and current tooling. We’ll recommend an approach and a delivery plan.
        </p>
        <a
          href="/contact"
          className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
        >
          Contact us
        </a>
      </div>
    </ContentShell>
  );
}
