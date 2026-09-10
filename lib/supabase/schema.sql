/**
 * Supabase Schema for Goodwin Grow AI
 * Run this SQL in your Supabase SQL Editor.
 */

-- Create ENUMs
CREATE TYPE lead_status AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL', 'WON', 'LOST');
CREATE TYPE user_role AS ENUM ('ADMIN', 'STAFF');

-- PROFILES (Extended Auth users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  role user_role DEFAULT 'STAFF',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- LEADS
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  service TEXT,
  message TEXT,
  source TEXT,
  campaign TEXT,
  page TEXT,
  status lead_status DEFAULT 'NEW',
  score INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_leads_email ON public.leads(email);
CREATE INDEX idx_leads_status ON public.leads(status);
CREATE INDEX idx_leads_created_at ON public.leads(created_at);

-- LEAD NOTES
CREATE TABLE public.lead_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  author_id UUID REFERENCES public.profiles(id),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- GROWTH AUDITS
CREATE TABLE public.growth_audits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT NOT NULL,
  website TEXT,
  industry TEXT,
  primary_source TEXT,
  ai_usage TEXT,
  bottleneck TEXT,
  overall_score INTEGER,
  marketing_score INTEGER,
  seo_score INTEGER,
  lead_score INTEGER,
  automation_score INTEGER,
  ai_readiness_score INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.growth_audits ENABLE ROW LEVEL SECURITY;

-- RLS Policies (Draft for Admin access)
CREATE POLICY "Admins can read all profiles" ON public.profiles FOR SELECT USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'ADMIN'));
CREATE POLICY "Admins can read all leads" ON public.leads FOR SELECT USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'ADMIN'));
CREATE POLICY "Admins can update leads" ON public.leads FOR UPDATE USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'ADMIN'));
CREATE POLICY "Anyone can insert growth audits" ON public.growth_audits FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can read audits" ON public.growth_audits FOR SELECT USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'ADMIN'));
