'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';

interface ServiceItem {
  _id: string;
  title: string;
  description: string;
  href: string;
}

export default function AdminDashboard() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [formData, setFormData] = useState({ 
    title: '', 
    description: '', 
    href: '/services/'
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      const data = await res.json();
      if (Array.isArray(data)) {
        setServices(data);
      }
    } catch (err) {
      console.error('Failed to fetch services');
    } finally {
      setFetching(false);
    }
  };

  const handleLogout = async () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ title: '', description: '', href: '/services/' });
        fetchServices();
      }
    } catch (err) {
      alert('Failed to add service');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const res = await fetch(`/api/services?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchServices();
      } else {
        alert('Failed to delete service');
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#010504] text-white font-sans">
      <div className="max-w-[1000px] mx-auto px-6 py-10">
        
        <Header onLogout={handleLogout} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <ServiceForm 
            formData={formData} 
            setFormData={setFormData} 
            onSubmit={handleSubmit} 
            loading={loading} 
          />

          <ServiceList 
            services={services} 
            fetching={fetching} 
            onDelete={handleDelete} 
          />

        </div>

      </div>
    </div>
  );
}
