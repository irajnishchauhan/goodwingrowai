import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://goodwingrowai.com';

  const staticRoutes = [
    '',
    '/services',
    '/industries',
    '/process',
    '/about',
    '/pricing',
    '/contact',
    '/book',
    '/growth-audit',
    '/ai',
    '/ai-agents',
    '/tools/website-audit',
    '/blog',
    '/case-studies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const services = [
    'ai-marketing',
    'performance-marketing',
    'seo-content',
    'lead-generation',
    'ai-automation',
    'web-development',
    'analytics',
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogPosts = [
    'how-ai-is-reshaping-b2b-lead-generation',
    'death-of-traditional-seo',
    'building-your-first-marketing-ai-agent',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...services, ...blogPosts];
}
