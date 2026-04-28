import ServicesSectionClient from '@/components/sections/service/ServiceClient';
import { getServices } from '@/lib/services';
import { ServicesSectionProps } from '@/types/service';

export default async function ServicesSection({
  services,
  heading,
  isLoading = false,
  emptyMessage = 'Services will appear here soon.',
}: ServicesSectionProps) {
  const resolvedServices = services ?? (await getServices());

  return (
    <ServicesSectionClient
      services={resolvedServices}
      heading={heading}
      isLoading={isLoading}
      emptyMessage={emptyMessage}
    />
  );
}
