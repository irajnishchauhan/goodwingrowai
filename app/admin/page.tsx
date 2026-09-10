import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, FileText, CheckCircle, TrendingUp } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <Card>
          <CardContent style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', borderRadius: '0.75rem' }}>
              <Users size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Total Leads</p>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>124</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '0.75rem' }}>
              <CheckCircle size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Qualified Leads</p>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>48</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)', borderRadius: '0.75rem' }}>
              <FileText size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Growth Audits</p>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>86</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', borderRadius: '0.75rem' }}>
              <TrendingUp size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Conversion Rate</p>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>4.2%</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Recent Activity</h2>
      <Card>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--muted)', fontWeight: 500 }}>Lead</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--muted)', fontWeight: 500 }}>Service</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--muted)', fontWeight: 500 }}>Status</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--muted)', fontWeight: 500 }}>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem 1.5rem' }}>Jane Doe (Acme Inc)</td>
                <td style={{ padding: '1rem 1.5rem' }}>AI Automation</td>
                <td style={{ padding: '1rem 1.5rem' }}><span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', borderRadius: '9999px', fontSize: '0.75rem' }}>NEW</span></td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--muted)' }}>Today, 10:42 AM</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem 1.5rem' }}>John Smith (TechFlow)</td>
                <td style={{ padding: '1rem 1.5rem' }}>Lead Generation</td>
                <td style={{ padding: '1rem 1.5rem' }}><span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '9999px', fontSize: '0.75rem' }}>QUALIFIED</span></td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--muted)' }}>Yesterday, 3:15 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
