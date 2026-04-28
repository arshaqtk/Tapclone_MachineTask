export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  href?: string;
}

export interface ServiceCardProps {
  service: Service;
  isActive?: boolean;
}

export interface ServicesSectionProps {
  services?: Service[];
  eyebrow?: string;
  heading?: string;
  isLoading?: boolean;
  emptyMessage?: string;
}
