/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = 'force-dynamic';

import { supabase } from "@/lib/supabase/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data } = await supabase
    .from("case_studies")
    .select("seo_title, meta_description, title, overview")
    .eq("slug", params.slug)
    .eq("publication_status", "Published")
    .single();

  if (!data) return { title: "Story Not Found" };

  return {
    title: data.seo_title || `${data.title} | Goodwin Grow AI`,
    description: data.meta_description || data.overview,
  };
}

export default async function ClientStoryDetail({ params }: { params: { slug: string } }) {
  const { data: study } = await supabase
    .from("case_studies")
    .select(`
      *,
      clients ( business_name, industry, city, website_url, client_logo ),
      testimonials ( exact_testimonial_quote, client_approved_display_name, designation, rating, verified_result, client_approval_status )
    `)
    .eq("slug", params.slug)
    .eq("publication_status", "Published")
    .single();

  if (!study) {
    notFound();
  }

  const testimonial = study.testimonials?.client_approval_status === "Approved" ? study.testimonials : null;

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-24">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <Link href="/client-stories" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Stories
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              {study.clients?.industry}
            </span>
            <span className="text-sm text-secondary">{study.clients?.city}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            {study.title}
          </h1>
          
          <p className="text-xl text-secondary leading-relaxed mb-10 max-w-3xl">
            {study.overview}
          </p>

          {/* Client Info Bar */}
          <div className="flex flex-wrap items-center gap-8 py-6 border-y border-white/5">
            <div className="flex items-center gap-4">
              {study.clients?.client_logo && (
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-white/10 relative">
                  <Image src={study.clients.client_logo} alt={study.clients.business_name} fill className="object-cover" />
                </div>
              )}
              <div>
                <p className="text-sm text-secondary">Client</p>
                <p className="font-bold">{study.clients?.business_name}</p>
              </div>
            </div>
            {study.project_start_date && (
              <div>
                <p className="text-sm text-secondary">Project Start</p>
                <p className="font-medium">{new Date(study.project_start_date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</p>
              </div>
            )}
            {study.verified_outcomes && (
              <div className="ml-auto">
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-bold text-emerald-400">{study.verified_outcomes}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {study.featured_image && (
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 bg-surface">
            <Image src={study.featured_image} alt={study.title} fill className="object-cover" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            {study.challenge && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-accent">01.</span> The Challenge
                </h2>
                <div className="text-secondary leading-relaxed whitespace-pre-wrap">
                  {study.challenge}
                </div>
              </section>
            )}

            {study.strategy && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-accent">02.</span> The Strategy
                </h2>
                <div className="text-secondary leading-relaxed whitespace-pre-wrap">
                  {study.strategy}
                </div>
              </section>
            )}

            {study.work_completed && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-accent">03.</span> The Solution
                </h2>
                <div className="text-secondary leading-relaxed whitespace-pre-wrap">
                  {study.work_completed}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-4 space-y-8">
            {study.services_delivered && (
              <div className="bg-surface/50 border border-white/5 rounded-2xl p-6 md:p-8">
                <h3 className="font-bold mb-4">Services Delivered</h3>
                <ul className="space-y-3">
                  {study.services_delivered.split(',').map((service: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-secondary text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{service.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {testimonial && (
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 md:p-8 relative">
                <div className="absolute top-0 right-0 p-4">
                  <span title="Verified Client" className="text-emerald-400"><CheckCircle className="w-5 h-5" /></span>
                </div>
                <h3 className="font-bold mb-4 text-accent">Client Feedback</h3>
                <p className="italic text-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.exact_testimonial_quote}"
                </p>
                <div>
                  <p className="font-bold text-sm">{testimonial.client_approved_display_name}</p>
                  <p className="text-xs text-secondary">{testimonial.designation}</p>
                </div>
              </div>
            )}
            
            {study.clients?.website_url && (
              <a href={study.clients.website_url} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors text-sm font-medium">
                Visit Website
              </a>
            )}
          </div>

        </div>
        
        <div className="mt-24 pt-16 border-t border-white/5 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Ready to write your growth story?</h2>
          <a href="/#contact">
            <GlowButton variant="primary">Start a Project</GlowButton>
          </a>
        </div>
      </div>
    </div>
  );
}
