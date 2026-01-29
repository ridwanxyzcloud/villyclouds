import { ContentShell } from "@/components/content-shell";
import { getPage } from "@/lib/content";

export const metadata = { title: "Privacy Policy" };

export default async function PrivacyPage() {
  const doc = await getPage("privacy");
  return (
    <ContentShell title="Privacy policy">
      {doc ? (
        <article className="prose-premium" dangerouslySetInnerHTML={{ __html: doc.html }} />
      ) : (
        <p className="text-white/70">Content not found.</p>
      )}
    </ContentShell>
  );
}
