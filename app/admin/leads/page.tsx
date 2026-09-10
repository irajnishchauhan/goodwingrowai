import React from 'react';
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Search } from 'lucide-react';

export default function AdminLeadsPage() {
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Lead Management</h1>
        <Button variant="primary">Export Leads</Button>
      </div>

      <Card style={{ marginBottom: '1.5rem' }}>
        <div style={{ padding: '1rem', display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, backgroundColor: 'var(--background)', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: '1px solid var(--border)' }}>
            <Search size={18} color="var(--muted)" />
            <input type="text" placeholder="Search leads by name, email or company..." style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', color: 'var(--foreground)' }} />
          </div>
          <select style={{ padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
            <option>All Statuses</option>
            <option>NEW</option>
            <option>CONTACTED</option>
            <option>QUALIFIED</option>
            <option>WON</option>
          </select>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Name</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Company</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Service Interest</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Status</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem' }}>Jane Doe<br/><span style={{fontSize: '0.75rem', color: 'var(--muted)'}}>jane@acme.com</span></td>
                <td style={{ padding: '1rem' }}>Acme Inc</td>
                <td style={{ padding: '1rem' }}>AI Automation</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', borderRadius: '9999px', fontSize: '0.75rem' }}>NEW</span></td>
                <td style={{ padding: '1rem' }}><Button variant="outline" size="sm">View</Button></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem' }}>John Smith<br/><span style={{fontSize: '0.75rem', color: 'var(--muted)'}}>john@techflow.io</span></td>
                <td style={{ padding: '1rem' }}>TechFlow</td>
                <td style={{ padding: '1rem' }}>Lead Generation</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '9999px', fontSize: '0.75rem' }}>QUALIFIED</span></td>
                <td style={{ padding: '1rem' }}><Button variant="outline" size="sm">View</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
