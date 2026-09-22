/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GlowButton } from "@/components/ui/GlowButton";
import { LogOut, Home, Upload, Plus, MessageCircle, FileText, CheckCircle, Clock, X, Copy } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

export const ClientDashboard = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [testimonialClient, setTestimonialClient] = useState<any>(null);
  const router = useRouter();

  const fetchClients = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("clients").select("*").order("created_at", { ascending: false });
    if (data) setClients(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  // Stats
  const totalClients = clients.length;
  const activeClients = clients.filter(c => c.relationship_status === "Active Client").length;
  const pendingApproval = clients.filter(c => c.record_status === "Approval Pending" || c.record_status === "Draft").length;
  const publishedClients = clients.filter(c => c.record_status === "Published").length;

  const handleRequestTestimonial = (client: any) => {
    setTestimonialClient(client);
  };

  const getTestimonialMessage = () => {
    if (!testimonialClient) return "";
    return `Hi ${testimonialClient.business_name}, thank you for working with Goodwin Grow AI. We would appreciate a short review about your experience with our team. With your permission, we may feature your feedback and business name on our website. Please share your review and confirm whether we may publish it.`;
  };

  const copyTestimonialMessage = () => {
    navigator.clipboard.writeText(getTestimonialMessage());
    alert("Message copied to clipboard! You can now send it via WhatsApp.");
    setTestimonialClient(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Navbar */}
      <header className="bg-surface border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-xl font-display font-bold">Goodwin Grow AI <span className="text-accent ml-2 text-sm uppercase tracking-widest font-normal">Clients</span></h1>
        <div className="flex items-center gap-6">
          <Link href="/admin" className="flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors">
            <Home className="w-4 h-4" /> Main Admin
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-secondary hover:text-destructive transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-12 max-w-7xl">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Clients & Testimonials</h2>
            <p className="text-secondary">Manage clients, import intake data, and request testimonials.</p>
          </div>
          <div className="flex gap-4">
            <GlowButton variant="secondary" onClick={() => router.push("/admin/clients/import")}>
              <Upload className="w-4 h-4 mr-2" /> Import CSV
            </GlowButton>
            <GlowButton variant="primary">
              <Plus className="w-4 h-4 mr-2" /> Add Client
            </GlowButton>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-surface/50 border border-white/10 rounded-xl p-6">
            <p className="text-sm text-secondary mb-1">Total Clients</p>
            <p className="text-3xl font-bold">{totalClients}</p>
          </div>
          <div className="bg-surface/50 border border-white/10 rounded-xl p-6">
            <p className="text-sm text-secondary mb-1">Active</p>
            <p className="text-3xl font-bold text-blue-400">{activeClients}</p>
          </div>
          <div className="bg-surface/50 border border-white/10 rounded-xl p-6">
            <p className="text-sm text-secondary mb-1">Pending Approval</p>
            <p className="text-3xl font-bold text-amber-400">{pendingApproval}</p>
          </div>
          <div className="bg-surface/50 border border-white/10 rounded-xl p-6">
            <p className="text-sm text-secondary mb-1">Published</p>
            <p className="text-3xl font-bold text-emerald-400">{publishedClients}</p>
          </div>
        </div>

        {/* Clients Table */}
        <div className="bg-surface/50 border border-white/10 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-lg font-bold">Client Directory</h3>
            {/* Filters placeholder */}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5">
                  <th className="p-4 font-medium text-sm text-secondary">Business Name</th>
                  <th className="p-4 font-medium text-sm text-secondary">Industry</th>
                  <th className="p-4 font-medium text-sm text-secondary">Status</th>
                  <th className="p-4 font-medium text-sm text-secondary">Visibility</th>
                  <th className="p-4 font-medium text-sm text-secondary text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={5} className="p-8 text-center text-secondary">Loading clients...</td></tr>
                ) : clients.length === 0 ? (
                  <tr><td colSpan={5} className="p-8 text-center text-secondary">No clients found. Import from CSV or add manually.</td></tr>
                ) : (
                  clients.map(client => (
                    <tr key={client.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div className="font-medium">{client.business_name}</div>
                        <div className="text-xs text-secondary">{client.business_type}</div>
                      </td>
                      <td className="p-4 text-sm">{client.industry}</td>
                      <td className="p-4">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          client.record_status === 'Published' ? 'bg-emerald-500/10 text-emerald-400' :
                          client.record_status === 'Approval Pending' ? 'bg-amber-500/10 text-amber-400' :
                          'bg-white/10 text-secondary'
                        }`}>
                          {client.record_status}
                        </span>
                      </td>
                      <td className="p-4 text-sm">
                        {client.homepage_visibility ? (
                          <span className="text-emerald-400 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Visible</span>
                        ) : (
                          <span className="text-secondary">Hidden</span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => handleRequestTestimonial(client)} className="p-2 hover:bg-white/10 rounded-lg text-secondary hover:text-foreground transition-colors" title="Request Testimonial">
                            <MessageCircle className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded-lg text-secondary hover:text-foreground transition-colors" title="Edit Client">
                            <FileText className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Request Testimonial Modal */}
      {testimonialClient && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface border border-white/10 rounded-xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Request Testimonial</h3>
              <button onClick={() => setTestimonialClient(null)} className="text-secondary hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-secondary mb-4">
              Review the message below before copying it to send to <strong>{testimonialClient.business_name}</strong> via WhatsApp.
            </p>
            <div className="bg-white/5 border border-white/10 p-4 rounded-lg text-sm mb-6 whitespace-pre-wrap">
              {getTestimonialMessage()}
            </div>
            <div className="flex justify-end gap-3">
              <GlowButton variant="secondary" onClick={() => setTestimonialClient(null)}>
                Cancel
              </GlowButton>
              <GlowButton variant="primary" onClick={copyTestimonialMessage}>
                <Copy className="w-4 h-4 mr-2" /> Copy Message
              </GlowButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
