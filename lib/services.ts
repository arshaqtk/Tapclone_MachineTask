import connectDB from '@/lib/db';
import ServiceModel from '@/models/Service';
import { Service } from '@/types/service';
import { unstable_cache } from 'next/cache';

export const getServices = unstable_cache(
  async (): Promise<Service[]> => {
    try {
      await connectDB();
      const services = await ServiceModel.find({}).sort({ createdAt: -1 }).lean();
      return JSON.parse(JSON.stringify(services));
    } catch (error) {
      console.error('Failed to fetch services from DB:', error);
      return [];
    }
  },
  ['services'],
  { tags: ['services'] }
);
