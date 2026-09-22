/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GlowButton } from "@/components/ui/GlowButton";
import { ArrowLeft, Upload, AlertCircle, Check } from "lucide-react";
import Link from "next/link";
import Papa from "papaparse";
import { supabase } from "@/lib/supabase/client";

export const CSVImporter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const f = e.target.files[0];
      setFile(f);
      setError("");
      
      Papa.parse(f, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.errors.length > 0) {
            setError("Error parsing CSV. Please check the format.");
          } else {
            // Map the CSV columns to our schema
            const mapped = results.data.map((row: any) => {
              // Create a normalized slug
              const businessName = row["Business name"] || row["Business Name"] || "Unknown Business";
              const slug = businessName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              
              return {
                business_name: businessName,
                slug: slug,
                business_type: row["Business type"] || row["Business Type"] || "Unknown",
                industry: row["Industry"] || "Unknown",
                city: row["City"] || "Unknown",
                public_service_summary: row["Services offered by client"] || row["Services"],
                internal_services_requested: row["Marketing interests"] || row["Marketing Interests"],
                record_status: "Draft",
                homepage_visibility: false,
                client_display_consent: "Not Received"
              };
            });
            setPreview(mapped);
          }
        }
      });
    }
  };

  const handleImport = async () => {
    if (preview.length === 0) return;
    setLoading(true);
    setError("");

    try {
      const { error: insertError } = await supabase.from("clients").insert(preview);
      if (insertError) throw insertError;
      
      setSuccess(true);
      setTimeout(() => {
        router.push("/admin/clients");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Failed to import records.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-surface border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/admin/clients" className="text-secondary hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-display font-bold">Import Clients</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-12 max-w-4xl">
        <div className="bg-surface/50 border border-white/10 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">Upload CSV File</h2>
          <p className="text-secondary mb-6">
            Upload your client intake database. Records will be imported as Drafts. 
            Private fields (like phone numbers) will not be displayed publicly.
          </p>
          
          <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-accent/50 transition-colors cursor-pointer relative">
            <input 
              type="file" 
              accept=".csv" 
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Upload className="w-8 h-8 mx-auto mb-4 text-secondary" />
            <p className="font-medium mb-1">{file ? file.name : "Click or drag CSV file here"}</p>
            <p className="text-sm text-secondary">Only .csv files are supported</p>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3 text-red-400">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-start gap-3 text-emerald-400">
              <Check className="w-5 h-5 shrink-0 mt-0.5" />
              <p>Successfully imported {preview.length} clients! Redirecting...</p>
            </div>
          )}
        </div>

        {preview.length > 0 && !success && (
          <div className="bg-surface/50 border border-white/10 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <h3 className="font-bold">Preview ({preview.length} records)</h3>
              <GlowButton variant="primary" onClick={handleImport} disabled={loading}>
                {loading ? "Importing..." : "Confirm & Import"}
              </GlowButton>
            </div>
            <div className="p-0 overflow-x-auto max-h-[500px] overflow-y-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-surface z-10">
                  <tr className="border-b border-white/5">
                    <th className="p-4 font-medium text-sm text-secondary">Business Name</th>
                    <th className="p-4 font-medium text-sm text-secondary">Industry</th>
                    <th className="p-4 font-medium text-sm text-secondary">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {preview.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-4 font-medium text-sm">{row.business_name}</td>
                      <td className="p-4 text-sm text-secondary">{row.industry}</td>
                      <td className="p-4"><span className="text-xs bg-white/10 px-2 py-1 rounded-full text-secondary">Draft</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
