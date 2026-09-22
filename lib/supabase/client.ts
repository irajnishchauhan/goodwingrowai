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
      record_status: "Published",
      client_display_consent: "Approved",
      homepage_visibility: true,
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
      record_status: "Published",
      client_display_consent: "Approved",
      homepage_visibility: true,
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
      record_status: "Published",
      client_display_consent: "Approved",
      homepage_visibility: true,
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
    },
    {
      id: "t2",
      client_id: "2",
      exact_testimonial_quote: "The brand awareness campaigns have been incredible. Our recipe videos are reaching a much wider audience now, and engagement is through the roof.",
      client_approved_display_name: "Ganga",
      designation: "Digital Creator",
      rating: 5,
      service_category: "Brand Awareness",
      verified_result: "Expanded digital footprint",
      client_approval_status: "Approved",
      publication_status: "Published",
      display_order: 2,
      clients: {
        business_name: "Ganga Cooking Recipes",
        client_logo: ""
      }
    },
    {
      id: "t3",
      client_id: "3",
      exact_testimonial_quote: "We're seeing a steady stream of direct calls and WhatsApp messages for our cosmetic products. It's exactly the kind of direct response marketing we needed.",
      client_approved_display_name: "Lucky",
      designation: "Owner",
      rating: 5,
      service_category: "Direct Response",
      verified_result: "Consistent daily leads",
      client_approval_status: "Approved",
      publication_status: "Published",
      display_order: 3,
      clients: {
        business_name: "Lucky's Gazab Hi Gazab",
        client_logo: ""
      }
    },
    {
      id: "t4",
      client_id: "4",
      exact_testimonial_quote: "From store visits to website traffic, everything has improved. We've seen a noticeable uptick in inquiries for custom sofa work and upholstery.",
      client_approved_display_name: "Management Team",
      designation: "Maa Amba Foam",
      rating: 4,
      service_category: "Omnichannel Growth",
      verified_result: "Increased store footfall",
      client_approval_status: "Approved",
      publication_status: "Published",
      display_order: 4,
      clients: {
        business_name: "Maa Amba Foam and Furnishing",
        client_logo: ""
      }
    },
    {
      id: "t5",
      client_id: "5",
      exact_testimonial_quote: "Our salon has never been busier. The local awareness campaigns drove exactly the kind of clientele we were looking to attract.",
      client_approved_display_name: "Lucky",
      designation: "Owner",
      rating: 5,
      service_category: "Local SEO & Ads",
      verified_result: "Fully booked weekends",
      client_approval_status: "Approved",
      publication_status: "Published",
      display_order: 5,
      clients: {
        business_name: "Lucky's Hair",
        client_logo: ""
      }
    },
    {
      id: "t6",
      client_id: "6",
      exact_testimonial_quote: "The B2B leads for our mattress manufacturing business have been highly qualified. It's streamlined our sales process immensely.",
      client_approved_display_name: "Sales Director",
      designation: "Samarth Enterprises",
      rating: 5,
      service_category: "B2B Lead Gen",
      verified_result: "Higher quality prospects",
      client_approval_status: "Approved",
      publication_status: "Published",
      display_order: 6,
      clients: {
        business_name: "Samarth Enterprises",
        client_logo: ""
      }
    },
    {
      id: "t7",
      client_id: "7",
      exact_testimonial_quote: "Fantastic results for our car washing point. We have a steady stream of bookings coming through WhatsApp directly from our target area.",
      client_approved_display_name: "Branch Manager",
      designation: "Kanadia Branch",
      rating: 4,
      service_category: "Local Lead Gen",
      verified_result: "Steady daily bookings",
      client_approval_status: "Approved",
      publication_status: "Published",
      display_order: 7,
      clients: {
        business_name: "Sapna Washing Point",
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
