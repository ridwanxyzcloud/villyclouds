import { ContentShell } from "@/components/content-shell";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { getPage } from "@/lib/content";

export const metadata = { title: "Contact" };

export default async function ContactPage() {
  const doc = await getPage("contact");
  return (
    <ContentShell
      title="Let’s connect"
      subtitle="Tell us what you’re building — we’ll respond quickly with next steps."
    >
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <Card className="p-8">
          {doc ? (
            <article className="prose-premium" dangerouslySetInnerHTML={{ __html: doc.html }} />
          ) : (
            <p className="text-white/70">Content not found.</p>
          )}
        </Card>

        <Card className="p-8">
          <div className="text-sm font-semibold">Contact details</div>
          <p className="mt-2 text-sm text-white/70">London, United Kingdom</p>

          <div className="mt-6">
            <div className="text-xs font-semibold text-white/60">Email</div>
            <a className="mt-1 block text-sm text-fuchsia-200 hover:text-fuchsia-100" href="mailto:info@villyclouds.com">
              info@villyclouds.com
            </a>
          </div>

          <div className="mt-8">
            <Button href="mailto:info@villyclouds.com">Email us</Button>
          </div>

          <p className="mt-6 text-xs text-white/50">
            Prefer a brief? Include your goals, timeline, tech stack (if any), and key stakeholders.
          </p>
        </Card>
      </div>
    </ContentShell>
  );
}
