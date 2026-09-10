import React from 'react';
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AdminPricingPage() {
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Pricing Plans</h1>
        <Button variant="primary">Create Plan</Button>
      </div>

      <Card>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Plan Name</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Price</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Status</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Popular</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>AI GROWTH STARTER</td>
                <td style={{ padding: '1rem', color: 'var(--muted)' }}>Custom</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '9999px', fontSize: '0.75rem' }}>ACTIVE</span></td>
                <td style={{ padding: '1rem' }}>No</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>AI GROWTH ENGINE</td>
                <td style={{ padding: '1rem', color: 'var(--muted)' }}>Custom</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '9999px', fontSize: '0.75rem' }}>ACTIVE</span></td>
                <td style={{ padding: '1rem' }}>Yes</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
