"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GlowButton } from "@/components/ui/GlowButton";
import { GoodwinLogo } from "@/components/ui/GoodwinLogo";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    
    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10 opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      
      <div className="w-full max-w-md bg-surface/80 backdrop-blur-xl rounded-2xl border border-white/10 p-10 flex flex-col items-center shadow-2xl">
        <GoodwinLogo variant="stacked" theme="dark" size="lg" className="mb-8" />
        <h1 className="text-2xl font-display font-bold text-foreground mb-8">Admin Access</h1>
        
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-secondary mb-2 block">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              placeholder="Enter admin password"
            />
          </div>
          {error && <p className="text-destructive text-sm font-medium">{error}</p>}
          <GlowButton variant="primary" type="submit" className="w-full mt-4 h-12">
            Authenticate
          </GlowButton>
        </form>
      </div>
    </div>
  );
}
