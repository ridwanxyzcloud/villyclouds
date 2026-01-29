import Link from "next/link";
import { ContentShell } from "@/components/content-shell";
import { Card } from "@/components/card";
import { getAllPosts } from "@/lib/content";

export const metadata = { title: "Insights" };

export default async function BlogIndex() {
  const posts = await getAllPosts();
  return (
    <ContentShell
      title="Insights"
      subtitle="Thoughts on data engineering, analytics, AI, and building reliable systems."
    >
      <div className="grid gap-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`}>
            <Card className="p-8 hover:bg-white/10 transition">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold">{p.title}</div>
                {p.date ? <div className="text-xs text-white/55">{new Date(p.date).toDateString()}</div> : null}
                {p.description ? <p className="text-sm text-white/70">{p.description}</p> : null}
              </div>
            </Card>
          </Link>
        ))}
        {posts.length === 0 ? <p className="text-white/70">No posts found.</p> : null}
      </div>
    </ContentShell>
  );
}
