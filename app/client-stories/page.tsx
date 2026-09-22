export const dynamic = 'force-dynamic';

import { supabase } from "@/lib/supabase/client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Stories & Case Studies | Goodwin Grow AI",
  description: "Read how Goodwin Grow AI has helped businesses scale their digital presence and customer acquisition systems.",
};

export default async function ClientStoriesPage() {
  const { data: caseStudies } = await supabase
    .from("case_studies")
    .select(`
      id,
      title,
      slug,
      overview,
      featured_image,
      clients ( business_name, industry, client_logo )
    `)
    .eq("publication_status", "Published")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <SectionHeading 
            title="Client Stories" 
            subtitle="Explore how we have partnered with businesses to transform their digital growth." 
            badge="Case Studies"
            alignment="left"
          />
        </div>

        {!caseStudies || caseStudies.length === 0 ? (
          <div className="bg-surface border border-white/5 rounded-2xl p-12 text-center text-secondary">
            <p>New case studies are currently being documented. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link href={`/client-stories/${cs.slug}`} key={cs.id} className="group flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-colors">
                <div className="relative h-48 w-full bg-surface border-b border-white/5 overflow-hidden">
                  {cs.featured_image ? (
                    <Image src={cs.featured_image} alt={cs.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-accent/5">
                      <span className="font-display font-bold text-3xl text-white/10 group-hover:text-white/20 transition-colors">
                        {cs.clients?.business_name?.[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-md">{cs.clients?.industry}</span>
                    <span className="text-xs text-secondary">{cs.clients?.business_name}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-accent transition-colors">{cs.title}</h3>
                  <p className="text-sm text-secondary line-clamp-3 mb-6 flex-1">{cs.overview}</p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground mt-auto">
                    Read Story <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
