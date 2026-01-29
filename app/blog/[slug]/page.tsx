import { notFound } from "next/navigation";
import { ContentShell } from "@/components/content-shell";
import { getAllPosts, getPost } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();

  return (
    <ContentShell title={post.title} subtitle={post.date ? new Date(post.date).toDateString() : undefined}>
      <article className="prose-premium" dangerouslySetInnerHTML={{ __html: post.html }} />
    </ContentShell>
  );
}
