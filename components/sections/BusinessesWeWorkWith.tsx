/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { ArrowRight, MapPin, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

export const BusinessesWeWorkWith = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from("clients")
        .select(`
          id, 
          business_name, 
          industry, 
          city, 
          public_service_summary, 
          client_logo,
          slug,
          case_studies ( slug, publication_status )
        `)
        .eq("homepage_visibility", true)
        .eq("client_display_consent", "Approved")
        .eq("record_status", "Published")
        .order("display_order", { ascending: true });

      if (data) {
        setClients(data);
      }
    } catch (err) {
      console.error("Error fetching clients:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  if (loading || clients.length === 0) {
    return null; // Hide section completely if no published clients
  }

  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-surface -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Businesses We Work With" 
          subtitle="Supporting ambitious businesses across service, retail and manufacturing sectors with practical digital growth solutions." 
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clients.map((client, idx) => {
            const hasPublishedCaseStudy = client.case_studies && 
              client.case_studies.some((cs: any) => cs.publication_status === 'Published');
            
            const initials = client.business_name
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .substring(0, 2)
              .toUpperCase();

            return (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors flex flex-col h-full group relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center shrink-0 overflow-hidden relative">
                    {client.client_logo ? (
                      <Image 
                        src={client.client_logo} 
                        alt={`${client.business_name} logo`} 
                        fill
                        className="object-cover" 
                      />
                    ) : (
                      <span className="font-display font-bold text-lg text-secondary group-hover:text-accent transition-colors">{initials}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg leading-tight">{client.business_name}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs text-secondary bg-white/5 px-2 py-0.5 rounded-full">{client.industry}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  {client.city && client.city !== "Unknown" && (
                    <div className="flex items-start gap-2 text-sm text-secondary">
                      <MapPin className="w-4 h-4 text-accent/70 shrink-0 mt-0.5" />
                      <span>{client.city}</span>
                    </div>
                  )}
                  {client.public_service_summary && (
                    <div className="flex items-start gap-2 text-sm text-secondary">
                      <Tag className="w-4 h-4 text-accent/70 shrink-0 mt-0.5" />
                      <span>{client.public_service_summary}</span>
                    </div>
                  )}
                </div>

                {hasPublishedCaseStudy && (
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <Link href={`/client-stories/${client.slug}`} className="text-sm font-medium text-accent hover:text-white transition-colors flex items-center gap-1">
                      View Client Story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-secondary italic mb-8 border-l-2 border-accent pl-4 text-left mx-auto max-w-lg">
            &quot;From local service businesses to retail and manufacturing brands, our work is built around each client&apos;s real growth priorities.&quot;
          </p>
          
          <h4 className="text-2xl font-bold mb-6">Ready to Grow Your Business?</h4>
          <a href="#contact">
            <GlowButton variant="primary" className="px-8 py-4">
              Start a Project <ArrowRight className="w-5 h-5 ml-2" />
            </GlowButton>
          </a>
        </div>
      </div>
    </section>
  );
};
