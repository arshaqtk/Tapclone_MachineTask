'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';
import ConfirmModal from './components/ConfirmModal';
import toast, { Toaster } from 'react-hot-toast';

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
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAuthError = () => {
    toast.error('Session expired. Redirecting to login...', {
      duration: 3000,
      style: {
        background: '#0a0d0b',
        color: '#ff4b4b',
        border: '1px solid rgba(255, 75, 75, 0.2)',
        fontSize: '13px',
        fontWeight: 'bold',
      }
    });
    setTimeout(() => {
      window.location.replace('/login');
    }, 2000);
  };

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      if (res.status === 401) return handleAuthError();
      
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
    window.location.replace('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const method = editingId ? 'PATCH' : 'POST';
      const body = editingId ? { ...formData, id: editingId } : formData;

      const res = await fetch('/api/services', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.status === 401) return handleAuthError();

      if (res.ok) {
        toast.success(editingId ? 'Service updated successfully' : 'Service added successfully', {
          style: {
            background: '#0a0d0b',
            color: '#00b050',
            border: '1px solid rgba(0, 176, 80, 0.2)',
            fontSize: '13px',
            fontWeight: 'bold',
          }
        });
        setFormData({ title: '', description: '', href: '/services/' });
        setEditingId(null);
        fetchServices();
      }
    } catch (err) {
      toast.error('Failed to save service');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (service: ServiceItem) => {
    setFormData({
      title: service.title,
      description: service.description,
      href: service.href
    });
    setEditingId(service._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setFormData({ title: '', description: '', href: '/services/' });
    setEditingId(null);
  };

  const openDeleteModal = (id: string) => {
    setIdToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!idToDelete) return;
    setDeleteLoading(true);

    try {
      const res = await fetch(`/api/services?id=${idToDelete}`, {
        method: 'DELETE',
      });

      if (res.status === 401) return handleAuthError();

      if (res.ok) {
        toast.success('Service deleted successfully', {
          style: {
            background: '#0a0d0b',
            color: '#00b050',
            border: '1px solid rgba(0, 176, 80, 0.2)',
            fontSize: '13px',
            fontWeight: 'bold',
          }
        });
        fetchServices();
        setIsModalOpen(false);
      } else {
        toast.error('Failed to delete service');
      }
    } catch (err) {
      console.error('Delete error:', err);
    } finally {
      setDeleteLoading(false);
      setIdToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#010504] text-white font-sans">
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <div className="max-w-[1000px] mx-auto px-6 py-10">
        
        <Header onLogout={handleLogout} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          <ServiceForm 
            formData={formData} 
            setFormData={setFormData} 
            onSubmit={handleSubmit} 
            loading={loading}
            isEditing={!!editingId}
            onCancelEdit={cancelEdit}
          />

          <ServiceList 
            services={services} 
            fetching={fetching} 
            onDelete={openDeleteModal}
            onEdit={handleEdit}
          />

        </div>
      </div>

      <ConfirmModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Service?"
        message="This action cannot be undone. The service will be permanently removed."
        loading={deleteLoading}
      />
    </div>
  );
}
