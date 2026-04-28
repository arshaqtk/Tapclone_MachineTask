import { SERVICES_DATA } from '@/data/services';
import { Service } from '@/types/service';

export async function getServices(): Promise<Service[]> {
  return SERVICES_DATA;
}
