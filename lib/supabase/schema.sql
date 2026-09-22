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

-- CLIENTS
CREATE TABLE public.clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  business_type TEXT,
  industry TEXT,
  city TEXT,
  business_description TEXT,
  public_service_summary TEXT,
  internal_services_requested TEXT,
  services_actually_delivered TEXT,
  client_logo TEXT,
  logo_approval_status TEXT DEFAULT 'Pending',
  cover_image TEXT,
  website_url TEXT,
  instagram_url TEXT,
  project_start_date DATE,
  relationship_status TEXT DEFAULT 'Lead',
  assigned_team_member UUID REFERENCES public.profiles(id),
  client_display_consent TEXT DEFAULT 'Not Received',
  consent_date TIMESTAMPTZ,
  consent_document TEXT,
  homepage_visibility BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  featured_client BOOLEAN DEFAULT false,
  record_status TEXT DEFAULT 'Draft',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES public.profiles(id),
  approved_by UUID REFERENCES public.profiles(id)
);

-- TESTIMONIALS
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
  exact_testimonial_quote TEXT NOT NULL,
  client_approved_display_name TEXT,
  designation TEXT,
  rating INTEGER,
  service_category TEXT,
  verified_result TEXT,
  result_evidence TEXT,
  profile_image TEXT,
  client_approval_status TEXT DEFAULT 'Pending',
  approval_date TIMESTAMPTZ,
  consent_evidence TEXT,
  featured_status BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  publication_status TEXT DEFAULT 'Draft',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- CASE STUDIES
CREATE TABLE public.case_studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  overview TEXT,
  challenge TEXT,
  strategy TEXT,
  services_delivered TEXT,
  work_completed TEXT,
  verified_outcomes TEXT,
  outcome_evidence TEXT,
  testimonial_id UUID REFERENCES public.testimonials(id),
  featured_image TEXT,
  gallery JSONB,
  project_start_date DATE,
  project_completion_date DATE,
  seo_title TEXT,
  meta_description TEXT,
  publication_status TEXT DEFAULT 'Draft',
  approved_by UUID REFERENCES public.profiles(id),
  approval_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- CLIENT AUDIT LOGS
CREATE TABLE public.client_audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  record_id UUID NOT NULL,
  table_name TEXT NOT NULL,
  action TEXT NOT NULL,
  changed_by UUID REFERENCES public.profiles(id),
  old_data JSONB,
  new_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_audit_logs ENABLE ROW LEVEL SECURITY;

-- Admins can do everything
CREATE POLICY "Admins can do everything on clients" ON public.clients USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'ADMIN'));
CREATE POLICY "Admins can do everything on testimonials" ON public.testimonials USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'ADMIN'));
CREATE POLICY "Admins can do everything on case_studies" ON public.case_studies USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'ADMIN'));
CREATE POLICY "Admins can do everything on client_audit_logs" ON public.client_audit_logs USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'ADMIN'));

-- Public read policies
CREATE POLICY "Public can view published clients" ON public.clients FOR SELECT USING (homepage_visibility = true AND client_display_consent = 'Approved' AND record_status = 'Published');
CREATE POLICY "Public can view published testimonials" ON public.testimonials FOR SELECT USING (publication_status = 'Published' AND client_approval_status = 'Approved');
CREATE POLICY "Public can view published case studies" ON public.case_studies FOR SELECT USING (publication_status = 'Published');
