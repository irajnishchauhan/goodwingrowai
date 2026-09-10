import React from 'react';
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AdminServicesPage() {
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Services Management</h1>
        <Button variant="primary">Add Service</Button>
      </div>

      <Card>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Service Name</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Slug</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Status</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Order</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>AI Marketing</td>
                <td style={{ padding: '1rem', color: 'var(--muted)' }}>/ai-marketing</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '9999px', fontSize: '0.75rem' }}>ACTIVE</span></td>
                <td style={{ padding: '1rem' }}>1</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}>Delete</Button>
                  </div>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>Performance Marketing</td>
                <td style={{ padding: '1rem', color: 'var(--muted)' }}>/performance-marketing</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '9999px', fontSize: '0.75rem' }}>ACTIVE</span></td>
                <td style={{ padding: '1rem' }}>2</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}>Delete</Button>
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
