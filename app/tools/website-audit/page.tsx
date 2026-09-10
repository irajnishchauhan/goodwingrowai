'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Search, AlertCircle } from 'lucide-react';

export default function WebsiteAuditPage() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsAnalyzing(true);
    setError('');

    // Simulate API call for architecture demonstration
    setTimeout(() => {
      setIsAnalyzing(false);
      setError('Analysis configuration required. External AI web analysis API not connected yet.');
    }, 1500);
  };

  return (
    <div className="fade-in">
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AI Website Audit</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)' }}>
            Instantly analyze your website's performance, SEO, and conversion potential.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <Card>
            <CardContent style={{ padding: '2rem' }}>
              <form onSubmit={handleAudit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Enter your website URL</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Input 
                      placeholder="https://www.example.com" 
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                      type="url"
                    />
                    <Button type="submit" variant="primary" disabled={isAnalyzing}>
                      {isAnalyzing ? 'Analyzing...' : <><Search size={18} style={{ marginRight: '0.5rem' }} /> Audit</>}
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
        </div>
      </section>
    </div>
  );
}
