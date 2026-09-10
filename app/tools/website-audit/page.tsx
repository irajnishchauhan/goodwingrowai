'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Search, AlertCircle, CheckCircle, Zap, Code, Layout, Smartphone, PenTool, Cpu } from 'lucide-react';

export default function WebsiteAuditPage() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsAnalyzing(true);
    setError('');

    setTimeout(() => {
      setIsAnalyzing(false);
      setError('Analysis configuration required. External AI web analysis API not connected yet.');
    }, 1500);
  };

  const categories = [
    { icon: <Zap size={20} color="var(--primary)" />, title: "Performance" },
    { icon: <Search size={20} color="var(--success)" />, title: "SEO" },
    { icon: <Layout size={20} color="var(--accent)" />, title: "UX & Conversion" },
    { icon: <Smartphone size={20} color="var(--warning)" />, title: "Mobile" },
    { icon: <Code size={20} color="var(--muted)" />, title: "Technical" },
    { icon: <PenTool size={20} color="var(--secondary)" />, title: "Content" },
    { icon: <Cpu size={20} color="var(--primary)" />, title: "AI Readiness" }
  ];

  return (
    <div className="fade-in">
      <section className="section-padding-large" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container section-header" style={{ marginBottom: 0 }}>
          <h1 className="section-title-large">Is Your Website Losing Customers?</h1>
          <p className="section-subtitle">
            Instantly analyze your website across 7 critical growth pillars.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <Card style={{ backgroundColor: 'var(--surface)', marginBottom: '4rem' }}>
            <CardContent style={{ padding: '3rem' }}>
              <form onSubmit={handleAudit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Enter your website URL to scan</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Input 
                      placeholder="https://www.company.com" 
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                      type="url"
                      style={{ height: '3.5rem', fontSize: '1.125rem' }}
                    />
                    <Button type="submit" variant="primary" size="lg" disabled={isAnalyzing}>
                      {isAnalyzing ? 'Scanning...' : 'Request Website Audit'}
                    </Button>
                  </div>
                </div>

                {error && (
                  <div className="fade-in" style={{ padding: '1rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)', borderRadius: '0.5rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <AlertCircle color="var(--warning)" size={20} style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--warning)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Configuration Required</strong>
                      <p style={{ color: 'var(--foreground)', fontSize: '0.875rem' }}>{error}</p>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>What we analyze:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {categories.map((cat, idx) => (
                <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'var(--surface-muted)', border: '1px solid var(--border)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {cat.icon}
                  <span style={{ fontWeight: 600 }}>{cat.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
