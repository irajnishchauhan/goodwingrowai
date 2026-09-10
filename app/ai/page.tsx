import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Goodwin Grow AI Assistant | Marketing Strategy",
  description: "Chat with the Goodwin Grow AI assistant to understand how AI can help your business.",
};

export default function AiAssistantPage() {
  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4rem)' }}>
      <section style={{ padding: '2rem 0', backgroundColor: 'var(--surface-muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Goodwin Grow AI Assistant</h1>
          <p style={{ color: 'var(--muted)' }}>Ask me anything about marketing, lead generation, or automation.</p>
        </div>
      </section>

      <section style={{ flexGrow: 1, padding: '2rem 0', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '800px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '2rem' }}>
            {/* AI Message */}
            <div style={{ display: 'flex', gap: '1rem', maxWidth: '85%' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>
                AI
              </div>
              <Card style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <CardContent style={{ padding: '1rem' }}>
                  <p>Hi! I'm the Goodwin Grow AI Assistant. I can help you understand how to implement AI into your marketing systems. What kind of business do you run?</p>
                </CardContent>
              </Card>
            </div>

            {/* Simulated options for demo */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginLeft: '3.5rem' }}>
              <Button variant="outline" size="sm" style={{ borderRadius: '9999px' }}>I run a B2B service</Button>
              <Button variant="outline" size="sm" style={{ borderRadius: '9999px' }}>I have an e-commerce store</Button>
              <Button variant="outline" size="sm" style={{ borderRadius: '9999px' }}>I want to generate more leads</Button>
            </div>
          </div>

          <div style={{ position: 'sticky', bottom: '1rem', backgroundColor: 'var(--surface)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="text" 
                placeholder="Type your message..." 
                style={{ flexGrow: 1, height: '2.5rem', borderRadius: '0.375rem', border: '1px solid var(--border)', padding: '0 0.75rem', backgroundColor: 'var(--background)', color: 'var(--foreground)', outline: 'none' }}
              />
              <Button variant="primary">Send</Button>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
              This is a demonstration interface. The AI will eventually be connected to an LLM API.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
