import React from 'react';
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact Us | Goodwin Grow AI",
  description: "Get in touch with the Goodwin Grow AI team.",
};

export default function ContactPage() {
  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            {/* Split layout for large screens via inline styles simulation */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get in Touch</h1>
                <p style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '3rem' }}>
                  Have a question about our services or want to discuss a potential partnership? Fill out the form and our team will get back to you shortly.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Email</strong>
                    <a href="mailto:hello@goodwingrowai.com" style={{ color: 'var(--accent)' }}>hello@goodwingrowai.com</a>
                  </div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Phone</strong>
                    <a href="tel:+1234567890" style={{ color: 'var(--accent)' }}>+1 (234) 567-890</a>
                  </div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Business Hours</strong>
                    <span style={{ color: 'var(--muted)' }}>Monday - Friday, 9am - 5pm EST</span>
                  </div>
                </div>
              </div>

              <div style={{ flex: '1 1 400px' }}>
                <Card>
                  <CardContent style={{ paddingTop: '1.5rem' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ flex: 1 }}>
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>First Name</label>
                          <Input placeholder="John" />
                        </div>
                        <div style={{ flex: 1 }}>
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Last Name</label>
                          <Input placeholder="Doe" />
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Email Address</label>
                        <Input type="email" placeholder="john@company.com" />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Message</label>
                        <textarea 
                          rows={4} 
                          placeholder="How can we help you?"
                          style={{ width: '100%', borderRadius: '0.375rem', border: '1px solid var(--border)', padding: '0.5rem 0.75rem', fontFamily: 'inherit', resize: 'vertical' }}
                        />
                      </div>
                      <Button type="button" variant="primary" size="lg">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
