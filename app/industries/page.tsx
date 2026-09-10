import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Stethoscope, GraduationCap, Building2, ShoppingBag, Briefcase, Code, MapPin, Coffee } from 'lucide-react';

const industries = [
  {
    id: "healthcare",
    icon: <Stethoscope size={32} />,
    title: "Healthcare",
    description: "Generate qualified patient enquiries, strengthen local visibility and automate follow-ups while maintaining a professional patient experience.",
    challenges: ["Patient Acquisition", "HIPAA Compliance", "Local SEO"]
  },
  {
    id: "education",
    icon: <GraduationCap size={32} />,
    title: "Education",
    description: "Increase student enrollments through targeted performance marketing, SEO, and automated lead nurturing sequences.",
    challenges: ["Enrollment Goals", "Cost Per Lead", "Lead Nurturing"]
  },
  {
    id: "real-estate",
    icon: <Building2 size={32} />,
    title: "Real Estate",
    description: "Build robust property funnels, qualify buyers via AI conversational agents, and track ROI down to the closed sale.",
    challenges: ["Lead Quality", "Follow-up Speed", "Attribution"]
  },
  {
    id: "ecommerce",
    icon: <ShoppingBag size={32} />,
    title: "D2C & E-commerce",
    description: "Scale paid acquisition predictably, optimize conversion rates, and implement AI-driven personalization for repeat purchases.",
    challenges: ["CAC vs LTV", "Cart Abandonment", "ROAS"]
  },
  {
    id: "professional-services",
    icon: <Briefcase size={32} />,
    title: "Professional Services",
    description: "Position your firm as an authority through premium content, B2B lead generation, and CRM automation.",
    challenges: ["Authority Building", "B2B Prospecting", "Sales Cycles"]
  },
  {
    id: "technology",
    icon: <Code size={32} />,
    title: "Technology & Startups",
    description: "Execute rapid go-to-market strategies, scale SaaS signups, and lower customer acquisition costs with data-driven marketing.",
    challenges: ["Product Led Growth", "Churn Rate", "Market Entry"]
  },
  {
    id: "local-business",
    icon: <MapPin size={32} />,
    title: "Local Businesses",
    description: "Dominate your local market through localized SEO, automated review generation, and high-intent Google Ads.",
    challenges: ["Local Visibility", "Review Management", "Foot Traffic"]
  },
  {
    id: "hospitality",
    icon: <Coffee size={32} />,
    title: "Hospitality",
    description: "Drive direct bookings, increase customer loyalty, and automate guest communications before, during, and after their stay.",
    challenges: ["OTA Dependence", "Seasonality", "Guest Retention"]
  }
];

export const metadata = {
  title: "Industries We Serve | Goodwin Grow AI",
  description: "AI-powered growth systems tailored for Healthcare, Real Estate, E-commerce, SaaS, and more."
};

export default function IndustriesPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>We Build Growth Engines For Your Industry.</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>
            Generic marketing doesn't work. We engineer custom acquisition and automation systems specific to your business model.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {industries.map((industry) => (
              <Card key={industry.id} id={industry.id} style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface)' }}>
                <CardContent style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>{industry.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{industry.title}</h3>
                  <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                    {industry.description}
                  </p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--foreground)', marginBottom: '0.5rem' }}>Key Challenges Solved:</strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {industry.challenges.map((challenge, idx) => (
                        <span key={idx} style={{ padding: '0.25rem 0.5rem', backgroundColor: 'var(--surface-muted)', border: '1px solid var(--border)', borderRadius: '0.25rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <Link href="/growth-audit">
                      <Button variant="outline" style={{ width: '100%' }}>Get a Custom Growth Plan</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
