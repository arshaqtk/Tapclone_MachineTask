'use client';

import { HiTrash } from 'react-icons/hi';

interface Service {
  _id: string;
  title: string;
  description: string;
}

interface ServiceListProps {
  services: Service[];
  fetching: boolean;
  onDelete: (id: string) => void;
}

export default function ServiceList({ services, fetching, onDelete }: ServiceListProps) {
  return (
    <div>
      <h2 className="text-[18px] font-bold mb-8">Published Services</h2>
      <div className="space-y-4">
        {fetching ? (
          <div className="py-10 text-[#9ca3af]">Fetching...</div>
        ) : services.length === 0 ? (
          <div className="py-10 text-[#9ca3af]">No services found.</div>
        ) : (
          services.map((service) => (
            <div key={service._id} className="bg-[#0a0d0b] border border-white/10 rounded-2xl p-6 flex justify-between items-start group">
              <div className="flex-1 pr-4">
                <h3 className="text-[16px] font-bold text-white mb-2">{service.title}</h3>
                <p className="text-[13px] text-[#9ca3af] line-clamp-2">{service.description}</p>
              </div>
              <button 
                onClick={() => onDelete(service._id)}
                className="p-2 text-red-500/40 hover:text-red-500 transition-colors"
              >
                <HiTrash size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
