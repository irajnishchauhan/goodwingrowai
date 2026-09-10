import React from 'react';
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AdminAuditsPage() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Growth Audits</h1>
      
      <Card>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Company</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Industry</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Overall Score</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Date</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem' }}>Acme Inc<br/><span style={{fontSize: '0.75rem', color: 'var(--muted)'}}>jane@acme.com</span></td>
                <td style={{ padding: '1rem' }}>E-commerce</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '40px', height: '6px', backgroundColor: 'var(--warning)', borderRadius: '3px' }}></div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>52/100</span>
                  </div>
                </td>
                <td style={{ padding: '1rem', color: 'var(--muted)' }}>Today</td>
                <td style={{ padding: '1rem' }}><Button variant="outline" size="sm">View Report</Button></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem' }}>TechFlow<br/><span style={{fontSize: '0.75rem', color: 'var(--muted)'}}>john@techflow.io</span></td>
                <td style={{ padding: '1rem' }}>SaaS / Tech</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '40px', height: '6px', backgroundColor: 'var(--success)', borderRadius: '3px' }}></div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>78/100</span>
                  </div>
                </td>
                <td style={{ padding: '1rem', color: 'var(--muted)' }}>Yesterday</td>
                <td style={{ padding: '1rem' }}><Button variant="outline" size="sm">View Report</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
