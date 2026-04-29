import { MetadataRoute } from 'next';
import { getServices } from '@/lib/services';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://abctechnologies.com';
  
  const services = await getServices();
  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...serviceUrls,
  ];
}
