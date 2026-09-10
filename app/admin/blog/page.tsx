import React from 'react';
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AdminBlogPage() {
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Blog & Resources</h1>
        <Button variant="primary">Create New Post</Button>
      </div>

      <Card>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Title</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Category</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Status</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Date</th>
                <th style={{ padding: '1rem', color: 'var(--muted)', fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>How AI is Reshaping B2B Lead Gen</td>
                <td style={{ padding: '1rem' }}>AI Automation</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '9999px', fontSize: '0.75rem' }}>PUBLISHED</span></td>
                <td style={{ padding: '1rem', color: 'var(--muted)' }}>Oct 12, 2026</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}>Delete</Button>
                  </div>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>Building Your First Marketing AI Agent</td>
                <td style={{ padding: '1rem' }}>AI Agents</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'var(--surface-muted)', color: 'var(--muted)', borderRadius: '9999px', fontSize: '0.75rem' }}>DRAFT</span></td>
                <td style={{ padding: '1rem', color: 'var(--muted)' }}>-</td>
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
