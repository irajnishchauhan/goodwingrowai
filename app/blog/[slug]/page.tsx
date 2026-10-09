import { blogPosts } from "../page";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Split markdown-like content on double newlines to render paragraphs and headings
  const blocks = post.content.split('\\n\\n').map(b => b.trim()).filter(Boolean);

  return (
    <article className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-sm text-secondary">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">{post.title}</h1>
          <p className="text-xl text-secondary leading-relaxed">{post.excerpt}</p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-accent max-w-none text-foreground/90">
          {blocks.map((block, i) => {
            if (block.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-bold mt-10 mb-4">{block.replace('## ', '')}</h2>;
            }
            return <p key={i} className="mb-6 leading-relaxed">{block}</p>;
          })}
        </div>
      </div>
    </article>
  );
}
