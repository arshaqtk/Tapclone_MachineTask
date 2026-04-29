export interface Service {
  _id: string;
  title: string;
  description: string;
  href?: string;
}

export interface ServiceCardProps {
  service: Service;
  isActive?: boolean;
}

export interface ServicesSectionProps {
  services?: Service[];
  heading?: string;
  isLoading?: boolean;
  emptyMessage?: string;
}
