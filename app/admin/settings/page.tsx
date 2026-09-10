import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function AdminSettingsPage() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Global Settings</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
        <Card>
          <CardHeader>
            <CardTitle>Business Information</CardTitle>
          </CardHeader>
          <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Company Name</label>
              <Input defaultValue="Goodwin Grow AI" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Contact Email</label>
              <Input type="email" defaultValue="hello@goodwingrowai.com" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Support Phone</label>
              <Input type="tel" defaultValue="+1 (234) 567-890" />
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <Button variant="primary">Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Integrations</CardTitle>
          </CardHeader>
          <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>LLM Provider (OpenAI/Anthropic)</label>
              <Input type="password" placeholder="sk-..." />
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>Used for AI Assistant and Growth Audits.</p>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Supabase Service Role Key</label>
              <Input type="password" placeholder="eyJ..." />
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>Required for Admin data manipulation.</p>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <Button variant="primary">Save API Keys</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
