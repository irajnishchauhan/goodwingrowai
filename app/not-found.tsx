import React from 'react';
import Link from 'next/link';
import { GlowButton } from "@/components/ui/GlowButton";
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="glass max-w-md w-full p-8 rounded-2xl text-center flex flex-col items-center">
        <div className="bg-red-500/10 text-red-500 p-4 rounded-full mb-6">
          <AlertTriangle className="w-12 h-12" />
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-xl font-semibold mb-4 text-secondary">Page Not Found</h2>
        <p className="text-white/40 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <GlowButton variant="primary">Return Home</GlowButton>
        </Link>
      </div>
    </div>
  );
}
