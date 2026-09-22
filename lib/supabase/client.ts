/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Mock data store for development without keys
let mockData: Record<string, any[]> = {
  clients: [
    {
      id: "1",
      business_name: "RR Dance Academy",
      slug: "rr-dance-academy",
      industry: "Dance, Fitness and Events",
      business_type: "Service",
      public_service_summary: "Dance choreography, dance events, wedding events, Zumba and gymnastics",
      internal_services_requested: "WhatsApp enquiries, calls, leads, brand awareness and visits",
      record_status: "Published", // Set to published so it shows on the website for demonstration
      client_display_consent: "Approved",
      homepage_visibility: true,
      display_order: 1,
      city: "Unknown",
    },
    {
      id: "2",
      business_name: "Ganga Cooking Recipes",
      slug: "ganga-cooking-recipes",
      industry: "Food Content and Digital Creator",
      business_type: "Service",
      public_service_summary: "Cooking content and recipe videos",
      internal_services_requested: "Brand awareness",
      record_status: "Published",
      client_display_consent: "Approved",
      homepage_visibility: true,
      display_order: 2,
      city: "Unknown",
    },
    {
      id: "3",
      business_name: "Lucky's Gazab Hi Gazab",
      slug: "luckys-gazab-hi-gazab",
      industry: "Cosmetics and Hair Products",
      business_type: "Retail",
      public_service_summary: "Branded cosmetics and hair-related products",
      internal_services_requested: "WhatsApp enquiries and phone calls",
      record_status: "Published",
      client_display_consent: "Approved",
      homepage_visibility: true,
      display_order: 3,
      city: "Unknown",
    },
    {
      id: "4",
      business_name: "Maa Amba Foam and Furnishing",
      slug: "maa-amba-foam-and-furnishing",
      industry: "Furniture, Furnishing and Upholstery",
      business_type: "Retail",
      public_service_summary: "Sofa work, upholstery, foam replacement, furniture repair, mattresses and customised cushions",
      internal_services_requested: "Enquiries, calls, leads, sales, awareness, website traffic and store visits",
      record_status: "Published",
      client_display_consent: "Approved",
      homepage_visibility: true,
      display_order: 4,
      city: "Unknown",
    },
    {
      id: "5",
      business_name: "Lucky's Hair",
      slug: "luckys-hair",
      industry: "Salon and Personal Care",
      business_type: "Service",
      public_service_summary: "Haircuts, hair spa, smoothing, facials and cleanup services",
      internal_services_requested: "Enquiries, calls, leads, awareness and visits",
      record_status: "Draft",
      client_display_consent: "Not Received",
      homepage_visibility: false,
      display_order: 5,
      city: "Unknown",
    },
    {
      id: "6",
      business_name: "Samarth Enterprises",
      slug: "samarth-enterprises",
      industry: "Mattress Manufacturing",
      business_type: "Manufacturing",
      public_service_summary: "Bed mattresses",
      internal_services_requested: "WhatsApp enquiries and phone calls",
      record_status: "Draft",
      client_display_consent: "Not Received",
      homepage_visibility: false,
      display_order: 6,
      city: "Unknown",
    },
    {
      id: "7",
      business_name: "Sapna Washing Point – Kanadia Branch",
      slug: "sapna-washing-point",
      industry: "Automobile Care",
      business_type: "Service",
      public_service_summary: "Car washing and detailing",
      internal_services_requested: "WhatsApp enquiries and phone calls",
      record_status: "Draft",
      client_display_consent: "Not Received",
      homepage_visibility: false,
      display_order: 7,
      city: "Unknown",
    }
  ],
  testimonials: [
    {
      id: "t1",
      client_id: "1",
      exact_testimonial_quote: "Goodwin Grow AI transformed how we get inquiries for our dance events and classes. Our WhatsApp is constantly buzzing with new leads!",
      client_approved_display_name: "RR Dance Academy Team",
      designation: "Founders",
      rating: 5,
      service_category: "Lead Generation",
      verified_result: "300% increase in WhatsApp inquiries",
      client_approval_status: "Approved",
      publication_status: "Published",
      display_order: 1,
      clients: {
        business_name: "RR Dance Academy",
        client_logo: ""
      }
    }
  ],
  case_studies: [],
  client_audit_logs: []
};

// If we have real keys, use them. Otherwise, provide a rich mock.
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: (table: string) => ({
        select: (query?: string) => {
          let currentData = [...(mockData[table] || [])];
          const chain = {
            eq: (col: string, val: any) => {
              currentData = currentData.filter(d => d[col] === val);
              return chain;
            },
            order: (col: string, { ascending = true } = {}) => {
              currentData.sort((a, b) => {
                if (a[col] < b[col]) return ascending ? -1 : 1;
                if (a[col] > b[col]) return ascending ? 1 : -1;
                return 0;
              });
              return chain;
            },
            single: () => Promise.resolve({ data: currentData[0] || null, error: null }),
            then: (resolve: any) => resolve({ data: currentData, error: null })
          };
          return chain;
        },
        insert: (payload: any) => {
          const arr = Array.isArray(payload) ? payload : [payload];
          const newRecords = arr.map(item => ({ ...item, id: Math.random().toString(36).substring(7) }));
          if (!mockData[table]) mockData[table] = [];
          mockData[table] = [...mockData[table], ...newRecords];
          return {
            select: () => Promise.resolve({ data: newRecords, error: null }),
            then: (resolve: any) => resolve({ data: newRecords, error: null })
          };
        },
        update: (payload: any) => ({
          eq: (col: string, val: any) => {
            if (mockData[table]) {
              mockData[table] = mockData[table].map(item => item[col] === val ? { ...item, ...payload } : item);
            }
            return {
              select: () => Promise.resolve({ data: (mockData[table] || []).filter(item => item[col] === val), error: null }),
              then: (resolve: any) => resolve({ data: null, error: null })
            };
          }
        }),
        delete: () => ({
          eq: (col: string, val: any) => {
            if (mockData[table]) {
              mockData[table] = mockData[table].filter(item => item[col] !== val);
            }
            return Promise.resolve({ data: null, error: null });
          }
        })
      }),
      auth: {
        signInWithPassword: () => Promise.resolve({ data: { user: { id: 'mock-id', email: 'admin@goodwingrowai.com' } }, error: null }),
        signOut: () => Promise.resolve({ error: null }),
        getSession: () => Promise.resolve({ data: { session: { user: { id: 'mock-id', email: 'admin@goodwingrowai.com' } } }, error: null })
      }
    } as any;
