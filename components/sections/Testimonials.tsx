/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, CheckCircle, Quote } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase/client";

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .select(`
          id, 
          exact_testimonial_quote, 
          client_approved_display_name, 
          designation, 
          rating, 
          service_category, 
          verified_result, 
          profile_image,
          clients ( business_name, client_logo )
        `)
        .eq("publication_status", "Published")
        .eq("client_approval_status", "Approved")
        .order("display_order", { ascending: true });

      if (data) {
        setTestimonials(data);
      }
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (loading || testimonials.length === 0) {
    return null; // Hide section completely if no published testimonials
  }

  return (
    <section className="py-24 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-background/50 -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Real feedback from businesses that have transformed their growth systems with us." 
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => {
            const initials = t.client_approved_display_name
              ? t.client_approved_display_name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase()
              : "C";
              
            const businessName = t.clients?.business_name || "";
            const logo = t.profile_image || t.clients?.client_logo;

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 relative flex flex-col h-full"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 -z-10" />
                
                {t.rating && (
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < t.rating ? "text-amber-400 fill-amber-400" : "text-white/10"}`} />
                    ))}
                  </div>
                )}
                
                <p className="text-lg text-foreground italic mb-8 flex-1 relative z-10">
                  &quot;{t.exact_testimonial_quote}&quot;
                </p>
                
                {t.verified_result && (
                  <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                    <p className="text-sm font-medium text-accent">Result: {t.verified_result}</p>
                  </div>
                )}

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center shrink-0 overflow-hidden relative">
                    {logo ? (
                      <Image 
                        src={logo} 
                        alt={`${t.client_approved_display_name} profile`} 
                        fill
                        className="object-cover" 
                      />
                    ) : (
                      <span className="font-display font-bold text-secondary">{initials}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground leading-tight flex items-center gap-1.5">
                      {t.client_approved_display_name}
                      <span title="Client Approved" className="text-emerald-400"><CheckCircle className="w-3.5 h-3.5" /></span>
                    </h4>
                    <p className="text-sm text-secondary mt-0.5">
                      {t.designation}{t.designation && businessName ? ", " : ""}{businessName}
                    </p>
                    {t.service_category && (
                      <p className="text-xs text-accent mt-1">{t.service_category}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
