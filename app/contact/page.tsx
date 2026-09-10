'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="fade-in">
      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-header">
            <h1 className="section-title-large">Let's Build Your Growth Engine.</h1>
            <p className="section-subtitle">
              Whether you need to scale your lead generation, automate your sales, or overhaul your marketing strategy, we're here to help.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Contact Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <a href={`mailto:${siteConfig.contact.email}`} style={{ padding: '2rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
                <Mail color="var(--primary)" size={32} />
                <span style={{ fontWeight: 600 }}>{siteConfig.contact.email}</span>
              </a>
              <a href={`tel:${siteConfig.contact.phone}`} style={{ padding: '2rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
                <Phone color="var(--secondary)" size={32} />
                <span style={{ fontWeight: 600 }}>{siteConfig.contact.phone}</span>
              </a>
              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" style={{ padding: '2rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
                <MessageSquare color="var(--success)" size={32} />
                <span style={{ fontWeight: 600 }}>WhatsApp Us</span>
              </a>
              <div style={{ padding: '2rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
                <MapPin color="var(--accent)" size={32} />
                <span style={{ fontWeight: 600 }}>{siteConfig.contact.address}</span>
              </div>
            </div>

            {/* Contact Form */}
            <Card style={{ backgroundColor: 'var(--surface)' }}>
              <CardContent style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send a Message</h3>
                
                {status === 'success' ? (
                  <div className="fade-in" style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)', borderRadius: '0.5rem' }}>
                    <CheckCircle color="var(--success)" size={48} style={{ margin: '0 auto 1rem' }} />
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--success)', marginBottom: '0.5rem' }}>Message Received</h4>
                    <p style={{ color: 'var(--muted)' }}>Thank you for reaching out. A growth strategist will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Full Name</label>
                        <Input required placeholder="John Doe" />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Email Address</label>
                        <Input type="email" required placeholder="john@company.com" />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Company/Website</label>
                      <Input placeholder="https://company.com" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>How can we help you grow?</label>
                      <textarea 
                        required
                        placeholder="Briefly describe your marketing challenges..."
                        style={{ width: '100%', minHeight: '120px', padding: '0.75rem 1rem', borderRadius: '0.375rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--foreground)', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'} style={{ width: '100%', marginTop: '1rem' }}>
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
