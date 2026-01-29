import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export type ContentDoc = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  html: string;
};

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, "content", "pages");
const POSTS_DIR = path.join(ROOT, "content", "posts");

async function mdToHtml(markdown: string) {
  const processed = await remark().use(gfm).use(html, { sanitize: false }).process(markdown);
  return processed.toString();
}

export async function getPage(slug: string): Promise<ContentDoc | null> {
  const file = path.join(PAGES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description,
    html: await mdToHtml(content),
  };
}

export async function getAllPosts(): Promise<ContentDoc[]> {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(files.map(async (f) => {
    const slug = f.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description,
      date: data.date,
      html: await mdToHtml(content),
    } satisfies ContentDoc;
  }));
  return posts.sort((a,b)=> (b.date??"").localeCompare(a.date??""));
}

export async function getPost(slug: string): Promise<ContentDoc | null> {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description,
    date: data.date,
    html: await mdToHtml(content),
  };
}
