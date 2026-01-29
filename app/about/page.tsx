import { ContentShell } from "@/components/content-shell";
import { getPage } from "@/lib/content";

export const metadata = { title: "About" };

export default async function AboutPage() {
  const doc = await getPage("about");
  return (
    <ContentShell
      title="About Villy Clouds"
      subtitle="A UK-based data & software partner helping teams build scalable, intelligent systems."
    >
      {doc ? (
        <article className="prose-premium" dangerouslySetInnerHTML={{ __html: doc.html }} />
      ) : (
        <p className="text-white/70">Content not found.</p>
      )}
    </ContentShell>
  );
}
