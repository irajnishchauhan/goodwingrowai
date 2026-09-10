import React from 'react';
import { Card, CardContent } from "@/components/ui/Card";
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Goodwin Grow AI completely changed how we handle top-of-funnel leads. Their AI qualification agent saved our sales team 15 hours a week and doubled our conversion rate.",
    name: "Rajesh K.",
    designation: "VP of Marketing",
    company: "B2B SaaS Analytics",
    industry: "Technology"
  },
  {
    quote: "We were burning cash on Facebook Ads before they stepped in. They engineered a closed-loop system that finally gave us clear ROI attribution and brought our CPL down by 40%.",
    name: "Priya S.",
    designation: "Founder",
    company: "Direct-to-Consumer Healthcare",
    industry: "D2C"
  },
  {
    quote: "The Growth Audit alone was more valuable than the last six months of work from our previous agency. They look at business revenue, not just vanity metrics.",
    name: "Vikram M.",
    designation: "Managing Director",
    company: "Commercial Real Estate",
    industry: "Real Estate"
  }
];

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real results from ambitious businesses.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', height: '100%' }}>
              <CardContent style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="var(--primary)" color="var(--primary)" />
                  ))}
                </div>
                
                <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: '2rem', flexGrow: 1, fontStyle: 'italic' }}>
                  "{testimonial.quote}"
                </p>
                
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  <strong style={{ display: 'block', color: 'var(--foreground)' }}>{testimonial.name}</strong>
                  <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--muted)' }}>
                    {testimonial.designation}, {testimonial.company}
                  </span>
                  <span style={{ display: 'inline-block', marginTop: '0.5rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--surface-muted)', borderRadius: '9999px', fontSize: '0.75rem', color: 'var(--muted)' }}>
                    {testimonial.industry}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
