import { ContentShell } from "@/components/content-shell";
import { getPage } from "@/lib/content";

export const metadata = { title: "Our Philosophy" };

export default async function PhilosophyPage() {
  const doc = await getPage("philosophy");
  return (
    <ContentShell
      title="Our philosophy"
      subtitle="Innovation with discipline: build systems that are intelligent, scalable, and secure."
    >
      {doc ? (
        <article className="prose-premium" dangerouslySetInnerHTML={{ __html: doc.html }} />
      ) : (
        <p className="text-white/70">Content not found.</p>
      )}
    </ContentShell>
  );
}
