import { MetadataRoute } from 'next';
import { getServices } from '@/lib/services';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://abctechnologies.vercel.app';
  
  let serviceUrls: any[] = [];
  
  try {
    const services = await getServices();
    serviceUrls = services.map((service) => ({
      url: `${baseUrl}${service.href}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Sitemap generation: Could not fetch services', error);
  }

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
