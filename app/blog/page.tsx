import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const blogPosts = [
  {
    title: "How AI is Reshaping Performance Marketing in 2026",
    excerpt: "Discover the latest trends in AI automation and how businesses are using it to halve their CAC.",
    date: "Sep 15, 2026",
    category: "AI Marketing",
    slug: "how-ai-is-reshaping-performance-marketing",
    content: `
      Performance marketing is undergoing a seismic shift. As advertising platforms remove manual controls, AI is stepping in to manage everything from audience targeting to creative generation. In this post, we explore how AI agents are driving lower Customer Acquisition Costs (CAC) while scaling operations seamlessly.
      
      ## The Demise of Manual Bidding
      For years, marketers have tweaked bids and budgets manually. Now, algorithms process millions of signals in milliseconds, making manual adjustments obsolete.
      
      ## AI-Generated Creatives
      Dynamic creatives that adapt in real-time to user behavior are the new standard. A single prompt can now generate thousands of variations optimized for different segments.
      
      ## Predictive Analytics
      By leveraging historical data, AI can predict which campaigns will perform best before you even launch them, saving thousands in wasted ad spend.
    `
  },
  {
    title: "5 CRM Automations You Need to Implement Today",
    excerpt: "Stop wasting time on manual data entry. These 5 automations will save your sales team 10 hours a week.",
    date: "Sep 02, 2026",
    category: "Automation",
    slug: "crm-automations-you-need",
    content: `
      Your sales team's time is best spent closing deals, not entering data. Implementing simple CRM automations can dramatically increase efficiency.
      
      ## 1. Automated Lead Routing
      Ensure leads get to the right rep instantly based on geography, industry, or company size.
      
      ## 2. Smart Follow-Up Sequences
      Trigger personalized email and WhatsApp sequences based on prospect behavior, such as opening a proposal or visiting a pricing page.
      
      ## 3. Meeting Scheduling
      Integrate calendar tools directly into the CRM to eliminate back-and-forth emails.
      
      ## 4. Deal Stage Updates
      Automatically advance deals when contracts are signed or invoices are paid.
      
      ## 5. Churn Prediction Alerts
      Get notified when usage drops or support tickets spike, allowing you to save accounts before they leave.
    `
  },
  {
    title: "The Death of Traditional SEO: Enter Ambient Intelligence",
    excerpt: "Why optimizing for conversational AI and LLMs is the new frontier for organic growth.",
    date: "Aug 24, 2026",
    category: "Growth Strategy",
    slug: "death-of-traditional-seo",
    content: `
      Search is evolving from keyword matching to conversational context. Users are asking complex questions to AI assistants, and businesses must adapt.
      
      ## What is Ambient Intelligence?
      It's the shift towards devices and algorithms anticipating user needs. Instead of searching for "best CRM," users ask "What's the best CRM for a 50-person SaaS company focused on outbound sales?"
      
      ## Optimizing for LLMs (Large Language Models)
      To rank in AI-generated answers (like ChatGPT or Gemini), you need deeply comprehensive, authoritative content. Snippets and keyword stuffing no longer work.
      
      ## Structured Data is King
      Providing clean, structured markup helps AI understand the relationships between your entities, products, and services.
    `
  }
];

export default function BlogIndex() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <SectionHeading title="Our Blog" subtitle="Insights & Growth Strategies" align="left" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map(post => (
             <div key={post.slug} className="bg-surface border border-foreground/10 rounded-2xl p-6 flex flex-col group hover:border-accent/50 transition-colors">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">{post.category}</span>
                 <span className="text-xs text-secondary">{post.date}</span>
               </div>
               <h3 className="text-xl font-bold text-foreground mb-3">{post.title}</h3>
               <p className="text-secondary text-sm mb-6 flex-1">{post.excerpt}</p>
               <Link href={`/blog/${post.slug}`} className="inline-block mt-auto text-sm font-medium text-primary hover:text-accent">
                 Read Article &rarr;
               </Link>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
