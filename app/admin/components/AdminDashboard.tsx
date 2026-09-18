"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GlowButton } from "@/components/ui/GlowButton";
import { LogOut, Save } from "lucide-react";

export const AdminDashboard = () => {
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/config")
      .then(res => res.json())
      .then(data => {
        setConfig(data);
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    
    const res = await fetch("/api/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config)
    });
    
    if (res.ok) {
      setMessage("Configuration saved successfully!");
      // clear message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("Failed to save configuration.");
    }
    setSaving(false);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Navbar */}
      <header className="bg-surface border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-xl font-display font-bold">Goodwin Grow AI <span className="text-accent ml-2 text-sm uppercase tracking-widest font-normal">Admin Panel</span></h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-secondary hover:text-destructive transition-colors">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-12 max-w-4xl">
        <div className="mb-10">
          <h2 className="text-3xl font-display font-bold mb-2">Website Details</h2>
          <p className="text-secondary">Update your contact information, socials, and basic site config here. Changes reflect immediately on the live site.</p>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          {/* General Section */}
          <div className="bg-surface/50 border border-white/10 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span> General Info
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-secondary mb-2 block">Site Name</label>
                <input 
                  type="text" 
                  value={config.name}
                  onChange={(e) => setConfig({...config, name: e.target.value})}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-secondary mb-2 block">Site Description</label>
                <textarea 
                  value={config.description}
                  onChange={(e) => setConfig({...config, description: e.target.value})}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors min-h-[100px]"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-surface/50 border border-white/10 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span> Contact Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-secondary mb-2 block">Email Address</label>
                <input 
                  type="email" 
                  value={config.contact.email}
                  onChange={(e) => setConfig({...config, contact: {...config.contact, email: e.target.value}})}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-secondary mb-2 block">Phone Number</label>
                <input 
                  type="text" 
                  value={config.contact.phone}
                  onChange={(e) => setConfig({...config, contact: {...config.contact, phone: e.target.value}})}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-secondary mb-2 block">WhatsApp Link</label>
                <input 
                  type="url" 
                  value={config.contact.whatsapp}
                  onChange={(e) => setConfig({...config, contact: {...config.contact, whatsapp: e.target.value}})}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Socials Section */}
          <div className="bg-surface/50 border border-white/10 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Social Links
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-secondary mb-2 block">LinkedIn URL</label>
                <input 
                  type="text" 
                  value={config.socials.linkedin}
                  onChange={(e) => setConfig({...config, socials: {...config.socials, linkedin: e.target.value}})}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-secondary mb-2 block">Twitter / X URL</label>
                <input 
                  type="text" 
                  value={config.socials.twitter}
                  onChange={(e) => setConfig({...config, socials: {...config.socials, twitter: e.target.value}})}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-secondary mb-2 block">Instagram URL</label>
                <input 
                  type="text" 
                  value={config.socials.instagram}
                  onChange={(e) => setConfig({...config, socials: {...config.socials, instagram: e.target.value}})}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            <GlowButton variant="primary" type="submit" disabled={saving}>
              {saving ? "Saving..." : <><Save className="w-4 h-4 mr-2" /> Save Changes</>}
            </GlowButton>
            {message && (
              <span className="text-sm font-medium text-accent animate-pulse">{message}</span>
            )}
          </div>
        </form>
      </main>
    </div>
  );
};
